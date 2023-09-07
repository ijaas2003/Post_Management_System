import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { images } from "../constants";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// or
import "./Header.scss";
//import { useState } from "react";
const Header = ({ direction }) => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        delay: 1.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  //const [trans, settrans] = useState(1);
  return (
    <div
      className={` ${direction == "row" ? "h-[100vh]" : "h-[130vh]"}  w-[100%]`}
      id="home"
    >
      <Stack className="" spacing={4} direction="column">
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Container maxWidth="xl" className="hel">
            <div className=" bg-cover bg-center">
              <div
                className={`${
                  direction === "row" ? "h-[90vh]" : "h-[120vh]"
                } p-[20px]  w-[100%] `}
              >
                <Stack
                  direction={direction}
                  className="h-[100%] w-[100%] sm:flex "
                >
                  <div
                    className={`h-[56%] my-[30px] ${
                      direction === "row" ? "basis-[50%]" : "basis-[50%]"
                    } m-[10px] bg-whitecolor rounded-3xl p-[50px] shadow-lg shadow-gray-300 bg-opacity-50`}
                  >
                    <label className={`${direction=='row'?'text-3xl':'text-xl'} mt-[20px]  text-yellow-500`}>
                      Your Next Generation{" "}
                      <span className=" font-bold text-red-500">Posts🥳 </span>
                      <div className={`text-secondarycolor ${direction=='row'?'text-4xl':'text-2xl'} font-google`}>
                        {" "}
                        <Typewriter
                          words={[
                            "The gateway to your world ",
                            "Connecting hearts through writing",
                            "Your stories, safely stored.",
                            "Messages of love",
                          ]}
                          loop={Infinity}
                          cursor
                          cursorStyle="_"
                          typeSpeed={100}
                          deleteSpeed={50}
                          delaySpeed={1000}
                        />
                      </div>{" "}
                      <div className={`text-black ${direction=='row'?'text-4xl':'text-lg'} mt-[50px]`}>
                        Your lovely posts are There {}
                      </div>
                      <div className="text-blue-400 m-[20px] font-google">
                        <a href="#Posts">
                          <Button
                            color="primary"
                            size="medium"
                            variant="contained"
                            onClick={() => {}}
                          >
                            Let's go{" "}
                            {<ArrowForwardIcon className="ml-[10px]" />}
                          </Button>
                        </a>
                        
                      </div>
                    </label>
                  </div>
                  <div
                    className={`h-[95%]  ${
                      direction === "row" ? "basis-[50%]" : "basis-[50%]"
                    }  m-[10px]`}
                  >
                    <Stack direction={"row"}>
                      <div className="w-[300px] mt-[5%] ml-[30px]">
                        <img
                          src={images.email}
                          alt="email"
                          width={"250px"}
                          height={"250px"}
                        />
                        <div className="font-google text-3xl ml-[30px]">
                          <h1>
                            Delivering smiles,<br></br>{" "}
                            <span className="text-secondarycolor">
                              one letter at a time.
                            </span>
                          </h1>
                        </div>
                      </div>
                      <div className="font-google text-4xl ml-[40px]">
                        <motion.div
                          variants={scaleVariants}
                          whileInView={scaleVariants.whileInView}
                          className="app__header-circles"
                        >
                          {[images.react, images.mu5, images.javascript].map(
                            (circle, index) => (
                              <div
                                className="circle-cmp app__flex"
                                key={`circle-${index}`}
                              >
                                <img src={circle} alt="profile_bg" />
                              </div>
                            )
                          )}
                        </motion.div>
                      </div>
                    </Stack>
                  </div>
                </Stack>
              </div>
            </div>
          </Container>
          <Stack></Stack>
        </motion.div>
      </Stack>
    </div>
  );
};

export default Header;
