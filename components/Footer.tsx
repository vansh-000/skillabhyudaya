"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

import emailjs from "emailjs-com";
import socials from "@/utils/socials";
import Button from "./ui/Button";

interface User {
  name: string;
  email: string;
  message: string;
}

const Footer: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE || "",
        process.env.REACT_APP_TEMPLATE || "",
        e.currentTarget,
        process.env.REACT_APP_USER || ""
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setUser({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <footer  className="footer relative bg-gradient-to-t from-black/75 via-black/75 to-transparent">
      <div className="max-w-screen-xl mx-auto px-6 py-8 md:py-12 lg:py-14">
        <div className="text-white text-center md:text-left mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg">
            Contact us if you have any questions or want to collaborate.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="w-full md:w-1/2">
            <form
              name="contact"
              className="bg-opacity-75 rounded-lg p-6 md:p-8"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Type your full name"
                required
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 rounded border border-white bg-opacity-25 text-white focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 rounded border border-white bg-opacity-25 text-white focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Type your message here"
                required
                rows={5}
                name="message"
                value={user.message}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 rounded border border-white bg-opacity-25 text-white resize-none focus:outline-none focus:border-blue-500"
              ></textarea>
              <Button text="Send Message" />
            </form>
          </div>
          <div className="w-full md:w-1/2 flex  item-center justify-center ">
            <div className="flex md:flex-col lg:flex-col lg:items-start lg:justify-start lg:px-20">
              {socials.map((social, id) => (
                <div key={id} className="mr-4 mb-4 flex flex-col items-center">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white flex items-center hover:text-blue-500"
                  >
                    <div className="mr-2">{social.icon}</div>
                    <span className="lg:flex hidden">{social.linkText}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="text-white">Made with ❤️ by Development Team</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
