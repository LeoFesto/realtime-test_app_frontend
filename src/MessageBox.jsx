import {React, useContext, useRef, useState} from "react";
import { Context } from "./App";

const MessageBox = () => {
    const {
        hubConnection,
        name,
    } = useContext(Context);

    const [message, setMessage] = useState('');
    const messageInputRef = useRef(null);


    const sendMessage = () => {
        hubConnection.invoke("SendMessage", {name: name, message: message});
        messageInputRef.current.value = '';
    }
    return (
        <div>
            <input placeholder="Введите сообщение"
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
                ref={messageInputRef}
            />
            <button
                onClick={sendMessage}
            >
                Отправить
            </button>
        </div>
    );
};

export default MessageBox;