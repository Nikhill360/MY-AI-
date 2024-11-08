import React, { useContext } from 'react';
import './main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)


  return (
    <div className="main">
        {/* nav-bar */}
      <div className="nav">
        <p><span className='b'>N</span>oiczzz-Ai</p>                                    
        <img src={assets.user_icon} alt="" />
      
      </div>
      {/* main contaner */}
       <div className="main-contaner">


          {/* //------showResult------- */}
        {!showResult
        ?<> 
        <div className="greet">
            <p><span>Hello , Nik</span></p>
            <p>How can i help you today?</p>
          </div>
                {/* cards */}
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful place to see on an upcoming road trip.</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept: urban planing. </p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Brainstom team bonding activites for our work retreat. </p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Improve the readability of the following code.</p>
              <img src={assets.code_icon} alt="" />
            </div>

          </div>
        
        </>
        // result
        :<div className='result'> 
        <div className="reslut-title">
          <img src={assets.user_icon} alt="" />
          <p>{recentPrompt}</p>

        </div>
        <div className="result-data">
          <img src={assets.gemini_icon} alt="" />
          {loading
          ?<div className='loader'> 
          <hr />
          <hr />
          <hr />
          </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
          }
          

        </div>
        
        </div>

        }

          
            {/* main bottom */}
            <div className="main-bottom">
              <div className="search-box">
                <input 
                    onChange={(e)=> setInput(e.target.value)}
                    value={input}
                    type="text" 
                    placeholder="input a prompt here" 
                    id="prompt-input"
                    name="prompt"
                />
                <div>
                      <img src={assets.gallery_icon} alt="" />
                      <img src={assets.mic_icon} alt="" />
                      <img onClick={onSent} src={assets.send_icon} alt="" />
                </div>  
              </div>
              <p className='bottom-info'>Noiczzz-Ai may desplay inaccurate info, including about people, so double check its response , Your privacy and Gemini Apps</p>
            </div>

          </div>
    </div>
  );
};

export default Main;
