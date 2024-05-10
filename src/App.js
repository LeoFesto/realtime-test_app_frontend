import { useState, createContext } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import NameBox from "./NameBox";
import UserBox from "./UserBox";
import Message from "./Message";

export const Context = createContext(null);

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState('');
    
    const [hubConnection, setHubConnection] = useState(
        new HubConnectionBuilder()
            .withUrl('http://localhost:5070/connection')
            .build()
    );

    return (
        <Context.Provider value={{
            isAuth,
            setIsAuth,
            messages,
            setMessages,
            name,
            setName,
            hubConnection,
            setHubConnection
        }}>
            <div>
                <NameBox/>
                {
                    isAuth &&
                    <UserBox/>
                }
            </div>
        </Context.Provider>
    );
}

export default App;