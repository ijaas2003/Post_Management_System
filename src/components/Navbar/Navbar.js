import "./Navbar.scss";
import { images } from "../../constants";
import CloseIcon from "@mui/icons-material/Close";
import Face from "@mui/icons-material/Face";
import MenuIcon from "@mui/icons-material/Menu";
import { Chip } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <motion.div
        whileInView={{ x:[100,0],opacity:[0,1]}}
        transition={{ duration:0.5,type:'tween' }}
    >
    <nav className="app__navbar mb-[50px]">
        <div className="app__navbar-logo">
          <img src={images.Myself} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {["Home", "Posts"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
          }
          <Chip icon={<Face />} label="Signup" color="primary" className="mx-[10px] cursor-pointer hover:transition duration-1000 transform hover:translate-y-[-7px]" />
        </ul>

      <div className="app__navbar-menu">
        <MenuIcon onClick={() => setToggle(true)} />

        {Toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <CloseIcon onClick={() => setToggle(false)} />
            <ul>
              {[
                "Home",
                "Posts",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
    </motion.div>
  );
};

export default Navbar;
