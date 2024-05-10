import React, { useState,useContext, useEffect } from "react";
import { Context } from "./App";
import Message from "./Message";


const ChatBox = () => {
    const {
        messages,
        setMessages
    } = useContext(Context);
    
    useEffect(() => {
        console.log('messages: ', messages);
    }, [messages]);

    
    return (
        <div>
            {
                messages.map(messageData => {
                    return <Message>
                        {`${messageData.name}: ${messageData.message}`}
                    </Message>
                })
            }
        </div>
    );

};

export default ChatBox;