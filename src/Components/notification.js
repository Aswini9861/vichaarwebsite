import React, { useState, useEffect } from "react";
import "../style.css";

export const SuccessNotification = ({ message, show, onClose, duration = 3000,type = "success" }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (show) {
      setProgress(0); // Reset progress bar
      const timer = setTimeout(() => {
        onClose(); // Automatically close the notification after the duration
      }, duration);

      // Update the progress bar over time
      const interval = setInterval(() => {
        setProgress((prev) =>
          prev < 100 ? prev + 100 / (duration / 100) : 100
        );
      }, 100);

      // Cleanup timers and intervals when the notification is closed
      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [show, onClose, duration]);

  if (!show) return null; // Return nothing if `show` is false

  return (
    <div className={`notification ${show ? "show" : ""} ${type}`}>
      <p>{message}</p>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};


