import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import moment from "moment";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

// import Calendar from "./Calender";

function App() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      <div class="container">
        <nav>
          <ul>
            <li style={{alignItems:"center"}}>
              <a href="#" class="dropdown-toggle">
                <FontAwesomeIcon icon={faHouse} />
                <span class="nav-item">Home</span>
              </a>
            </li>

            {/* Profile Item */}
            <li>
              <a href="">
                <FontAwesomeIcon icon={faUser} />
                <span class="nav-item">Profile</span>
              </a>
            </li>

            {/* Library Item */}
            <li>
              <a href="">
                <FontAwesomeIcon icon={faBook} />
                <span class="nav-item">Library</span>
              </a>
            </li>

            {/* Collection Dropdown */}
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
                    openDropdown === "collection" ? faChevronUp : faChevronDown
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

            {/* Community Item */}
            <li>
              <a href="">
                <FontAwesomeIcon icon={faFaceSmile} />
                <span class="nav-item">Community</span>
              </a>
            </li>

            {/* Stations Dropdown */}
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

            {/* Performance Dropdown */}
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
                    openDropdown === "performance" ? faChevronUp : faChevronDown
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
=              <div
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
                <div>
                  <div className="get1" id="get1">
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: '10px,borderRadius:"30%',
                        border: "1px soild",
                      }}
                    >
                      <FontAwesomeIcon icon={faDownload} />
                      <span>Get App</span>
                    </button>
                  </div>
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

          <p> ← Back of Library</p>

          <div className="started">
            <div className="started1">
              <button style={{ backgroundColor: "orange",color:'red'}}>All</button>
            </div>
            <div className="started1">
              <button style={{color:"red"}}>Listening</button>
            </div>
            <div className="started1">
              <button style={{color:'red'}}>Learning</button>
            </div>
            <div className="started1">
              <button style={{color:'red'}} >Rehearsal</button>
            </div>
            <div className="started1">
              <button style={{color:'red'}}>Perform</button>
            </div>
          </div>

          <section class="main-course">
            <div className="cal">
              <div className="cal2">
                <div
                  className="cal2"
                  style={{ height: "400px", width: "300px" }}
                >
                  {/* <Calendar
              events={list}
               startAccessor="start"
               endAccessor="end"
               defaultDate={moment().toDate()}
               eventPropGetter={event => {
                    const eventData = list.find(ot => ot.id === event.id);
                   const backgroundColor = eventData && eventData.color;
                   return { style: { backgroundColor:"red" } };
               }}
           /> */}
                </div>
                <div className="cal2">{/* <Calendar/> */}</div>
              </div>
            </div>
          </section>
          

          <footer className="ft" style={{ textAlign: "center" }}>
            <span style={{ marginRight: "20px" }}>About</span> |{" "}
            <span style={{ marginRight: "20px" }}>Help</span> |{" "}
            <span style={{ marginRight: "20px" }}>Terms and Condition</span> |
            <span style={{ marginRight: "20px" }}>Privacy</span> |{" "}
            <span style={{ marginRight: "20px" }}>Copyright Policy</span> |{" "}
            <span style={{ marginRight: "20px" }}>Contact Us</span>
            <br />
            | @Curioushit 2023 - all rights reserved |{" "}
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
