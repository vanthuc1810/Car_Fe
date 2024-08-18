import ReactPlayer from "react-player";
import "./VideosSection.scss";

export const VideosSection = () => {
  return (
    <div className="video-container">
      <div className="video-card">
        <ReactPlayer
          url="https://res.cloudinary.com/vanthuc/video/upload/v1723785778/VinFast_VF_8_-_SUV_h%E1%BA%A1ng_D_th%E1%BB%9Di_th%C6%B0%E1%BB%A3ng.mp4"
          playing
          muted
          loop
          controls={false}
          width="100%"
          height="119.9%"
        />
        <h3>Flexible</h3>
        <span className="notch"></span>
      </div>
      <div className="video-card">
        <ReactPlayer
          url="https://res.cloudinary.com/vanthuc/video/upload/v1723785780/Rolls-Royce_Introduces_Spectre-_The_World_s_First_Ultra-Luxury_Electric_Super_Coup%C3%A9.mp4"
          playing
          muted
          loop
          controls={false}
          width="100%"
          height="119.9%"
        />
        <h3>Enduring</h3>
      </div>
      <div className="video-card">
        <ReactPlayer
          url="https://res.cloudinary.com/vanthuc/video/upload/v1723785779/Introducing_the_Land_Rover_Defender.mp4"
          playing
          muted
          loop
          controls={false}
          width="100%"
          height="119.9%"
        />
        <h3>Luxury</h3>
      </div>
      <div className="video-card">
        <ReactPlayer
          url="https://res.cloudinary.com/vanthuc/video/upload/v1723785793/Volvo_S90_Recharge-_Luxury_is_not_a_thing.mp4"
          playing
          muted
          loop
          controls={false}
          width="100%"
          height="119.9%"
        />
        <h3>Safety</h3>
        <span className="notch"></span>
      </div>
    </div>
  );
};
