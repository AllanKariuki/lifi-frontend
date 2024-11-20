import React from 'react';
import Header from './Header';

const FieldMonitoring = () => {
  return (
    <div>
      <Header />
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Field Monitoring Card */}
        <div className="col-span-2 bg-white rounded-lg shadow-md p-6 relative">
          <div className="absolute top-4 right-4">
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">+</span>
            </button>
          </div>
          <div className="bg-cover bg-center h-48 rounded-lg relative" style={{ backgroundImage: "url('/path-to-wheat-field.jpg')" }}>
            <div className="absolute bottom-4 left-4">
              <div className="flex space-x-2">
                <div className="bg-white px-3 py-1 rounded-full text-sm text-gray-800 shadow-md">
                  🌡️ 20°C
                </div>
                <div className="bg-white px-3 py-1 rounded-full text-sm text-gray-800 shadow-md">
                  🌿 720 ppm
                </div>
                <div className="bg-white px-3 py-1 rounded-full text-sm text-gray-800 shadow-md">
                  🌧️ 15 cm/week
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
                <span className="text-gray-700">Growth: 12 cm</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-gray-500 w-8 h-8 rounded-full flex items-center justify-center text-white">
                  💧
                </div>
                <span className="text-gray-700">Moisture: 75%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Planted Area Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">Planted area</span>
            <span className="text-gray-500">...</span>
          </div>
          <div className="text-3xl font-bold">120 l/ha</div>
          <div className="text-sm text-gray-600 mb-4">Water usage</div>
          <div className="bg-gray-200 h-32 rounded-md mt-4 flex items-center justify-center">
            {/* Placeholder for a chart */}
            <span className="text-gray-500">[Chart]</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">Farmers tasks</span>
            <div className="flex space-x-2">
              <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-800">Todays task</button>
              <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-800">Team</button>
              <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-800">Programs</button>
            </div>
          </div>
          <div className="space-y-4">
            {/* Task 1 */}
            <div className="justify-between space-y-2 border-b-2 py-2 items-center">
              <div>
                <div className="text-gray-700 font-semibold">Morning field inspection</div>
                <div className="text-sm text-gray-500">Assess crop health and identify issues.</div>
              </div>
              <div className="text-sm text-gray-400">Today, 8 AM • 🔴 High</div>
            </div>

            {/* Task 2 */}
            <div className="justify-between space-y-2 border-b-2 py-2 items-center">
              <div>
                <div className="text-gray-700 font-semibold">Soil moisture monitoring</div>
                <div className="text-sm text-gray-500">Ensure crops have sufficient water.</div>
              </div>
              <div className="text-sm text-gray-400">Today, 10 AM • 🟡 Mid</div>
            </div>

            {/* Task 3 */}
            <div className="justify-between space-y-2 border-b-2 py-2 items-center">
              <div>
                <div className="text-gray-700 font-semibold">Update inventory</div>
                <div className="text-sm text-gray-500">Assess overall crop health and identify.</div>
              </div>
              <div className="text-sm text-gray-400">Today, 12 AM • ⚫ Low</div>
            </div>
          </div>
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
