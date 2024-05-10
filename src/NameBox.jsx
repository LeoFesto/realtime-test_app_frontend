import React, { useContext, useState } from "react";
import { Context } from "./App";
const NameBox = () => {
    const {
        hubConnection,
        setIsAuth,
        messages,
        setMessages,
        name,
        setName
    } = useContext(Context);


    const nameSubmit = () => {
        hubConnection.on("ReceiveConnect", name => {
            const messageData = {
                name: `[Сервер] ${name}`,
                message: "вошёл на сервер"
            };
            setMessages(messages => {
                return  [...messages, messageData];
            });
        });

        hubConnection.on("ReceiveMessage", (messageData) => {
            console.log('messageData: ', messageData);
            setMessages(messages =>  {
                return [...messages, messageData];
            });
        });

        hubConnection.start()
        .then(() => {
            hubConnection.invoke("Connect", name)
            .then(() => {
                setIsAuth(true);
                
            })
            .catch(() => {

            });
        })
        .catch(() => {
            
        });
    }
    
    return (
        <div>
            Добро пожаловать!<br/>
            Введите своё имя:<br/>
            <div>
                <input placeholder="Введите имя"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <button onClick={nameSubmit}>
                    Подтвердить
                </button>
            </div>
        </div>
    );
};

export default NameBox;