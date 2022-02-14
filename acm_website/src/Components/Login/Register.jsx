import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Logincss from "./login.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Button from "@mui/material/Button";
import GppGoodIcon from "@mui/icons-material/GppGood";

const RegisterBox = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(
    "Please check  Email / password!"
  );

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (
      email.match(mailformat) &&
      username &&
      password &&
      password2 &&
      password2 === password
    ) {
      const params = JSON.stringify({
        username: username,
        password: password,
        email: email,
      });

      axios
        .post("/api/register", params)
        .catch((err) => {
          console.error(err);
          setAlertMessage("Username or Email Already Taken!");
          setOpenAlert(true);
        });
    } else {
      setAlertMessage("Please check your Email or password!");
      setOpenAlert(true);
    }
  };
  return (<>
    <div
      id={Logincss.RegisterBox}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div className="row">
        <div className="col-md-5">
          <iframe
            className="d-none d-md-block"
            data-aos="fade-up"
            src="https://embed.lottiefiles.com/animation/50124"
            title=" register"
            height={"350rem"}
            style={{ pointerEvents: "none" }}
          ></iframe>
          <iframe
            className="d-sm-none d-block"
            data-aos="fade-up"
            src="https://embed.lottiefiles.com/animation/50124"
            title=" register"
            height={"200rem"}
            style={{ pointerEvents: "none" }}
          ></iframe>
        </div>
        <div className="col-md-5 offset-md-2">
          <h3 data-aos="flip-up">

            <b className="m-3 "> Join Us! </b>
          </h3>

          <Box
            sx={{ display: "flex", alignItems: "flex-end" }}
            data-aos="fade-left"
          >
            <MailOutlineIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              type="email"
              variant="standard"
            />
          </Box>
          <br />

          <Box
            sx={{ display: "flex", alignItems: "flex-end" }}
            data-aos="fade-left"
          >
            <DriveFileRenameOutlineIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              id="input-with-sx"
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
              type="text"
              variant="standard"
            />
          </Box>
          <br />

          <Box
            sx={{ display: "flex", alignItems: "flex-end" }}
            data-aos="fade-left"
          >
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

          <Box
            sx={{ display: "flex", alignItems: "flex-end" }}
            data-aos="fade-left"
          >
            <GppGoodIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              onChange={(e) => setPassword2(e.target.value)}
              label="Check Password"
              type="password"
              variant="standard"
            />
          </Box>

          <br />
          <Button
            variant="outlined"
            className="d-flex mx-5"
            onClick={handleSubmit}
            endIcon={<HowToRegIcon />}
          >
            Register
          </Button>
          <p className="mx-4">
            Existing User?{" "}
            <a className="btn btn-sm" href="/user/login">
              <b>Login</b>
            </a>
          </p>
        </div>
      </div>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose} className="d-flex"
      >
        <Alert severity="error" className="fixed-top  my-2 mx-5"
          onClose={handleAlertClose} >

          {alertMessage}
        </Alert>

      </Snackbar>
    </div>
  </>);
};

export default RegisterBox;
