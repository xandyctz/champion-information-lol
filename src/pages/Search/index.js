import React from 'react';
import './styles.css';

export default function Search() {

  function buscarChampion(e){
    console.log('teste')
  }

  return (
    <div>
      <div className="container">
        <div className="panel">
          <h1 className="title">Champion Information</h1>
          <div className="search">
            <select className="champion">
              <option value="">Escolha um personagem</option>
              <option value="ammu">Ammu</option>
            </select>
          </div>
          <a href="#" onClick={buscarChampion}><p className="copy">&copy; Xandy 2020</p></a>
        </div>
      </div>

      <div className="champion-information">
        <ul className="list">
          
        </ul>
      </div>
      </div>
  );
}