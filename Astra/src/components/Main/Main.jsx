import React, { useContext, useEffect, useRef, useState } from 'react';
import './Main.css';
import 'regenerator-runtime/runtime';

import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Main = () => {
    const {
        onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);
    const speechRef = useRef(new SpeechSynthesisUtterance());
    
    const [speaking, setSpeaking] = useState(false);

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const handleSpeak = () => {
        const synth = window.speechSynthesis;
        if (speaking) {
            synth.cancel();
            setSpeaking(false);
        } else if (resultData) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = resultData;
            speechRef.current.text = tempDiv.textContent || tempDiv.innerText || '';
            synth.speak(speechRef.current);
            setSpeaking(true);

            speechRef.current.onend = () => {
                setSpeaking(false);
            };
        }
    };

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

    useEffect(() => {
        if (transcript) {
            setInput(transcript);
        }
    }, [transcript, setInput]);

    // Trigger the onSent() function on pressing enter key 
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                onSent();
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [onSent]);


    const handleCardClick = (content) => {
        setInput(content); // Set the input value to the card content
        onSent(content); // Call onSent with the card content
    };

    if (!browserSupportsSpeechRecognition) {
        return <p>Browser does not support speech recognition.</p>;
    }

    return (
        <div className='main'>
            <div className="nav">
                <p><img src={assets.astra} alt="" />Astra</p>
                <img src={assets.dummy_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hey there!</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => handleCardClick('Suggest Top 10 beautiful places to see in India.')}>
                                <p>Suggest Top 10 beautiful places to see in India.</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick('Briefly summarize the concept of blockchain.')}>
                                <p>Briefly summarize the concept of Blockchain.</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick('Brainstorm team bonding activities for college or office settings.')}>
                                <p>Brainstorm team bonding activities for college or office settings.</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick('Suggest some of the top free resources for learning Data Structures and Algorithms DSA.')}>
                                <p>Suggest some of the top free resources for learning Data Structures and Algorithms DSA.</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.dummy_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.astra} alt="" />
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                }
                
                <div className="main-bottom">
                
                    <div className="search-box">
                    <button className={`speak ${speaking ? 'speaking' : ''}`} onClick={handleSpeak}>{speaking ? 'Stop' : 'Read aloud'}</button>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            {/* <img src={assets.gallery_icon} alt="" /> */}
                            <img src={assets.mic_icon} alt="" onClick={startListening} />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        By Utkarsh Gupta
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
