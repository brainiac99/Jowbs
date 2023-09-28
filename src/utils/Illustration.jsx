import Lottie from "lottie-react";

function Illustration({ animationData, autoPlay, loop }) {
  return (
    <Lottie animationData={animationData} loop={loop} autoPlay={autoPlay} />
  );
}

export default Illustration;
