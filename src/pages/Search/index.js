import React from 'react';
import './styles.css';

export default function Search() {
  return (
    <div>
      <div className="container">
        <div className="panel">
          <h1 className="title">Champion Information</h1>
          <div className="search">
            <select className="champion">
              <option value="">Escolha um personagem</option>
              <option value="">Ammu</option>
            </select>
          </div>
          <a href="https://github.com/xandyctz" target="_blank"><p className="copy">&copy; Xandy 2020</p></a>
        </div>
      </div>

      <div className="champion-information">
        <ul className="list">
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
      </div>
      </div>
  );
}