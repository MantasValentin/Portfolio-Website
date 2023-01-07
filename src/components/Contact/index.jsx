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
    }, 2300);
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
        <div className="flex flex-col w-full h-full justify-center max-lg:items-center">
          <h1 className="introduction text-white pb-4 text-[8rem] max-lg:text-[6rem] leading-[6rem] max-lg:leading-[5rem] max-sm:text-[3rem] max-sm:leading-[2.5rem] max-lg:text-center">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " "]}
              time={2300}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["m", "e"]}
              time={2300}
              idx={24}
            />
          </h1>
          <p className="text-white text-xl max-lg:text-lg max-sm:text-sm font-[sans-serif] py-2 max-lg:text-center">
            I am interested in job opportunities - especially ambitious or large
            projects, as i would love to put my knowledge to the test and
            improve myself. However, if you have other request or question,
            don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul className="grid-container">
                <li className="grid-item1">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="grid-item2">
                  <input
                    type="Email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="grid-item3">
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li className="grid-item4">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li className="grid-item5">
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Mantas Valentinavičius,
          <br />
          Lietuva,
          <br />
          Vilnius, taikos g. 111 <br />
          <br />
          <span>MantasValentin@protonmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[54.71955, 25.21289]} zoom={13}>
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
