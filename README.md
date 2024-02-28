This project is a digital reproduction of a calculator produced in the 70's, a Texas Instrument Data Math II (TI-2500).

Features:
- It allows basic mathematical operations: addition, substraction, multiplication, division, percentage.
- Clear All and Clear Entry functions.
- Use of Decimal.
- Keyboard can be used for input.
- Values wiht 9 characters or more shows error.

Technical aspects:
- Used programming languages are HTML, CSS and Vanilla Javascript.
- Values typed in are appended on the screen output, to create the current operand. Operators set the current operand to previous operand. Equal triggers the calculation.
- Layout is built with CSS grid. Buttons have different classes based on their use and style.
- A Class embeds the Calculator, its default properties and its methods.

Known Issue:
- Division can cause figures to overflow the calculator screen.
