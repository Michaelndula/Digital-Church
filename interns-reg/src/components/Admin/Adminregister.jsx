import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const Bg = { background: "url(images/kccbg.jpg)" };

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repeat_password, setrepeat_password] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {

    const formData = new FormData();

    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("repeat_password", repeat_password);

    const requestOptions = {
        method: "POST",
        body: formData
      };
      event.preventDefault();

      console.log(formData);

    await fetch("http://localhost:8000/api/register", requestOptions)
    .then((response) => {
      // Handle the response from the server
      if (response.ok) {
        console.log("Registration Successful!");
          navigate("/admin");
          return response.json();
      }else if(response.status === 410){
        throw new Error('User already exists');
      } else {
        throw new Error(response.statusText);
      }
    })
    .catch((error) => {
        console.error("Registration Error:", error);
      });
}

  
  return (
    <>
      <div className="container h-100" style={Bg}>
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src="images/kcclogo.jpg" className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="username"
                    className="form-control input_user"
                    placeholder="username"
                    onChange={(e) => setusername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-email"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    className="form-control input_user"
                    placeholder="email"
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="form-control input_pass"
                    placeholder="password"
                    onChange={(e) => setpassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="repeat_password"
                    className="form-control input_pass"
                    placeholder="repeat password"
                    onChange={(e) => setrepeat_password(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                <button type="submit" name="button" className="btn login_btn">
                    Register
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Already have an account?{" "}
                <Link to="/admin">
                    Login
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
