import React from "react";
import "./styles.css";
import { useState } from "react";

export default function Toggle({ day, onClick }) {
  return (
    <div>
      <div
        className="globe"
        style={{
          backgroundImage: `url(${
            day
              ? "https://img.freepik.com/vector-gratis/ilustracion-paisaje-campo_52683-45571.jpg?w=1380&t=st=1649129495~exp=1649130095~hmac=bfe33393df6fff93f5449ef943814c6237fc7a101536dd27e5d18a6b7ba08338"
              : "https://img.freepik.com/vetores-gratis/cena-noturna-do-mar-com-montanhas-de-ondas-no-horizonte-lua-cheia-e-estrelas-no-ceu-ilustracao-vetorial-dos-desenhos-animados-da-paisagem-natural-do-lago-ou-litoral-do-oceano-com-pedras-a-meia-noite_107791-10305.jpg?t=st=1649195287~exp=1649195887~hmac=3dacbaebe038f7ed186fad691a2e44ebe899b6671f47023e83530f6d701cb9bc&w=1480"
          })`,
        }}
      >
        <div className="globe-base">
          <div class="switch-wrapper"> </div>
          <span class="side-labels"></span>

          <div class="toggle-wrapper">
            <input
              type="checkbox"
              id="switch "
              class="toggle"
              onClick={onClick}
            />

            <label for="toggle" class="toggle-container ">
              <span class="thumb"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
