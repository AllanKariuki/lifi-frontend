import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const FetchDataComponent = () => {
  const [socket, setSocket] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [status, setStatus] = useState('Disconnected');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5000/ws');

    ws.onopen = () => {
      setStatus('Connected');
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setCurrentData(data);
        setHistoricalData(prev => [...prev.slice(-20), data]); // Keep last 20 readings
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    };

    ws.onclose = () => {
      setStatus('Disconnected');
      console.log('Disconnected from WebSocket server');
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);
  console.log('Status:', status);

  const SensorCard = ({ title, value, unit }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value} {unit}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Plant Sensor Dashboard</h1>
        <div className={`px-3 py-1 rounded ${
          status === 'Connected' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {status}
        </div>
      </div>

      {currentData && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            <SensorCard title="Temperature" value={currentData.temperature} unit="°C" />
            <SensorCard title="Humidity" value={currentData.humidity} unit="%" />
            <SensorCard title="Sunlight" value={currentData.sunlight} unit="lux" />
            <SensorCard title="Water Content" value={currentData.water_content} unit="%" />
            <SensorCard title="Growth Rate" value={currentData.growthRate} unit="cm/day" />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Historical Data</h2>
            <LineChart width={800} height={400} data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
              <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
              <Line type="monotone" dataKey="sunlight" stroke="#ffc658" />
              <Line type="monotone" dataKey="water_content" stroke="#ff7300" />
              <Line type="monotone" dataKey="growthRate" stroke="#ff0000" />
            </LineChart>
          </div>
        </>
      )}
    </div>
  );
};

export default FetchDataComponent;