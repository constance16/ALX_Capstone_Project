import React from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const AmountInput = ({
  value,
  currency,
  onChange,
  onCurrencyChange,
  currencyConfig,
  loading = false,
  readOnly = false,
  layoutId = "", // For coordinated animations
  darkMode = false, // Pass down darkMode as a prop
}) => (
  <motion.div
    layoutId={layoutId}
    className={`relative flex items-center w-full p-2 mb-3 border rounded-lg transition-colors duration-300 ${
      darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200"
    }`}
  >
    <div className="flex items-center gap-2">
      <span
        className={`text-xl w-8 h-8 flex items-center justify-center rounded-full ${
          darkMode ? "bg-gray-700" : "bg-gray-50"
        }`}
      >
        {currencyConfig[currency].flag}
      </span>
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className={`appearance-none bg-transparent focus:outline-none pr-6 font-medium ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {Object.entries(currencyConfig).map(([code, { flag, name }]) => (
          <option key={code} value={code}>
            {code} - {name}
          </option>
        ))}
      </select>
    </div>
    <div className="relative flex items-center w-full">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full text-right focus:outline-none ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
        min="0"
        step="0.01"
        readOnly={readOnly}
        placeholder="0.00"
      />
      {loading && (
        <Loader2
          className={`w-4 h-4 animate-spin absolute right-2 ${
            darkMode ? "text-white" : "text-gray-500"
          }`}
        />
      )}
    </div>
  </motion.div>
);

export default AmountInput;
