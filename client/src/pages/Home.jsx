import React from 'react';

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full text-black p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Please enter the room code"
                    className="w-full text-black p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full p-3 bg-blue-500 text- rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Enter Room
                </button>
            </div>
        </div>
    );
};

export default Home;
