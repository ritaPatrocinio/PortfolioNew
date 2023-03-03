import { useState } from "react";
import "./App.css";
import Icon from "./components/Icon";
import data from "./data.json";

function App() {
  const [sun, setSun] = useState(false);
  return (
    <div className={sun ? "AppSun" : "AppMoon"}>
      <header class="flexSB">
        <h1 id="me">Rita Patrocínio</h1>
        <nav>
          <ul>
            <li style={{ marginRight: 0, marginLeft: 20 }}>
              <div
                style={{ cursor: "pointer", marginTop: "8%" }}
                onClick={() => setSun((curSun) => !curSun)}
              >
                <Icon size={40} name={sun ? "Sun" : "Moon"}></Icon>
              </div>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* <h1>About Me</h1> */}
        <div style={{ display: "flex" }}>
          <img
            id="ProfilePhoto"
            src={require("./resources/images/thumbnail_IMG_20191103_212734_607.jpg")}
            alt="Profile"
          />
          <p>{data.description}</p>
        </div>
        <div className="projects">
          <h2 id="Projects" className={`projects ${!sun && "moon"}`}>
            Projects
          </h2>
          <div class="cardProject">
            {data.projects.map(({ title, image, display, url }) => (
              <figure key={title}>
                <figcaption className={!sun && "moon"}>{title}</figcaption>
                <a target="blank" href={url}>
                  <img
                    src={require(`${image}`)}
                    alt={display}
                    title={display}
                  />
                </a>
              </figure>
            ))}
          </div>
        </div>
        <div id="Skills" className="skills">
          <h2 className={!sun && "moon"}>Skills</h2>
          <div className="flex">
            <Icon name="React" size={60} />
            <Icon name="Redux" size={60} />
            <Icon name="JavaScript" size={60} />
            <Icon name="TypeScript" size={60} />
            <Icon name="CSS" size={70} />
            <Icon name="HTML" size={70} />
            <Icon name="NextJS" size={70} />
            <Icon name="Git" size={70} />
            <Icon name="Figma" size={70} />
            <Icon name="Python" size={70} />
          </div>
        </div>
        <div id="Contact" className="contact">
          <h2 className={!sun && "moon"}>Contact</h2>
          <p class="getInContact">Get in touch with me!</p>
          <div className="flex" style={{ marginLeft: 28 }}>
            <a
              href="mailto:rita.patrocinio@live.com"
              target="blank"
              title="Email"
            >
              <Icon name="Email" size={60} />
            </a>
            <a
              href="https://www.linkedin.com/in/rita-patroc%C3%ADnio-a7005a161/"
              target="blank"
              title="Linkedin"
            >
              <Icon name="Linkedin" size={60} />
            </a>
            <a
              href="https://github.com/ritaPatrocinio"
              target="blank"
              title="gitHub"
            >
              <Icon name="GitHub" size={60} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
