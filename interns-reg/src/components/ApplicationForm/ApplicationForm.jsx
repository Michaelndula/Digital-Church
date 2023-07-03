import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

function ApplicationForm() {

  const [FullName, setFullName]=useState("");
  const [email, setemail]=useState("");
  const [PhoneNumber, setPhoneNumber]=useState("");
  const [id_number, setid_number]=useState("");
  const [KRA_number, setKRA_number]=useState("");
  const [DateofBirth, setDateofBirth]=useState("");
  const [gender, setgender]=useState("");
  const [county, setcounty]=useState("");
  const [residence, setresidence]=useState("");
  const [SchoolName, setSchoolName]=useState("");
  const [SchoolAddress, setSchoolAddress]=useState("");
  const [course, setcourse]=useState("");
  const [YearofGrad, setYearofGrad]=useState("");
  const [cv, setFile]=useState("");
  const [CoverLetter, setCoverLetter]=useState("");
  const [GoodConductCert, setGoodConductCert]=useState("");
  const [RefFirstName, setRefFirstName]=useState("");
  const [RefSecondName, setRefSecondName]=useState("");
  const [RefPhoneNumber, setRefPhoneNumber]=useState("");
  const [RefRelationship, setRefRelationship]=useState("");
  const [message, setmessage]=useState("");


  const [isApplicationSuccessful, setApplicationSuccess] = useState(false);
  const [error, setError] = useState("");

  const [show, setShow] = useState(false);
 
  const handleClose = () => {
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  async function handleSubmit(event) {
    
    const formData = new FormData();

    formData.append('FullName', FullName);
    formData.append('email', email);
    formData.append('PhoneNumber', PhoneNumber);
    formData.append('id_number', id_number);
    formData.append('KRA_number', KRA_number);
    formData.append('DateofBirth', DateofBirth);
    formData.append('gender', gender);
    formData.append('county', county);
    formData.append('residence', residence);
    formData.append('SchoolName', SchoolName);
    formData.append('SchoolAddress', SchoolAddress);
    formData.append('course', course);
    formData.append('YearofGrad', YearofGrad);
    formData.append('cv', cv);
    formData.append('CoverLetter', CoverLetter);
    formData.append('GoodConductCert', GoodConductCert);
    formData.append('RefFirstName', RefFirstName);
    formData.append('RefSecondName', RefSecondName);
    formData.append('RefPhoneNumber', RefPhoneNumber);
    formData.append('RefRelationship', RefRelationship);
    formData.append('message', message);

    const requestOptions = {
      method: "POST",
      body: formData
    };

    event.preventDefault();

    // console.log(formData);

    await fetch("http://localhost:8000/api/applicants", requestOptions)
      .then((response) => {
        // Handle the response from the server
        if (response.ok) {
          console.log("response", response);
          return response.json();
        } else if (response.status === 409) {
          throw new Error('Applicant already exists');
        }else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setApplicationSuccess(true);
      })
      .catch((error) => {
        setApplicationSuccess(false);
        setError(error.message);
        console.error(error);
      });
  }
 


  return (
    <>
      <section className="container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh', }}>
          <img src="images/kcclogo.png"/>
        </div>
        <header>Application Form</header>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              name="FullName"
              onChange={(e)=>setFullName(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Enter email address"
              name="email"
              onChange={(e)=>setemail(e.target.value)}
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
                onChange={(e)=>setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input
                type="date"
                placeholder="Enter birth date"
                name="DateofBirth"
                onChange={(e)=>setDateofBirth(e.target.value)}
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
                onChange={(e)=>setid_number(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <label>KRA Number</label>
              <input
                type="text"
                placeholder="Enter kra number"
                name="KRA_number"
                onChange={(e)=>setKRA_number(e.target.value)}
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
                  onChange={(e)=>setgender(e.target.value)}
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
                  onChange={(e)=>setgender(e.target.value)}
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
                onChange={(e)=>setcounty(e.target.value)}
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
                onChange={(e)=>setresidence(e.target.value)}
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
                onChange={(e)=>setSchoolName(e.target.value)}
              />
              <div className="select-box">
                <select
                  type="text"
                  id="ddlYears"
                  placeholder="Year"
                  className="form-control"
                  name="YearofGrad"
                  onChange={(e)=>setYearofGrad(e.target.value)}
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
                onChange={(e)=>setSchoolAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Course"
                name="course"
                onChange={(e)=>setcourse(e.target.value)}
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
                  onChange={(e)=>setFile(e.target.files[0])}
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
                  onChange={(e)=>setCoverLetter(e.target.files[0])}
                  // onChange={handleInput}
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
                  onChange={(e)=>setGoodConductCert(e.target.files[0])}
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
                  onChange={(e)=>setRefFirstName(e.target.value)}
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
                  onChange={(e)=>setRefSecondName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="column">
              <input
                type="text"
                placeholder="Phone Number"
                name="RefPhoneNumber"
                onChange={(e)=>setRefPhoneNumber(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Relationship"
                name="RefRelationship"
                onChange={(e)=>setRefRelationship(e.target.value)}
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
                  onChange={(e)=>setmessage(e.target.value)}
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
              <p style={{ color: 'green' }}>Thank you {FormData.FullName}! Your application has been received.</p>
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
              <p style={{ color: 'red' }}>Sorry, there was an error submitting your application. Please try again.</p>
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
          <p style={{ color: 'red' }}>{error}</p>
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
