# Architecture

## Overview
The Expense Tracker is a simple client-side web application designed to help users track their expenses. It relies entirely on frontend technologies without a backend server or database, making it lightweight and fast.

## File Structure
- `index.html`: The main entry point. It contains the structural layout of the app, including the form to add an expense, the display for the total amount, and the container for the expense list.
- `style.css`: Contains all styling rules. It uses modern CSS techniques (variables, flexbox, etc.) to create a clean, responsive, and vibrant user interface.
- `script.js`: Handles all the application logic, state management, and DOM manipulation.

## Data Model
The application state revolves around an array of `Expense` objects. Each expense is represented as:
```javascript
{
  id: number,        // Unique identifier for the expense (e.g., timestamp)
  name: string,      // Description or name of the expense
  amount: number     // The monetary value of the expense
}
```

## Logic Flow
1. **Initialization**: The app initializes an empty state (or loads from `localStorage` if implemented later) and renders the UI.
2. **Adding an Expense**: 
   - The user fills out the form and clicks "Add".
   - An event listener captures the form submission.
   - A new `Expense` object is created and added to the state array.
   - The UI is re-rendered to update the list and the total amount.
3. **Deleting an Expense**:
   - The user clicks the "Delete" button next to an expense in the list.
   - An event listener identifies the `id` of the expense to be removed.
   - The expense is filtered out of the state array.
   - The UI is re-rendered to reflect the updated list and total.
4. **Displaying Total Amount**:
   - Calculated dynamically by summing the `amount` of all objects in the state array whenever the state changes.
