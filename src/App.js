import "./App.css";
import Icon from "./components/Icon";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <div class="Light">
        <button id="Light">Light</button>
        <button id="Dark">Dark</button>
      </div>
      <header class="flexSB">
        <h1 id="me">Rita Patrocínio</h1>
        <nav>
          <ul>
            {/* <li id="AboutMe_Link"><a href="#AboutMe">About Me</a></li> */}
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
        <div class="flex">
          <img
            id="ProfilePhoto"
            src={require("./resources/images/thumbnail_IMG_20191103_212734_607.jpg")}
            alt="Profile"
          />
          <p>
            Hi! I'm Rita, a front-end developer. I’m proficient in web
            development technologies including HTML, CSS, JavaScript/ES6,
            ReactJS, and Git. I have strong communication skills and a good
            ability to communicate technical issues and solutions, as well as
            excellent problem-solving skills and self-motivation to prioritize
            and manage workload. Find some of my recent personal projects
            bellow!
          </p>
        </div>
        <h2 id="Projects" class="projects">
          Projects
        </h2>
        <div class="cardProject">
          <figure>
            <figcaption>
              Rock Papper Scissors (Lizard Spock) game in react.
            </figcaption>
            <a
              target="blank"
              href="https://rockpapperscissorslizardspockn.surge.sh/"
            >
              <img
                src={require("./resources/images/projects/Capture.PNG")}
                alt="Rock Papper Scissors (Lizard Spock) game in react"
                title="Rock Papper Scissors (Lizard Spock) game in react"
              />
            </a>
          </figure>
          <figure>
            <figcaption>
              IP Address Tracker app in react. Using the IP Geolocation API by
              IPify and LeafletJS to generate the map.
            </figcaption>
            <a target="blank" href="https://ipaddresses-vest.surge.sh/">
              <img
                src={require("./resources/images/projects/IPAddress.PNG")}
                alt="IP Address Tracker app in react"
                title="IP Address Tracker app in react"
              />
            </a>
          </figure>
          <figure>
            <figcaption>Comments section in react</figcaption>
            <a target="blank" href="https://plausible-comments.surge.sh/">
              <img
                src={require("./resources/images/projects/CommentsProject1.PNG")}
                alt="Comments section"
                title="Comments section"
              />
            </a>
          </figure>
          <figure>
            <figcaption>Aircraft rotation project in react</figcaption>
            <a href="http://rita-aircrafts.surge.sh/" target="blank">
              <img
                src={require("./resources/images/projects/AircraftsPrj.PNG")}
                alt="Aircraft rotation project"
                title="Aircraft rotation project"
              />
            </a>
          </figure>
          {/* <figure>
            <figcaption>Song search feature in react using Spotify API</figcaption>
            <a href="https://infamous-border.surge.sh/" target="blank"><img src="./resources/images/projects/JammingProject.PNG" alt="Jamming Project" title="Jamming Project"></a> 
        </figure> */}
        </div>
        <div id="Skills" class="skills">
          <h2>Skills</h2>
          <div className="flex">
            <Icon name="React" size={60} />
            <Icon name="Redux" size={60} />
            <Icon name="JavaScript" size={60} />
            <Icon name="TypeScript" size={60} />
            <Icon name="CSS" size={70} />
            <Icon name="HTML" size={70} />
            <Icon name="Git" size={70} />
            <Icon name="Python" size={70} />
          </div>
        </div>
        <div id="Contact" class="contact">
          <h2>Contact</h2>
          <p class="getInContact">Get in contact with me!</p>
          <div className="flex">
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
