import { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Loader from "react-loaders";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_gmail", refForm.current, "lyjSjFKxTv8Q-m2Ew")
      .then(
        () => {
          alert("Message successfully sent!");
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="flex-1 h-screen max-lg:h-auto max-lg:w-screen pl-16 max-lg:pl-0 max-lg:pt-40 max-sm:pt-16">
      <div className="flex max-lg:flex-col w-full h-full">
        <div className="flex flex-col flex-auto pr-8 max-lg:px-8 w-full min-w-[700px] max-lg:min-w-[0px] h-full justify-center max-lg:items-center">
          <h1 className="introduction text-white pb-4 text-[8rem] max-lg:text-[6rem] leading-[6rem] max-lg:leading-[5rem] max-sm:text-[3rem] max-sm:leading-[2.5rem] max-lg:text-center">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " "]}
              time={2000}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["m", "e"]}
              time={2000}
              idx={24}
            />
          </h1>
          <p className="box_1 text-white text-xl max-lg:text-lg max-sm:text-sm font-[sans-serif] py-2 max-lg:text-center">
            I am interested in job opportunities - especially ambitious or large
            projects, as i would love to put my knowledge to the test and
            improve myself. However, if you have other request or question,
            don't hesitate to contact me using the form below.
          </p>
          <div className="">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul className="flex flex-wrap mt-2">
                <li className="box_2 flex basis-1/2 max-sm:basis-full mb-2 h-12 max-sm:h-10 shadow-md">
                  <input
                    className="basis-full bg-[#115173] text-[#d1d1d1] text-xl max-sm:text-lg focus:outline-none pl-2 mr-1 max-sm:mr-0 rounded-sm"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="box_3 flex basis-1/2 max-sm:basis-full mb-2 h-12 max-sm:h-10 shadow-md">
                  <input
                    className="basis-full bg-[#115173] text-[#d1d1d1] text-xl max-sm:text-lg focus:outline-none pl-2 ml-1 max-sm:ml-0 rounded-sm"
                    type="Email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="box_4 flex basis-full mb-2 h-12 max-sm:h-10 shadow-md">
                  <input
                    className="basis-full bg-[#115173] text-[#d1d1d1] text-xl max-sm:text-lg focus:outline-none pl-2 rounded-sm"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li className="box_5 flex basis-full mb-2 h-36 max-sm:h-32 shadow-md">
                  <textarea
                    className="basis-full bg-[#115173] text-[#d1d1d1] text-xl max-sm:text-lg focus:outline-none pl-2 pt-2 rounded-sm resize-none"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li className="box_6 send w-fit px-3 py-1 text-[#ff8000] text-lg max-sm:text-sm hover:bg-[#ff8000] hover:text-[#531d0b] active:scale-75 duration-200">
                  <input type="submit" className="" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map absolute max-lg:hidden text-2xl bg-[#000] text-white w-[17rem] p-5 right-5 top-5">
          Mantas Valentinavičius,
          <br />
          Lietuva,
          <br />
          Vilnius, taikos g. 111 <br />
          <br />
          <span className="text-base">MantasValentin@protonmail.com</span>
        </div>
        <div className="flex-auto w-full max-lg:hidden">
          <MapContainer className="w-full h-full" center={[54.71955, 25.21289]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[54.71955, 25.21289]}></Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" active />
    </div>
  );
};

export default Contact;
