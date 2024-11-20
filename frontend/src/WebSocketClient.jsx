import React, { useState, useEffect } from 'react';

const WebSocketClient = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Connect to the WebSocket server
    const ws = new WebSocket('ws://localhost:5000/ws');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
      setMessages(prev => [...prev, {
        type: 'system',
        content: 'Connected to server',
        time: new Date().toLocaleTimeString()
      }]);
    };

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        setMessages(prev => [...prev, message]);
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
      setMessages(prev => [...prev, {
        type: 'system',
        content: 'Disconnected from server',
        time: new Date().toLocaleTimeString()
      }]);
    };

    // Save the socket instance
    setSocket(ws);

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN && inputMessage.trim()) {
      const message = {
        type: 'user',
        content: inputMessage,
        time: new Date().toLocaleTimeString()
      };
      socket.send(JSON.stringify(message));
      setInputMessage('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">WebSocket Chat</h1>
      
      <div className="h-64 overflow-y-auto mb-4 bg-white p-3 rounded">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`mb-2 p-2 rounded ${
              msg.type === 'system' 
                ? 'bg-gray-200 text-gray-700'
                : msg.type === 'user' 
                  ? 'bg-blue-100' 
                  : 'bg-green-100'
            }`}
          >
            <div className="text-xs text-gray-500">{msg.time}</div>
            <div>{msg.content}</div>
          </div>
        ))}
      </div>

      <div className="flex">
        <input 
          type="text" 
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border rounded-l"
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button 
          onClick={sendMessage}
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default WebSocketClient;