import React, { useState } from "react";

function Premium() {
  // Use state to keep track of the current plan index
  const [current, setCurrent] = useState(0);

  // Define an array of plans with their details and prices
  const plans = [
    { name: "Basic", detail: "Some detail", price: "$10/month" },
    { name: "Standard", detail: "Some detail", price: "$20/month" },
    { name: "Premium", detail: "Some detail", price: "$30/month" },
    { name: "Ultimate", detail: "Some detail", price: "$40/month" },
  ];

  // Define a function to handle the backward button click
  const handleBackward = () => {
    // If the current index is not zero, decrement it by one
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  // Define a function to handle the forward button click
  const handleForward = () => {
    // If the current index is not the last one, increment it by one
    if (current < plans.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="Premium-container">
      <button onClick={handleBackward}>Backward</button>

      <div>
        {/* Render two buttons to control the current plan */}

        {/* Map over the plans array and render a box for each plan */}
        {plans.map((plan, index) => (
          <div
            key={index}
            className="Premium-box"
            id={index}
            // Use a ternary operator to apply a different style if the plan is the current one
            style={
              index === current
                ? { transform: "scale(1.2)", opacity: 1, order: 2 - index }
                : null
            }
          >
            <h1>{plan.name}</h1>
            <div>{plan.detail}</div>
            <div>{plan.price}</div>
          </div>
        ))}
      </div>

      <button onClick={handleForward}>Forward</button>
    </div>
  );
}

export default Premium;
