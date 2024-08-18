import ReactPlayer from "react-player";
import "./HeroVideo.scss";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const HeroVideo = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <ReactPlayer
          url="https://res.cloudinary.com/vanthuc/video/upload/v1723785545/Revival_Turbocharged_Honda_NSX_-_4K_nmfu0r.mp4"
          playing
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="hero-text">
        <h1>Sneak into Extraordinary</h1>
        <h2>Where Advanture Meets Styles in Quirky Sneaker Bliss</h2>
      </div>
      <button className="shop-now-btn" onClick={() => navigate('product-listing')}>Rent Now</button>
    </div>
  );
};
