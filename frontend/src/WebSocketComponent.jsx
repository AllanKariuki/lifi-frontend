import React, { useEffect, useState } from 'react';
import RedisService from './RedisService';

const WebSocketComponent = () => {
  const [data, setData] = useState([]);
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load initial data from Redis
    loadHistoricalData();

    // Connect to STM32 WebSocket server
    connectToWebSocket();

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  const loadHistoricalData = async () => {
    const historicalData = await RedisService.getRecentData();
    setData(historicalData);
  };

  const connectToWebSocket = () => {
    // Replace with your STM32's IP address and port
    const ws = new WebSocket('ws://192.168.1.100:8080');

    ws.onopen = () => {
      console.log('Connected to STM32 WebSocket server');
      setIsConnected(true);
      setError(null);
    };

    ws.onmessage = async (event) => {
      const newData = event.data;
      console.log('Received data:', newData);

      // Store in Redis
      await RedisService.storeData(newData);

      // Update state
      setData(prevData => [...prevData, {
        timestamp: Date.now(),
        data: newData
      }].slice(-100)); // Keep last 100 entries
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      setError('Failed to connect to STM32');
      setIsConnected(false);
    };

    ws.onclose = () => {
      console.log('Disconnected from STM32');
      setIsConnected(false);
      
      // Attempt to reconnect after 5 seconds
      setTimeout(connectToWebSocket, 5000);
    };

    setSocket(ws);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">LI-Fi Data Reception</h2>
        <div className="mt-2">
          Status: 
          <span className={`ml-2 px-2 py-1 rounded ${isConnected ? 'bg-green-500' : 'bg-red-500'} text-white`}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
        {error && (
          <div className="mt-2 text-red-500">
            {error}
          </div>
        )}
      </div>

      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="p-2 border rounded">
            <div className="text-sm text-gray-500">
              {new Date(item.timestamp).toLocaleString()}
            </div>
            <div className="mt-1">
              {item.data}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebSocketComponent;