export const getWebCamAccess = (setlocalStream) => {
    navigator.getUserMedia({ video: true, audio: false }, (stream) => {
      let video = document.getElementById('primary-camera')
      video.srcObject = stream
      video.autoplay = true
      setlocalStream(stream)
    }, (e) => { })
  }

  export const revokeWebCamAccess = () => {
    localStream.getTracks().forEach(function (track) {
      track.stop();
    });
  }