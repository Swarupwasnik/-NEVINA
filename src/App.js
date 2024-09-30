import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaDownload } from "react-icons/fa6";
import {
  faSquareCaretLeft,
  faHandshakeAngle,
  faLaptopFile,
  faIcons,
  faVolumeHigh,
  faSquareCaretRight,
  faArrowRotateLeft,
  faCirclePause,
  faCirclePlay,
  faDownload,
  faBell,
  faChevronDown,
  faMagnifyingGlass,
  faHouse,
  faBook,
  faCopy,
  faCalendar,
  faRadio,
  faFaceSmile,
  faMusic,
  faChartSimple,
  faHeadphones,
  faUserGroup,
  faFaceSmileWink,
  faCalendarDays,
  faMicrophoneLines,
  faRecordVinyl,
  faCompactDisc,
  faLayerGroup,
  faGlobe,
  faSignOutAlt,
  faChevronUp,
  faUser,
  faListCheck,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FaLock } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const myEvents = [
  {
    title: "Meeting",
    allDay: false,
    start: new Date(2023, 8, 28, 10, 0), 
    end: new Date(2023, 8, 28, 12, 0),
  },
  {
    title: "Lunch Break",
    allDay: false,
    start: new Date(2023, 8, 28, 13, 0),
    end: new Date(2023, 8, 28, 14, 0),
  },
];

