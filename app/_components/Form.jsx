"use client";
import React, { useState } from "react";
import { createSignupMail } from "../_lib/data-service";

export default function Form() {
  const [email, setEmail] = useState(""); // State for email input
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(""); // State for error message

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check if email is empty
    if (!email) {
      setError("Please enter your email."); // Set error message
      return; // Stop form submission
    }

    // Clear error message if email is valid
    setError("");

    // Perform the actual form submission here
    const response = await createSignupMail(email); // Call the modified function

    if (response.success) {
      setIsSubmitted(true); // Show confirmation message
      setEmail(""); // Clear the email input
    } else {
      setError(response.error); // Set error message if email exists or there's an error
    }
  };

  return (
    <form className="md:w-3/4 w-full" onSubmit={handleFormSubmit}>
      <div className="relative w-full">
        <input
          type="email"
          placeholder="Your email—let’s keep it between us!"
          name="email"
          value={email} // Bind the input value to the state
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
          className="w-full px-3 py-4 outline-none bg-theme_blue-100/10 rounded-lg border-2 "
        />
        <p className="mt-6 text-xs max-w-3/4">
          😺 we promise not to spam you with cat memes... unless you want them!
        </p>

        {/* Error Message */}
        {error && (
          <p className="mt-2 text-red-500 text-xs font-bold">{error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 via-orange-400 to-red-500 text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          Start building my portfolio 😀!
        </button>

        {/* Confirmation Message */}
        {isSubmitted && !error && (
          <p className="mt-4 text-green-500 text-sm font-bold">
            🎉 You&apos;re in! :)
          </p>
        )}
      </div>
    </form>
  );
}
