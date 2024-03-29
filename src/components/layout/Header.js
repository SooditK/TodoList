import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  const x = 1;

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="TodoList" />
        </div>
        <div className="settings">
          <uL>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </uL>
        </div>
      </nav>
    </header>
  );
};
