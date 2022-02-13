import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Logincss from "./login.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Button from "@mui/material/Button";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(mailFormat)) {
      const params = JSON.stringify({
        email: email,
      });
      axios
        .post("/api/login", params)
        .then((res) => {
          // Login successful
          localStorage.setItem("accessToken", res.data.accessToken);
          window.location.href = "/user/reset";
        })
        .catch((err) => setOpenAlert(true));
    } else {
      setAlertMessage("Please check your Email!");
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
            src="https://embed.lottiefiles.com/animation/75971"
            title=" register"
            height={"350rem"}
            style={{ pointerEvents: "none" }}
          ></iframe>
          <iframe
            className="d-sm-none d-block"
            data-aos="fade-up"
            src="https://embed.lottiefiles.com/animation/75971"
            title=" register"
            height={"200rem"}
            style={{ pointerEvents: "none" }}
          ></iframe>
        </div>
        <div className="col-md-5 offset-md-2">
          <h3 data-aos="flip-up">
            <b className="mx-3 my-5 text-white"> Forgot Password </b>
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
          <Button
            variant="outlined"
            className="d-flex mx-5"
            onClick={handleSubmit}
            endIcon={<HowToRegIcon />}
          >
            Submit
          </Button>
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

export default Forgot;
