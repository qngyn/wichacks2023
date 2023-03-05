import { Models, Query } from 'appwrite';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { account } from '../appwriteConfig'

export default function Chat() {
    const [user, setUser] = useState();
    const [params] = useSearchParams();
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        account.account.get().then((session) => {
            setUser(session);
        }, () => {
            navigate('/');
        });
    }, []);

    useEffect(() => {
        account.database.listDocuments('chat', [
            Query.equal('room', params.get('room') || 'general'),
        ]).then((data) => {
            setMessages(data.documents);
        });

    }, []);

    useEffect(() => {
        const unsubscribe = account.subscribe(
            ['collections.chat.documents'],
            (data) => {
                if (data.event === 'database.documents.create') {
                    setMessages((messages) => [...messages, data.payload]);
                }
            }
        );

        return () => {
            unsubscribe();
        };
    }, []);

    async function sendMessage(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const message = form.get('message');
        const session = await account.account.get();

        await account.database.createDocument('chat', 'unique()', {
            name: session.name,
            room: params.get('room'),
            message,
        });
        e.target.message.value = '';
    }

    return (
        !user ? <div>Loading...</div> : <div className="grid h-[20rem] w-[38rem] mb-8 bg-gray-300-container">

            <div className="bg-gray-300 rounded-md p-4">
                {messages.map((message) => {
                    const messageClass = "message " + (user && user.name.toLowerCase() !== message.name.toLowerCase() ? 'incoming' : '');

                    return (
                        <div className={messageClass} key={message.$id}>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt={message.user} className="w-10 h-10 rounded-full mr-2" />
                            <span className="name">{message.name}:</span>
                            {message.message}
                        </div>
                    );
                })}
            </div>

            <div className="mb-2 flex flex-row h-10 bottom-0 w-[38rem]">
                <form onSubmit={sendMessage}>
                    <input type="text" name="message" className='border p-2 rounded w-full focus:outline-none' placeholder="Type a message..." />
                    <button type="submit" className="bg-blue-500 h-10 text-white p-2 rounded text-center focus:outline-none">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
