/**
       * Client-side store.
       * Data shape follows the Expense schema defined in openapi.yaml:
       *   id:       string (uuid)      — crypto.randomUUID()
       *   title:    string             — from input #title
       *   amount:   number             — from input #amount
       *   category: Category (enum)    — from select #category
       *   date:     string (ISO 8601)  — new Date().toISOString().split('T')[0]
       */
      let expenses = JSON.parse(localStorage.getItem("sdd_expenses") || "[]");

      function save() {
        localStorage.setItem("sdd_expenses", JSON.stringify(expenses));
      }

      // Validate against NewExpense schema constraints
      function validate(title, amount) {
        let valid = true;

        // title: minLength 1, maxLength 100
        const titleErr = document.getElementById("err-title");
        if (!title || title.length < 1) {
          titleErr.classList.add("visible");
          valid = false;
        } else {
          titleErr.classList.remove("visible");
        }

        // amount: minimum 0.01
        const amountErr = document.getElementById("err-amount");
        if (isNaN(amount) || amount < 0.01) {
          amountErr.classList.add("visible");
          valid = false;
        } else {
          amountErr.classList.remove("visible");
        }

        return valid;
      }

      // POST /expenses — createExpense operation
      function createExpense() {
        const title = document.getElementById("title").value.trim();
        const amount = parseFloat(document.getElementById("amount").value);
        const category = document.getElementById("category").value;

        if (!validate(title, amount)) return;

        // Construct object matching the Expense schema
        const expense = {
          id: crypto.randomUUID(), // string, format: uuid
          title, // string, minLength:1, maxLength:100
          amount: Math.round(amount * 100) / 100, // number, float, minimum: 0.01
          category, // Category enum
          date: new Date().toISOString().split("T")[0], // string, format: date
        };

        expenses.unshift(expense);
        save();
        render();

        document.getElementById("title").value = "";
        document.getElementById("amount").value = "";
      }

      // DELETE /expenses/{id} — deleteExpense operation
      function deleteExpense(id) {
        expenses = expenses.filter((e) => e.id !== id);
        save();
        render();
      }

      // GET /expenses — listExpenses operation
      // Returns: { expenses: Expense[], total: number }
      function listExpenses() {
        const total = expenses.reduce((sum, e) => sum + e.amount, 0);
        return { expenses, total: Math.round(total * 100) / 100 };
      }

      function render() {
        const { expenses: list, total } = listExpenses();

        document.getElementById("total").textContent = "₹" + total.toFixed(2);
        document.getElementById("count").textContent =
          list.length + " record" + (list.length !== 1 ? "s" : "");

        const ul = document.getElementById("expense-list");

        if (list.length === 0) {
          ul.innerHTML = `
          <div class="empty-state">
            <p>No expense records</p>
            <code>expenses[] is empty · POST /expenses to add one</code>
          </div>`;
          return;
        }

        ul.innerHTML = list
          .map(
            (e) => `
        <li class="expense-item">
          <div>
            <div class="expense-title">${e.title}</div>
            <div class="expense-meta">
              <span class="category-badge cat-${e.category}">${e.category}</span>
              <span>${e.date}</span>
              <code>id: ${e.id.slice(0, 8)}…</code>
            </div>
          </div>
          <div class="expense-right">
            <span class="expense-amount">₹${e.amount.toFixed(2)}</span>
            <button class="btn-delete" onclick="deleteExpense('${e.id}')" title="DELETE /expenses/${e.id}">✕</button>
          </div>
        </li>
      `,
          )
          .join("");
      }

      render();
