import React, { useRef, useEffect, useState } from 'react';

const categories = [
  { icon: '🛋️', name: 'Living room', percentage: 25, bgColor: 'bg-purple-500' },
  { icon: '👶', name: 'Kids', percentage: 17, bgColor: 'bg-blue-500' },
  { icon: '💼', name: 'Office', percentage: 13, bgColor: 'bg-purple-700' },
  { icon: '🛏️', name: 'Bedroom', percentage: 12, bgColor: 'bg-blue-400' },
  { icon: '🍳', name: 'Kitchen', percentage: 9, bgColor: 'bg-pink-500' },
  { icon: '🛁', name: 'Bathroom', percentage: 8, bgColor: 'bg-teal-500' },
  { icon: '🍽️', name: 'Dining room', percentage: 6, bgColor: 'bg-red-500' },
  { icon: '🛋️', name: 'Decor', percentage: 5, bgColor: 'bg-orange-500' },
  { icon: '💡', name: 'Lighting', percentage: 3, bgColor: 'bg-green-500' },
  { icon: '🏞️', name: 'Outdoor', percentage: 2, bgColor: 'bg-green-600' },
];

const Home = () => {
    const [ lastMessage, setLastMessage ] = useState('');
    const [ response, setResponse ] = useState('');
    const socketUrl = 'ws://localhost:5000';
    const socketRef = useRef(null);

    useEffect(() => {
        const socket = new WebSocket(socketUrl);
        socketRef.current = socket;

        socket.onopen = () => {
            console.log('Connection opened using WebSocket');
        };

        socket.onmessage = (event) => {
            console.log('Message received:', event.data);
            setLastMessage(event.data);
            setResponse(event.data);
            Swal.fire({
                // eslint-disable-next-line no-constant-condition
                icon: event.data === 'OK' || 'Connected: OK' ? 'success' : 'error',
                // eslint-disable-next-line no-constant-condition
                title: event.data === 'OK' || 'Connected: OK' ? 'Success' : 'Error',
                text: event.data,
                confirmButtonText: 'OK',
                customClass: 'sweet-alerts',
            }).then(() => {
                if(event.data === 'OK') {
                    recordCapture(tagId);
                }
            });
        };

        socket.onclose = () => {
            console.log('Connection closed');
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return () => {
            socket.close();
        };
    }, [socketUrl]);



  return (
    <>
        <div className='text-center'>
            <div className='text-4xl mt-5'>
                Welcome user.
            </div>
            <div className='text-lg mt-5 text-gray-500'> Here are your farm statistics derived from the sensors</div>
            <div className="p-6 max-w-md mx-auto bg-gray-800 text-white rounded-lg shadow-md mt-5">
                <h2 className="text-lg font-semibold mb-4">Farm sensor data</h2>
                <div className="grid grid-cols-2 gap-3">
                    {categories.map((category, index) => (
                        <div
                        key={index}
                        className="flex items-center p-3 bg-gray-900 rounded-lg space-x-2"
                        >
                        <div
                            className={`${category.bgColor} text-white rounded-full w-8 h-8 flex items-center justify-center`}
                        >
                            <span className="text-lg">{category.icon}</span>
                        </div>
                        <span className="text-sm">
                            {category.name} - {category.percentage}%
                        </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </>
    
  );
};

export default Home;