const localizer = momentLocalizer(moment);
function App() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [events, setEvents] = useState(myEvents);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkip = (amount) => {
    audioRef.current.currentTime += amount;
  };

  const handleShuffle = () => {
    alert("Shuffle functionality to be implemented");
  };

  const handleProgressChange = (e) => {
    const newValue = e.target.value;
    setProgress(newValue);
    audioRef.current.currentTime = (newValue / 100) * audioRef.current.duration;
  };


  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      const newProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(newProgress);
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, [audioRef]);

  
  return (
    <>
      <div 
      className="container"
    
      >
        <section>
          

          <nav className="sidebar">
            <ul>
              <li style={{ alignItems: "center" }}>
                <a href="#" class="dropdown-toggle">
                  <FontAwesomeIcon icon={faHouse} />
                  <span class="nav-item">Home</span>
                </a>
              </li>

              
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faUser} />
                  <span class="nav-item">Profile</span>
                </a>
              </li>

             
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faBook} />
                  <span class="nav-item">Library</span>
                </a>
              </li>

              
              <li>
                <a
                  href="#"
                  onClick={() => toggleDropdown("collection")}
                  class="dropdown-toggle"
                >
                  <FontAwesomeIcon icon={faCopy} />
                  <span class="nav-item">Collection</span>
                  <FontAwesomeIcon
                    icon={
                      openDropdown === "collection"
                        ? faChevronUp
                        : faChevronDown
                    }
                    className="dropdown-arrow"
                  />
                </a>
                {openDropdown === "collection" && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faListCheck} />
                        <span>Playlists</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faShuffle} />
                        <span>Tracks</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faMicrophoneLines} />
                        <span>Artist</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faRecordVinyl} />
                        <span>Albums</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCompactDisc} />
                        <span>Genres</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faLayerGroup} />
                        <span>Decades</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faGlobe} />
                        <span>Geos</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faFaceSmile} />
                  <span class="nav-item">Community</span>
                </a>
              </li>

             
              <li>
                <a
                  href="#"
                  onClick={() => toggleDropdown("stations")}
                  class="dropdown-toggle"
                >
                  <FontAwesomeIcon icon={faRadio} />
                  <span class="nav-item">Stations</span>
                  <FontAwesomeIcon
                    icon={
                      openDropdown === "stations" ? faChevronUp : faChevronDown
                    }
                    className="dropdown-arrow"
                  />
                </a>
                {openDropdown === "stations" && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>Scheduled Listening</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <span>Music discovery</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faMusic} />
                        <span>Positive Music</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFaceSmileWink} />
                        <span>Mood Regulation</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              
              <li>
                <a
                  href="#"
                  onClick={() => toggleDropdown("performance")}
                  class="dropdown-toggle"
                >
                  <FontAwesomeIcon icon={faChartSimple} />
                  <span class="nav-item">Performance</span>
                  <FontAwesomeIcon
                    icon={
                      openDropdown === "performance"
                        ? faChevronUp
                        : faChevronDown
                    }
                    className="dropdown-arrow"
                  />
                </a>
                {openDropdown === "performance" && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span>Calendar</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faUserGroup} />
                        <span>Groups</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faHeadphones} />
                        <span>Music Analysis</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <div className="log">
                <li>
                  <a href="#">
                    <span> Pro Partner </span>
                    <FontAwesomeIcon icon={faHandshakeAngle} />
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </section>

        <section class="main">
       
          <div class="main-top">
            <div
              className="plug"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 20px",
              }}
            >
              ={" "}
              <div
                className="get"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "400px",
                }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div
                className="get"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "550px",
                }}
              >
                <div className="get1">
                  <div className="get1">Premium</div>
                </div>
               
                   <div className="get1" id="get1">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "30px",
                  border: "1px solid",
                  padding: "5px 20px",
                  backgroundColor: "#f0f0f0",
              
                  
                }}
              >
                <FaDownload  style={{fontSize:"25px"}}/>
                <span>Get App</span>
              </button>
            </div>

                <div className="get1" style={{ display: "flex", gap: "15px" }}>
                  <FontAwesomeIcon
                    icon={faBell}
                    style={{ borderRadius: "50%", border: "1px" }}
                  />
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
            </div>
          </div> 

          

          <p style={{ textAlign: "start" }}> ← Back of Library</p>

          <div className="started">
            <div className="started1">
              <button style={{ backgroundColor: "orange", color: "red" }}>
                All
              </button>
            </div>
            <div className="started1">
              <button style={{ color: "red" }}>Listening</button>
            </div>
            <div className="started1">
              <button style={{ color: "red" }}>Learning</button>
            </div>
            <div className="started1">
              <button style={{ color: "red" }}>Rehearsal</button>
            </div>
            <div className="started1">
              <button style={{ color: "red" }}>Perform</button>
            </div>
          </div>
          <div className="helo">
      
            <div
              className="wht"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                flexWrap: "wrap",
                fontFamily: "sans-serif",
              }}
            >
              <div className="hel1">
                <h2
                  style={{ textDecoration: "underline", fontWeight: "lighter" }}
                >
                  Calendar
                </h2>
              </div>
              <div
                className="hel1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <FaLock style={{ marginRight: "10px" }} />
                  <span style={{ marginRight: "10px" }}>Google Calendar</span>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </span>
              </div>
            </div>
            <hr
              style={{
                height: "2px",
                borderWidth: 0,
                color: "gray",
                backgroundColor: "gray",
                margin: "10px",
              }}
            ></hr>

            <div style={{ height: "80vh" }}>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultView="month"
                views={["month", "week", "day"]}
                style={{ height: "100%" }}
                selectable={true}
                onSelectEvent={(event) => alert(event.title)}
                onSelectSlot={(slotInfo) =>
                  alert(
                    `Selected time: ${slotInfo.start.toLocaleString()} - ${slotInfo.end.toLocaleString()}`
                  )
                }
              />
            </div>
          </div>

          <footer
            className="ft"
            style={{ textAlign: "center", marginTop: "80px" }}
          >
            <span style={{ marginRight: "20px" }}>About</span> |{" "}
            <span style={{ marginRight: "20px" }}>Help</span> |{" "}
            <span style={{ marginRight: "20px" }}>Terms and Condition</span> |
            <span style={{ marginRight: "20px" }}>Privacy</span> |{" "}
            <span style={{ marginRight: "20px" }}>Copyright Policy</span> |{" "}
            <span style={{ marginRight: "20px" }}>Contact Us</span>
            <br />| @Curioushit 2023 - all rights reserved |{" "}
            <CiFacebook style={{ marginLeft: "1px" }} />{" "}
            <FaInstagram style={{ marginLeft: "1px" }} />{" "}
            <FaPinterestP style={{ marginLeft: "1px" }} />{" "}
            <CiTwitter style={{ marginLeft: "1px" }} />{" "}
            <FaLinkedinIn style={{ marginLeft: "1px" }} />{" "}
            <FaTiktok style={{ marginLeft: "1px" }} />
            <div className="audio-player">
              <div className="audio-image">
                <img src="https://via.placeholder.com/150" alt="Album Cover" />
              </div>
              <div className="audio-info">
                <h2>Keshariya</h2>
                <h3>Pritam</h3>
              </div>
              <div className="audio-controls" style={{ marginLeft: "50px" }}>
                <span onClick={handleShuffle}>
                  <FontAwesomeIcon icon={faShuffle} />
                </span>
                <span onClick={() => handleSkip(-10)}>
                  <FontAwesomeIcon icon={faSquareCaretLeft} />
                </span>
                <span style={{ fontSize: 40 }} onClick={handlePlayPause}>
                  <FontAwesomeIcon
                    icon={isPlaying ? faCirclePause : faCirclePlay}
                  />
                </span>
                <span onClick={() => handleSkip(10)}>
                  <FontAwesomeIcon icon={faSquareCaretRight} />
                </span>
                <span onClick={() => (audioRef.current.currentTime = 0)}>
                  <FontAwesomeIcon icon={faArrowRotateLeft} />
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="progress-bar"
                />
              </div>
              <audio ref={audioRef} src="path/to/your/song.mp3" />
              <div className="audio-controls" style={{ marginLeft: "50px" }}>
                <span onClick={handleShuffle}>
                  <FontAwesomeIcon icon={faIcons} />
                </span>

                <span onClick={handlePlayPause}>
                  <FontAwesomeIcon icon={faLaptopFile} />
                </span>
                <span onClick={() => handleSkip(10)}>
                  <FontAwesomeIcon icon={faSquareCaretRight} />
                </span>
                <span onClick={() => (audioRef.current.currentTime = 0)}>
                  <FontAwesomeIcon icon={faVolumeHigh} />
                </span>
                <input
                  style={{ width: "100px" }}
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="progress-bar"
                />
              </div>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}

export default App;
