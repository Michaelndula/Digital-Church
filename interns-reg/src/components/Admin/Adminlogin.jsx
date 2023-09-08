import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const Login = () => {

  const Bg = { background: 'url(images/kccbg.jpg)' };

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const [isLoginSuccessful, setLoginSuccess] = useState(false);
  const [error, setError] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    if (isLoginSuccessful) {
      window.location.reload();
    } else {
      
    }
  };

  const handleShow = () => setShow(true);

  async function handleSubmit(event) {

    const formData = new FormData();

    formData.append("username", username);
    formData.append("password", password);

    const requestOptions = {
        method: "POST",
        body: formData
      };
      event.preventDefault();

        try {
          const response = await fetch("http://localhost:8000/api/login", requestOptions);
          
          if (response.ok) {
            const data = await response.json();
            console.log(data.token);
            localStorage.setItem("jwtToken", data.token);
            navigate("/dashboard");
            setLoginSuccess(true);
          } else if (response.status === 412) {
            const data = await response.json();
            setError(data.error);
            setLoginSuccess(false);
          } else {
            throw new Error(response.statusText);
          }
        } catch (error) {
            setLoginSuccess(false);
            setError("Sorry, an error occurred. Please try again.");
            console.error("Login Error:", error);
        }
}


  return (
    <>
      <div class="container h-100" style={Bg}>
        <div class="d-flex justify-content-center h-100">
          <div class="user_card">
            <div class="d-flex justify-content-center">
              <div class="brand_logo_container">
                <img src="images/kcclogo.jpg" class="brand_logo" alt="Logo" />
              </div>
            </div>
            <div class="d-flex justify-content-center form_container">
              <form onSubmit={handleSubmit}>
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="username"
                    class="form-control input_user"
                    placeholder="username"
                    onChange={(e) => setusername(e.target.value)}
                    required
                  />
                </div>
                <div class="input-group mb-2">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    class="form-control input_pass"
                    placeholder="password"
                    onChange={(e) => setpassword(e.target.value)}
                    required
                  />
                </div>
                <div class="form-group">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customControlInline"
                    />
                    <label
                      class="custom-control-label"
                      for="customControlInline"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" onClick={handleShow} name="button" class="btn login_btn">
                    Login
                  </button>
                </div>
              </form>

              {/* Modal */}
 <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Status</Modal.Title>
        </Modal.Header>
        {isLoginSuccessful ? (
          <Modal.Body>
            <p style={{ color: "green" }}>
              Thank you user {FormData.username}! has been created.
            </p>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                href="{{dashboard}}"
                onClick={handleClose}
              >
                Visit Website
              </Button>
            </Modal.Footer>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <p style={{ color: "red" }}>
              Sorry, Error login. Please try again.
            </p>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Body>
        )}
      </Modal>

        {/* Error Modal */}
        <Modal show={error !== ""} onHide={() => setError("")} centered>
  <Modal.Header closeButton>
    <Modal.Title>Error Login, try again</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p style={{ color: "red" }}>{error}</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setError("")}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
            </div>

            <div class="mt-4">
              <div class="d-flex justify-content-center links">
                Don't have an account?{" "}
                <Link to="/register" style={{color: "white"}}>
                    Sign Up
                  </Link>
              </div>
              <div class="d-flex justify-content-center links">
                <a href="#" style={{color: "white"}}>Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
