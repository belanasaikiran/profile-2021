import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Mountain from "./images/green-mountains.jpg";
import { Spring, useSpring, animated } from "react-spring";
// importing image from public directory


let rockLee = "https://media.giphy.com/media/VwgJhzQl4kTUYZOYGo/giphy.gif"


function App() {
  return (
    <div className="App">
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={3}
          style={{
            backgroundImage: `url(${Mountain})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* fade with spring  and keep blinking*/}

          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ duration: 2000 }}
          >
            {(props) => (
              <animated.div style={props}>
                <h2>Hi <span><img className="rocklee" src={rockLee} alt="" /></span></h2>
              </animated.div>
            )}
          </Spring>

          <Spring
            loop
            from={{ opacity: 0, color: "red" }}
            to={[
              { opacity: 1, color: "#ffaaee" },
              { opacity: 0, color: "rgb(14,26,19)" },
            ]}
            config={{ duration: 3000 }}
          >
            {(styles) => (
              <animated.div style={styles}>
                <h1>I'm Saikiran Belana</h1>
              </animated.div>
            )}
          </Spring>

          {/* <h2> I'm Saikiran Belana</h2> */}
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2}>  
          <h2> Software Engineer</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2.5}>
          <h2> Hyderabad, IN </h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
