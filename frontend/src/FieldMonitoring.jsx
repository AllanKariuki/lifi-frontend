import React, { useState, useEffect } from 'react';
import Header from './Header';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const FieldMonitoring = () => {
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
  console.log('Status: ', status);
  console.log('Current data: ', currentData?.temperature);
  console.log('Historical data: ', historicalData);
  return (
    <div className='bg-gray-50 '>
      <Header />
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Field Monitoring Card */}
      <div className="col-span-2 bg-white rounded-lg shadow-md p-6 relative">
        <div className="absolute top-4 right-4">
          <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold">+</span>
          </button>
        </div>
        <div className="bg-cover bg-center h-48 rounded-lg relative" style={{ backgroundImage: "url('/assets/images/bg-1.jpg')" }}>
          <div className="absolute bottom-4 left-4">
            <div className="flex space-x-2">
              <div className="bg-white px-3 py-1 rounded-full text-sm text-gray-800 shadow-md">
                🌡️ {currentData?.temperature || 0}°C
              </div>
              <div className="bg-white px-3 py-1 rounded-full text-sm text-gray-800 shadow-md">
                🌿 720 ppm
              </div>
              <div className="bg-white px-3 py-1 rounded-full text-sm text-gray-800 shadow-md">
                🌧️ {currentData?.water_content || 0} cm/week
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <span className="block text-2xl font-semibold">Field monitoring</span>
          <div className="flex space-x-4 mt-4">
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white">
                🌱
              </div>
              <span className="text-gray-700">Growth: {currentData?.growthRate || 0} cm</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-500 w-8 h-8 rounded-full flex items-center justify-center text-white">
                💧
              </div>
              <span className="text-gray-700">Moisture: {currentData?.humidity || 0}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Farmer's Tasks Card */}
      <div className="col-span-1 bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Farmer's tasks</span>
          <div className="flex space-x-2">
            <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-800">Today's task</button>
            <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-800">Team</button>
            <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-800">Programs</button>
          </div>
        </div>
        <div className="space-y-4">
          {/* Task 1 */}
          <div className="flex justify-between items-center">
            <div>
              <div className="text-gray-700 font-semibold">Morning field inspection</div>
              <div className="text-sm text-gray-500">Assess crop health and identify issues.</div>
            </div>
            <div className="text-sm text-gray-400">Today, 8 AM • 🔴 High</div>
          </div>

          {/* Task 2 */}
          <div className="flex justify-between items-center">
            <div>
              <div className="text-gray-700 font-semibold">Soil moisture monitoring</div>
              <div className="text-sm text-gray-500">Ensure crops have sufficient water.</div>
            </div>
            <div className="text-sm text-gray-400">Today, 10 AM • 🟡 Mid</div>
          </div>

          {/* Task 3 */}
          <div className="flex justify-between items-center">
            <div>
              <div className="text-gray-700 font-semibold">Update inventory</div>
              <div className="text-sm text-gray-500">Assess overall crop health and identify.</div>
            </div>
            <div className="text-sm text-gray-400">Today, 12 AM • ⚫ Low</div>
          </div>
        </div>
      </div>

      {/* Planted Area Card */}
      <div className="col-span-2 bg-white p-4 rounded-lg shadow-sm">
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
      
      {/* Market Integration Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <span className="text-xl font-semibold">Market integration</span>
        <p className="text-gray-500 text-sm mt-2">
          Real-time alerts on market prices wheat prices.
        </p>
        <div className="mt-6 flex items-center justify-center">
          {/* Placeholder for market data visualization */}
          <span className="text-gray-500">[Market Data Visualization]</span>
        </div>
      </div>

      {/* Storage Risk Card */}
      <div className="bg-black text-white rounded-lg shadow-md p-6">
        <span className="text-xl font-semibold">Storage risk</span>
        <div className="text-3xl font-bold mt-4">74%</div>
        <div className="text-sm mt-2">Ensure crops are stored safely.</div>
        <div className="mt-6 flex items-center justify-center">
          {/* Placeholder for storage risk indicator */}
          <span className="text-gray-400">[Storage Risk Indicator]</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FieldMonitoring;
