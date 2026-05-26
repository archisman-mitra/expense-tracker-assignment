// ===== Grab DOM Elements =====
const form = document.getElementById("expense-form");
const nameInput = document.getElementById("expense-name");
const amountInput = document.getElementById("expense-amount");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total-amount");
const emptyMsg = document.getElementById("empty-msg");

// Array to store all expenses
let expenses = [];

// ===== Add Expense =====
form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page from refreshing

    // Read values from inputs
    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value);

    // Basic validation
    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }

    // Create expense object and push to array
    const expense = {
        id: Date.now(), // unique id using timestamp
        name: name,
        amount: amount,
    };

    expenses.push(expense);

    // Clear input fields
    nameInput.value = "";
    amountInput.value = "";
    nameInput.focus();

    // Re-render the list
    renderExpenses();
});

// ===== Render Expenses to the Page =====
function renderExpenses() {
    // Clear existing list
    expenseList.innerHTML = "";

    // Show or hide the empty message
    if (expenses.length === 0) {
        emptyMsg.classList.remove("hidden");
    } else {
        emptyMsg.classList.add("hidden");
    }

    // Loop through each expense and create a list item
    expenses.forEach(function (expense) {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="expense-info">
                <span class="name">${expense.name}</span>
                <span class="amount">₹${expense.amount.toFixed(2)}</span>
            </div>
            <button class="delete-btn" onclick="deleteExpense(${expense.id})">
                Delete
            </button>
        `;

        expenseList.appendChild(li);
    });

    // Update total
    updateTotal();
}

// ===== Delete an Expense =====
function deleteExpense(id) {
    // Keep all expenses except the one with matching id
    expenses = expenses.filter(function (expense) {
        return expense.id !== id;
    });

    // Re-render
    renderExpenses();
}

// ===== Update Total Amount =====
function updateTotal() {
    let total = 0;

    expenses.forEach(function (expense) {
        total += expense.amount;
    });

    totalDisplay.textContent = "₹" + total.toFixed(2);
}
