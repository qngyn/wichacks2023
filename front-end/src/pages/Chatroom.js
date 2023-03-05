import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

const Chatroom = () => {
    const [messages, setMessages] = useState([
        {
            user: 'Test',
            message: "Hi everyone!",
            avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        },
        {
            user: 'Test2',
            message: "Hii",
            avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
            user: 'John',
            message: "How hackathon is going on?",
            avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
        },
    ]);

    const sendMessage = (message) => {
        setMessages([...messages, message]);
    };

    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Chatroom</div>

            <div className='grid place-items-center py-4'>

                <div className="grid h-[20rem] w-[38rem] mb-8 bg-gray-300">
                    <div className="bg-gray-300 rounded-md p-4">
                        <div className="overflow-y-scroll h-[32rem] ">
                            <MessageList messages={messages} />
                        </div>
                        <MessageForm sendMessage={sendMessage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const MessageList = ({ messages }) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="h-[32rem]">
            {messages.map((message) => (
                <div className="flex items-start mb-4">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt={message.user} className="w-10 h-10 rounded-full mr-2" />
                    <div className="bg-secondary rounded p-2">
                        <p className="text-gray-700 font-bold text-lg">{message.user}</p>
                        <p className="text-gray-600 text-sm">{message.message}</p>
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

const MessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage({
            user: 'Tanya',
            message: message,
            avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        });
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-2 flex flex-row h-10 bottom-0 w-[38rem]">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border p-2 rounded w-full focus:outline-none"
                placeholder='Type a message...'
            />
            <button type="submit" className="bg-blue-500 h-10 text-white p-2 rounded text-center focus:outline-none">
                Send
            </button>
        </form>
    );
};

export default Chatroom;
