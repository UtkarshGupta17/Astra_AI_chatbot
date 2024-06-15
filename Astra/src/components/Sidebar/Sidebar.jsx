import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [extended, setExtended] = useState(false);

    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0, 18)} ...</p>
                                </div>
                            )
                        })}

                    </div>
                    : null
                }

            </div>
            <div className="bottom">
                <a href="www.linkedin.com/in/utkarsh-gupta-296783217" target="_blank" className="bottom-item recent-entry">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSakR21-bjiZhNzK8fra4dy4tLcR_zEtkWq0w&s' alt="" />
                    {extended ? <p>LinkedIn</p> : null}
                </a>
                <a href="https://leetcode.com/u/utkarsh1702/" target="_blank" className="bottom-item recent-entry">
                    <img src='https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp&w=256' alt="" />
                    {extended ? <p>LeetCode</p> : null}
                </a>
                <a href="https://github.com/UtkarshGupta17" target="_blank" className="bottom-item recent-entry">
                    <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt="" />
                    {extended ? <p>GitHub</p> : null}
                </a>
            </div>


        </div>
    )
}

export default Sidebar;
