const videoElement = document.getElementById("video")
const button = document.getElementById("button")

// prompt user to select media stream, pass video element then play
selectMediaStream = async() => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        console.log("whoops, error here", error)
    }
}


button.addEventListener("click", async() => {
    // disable button
    button.disabled = true

    // start pip
    await videoElement.requestPictureInPicture()

    // reset btn
    button.disabled = false
})

// on load
selectMediaStream()