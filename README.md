# ALX_Capstone_Project
# capstone-project

# Currency Converter

## Overview
This is a Currency Converter application built using ReactJS. The application allows users to convert amounts between different currencies by fetching real-time exchange rate data from an API.

## Features
- **Fetch Real-Time Exchange Rates:** Integrates with the Frankfurter API to fetch live currency data.
- **Currency Conversion:** Allows users to input an amount and convert it to a selected currency.
- **Responsive Design:** A clean and responsive UI, built with Tailwind CSS.
- **Error Handling:** Catches and logs errors during API calls.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd currency-converter
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.

## File Structure

- **CurrencySelector:** Main component for selecting currencies and inputting amounts.
- **ConversionResult:** Placeholder component for displaying conversion results (to be implemented).
- **AmountInput:** Placeholder for displaying the amount of input 

## Code Highlights

### Fetching Currencies
The application fetches available currencies from the Frankfurter API:
```javascript
const fetchCurrencies = async () => {
  try {
    const res = await fetch("https://api.frankfurter.app/currencies");
    const data = await res.json();
    setCurrencies(data);
  } catch (error) {
    console.error("Error fetching", error);
  }
};
```

### User Input
The `amount` state manages user input for the amount to convert:
```javascript
<input
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
  type="number"
  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
/>
```

### UI Design
Styled using Tailwind CSS for a clean and modern look:
```javascript
<div className="max-w-4xl mx-auto my-auto p-5 bg-white rounded-lg">
  <h2 className="mb-6 text-2xl font-semibold text-gray-700">
    Currency Converter
  </h2>
</div>
```

## Future Enhancements
- **Display Conversion Results:** Implement `ConversionResult` to show converted amounts.
- **Dropdown for Currency Selection:** Add dropdown menus for selecting "From" and "To" currencies.
- **Error Messaging:** Improve error handling and display user-friendly messages.
- **API Integration:** Allow more complex queries like historical exchange rates.

## Dependencies
- ReactJS
- Tailwind CSS

## API Used
[Frankfurter API](https://www.frankfurter.app/) - For fetching real-time currency data.

## Deployment
The application is deployed using Netlify for seamless hosting.
