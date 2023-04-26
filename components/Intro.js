import style from "../styles/Intro.module.css";
import { useState } from "react";
import Image from "next/image";
import Circle from "./Circle";
import 'bootstrap/dist/css/bootstrap.min.css';

const Intro = () => {


  const [firstCondition, setFirstCondition] = useState(0)
  const [options, setOptions] = useState({
    0: 'how-catch.svg',
    1: 'how-document.svg',
    2: 'how-win.svg'
  })
  const [second,setSecond]=useState(0)





  return (
    <div style={{ margin: '1rem' }}>

      <div className="row p-0 m-0">
        <div className="col" style={{ marginTop: "20vh" }} >
          <h1 className={style.title}>
            A LEADER IN APP<br /> BASED EVENTS
          </h1><br />
          <p style={{ fontFamily: "Poppins", fontSize: '20px' }}>
            Catch-photo-release events that help to conserve the resources we love.
          </p><br />
          <div>
            <button className="btn btn-success" style={{ marginRight: 20 }}><strong>Download The App</strong></button>
            <button className=" btn btn-outline-success"><strong>Organize an event</strong></button>
          </div>

        </div>


        <div className="col">
          <Image
            src={process.env.NEXT_PUBLIC_URL + "/img/play-video@2x.svg"}
            height={500}
            width={500}
            alt=""
          />
        </div>
      </div>

      <br /><br />
      <h1 style={{
        textAlign: "center", fontFamily: 'Sigmar', color: '#1c8753'
      }}>A COMPLETE EVENT PLATFORM</h1>
      <br />
      <div className="row  p-0 m-0">
        <div className="col" >
          <div>
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/ic-camera.svg"}
              height={90}
              width={90}
              alt=""
            />
          </div><br />
          <span style={{ fontFamily: "Poppins", fontSize: '20px' }}> Catch-Photo-Release</span>
          <br /><span> The Catch-Photo-Release format can cover any geographic area and run for any length of time. The format creates less stress on the fish than traditional events where they’re held until the end of the day and then released.
          </span>
        </div>

        <div className="col">
          <div>
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/ic-shield.svg"}
              height={90}
              width={90}
              alt=""
            />
          </div><br />
          <span style={{ fontFamily: "Poppins", fontSize: '20px' }}>
            Secret Spot Stays Secret
          </span>
          <br />We make sure all data is anonymized, and researchers are prohibited from publishing our angler’s secret spots.
          <span></span>
        </div>

        <div className="col">
          <div>
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/ic-graph.svg"}
              height={90}
              width={90}
              alt=""
            />
          </div><br />
          <span style={{ fontFamily: "Poppins", fontSize: '20px' }}>
            Online Leaderboards

          </span>
          <br /><span>
            MyCatch posts real-time event updates on the event’s online leaderboard so anyone can follow along from anywhere.

          </span>

        </div>

        <div className="col">
          <div>
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/ic-trophy.svg"}
              height={90}
              width={90}
              alt=""
            />
          </div><br />
          <span style={{ fontFamily: "Poppins", fontSize: '20px' }}>
            Easy to Organize

          </span>
          <br /><span>
            Catch-Photo-Release events are much easier to organize that traditional events; our platform is flexible and can accommodate a wide range of events.

          </span>
        </div>

      </div>
      <br /><br />
      <div style={{ textAlign: "center", marginLeft: '10vw', marginRight: '10vw' }}>
        <h1 style={{ fontFamily: 'Sigmar', color: '#1c8753' }}>  HOW EVENTS WORK</h1>
        <span>
          Catch-Photo-Release events are easier to organize than traditional events, and require fewer volunteers or on-site weigh-ins, because the app does it all for you. Our event team has decades of experience and can work with you every step of the way, or simply pass off the reins and let you run with it.
        </span><br /><br /><br />
        <div className="row p-0 m-0">
          <div className="col">
            <Image
              src={process.env.NEXT_PUBLIC_URL + `/img/${options[firstCondition]}`}
              height={300}
              width={300}
              alt=""
            />
          </div>
          <div className="col" style={{ textAlign: "left" }}>
            <div className="card p-3" style={{ color: '#1c8753' }} onClick={() => { setFirstCondition(0) }}>
              <div style={{ display: "flex" }}>
                <Image
                  src={process.env.NEXT_PUBLIC_URL + "/img/fish.svg"}
                  height={10}
                  width={30}
                  alt=""
                />&nbsp;&nbsp;
                <h5 style={{ flex: 1, paddingTop: '0.5rem' }}> Start Catching</h5>
                <Image
                  src={process.env.NEXT_PUBLIC_URL + `/img/${firstCondition == 0 ? 'chevron.svg' : 'chevronDown.svg'}`}
                  height={10}
                  width={30}
                  alt=""
                />
              </div>
              {
                firstCondition == 0 && <p>
                  Anglers record their catch between the events posted start and end dates. Only catches within the specified geographic area qualify as a catch for the event.
                </p>
              }
            </div>
            <br />
            <div className="card p-3" style={{ color: '#1c8753' }} onClick={() => { setFirstCondition(1) }}>
              <div style={{ display: "flex" }}>
                <Image
                  src={process.env.NEXT_PUBLIC_URL + "/img/photo.svg"}
                  height={10}
                  width={30}
                  alt=""
                />&nbsp;
                <h5 style={{ flex: 1, paddingTop: '0.5rem' }}> Document with Photos</h5>
                <Image
                  src={process.env.NEXT_PUBLIC_URL + `/img/${firstCondition == 1 ? 'chevron.svg' : 'chevronDown.svg'}`}
                  height={10}
                  width={30}
                  alt=""
                />
              </div>

              {
                firstCondition == 1 && <p>
                  Anglers document their catch size with a photo, confirm their location through GPS, upload that information using the MyCatch app, and document the release of the fish right away.  </p>

              }


            </div>
            <br />

            <div className="card p-3" style={{ color: '#1c8753' }} onClick={() => { setFirstCondition(2) }}>
              <div style={{ display: "flex" }}>
                <Image
                  src={process.env.NEXT_PUBLIC_URL + "/img/trophy.svg"}
                  height={10}
                  width={30}
                  alt=""
                />&nbsp;
                <h5 style={{ flex: 1, paddingTop: '0.5rem' }}> Winners Announced</h5>
                <Image
                  src={process.env.NEXT_PUBLIC_URL + `/img/${firstCondition == 2 ? 'chevron.svg' : 'chevronDown.svg'}`}
                  height={10}
                  width={30}
                  alt=""
                />
              </div>
              {
                firstCondition == 2 && <p>
                  Winners are chosen based on their leaderboard position. Leaderboards can be customized based on the organizer’s data requirements.  </p>

              }

            </div>

            <br />
          </div>
        </div>

        <span style={{ fontFamily: "Poppins", fontSize: "20px" }}>Ready to Compete in MyCatch Events?</span><br /><br />
        <button className="btn btn-success">Join an Event Now</button>
      </div>


      <br /><br />


      <div className="row">


        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/bg-research.svg"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
          className={style.background} />



        <div className="col" style={{ zIndex: 1, position: "relative" }}>
          <Image
            src={process.env.NEXT_PUBLIC_URL + "/img/rod.png"}
            height={400}
            width={500}
            alt=""
          />
        </div>
        <div className="col">
          <h1 style={{
            textAlign: "left", fontFamily: 'Sigmar', color: '#1c8753'
          }}>GIVING BACK THROUGH RESEARCH</h1><br />
          <span>
            MyCatch is developed by Angler’s Atlas, which has been a proven, invaluable online resource for anglers since 1999. Angler’s Atlas began collecting angler data for science in the early 2000’s, and MyCatch has enabled us to efficiently collect more meaningful, workable data. We work with scientists across Canada to provide data that is otherwise difficult to collect, and to help inform fisheries management and conservation.
          </span>
          <br /><br />
          <button className="btn btn-success"> Learn More about Anglers Atlas</button>
        </div>
      </div>


      <br />
      <br />
      <h1 style={{ fontFamily: 'Sigmar', color: '#1c8753' }}> WHAT PEOPLE ARE SAYING</h1>
      <br />

      <div className="row">
        <div className="col card p-3 m-2">

          <p>
            Many Unifor members and their families are sports anglers
            and we have hosted fishing derby for decades but, like
            so many other groups, we have had to cancel the last two
            years due to the pandemic. The innovative app-based event
            offered by Tourism Windsor Essex and Angler Atlas will
            make it possible for our community to safely reconnect with
            nature and family during these difficult times.
          </p>
          <hr />
          <strong style={{ fontFamily: "Poppins" }}>Mike Barlett</strong>
          <span style={{ color: "grey" }}>Unifor</span>
        </div>



        <div className="col card p-3 m-2">

          <p>

            “Anglers definitely have a role in conservation, and if we
            don’t protect the species there won’t be anything for
            future generations to fish for.”
          </p>
          <hr />
          <strong style={{ fontFamily: "Poppins" }}>Zach Copland</strong>
          <span style={{ color: "grey" }}>Angler</span>
        </div>



        <div className="col card p-3 m-2">

          <p>


            “We teamed up with Angler’s Atlas to host the Kootenay Lake
            Classic which was a virtual fishing derby. We had really
            great feedback from all of the participants, some great
            success stories and people saying they liked this platform
            better than the traditional style weigh-in derby.”
          </p>
          <hr />
          <strong style={{ fontFamily: "Poppins" }}>Casey</strong>
          <span style={{ color: "grey" }}>Jones Boys Boats & Event Organizer</span>
        </div>
      </div>


      <br /><br />


      <div style={{ marginLeft: "10vw", marginRight: "10vw" }}>

        <div className="card" style={{ padding: "5rem", background: '#1c8753', color: "white", textAlign: 'center', zIndex: -1 }}>
          <Image
            src={process.env.NEXT_PUBLIC_URL + "/img/bg-hero.svg"}
            layout="fill"
            objectFit="cover"
            alt=""
          />
          <h2 style={{ fontFamily: "Poppins" }}><strong>JOIN OUR EVENTS PLATFORM NOW!</strong></h2>
          Start making an impact on our environment<br />

          <br /><br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>

            <button className="btn btn-light">
              <strong style={{ color: "#1c8753", fontFamily: "Poppins" }}>Organize your own</strong>
            </button>
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/google-light.svg"}
              height={50}
              width={150}
              alt=""
            />

            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/apple-light.svg"}
              height={50}
              width={150}
              alt=""
            />
          </div>
        </div>




      </div>


      <br /><br />

      <h1 style={{ fontFamily: 'Sigmar', color: '#1c8753',textAlign:"center" }}>FREQUENTLY ASKED QUESTIONS</h1>
    
<br/>
      <div className="row m-0 p-0" style={{ margin: "3rem", justifyContent: "center" }} >

        <div className="col-5 card p-3 m-3" onClick={()=>{setSecond(1)}}>
          <div style={{ display: "flex" }}>
            <span style={{ color: "#1c8753", flex: 1 }}>How do Catch-Photo-Release events work?
            </span><br />
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/chevron.svg"}
              height={10}
              width={20}
              alt=""

            />
          </div>
          {
            second == 1 &&
            <p>
              Catch-Photo-Release events can cover any geographic area and run for any length of time. Anglers document their catch size with a photo, confirm their location on a GPS, upload that information using their mobile phone, and release the fish right away. We love the Catch-Photo-Release format; there’s less stress on the fish than in traditional events where they’re typically held in a live well until the end of the day when they are weighed and then released.
            </p>
          }
        </div>
        <div className="col-5 card p-3 m-3" onClick={()=>{setSecond(2)}}>
          <div style={{ display: "flex" }}>
            <span style={{ color: "#1c8753", flex: 1 }}>Who can participate in MyCatch events?
            </span><br />
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/chevron.svg"}
              height={10}
              width={20}
              alt=""

            />
          </div>
          {
            second == 2 && <p>
              Any angler can participate as long as they’ve downloaded the app and signed up for the event. Events range from family-oriented community events to highly competitive events for experienced anglers. The app is easy to use and having a great day outdoors (with a little friendly competition) is the goal for everyone!
            </p>
          }
        </div>
        <div className="col-5 card p-3 m-3" onClick={()=>{setSecond(3)}}>
          <div style={{ display: "flex" }}>
            <span style={{ color: "#1c8753", flex: 1 }}>How can I organize an event?
            </span><br />
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/chevron.svg"}
              height={10}
              width={20}
              alt=""

            />
          </div>
          {
            second == 3 && <p>
              Our event team has decades of experience and can work with you every step of the way, or simply pass off the reins and let you run with it. For those who need support, our services range from envisioning the event, recruiting anglers, building excitement and running the event. Our goal is to make sure your anglers have a great experience and everything runs smoothly. For more information, email jim.clarke@anglersatlas.com.

            </p>
          }
        </div>
        <div className="col-5 card p-3 m-3" onClick={()=>{setSecond(4)}}>
          <div style={{ display: "flex" }}>
            <span style={{ color: "#1c8753", flex: 1 }}>I want to know more about your research.
            </span><br />
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/chevron.svg"}
              height={10}
              width={20}
              alt=""

            />
          </div>
          {
            second == 4 && <p>
              Our passion for fisheries research has driven us for decades. Angler’s Atlas began collecting angler data for science in the early 2000s and the launch of MyCatch has enabled us to grow our efforts exponentially. We work with scientists across Canada to provide data that is difficult to otherwise collect, and to help inform fisheries management and conservation. Visit our research page for details about current programs.

              We know that anglers share our passion for conservation, and we are committed to sharing regular updates about our research programs with our community so everyone can see the impact we are making together. You can watch our most recent updates on our Event Talks video series.
            </p>
          }
        </div>
        <div className="col-5 card p-3 m-3" onClick={()=>{setSecond(5)}}>
          <div style={{ display: "flex" }}>
            <span style={{ color: "#1c8753", flex: 1 }}> I still have privacy concerns.
            </span><br />
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/chevron.svg"}
              height={10}
              width={20}
              alt=""

            />
          </div>
          {
            second == 5 && <p>
              Don’t worry, we understand how important it is for secret fishing spots to stay secret! We make sure all data is anonymized, and researchers are prohibited from publishing our angler’s secret spots. We are also committed to sharing research results so anglers can see how they’re helping to conserve the fisheries. Check out our recent Event Talks to learn more.
            </p>
          }
        </div>
        <div className="col-5 card p-3 m-3" onClick={()=>{setSecond(6)}}>

          <div style={{ display: "flex" }}>
            <span style={{ color: "#1c8753", flex: 1 }}> Can I customize the events I’m organizing?
            </span><br />
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/chevron.svg"}
              height={10}
              width={20}
              alt=""

            />
          </div>
          {
            second == 6 && <p>
              Events are highly customizable; you decide the event length, number of species, locations or geographic area, and we create leaderboards that reflect the specifics of your event.
            </p>
          }
        </div>









      </div>




      <br /><br />

      <div style={{ marginLeft: "10vw", marginRight: "10vw" }}>


        <div className="row">
          <div className="col">
            <h1 style={{ fontFamily: 'Sigmar', color: '#1c8753' }}>DOWNLOAD THE MYCATCH APP</h1>
            Track your catches and at the same time help fisheries biologists by providing important catch data for their fisheries assessments. MyCatch provides a new way to collect fisheries data from anglers. Through the app you will be able to share your catch data with fisheries biologists and learn more about what fisheries research is going on.<br />
            <br />
            <div style={{ display: "flex" }}>
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/google.svg"}
                height={50}
                width={150}

                alt=""
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/apple.svg"}
                height={50}
                width={150}

                alt=""
              />
            </div>
          </div>

          <div className="col " style={{ paddingLeft: "10rem" }}>
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/phone@2x.png"}
              height={400}
              width={400}
              alt=""
            />
          </div>
        </div>


      </div>



    </div >
  );
};

export default Intro;
