import React, { useEffect, useCallback, useState } from "react";
import { useSocket } from "../providers/Socket";
import { usePeer } from "../providers/Peer.jsx";
import ReactPlayer from "react-player";

const Room = () => {

    const socket = useSocket();
    const [myStream, setMyStream] = useState(null);
    const [ remoteEmailId, setRemoteEmailId ] = useState(null);
    const { peer, createOffer, createAnswer, setRemoteAns, sendStream } = usePeer();
    const roomId = window.location.pathname.split("/").pop();

    const handleNewUserJoined = useCallback(async(data) => {
        const { emailId } = data;
        const offer = await createOffer();
        socket.emit("call-user", { offer, emailId });
        setRemoteEmailId(emailId);
    }, [ createOffer, socket])

    const handleIncomingCall = useCallback(async (data) => {
        const { from, offer } = data;
        console.log("Incoming call from", from, offer);
        const ans = await createAnswer(offer);
        socket.emit("call-accepted", { emailId : from, ans });
        setRemoteEmailId(from);
    }, [createAnswer, socket])

    const handleCallAccepted = useCallback(async() => {
        const { ans } = data;
        await setRemoteAns(ans);
        sendStream(myStream);
    }, [setRemoteAns]);


    useEffect(() => {

    })
    useEffect(() => {
        socket.on("user-joined", handleNewUserJoined);
        socket.on("incoming-call", handleIncomingCall);
        socket.on("call-accepted", handleCallAccepted);

        return () => {
            socket.off("user-joined", handleNewUserJoined);
            socket.off("incoming-call", handleIncomingCall);
            socket.off("call-accepted", handleCallAccepted);
        }
    }, [])

    const getUserMediaStream = useCallback(async() => {
        const stream = await navigator.mediaDevices.getUserMedia({
            video : true,
            audio : true,
        });
        setMyStream(stream);
    }, [])

    useEffect(() => {
        getUserMediaStream()
    }, [getUserMediaStream])


    return(
        <>
            <h1>Room Joined</h1>
            <button onClick={() => sendStream(myStream)}>Send My Video</button>
            <ReactPlayer url={myStream} playing muted />
            <ReactPlayer url={remoteStream} playing/> 
        </>
    )
}

export default Room;

