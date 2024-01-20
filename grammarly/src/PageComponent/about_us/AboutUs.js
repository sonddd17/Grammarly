import React from "react";
import TeamMember from "./TeamMember";
import "../../Styles/AboutUs.css";
import tri_ava from '../../assets/tri-avatar.jpeg'
import nhan_ava from '../../assets/nhan-avatar.jpeg'
import qanh_ava from '../../assets/qanh-avatar.jpeg'
import son_ava from '../../assets/son-avatar.jpeg'
import { FaGithub, FaEnvelope } from "react-icons/fa6";
import Menu from "../Menu";


const members = [
  {
    name: "Tri Lai",
    role: "Leader",
    bio: "As a leader, I was responsible for organising the development schedule and keeping a careful eye on the productivity and advancement of other team members.    ",
    image: tri_ava,
    socialLinks: [
      { icon: <FaGithub size={24} />, url: "https://github.com/Tri-Lai" },
      { icon: <FaEnvelope size={24} />, url: "mailto:s3799602@rmit.edu.vn" },
    ],
  },
  {
    name: "Anh Phan",
    role: "Software Engineer",
    bio: "I was in charge of creating the backend, which serves as the application's structural foundation and supports AI technologies, as a software engineer.",
    image: qanh_ava,
    socialLinks: [
      { icon: <FaGithub size={24} />, url: "https://github.com/s3810148" },
      { icon: <FaEnvelope size={24} />, url: "mailto:s3810148@rmit.edu.vn" },
    ],
  },
  {
    name: "Son Tran",
    role: "UI Designer",
    bio: "In my capacity as a designer, it was my responsibility to produce the most aesthetically pleasing user interface possible.",
    image: son_ava,
    socialLinks: [
      { icon: <FaGithub size={24} />, url: "https://github.com/sonddd17" },
      { icon: <FaEnvelope size={24} />, url: "mailto:s3818468@rmit.edu.vn" },
    ],
  },
  {
    name: "Nhan Vu",
    role: "UI Designer",
    bio: "As a designer, I was in charge of creating the most appealing UI to achieve the most user-friendly experience.",
    image: nhan_ava,
    socialLinks: [
      { icon: <FaGithub size={24} />, url: "https://github.com/s3810151" },
      { icon: <FaEnvelope size={24} />, url: "mailto:s3810151@rmit.edu.vn" },
    ],
  },

];

const AboutUs = () => {
  return (
    <div className="container">
      <Menu />
      <div className="about-us">
        {members.map((member, idx) => (
          <TeamMember key={idx} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
