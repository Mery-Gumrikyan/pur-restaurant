import "./CustomVideoPlayer.css";

function CustomVideoPlayer({ src }) {
  return (
    <div id="main" className="videoContainer">
      <video autoPlay muted loop className="backVideo">
        <source src={src} type="video/mp4"></source>
      </video>

      <video autoPlay muted loop className="mainVideo">
        <source src={src} type="video/mp4"></source>
      </video>
    </div>
  );
}

export const PourAdvertisementVideo = () => (
  <CustomVideoPlayer src={"/images/main.mp4"} />
);

export default CustomVideoPlayer;
