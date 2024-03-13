import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  // state to hold the value
  const [value, setValue] = useState(() => {
    try {
      // look ar value from local storage if it exists
      const jsonValue = localStorage.getItem(key);
      if (jsonValue != null) return JSON.parse(jsonValue);
    } catch (error) {
      // handle errors
      console.error("Error accessing localStorage:", error);
    }

    // if initial value is a function, execute is
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  // update local storage whenever value changes
  useEffect(() => {
    if (typeof window != "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  // return the value and function to update it
  return [value, setValue];
}
