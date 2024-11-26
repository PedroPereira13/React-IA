// nao mude as aspas para aspas duplas pfv
import React from "react";
import './Main.css'
import { assets } from "../../assets/assets";

const main = () => {
    return(
      <div className='main'>
        <div className='nav'>
          <p>Gemini Clone</p>
          <p>Feito por Pedro Pereira, Raphael Eduardo, Samuel Vieira e Octávio</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className='main-container'>
          <div className='greet'>
            <p><span>Olá, Dev.</span></p>
            <p>Oque eu posso ajudar você hoje?</p>
          </div>
          {/* cards de sugestoes */}
          <div className='cards'>
            <div className="card">
              <p>Sugira um lugar bonito para ver em uma próxima viagem</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Qual filme é imperdível para assistir neste fim de semana?</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Qual é a melhor estratégia para derrotar o Wall of Flesh?</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Qual foi a maior traidor do World of Warcraft? </p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
          {/* icones dos cards */}
          <div className="main-bottom">
            <div className="search-box">
              <input type="text" placeholder='Digite uma mensagem' />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className="bottom-info">
              Essa clone do Gemini foi feita apenas por estudantes da Etec Polivalente de Americana-Extencäo Fatec para um trabalho de PW
            </p>
            <p className="bottom-info">
              Usamos o video de GreatStack para nos ajudar
            </p>
          </div>
        </div>
      </div>
    )
    
  }
  export default main