# Implementation Tasks

- [ ] **1. Setup Project Structure**
  - [ ] Create `index.html`
  - [ ] Create `style.css`
  - [ ] Create `script.js`

- [ ] **2. HTML Structure (`index.html`)**
  - [ ] Set up the document boilerplate and link CSS/JS.
  - [ ] Create the main container/wrapper.
  - [ ] Add the header and total expense display area.
  - [ ] Create the form for adding new expenses (inputs for name and amount, submit button).
  - [ ] Create the container (`<ul>` or `<div>`) for the expense list.

- [ ] **3. CSS Styling (`style.css`)**
  - [ ] Define a modern color palette and typography variables.
  - [ ] Style the main layout (centering, card-like appearance, shadows).
  - [ ] Style the input fields and buttons (hover states, focus rings, smooth transitions).
  - [ ] Style the expense list items (flexbox layout for aligning name, amount, and delete button).
  - [ ] Add micro-animations (e.g., subtle fade-in when an item is added).

- [ ] **4. JavaScript Logic (`script.js`)**
  - [ ] **State Management**: Initialize an empty array `expenses` to hold expense objects.
  - [ ] **DOM Elements**: Select necessary DOM elements (form, inputs, list container, total display).
  - [ ] **Core Functions**:
    - [ ] `addExpense(name, amount)`: Create a new expense object, generate a unique ID, and push it to the state array.
    - [ ] `deleteExpense(id)`: Filter out the expense with the matching ID from the state array.
    - [ ] `updateTotal()`: Calculate the sum of all expenses and update the total display in the DOM.
    - [ ] `renderExpenses()`: Clear the current list in the DOM and rebuild it based on the updated state array. Create elements and attach the delete event listeners to the generated buttons.
  - [ ] **Event Listeners**:
    - [ ] Attach a `submit` event listener to the form to handle adding an expense.
    - [ ] Prevent default form submission behavior.
    - [ ] Add basic validation to ensure inputs are not empty and amount is a valid number.

- [ ] **5. Final Review**
  - [ ] Test adding multiple expenses.
  - [ ] Test deleting expenses.
  - [ ] Verify the total amount updates correctly in all scenarios.
  - [ ] Check responsiveness on smaller screens.
