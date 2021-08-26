import React from "react";
//import fire from "../Config/firebase";
import Lottie from "react-lottie";
import animationData from "../lotties/reading-in-header";
import Avatar from "@material-ui/core/Avatar";
import Search from "./Search";
const Header = ({ query, setQuery }) => {
  // const SignOut = () => {
  //   fire
  //     .auth()
  //     .signOut()
  //     .then((u) => {})
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="header-page">
      <Avatar src="/broken-image.jpg" /*onClick={SignOut}*/ />
      <div className="header">
        <div className="heading">
          <h1>
            Let's go
            <br /> to the world of imagination!!
          </h1>
          <Search query={query} setQuery={setQuery} />
        </div>
        <Lottie
          options={defaultOptions}
          height={400}
          max-width={600}
          className="lottie"
        />
      </div>
    </div>
  );
};
export default Header;
