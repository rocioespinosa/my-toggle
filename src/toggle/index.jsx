import React from "react";
import "./styles.css";

export default function index() {
  return (
    <div>
      <div className="globe">
        <div class="container">
          <div class="switch-wrapper">
            <span class="side-labels"></span>

            <div class="toggle-wrapper">
              <input type="checkbox" id="switch " class="toggle" />
              <label for="toggle" class="toggle-container ">
                <span class="thumb"></span>
              </label>
            </div>

            <span class="side-labels"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
