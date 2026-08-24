import "./video.css";

function Video() {
  return (
    <div id="main" className="videoContainer">
      <video autoPlay muted loop className="backVideo">
        <source src="/images/main.mp4" type="video/mp4"></source>
      </video>

      <video autoPlay muted loop className="mainVideo">
        <source src="/images/main.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Video;
