// nao mude as aspas para aspas duplas pfv

import React, { useState } from "react"
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {
    //para deixar as coisas boleanas se for false nao aparece por completo se true aparece 
    //(sera true se clicar{OnClick})
    const [extended,setExtended] = useState(false)


    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className="menu"  src={assets.menu_icon} alt=""/>
                <div className="novo-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended?<p>Novo Chat</p>:null}
                </div>
                {extended
                ?<div className="recente">
                    <p className="titulo-recente">Recente</p>
                    <div className="entrada-recente">
                        <img src={assets.message_icon} alt="" />
                        <p>O que é o react...</p>
                    </div>
                </div>
                :null
            }
                
            </div>
            <div className="bottom">
                <div className="bottom-item entrada-recente">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p>Ajuda</p>:null}
                </div>
                <div className="bottom-item entrada-recente">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Historico</p>:null}
                </div>
                <div className="bottom-item entrada-recente">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>configuracoes</p>:null}
                </div>

            </div>
        </div>
    
    )
    
}

export default Sidebar