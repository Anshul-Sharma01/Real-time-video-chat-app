import React, { useState, useEffect, useCallback } from 'react';
import { useSocket } from '../providers/Socket.jsx';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [ emailId, setEmailId ] = useState("");
    const [ roomId, setRoomId ] = useState("");

    const  socket  = useSocket();
    const navigate = useNavigate();

    const handleJoinRoom = () => {
        socket.emit("join-room", { emailId, roomId });
    }

    const handleRoomJoined = useCallback(() => {
        console.log("Room Joined : ", roomId);
        navigate(`room/${roomId}`);
    }, [navigate, roomId])

    useEffect(() => {
        socket.on("joined-room", handleRoomJoined);

        return () => {
            socket.off("joined-room", handleRoomJoined);
        }
    }, [socket, handleRoomJoined])

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <input
                    type="email"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full text-black p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    placeholder="Please enter the room code"
                    className="w-full text-black p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={handleJoinRoom} className="w-full p-3 bg-blue-500 text- rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Enter Room
                </button>
            </div>
        </div>
    );
};

export default Home;
