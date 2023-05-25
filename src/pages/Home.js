import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Proj7 from "../assets/proj7.jpg";

function Home() {
return (
<div className="home">
<div className="about">
<img src={Proj7} alt="Profile" className="profile-image" />
<h2>Hi, My Name is Rohit Chandra Joshi</h2>
<div className="prompt">
<p>A Software Developer and Machine Learning Enthusiast with a passion for learning and creating.</p>
<div className="contact-icons">
<a href="mailto:rohit123alliswell@gmail.com">
<EmailIcon />
</a>
<a
           href="https://www.linkedin.com/in/rohitchandrajoshi"
           target="_blank"
           rel="noopener noreferrer"
         >
<LinkedInIcon />
</a>
<a
           href="https://github.com/RohitChandraJoshi"
           target="_blank"
           rel="noopener noreferrer"
         >
<GithubIcon />
</a>
</div>
</div>
</div>
<div className="skills">
<div className="programming-skills">
<h1 style={{textAlign:"center" }} >Programming Skills</h1>
<ul className="programming-skills-list">
<li>
<strong>Languages</strong>
<ul>
<li>Advance: Java</li>
<li>Intermediate: Python, C, JavaScript</li>
<li>Familiar: PHP</li>
</ul>
</li>
<li>
<strong>Frameworks/Libraries</strong>
<ul>
<li>React.js</li>
<li>Node.js</li>
<li>Django</li>
<li>Pandas</li>
<li>Numpy</li>
<li>TensorFlow</li>
</ul>
</li>
<li>
<strong>Technologies</strong>
<ul>
<li>HTML, HTML5</li>
<li>CSS, CSS3</li>
<li>MySQL</li>
<li>Web Development</li>
<li>Machine Learning</li>
<li>Deep Learning</li>
<li>Android Development</li>
</ul>
</li>
<li>
<strong>Tools</strong>
<ul>
<li>Git</li>
<li>Visual Studio</li>
<li>IntelliJ IDEA</li>
<li>AWS</li>
<li>Google Colab</li>
<li>Mac</li>
<li>Windows</li>
</ul>
</li>
</ul>
</div>
</div>


</div>
);
}

export default Home;