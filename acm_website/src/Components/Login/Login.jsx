import React, { useState, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Logincss from "./login.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import "aos/dist/aos.css";

import Aos from "aos";
const LoginBox = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      axios
        .get("/api/verify")
        .then((res) => {
          Navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = JSON.stringify({
      username: username,
      password: password,
    });

    axios
      .post("/api/login", params)
      .then((res) => {
        // Login successful
        localStorage.setItem("accessToken", res.data.accessToken);
        window.location.href = "/home";
      })
      .catch((err) => setOpenAlert(true));
  };

  return (
    <div id={Logincss.LoginBox} className="shadow-lg p-3 mb-5 bg-white rounded">
      <div className="row">
        <div className="col-md-6  "  >
          <iframe
            data-aos="fade-up"
  
            className="d-none d-sm-block"
            src="https://embed.lottiefiles.com/animation/53395"
            title=" loginlogo"
            height={"350rem"}
            style={{ pointerEvents: "none" }}
          ></iframe>
          <iframe
            data-aos="fade-up"
            className="d-sm-none d-block"
            src="https://embed.lottiefiles.com/animation/53395"
            title=" loginlogo"
            height={"200rem"}
            style={{ pointerEvents: "none" }}
          ></iframe>
        </div>
        <div className="col-md-6 ">
          <div>
            <h3 data-aos="flip-up">
              {" "}
              <b className="text-white"> Welcome Back! </b>
            </h3>

            <Box sx={{ display: "flex", alignItems: "flex-end" }} data-aos="fade-left">
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with"
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
                variant="standard"
              />
            </Box>

            <br />

            <Box sx={{ display: "flex", alignItems: "flex-end" }} data-aos="fade-left">
              <VisibilityIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type="password"
                variant="standard"
              />
            </Box>
            <br />
          

            <Button  
              variant="outlined"
             className="d-flex mx-5"
              onClick={handleSubmit}
              endIcon={<SendIcon />}
            >
              Login
            </Button>

            <p className="mx-4" >
              New User?
              <button className="btn  btn-sm " onClick={props.register}>
                <b>Register</b>
              </button>
            </p>
          </div>
        </div>
      </div>
    
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose} className="d-flex justify-content-center"
      >
        <Alert severity="error" className="fixed-top my-2 mx-5 "
          onClose={handleAlertClose} >
            Please check username or password!
        
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginBox;
