const server = {
    iceServers: [
        {
            urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"]
        }
    ],
    iceCandidadePoolSize:10,
}

export let pc = new RTCPeerConnection(server)