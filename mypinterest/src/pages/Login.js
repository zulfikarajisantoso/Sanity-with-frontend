import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import lofin from "../assets/login.jpg";
import GoogleLogin from "react-google-login";
import { client } from "../client";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    const { name, googleId, imageUrl } = response.profileObj;

    const doc = {
      _id: googleId,
      _type: "user",
      username: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };
  const handlegagal = (response) => {
    console.log(response);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-full h-full relative">
        {/* <video
          src=""
          alt=""
          loop
          type="video/mp4"
          className="object-cover h-full w-full"
          muted
          autoPlay
        /> */}
        <img src={lofin} alt="" className="object-cover h-full w-full" />

        <div className="absolute flex-col right-0 bottom-0 top-0 left-0 flex justify-center items-center  bg-blackOverlay ">
          <GoogleLogin
            clientId="57977112697-2k07pa3c7o8lvujop5irt2o09vjfpl8e.apps.googleusercontent.com"
            render={(renderprop) => (
              <button
                type="button"
                scope="https://www.googleapis.com/auth/drive.file"
                className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                onClick={renderprop.onClick}
                disabled={renderprop.disabled}
              >
                <FcGoogle className="mr-4" /> Sign in with google
              </button>
            )}
            onFailure={handlegagal}
            onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </div>
      </div>
    </div>
  );
}

export default Login;
