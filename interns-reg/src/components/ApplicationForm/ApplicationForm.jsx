import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

function ApplicationForm() {
  const [formData, setFormData] = useState({
    FullName: "",
    email: "",
    PhoneNumber: "",
    id_number: "",
    KRA_number: "",
    DateofBirth: "",
    gender: "",
    county: "",
    residence: "",
    SchoolName: "",
    SchoolAddress: "",
    course: "",
    YearofGrad: "",
    cv: null,
    CoverLetter: null,
    GoodConductCert: null,
    RefFirstName: "",
    RefSecondName: "",
    RefPhoneNumber: "",
    RefRelationship: "",
    message: "",
  });
  const [isApplicationSuccessful, setApplicationSuccess] = useState(false);
  const [error, setError] = useState("");

  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const handleClose = () => {
    window.location.reload(); // Reload the page
  };
  const handleShow = () => setShow(true);

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  async function handleSubmit(event) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    };

    event.preventDefault();

    console.log(formData);

    await fetch("http://localhost:8000/api/applicants", requestOptions)
      .then((response) => {
        // Handle the response from the server
        if (response.ok) {
          console.log("response", response);
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setApplicationSuccess(true);
      })
      .catch((error) => {
        // Handle any errors
        setApplicationSuccess(false);
        setError(error.message);
        console.error(error);
      });
  }
 


  return (
    <>
      <section className="container">
        <header>Application Form</header>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              name="FullName"
              onChange={handleInput}
              required
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Enter email address"
              name="email"
              onChange={handleInput}
              required
            />
          </div>

          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter phone number"
                name="PhoneNumber"
                onChange={handleInput}
                required
              />
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input
                type="date"
                placeholder="Enter birth date"
                name="DateofBirth"
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className="column">
            <div className="input-box">
              <label>ID Number</label>
              <input
                type="text"
                placeholder="Enter ID number"
                name="id_number"
                onChange={handleInput}
                required
              />
            </div>
            <div className="input-box">
              <label>KRA Number</label>
              <input
                type="text"
                placeholder="Enter kra number"
                name="KRA_number"
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  onChange={handleInput}
                  id="inlineRadio1"
                  value="Male"
                />
                <label className="form-check-label">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  onChange={handleInput}
                  id="inlineRadio2"
                  value="Female"
                />
                <label className="form-check-label">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="input-box address">
            <label>Address</label>
            <div className="column">
              <input
                type="text"
                placeholder="County"
                name="county"
                onChange={handleInput}
                required
              />
              {/* <div className="select-box">
                <select>
                  <option>Select County</option>
                  <option></option>
                </select>
              </div> */}
              <input
                type="text"
                placeholder="Residency/Estate"
                name="residence"
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="input-box address">
            <label>Education</label>
            <div className="column">
              <input
                type="text"
                placeholder="School Name"
                name="SchoolName"
                onChange={handleInput}
              />
              <div className="select-box">
                <select
                  type="text"
                  id="ddlYears"
                  placeholder="Year"
                  className="form-control"
                  name="YearofGrad"
                  onChange={handleInput}
                >
                  <option hidden>Year of Graduation</option>
                </select>
              </div>
            </div>
            <div className="column">
              <input
                type="text"
                placeholder="School Address"
                name="SchoolAddress"
                onChange={handleInput}
              />
              <input
                type="text"
                placeholder="Course"
                name="course"
                onChange={handleInput}
              />
            </div>
          </div>

          <br></br>
          <br></br>
          <div className="input-box address">
            <label>Documents</label>
            <br></br>
            <br></br>
            <div className="column">
              <div>
                <label className="form-label">
                  Upload CV
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                  name="cv"
                  onChange={handleInput}
                />
              </div>
              <div>
                <label className="form-label">
                  Upload Cover Letter{" "}
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                  name="CoverLetter"
                  onChange={handleInput}
                />
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="column">
              <div>
                <label className="form-label">
                  Upload Certicate of good conduct
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                  name="GoodConductCert"
                  onChange={handleInput}
                />
              </div>
              <div></div>
            </div>
          </div>

          <br></br>
          <br></br>
          <div className="input-box address">
            <label>Referee</label>
            <div className="column">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  name="RefFirstName"
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label className="form-label">
                  {" "}
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="RefSecondName"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="column">
              <input
                type="text"
                placeholder="Phone Number"
                name="RefPhoneNumber"
                onChange={handleInput}
                required
              />
              <input
                type="text"
                placeholder="Relationship"
                name="RefRelationship"
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className="input-box address">
            <div className="column">
              <div className="form-group">
                <label>
                  Additional Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  onChange={handleInput}
                ></textarea>
              </div>
            </div>
          </div>
          <button type="submit" onClick={handleShow}>
            Submit
          </button>
        </form>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Application Status</Modal.Title>
          </Modal.Header>
          {isApplicationSuccessful ? (
            <Modal.Body>
              <p>Thank you {formData.FullName}! Your application has been received.</p>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  href="https://karencommunitychurch.org/"
                  onClick={handleClose}
                >
                  Visit Website
                </Button>
              </Modal.Footer>
            </Modal.Body>
          ) : (
            <Modal.Body>
              <p>Sorry, there was an error submitting your application. Please try again.</p>
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
          <Modal.Title>Error Submitting your Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{error}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setError("")}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </section>
    </>
  );
}

export default ApplicationForm;
