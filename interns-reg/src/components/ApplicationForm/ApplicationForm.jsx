import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

function ApplicationForm() {
  const [FullName, setFullName] = useState("");
  const [email, setemail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [DateofBirth, setDateofBirth] = useState("");
  const [gender, setgender] = useState("");
  const [id_number, setid_number] = useState("");
  const [KRA_number, setKRA_number] = useState("");
  const [residence, setresidence] = useState("");
  const [currentChurch, setcurrentChurch] = useState("");
  const [relationshipStatus, setrelationshipStatus] = useState("");
  const [Hobbies, setHobbies] = useState("");

  const [sourceofReferral, setsourceofReferral] = useState("");
  const [reasonforApplication, setreasonforApplication] = useState("");
  const [Expectations, setExpectations] = useState("");
  const [Strengths, setStrengths] = useState("");
  const [Weakness, setWeakness] = useState("");
  const [multiRole, setmultiRole] = useState("");
  const [internshipGoals, setinternshipGoals] = useState("");
  const [criminalHistory, setcriminalHistory] = useState("");

  const [Testimony, setTestimony] = useState("");
  const [additionalMessage, setadditionalMessage] = useState("");
  const [prayerForm, setprayerForm] = useState("");
  const [fastingForm, setfastingForm] = useState("");
  const [witnessingForm, setwitnessingForm] = useState("");
  const [bibleReadingForm, setbibleReadingForm] = useState("");
  const [charityForm, setcharityForm] = useState("");

  const [cv, setFile] = useState("");
  const [CoverLetter, setCoverLetter] = useState("");
  const [GoodConductCert, setGoodConductCert] = useState("");
  const [passportPhoto, setpassportPhoto] = useState("");
  const [ID_front, setID_front] = useState("");
  const [ID_back, setID_back] = useState("");

  const [PersonalRefFirstName, setPersonalRefFirstName] = useState("");
  const [PersonalRefSecondName, setPersonalRefSecondName] = useState("");
  const [PersonalRefPhoneNumber, setPersonalRefPhoneNumber] = useState("");
  const [PersonalRefRelationship, setPersonalRefRelationship] = useState("");
  const [MinistryRefFirstName, setMinistryRefFirstName] = useState("");
  const [MinistryRefSecondName, setMinistryRefSecondName] = useState("");
  const [MinistryRefPhoneNumber, setMinistryRefPhoneNumber] = useState("");
  const [MinistryRefRelationship, setMinistryRefRelationship] = useState("");

  const [isApplicationSuccessful, setApplicationSuccess] = useState(false);
  const [error, setError] = useState("");

  const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      if (isApplicationSuccessful) {
        window.location.reload();
      } else {
        
      }
    };
    const handleShow = () => setShow(true);

  async function handleSubmit(event) {

    const formData = new FormData();

    formData.append("FullName", FullName);
    formData.append("email", email);
    formData.append("PhoneNumber", PhoneNumber);
    formData.append("DateofBirth", DateofBirth);
    formData.append("gender", gender);
    formData.append("id_number", id_number);
    formData.append("KRA_number", KRA_number);
    formData.append("residence", residence);
    formData.append("currentChurch", currentChurch);
    formData.append("relationshipStatus", relationshipStatus);
    formData.append("Hobbies", Hobbies);
    formData.append("sourceofReferral", sourceofReferral);
    formData.append("reasonforApplication", reasonforApplication);
    formData.append("Expectations", Expectations);
    formData.append("Strengths", Strengths);
    formData.append("Weakness", Weakness);
    formData.append("multiRole", multiRole);
    formData.append("internshipGoals", internshipGoals);
    formData.append("criminalHistory", criminalHistory);
    formData.append("Testimony", Testimony);
    formData.append("additionalMessage", additionalMessage);
    formData.append("prayerForm", prayerForm);
    formData.append("fastingForm", fastingForm);
    formData.append("witnessingForm", witnessingForm);
    formData.append("bibleReadingForm", bibleReadingForm);
    formData.append("charityForm", charityForm);

    formData.append("cv", cv);
    formData.append("CoverLetter", CoverLetter);
    formData.append("GoodConductCert", GoodConductCert);
    formData.append("passportPhoto", passportPhoto);
    formData.append("ID_front", ID_front);
    formData.append("ID_back", ID_back);

    formData.append("PersonalRefFirstName", PersonalRefFirstName);
    formData.append("PersonalRefSecondName", PersonalRefSecondName);
    formData.append("PersonalRefPhoneNumber", PersonalRefPhoneNumber);
    formData.append("PersonalRefRelationship", PersonalRefRelationship);
    formData.append("MinistryRefFirstName", MinistryRefFirstName);
    formData.append("MinistryRefSecondName", MinistryRefSecondName);
    formData.append("MinistryRefPhoneNumber", MinistryRefPhoneNumber);
    formData.append("MinistryRefRelationship", MinistryRefRelationship);

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
      }else if(response.status === 407){
        throw new Error('Applicant with the same email already exists try another email');
      }else if (response.status === 406) {
        throw new Error('Only PDF or Word documents are allowed.');
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
      <section className="container" >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "25vh",
          }}
        >
          <img src="images/kcclogo.png" />
        </div>
        <header>Application Form</header>
        <form onSubmit={handleSubmit} className="form">
          <h3>Section One</h3>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              name="FullName"
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="column" style={{marginTop:"2%"}}>
            <div className="input-box">
              <label>Email Address</label>
              <input
                type="text"
                placeholder="Enter email address"
                name="email"
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter phone number"
                name="PhoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="column" style={{ marginTop: "2%" }}>
            <div className="input-box " style={{ display: 'flex', flexDirection: 'column' }}>
              <label>Birth Date</label>
              <input
                type="date"
                placeholder="Enter birth date"
                name="DateofBirth"
                onChange={(e) => setDateofBirth(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div className="input-box col-md-6">
              <label>Gender</label>
              <div className="gender-option">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    onChange={(e) => setgender(e.target.value)}
                    id="inlineRadio1"
                    value="Male"
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    onChange={(e) => setgender(e.target.value)}
                    id="inlineRadio2"
                    value="Female"
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="input-box">
              <label>ID Number</label>
              <input
                type="text"
                placeholder="Enter ID number"
                name="id_number"
                onChange={(e) => setid_number(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <label>KRA Number</label>
              <input
                type="text"
                placeholder="Enter kra number"
                name="KRA_number"
                onChange={(e) => setKRA_number(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="column">
            <div className="input-box">
              <label>Address</label>
              <input
                type="text"
                placeholder="Residency/Estate"
                name="residence"
                onChange={(e) => setresidence(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <label>Current Church</label>
              <input
                type="text"
                placeholder="Enter current Church"
                name="currentChurch"
                onChange={(e) => setcurrentChurch(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="column">
            <div  className="input-box" style={{ display: 'flex', flexDirection: 'column' }}>
              <label>Relationship Status</label>
              <select className="status" onChange={(e) => setrelationshipStatus(e.target.value)}>
                <option value="Single">Single</option>
                <option value="Enganged">Engaged</option>
                <option value="Married">Married</option>
              </select>  
            </div>
            <div className="input-box">
            <label>Hobbies</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                name="Hobbies"
                onChange={(e) => setHobbies(e.target.value)}
              ></textarea>
            </div>
          </div>

          <br></br>
          <br></br>
          <h3>Section Two</h3>
          <div className="input-box address">
            <div className="form-group">
              <label>Kindly share with us how you heard about SALT?</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                name="sourceofReferral"
                onChange={(e) => setsourceofReferral(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="input-box address">
            <div className="form-group">
              <label>Why are you interested in serving at K.C.C?</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="reasonforApplication"
                onChange={(e) => setreasonforApplication(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="input-box address">
            <div className="form-group">
              <label>
                What are some expectations you are having as you come into SALT?
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="Expectations"
                onChange={(e) => setExpectations(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="input-box address">
            <div className="form-group">
              <label>What are your strengths?</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="Strengths"
                onChange={(e) => setStrengths(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="input-box address">
            <div className="form-group">
              <label>What are your areas of weakness?</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="Weakness"
                onChange={(e) => setWeakness(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="input-box address">
            <div className="form-group">
              <label>
                SALT will involve serving in a number of ministries in KCC.
                What’s your take on this?
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="multiRole"
                onChange={(e) => setmultiRole(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="input-box address">
            <div className="form-group">
              <label>
                At the end of your internship, what kind of impact are you
                hoping to have?
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="internshipGoals"
                onChange={(e) => setinternshipGoals(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="input-box address">
            <div className="form-group">
              <label>
                Have you ever been convicted of any crime other than a minor
                traffic violation? If so which ones?
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="criminalHistory"
                onChange={(e) => setcriminalHistory(e.target.value)}
              ></textarea>
            </div>
          </div>
          <br></br>
          <br></br>
          <h3>Section Three</h3>
          <div className="input-box address">
            <div className="form-group">
              <label>Please share with us your testimony of faith.</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="Testimony"
                onChange={(e) => setTestimony(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="input-box address">
            <div className="form-group">
              <label>
                Recognizing that by potentially entering into ministry you are
                being held to a standard of living a Christian life, is there
                anything you'd like to have a conversation about with us before?
                If so, please elaborate below.
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="additionalMessage"
                onChange={(e) => setadditionalMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="gender-option" style={{marginTop :"2%"}}>
            <label>
              On a scale of 1 – 5 (1 being lowest and 5 being highest) how are
              you doing in the following spiritual disciplines:
            </label>
            <div className="column" style={{marginTop :"2%"}}>
            <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column' }}>
              <label>
                <b>Prayer</b>
              </label>
              <div className="choice">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="prayerForm"
                  id="inlineRadio1"
                  value="Very Weak"
                  onChange={(e) => setprayerForm(e.target.value)}
                />
                <label>1</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="prayerForm"
                  id="inlineRadio1"
                  value="Weak"
                  onChange={(e) => setprayerForm(e.target.value)}
                />
                <label>2</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="prayerForm"
                  id="inlineRadio1"
                  value="Moderate"
                  onChange={(e) => setprayerForm(e.target.value)}
                />
                <label>3</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="prayerForm"
                  id="inlineRadio1"
                  value="Strong"
                  onChange={(e) => setprayerForm(e.target.value)}
                />
                <label>4</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="prayerForm"
                  id="inlineRadio1"
                  value="Very Strong"
                  onChange={(e) => setprayerForm(e.target.value)}
                />
                <label>5</label>
              </div>
            </div>
              </div>
            <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column' }}>
              <label>
                <b>Fasting</b>
              </label>
              <div className="choice">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fastingForm"
                  id="inlineRadio1"
                  value="Very Weak"
                  onChange={(e) => setfastingForm(e.target.value)}
                />
                <label>1</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fastingForm"
                  id="inlineRadio1"
                  value="Weak"
                  onChange={(e) => setfastingForm(e.target.value)}
                />
                <label>2</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fastingForm"
                  id="inlineRadio1"
                  value="Moderate"
                  onChange={(e) => setfastingForm(e.target.value)}
                />
                <label>3</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fastingForm"
                  id="inlineRadio1"
                  value="Strong"
                  onChange={(e) => setfastingForm(e.target.value)}
                />
                <label>4</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fastingForm"
                  id="inlineRadio1"
                  value="Very Strong"
                  onChange={(e) => setfastingForm(e.target.value)}
                />
                <label>5</label>
              </div>
              </div>
            </div> 
            </div>
            <div className="column" style={{marginTop :"2%"}}>
            <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{marginRight :"2%"}}>
                <b>Witnessing</b>
              </label>
              <div className="choice">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="witnessingForm"
                  id="inlineRadio1"
                  value="Very Weak"
                  onChange={(e) => setwitnessingForm(e.target.value)}
                />
                <label>1</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="witnessingForm"
                  id="inlineRadio1"
                  value="Weak"
                  onChange={(e) => setwitnessingForm(e.target.value)}
                />
                <label>2</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="witnessingForm"
                  id="inlineRadio1"
                  value="Moderate"
                  onChange={(e) => setwitnessingForm(e.target.value)}
                />
                <label>3</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="witnessingForm"
                  id="inlineRadio1"
                  value="Strong"
                  onChange={(e) => setwitnessingForm(e.target.value)}
                />
                <label>4</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="witnessingForm"
                  id="inlineRadio1"
                  value="Very Strong"
                  onChange={(e) => setwitnessingForm(e.target.value)}
                />
                <label>5</label>
              </div>
              </div>
            </div>
            <div className="col-md-6" style={{display: 'flex', flexDirection: 'column'}}>
              <label style={{alignItems: 'center'}}>
                <b>Reading your Bible</b>
              </label>
              <div className="choice">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bibleReadingForm"
                  id="inlineRadio1"
                  value="Very Weak"
                  onChange={(e) => setbibleReadingForm(e.target.value)}
                />
                <label>1</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bibleReadingForm"
                  id="inlineRadio1"
                  value="Weak"
                  onChange={(e) => setbibleReadingForm(e.target.value)}
                />
                <label>2</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bibleReadingForm"
                  id="inlineRadio1"
                  value="Moderate"
                  onChange={(e) => setbibleReadingForm(e.target.value)}
                />
                <label>3</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bibleReadingForm"
                  id="inlineRadio1"
                  value="Strong"
                  onChange={(e) => setbibleReadingForm(e.target.value)}
                />
                <label>4</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bibleReadingForm"
                  id="inlineRadio1"
                  value="Very Strong"
                  onChange={(e) => setbibleReadingForm(e.target.value)}
                />
                <label>5</label>
              </div>
              </div>
            </div>
            </div>
            <div className="col-md-6" style={{display: 'flex', flexDirection: 'column'}}>
              <label>
                  <b>Caring For the Vulnerable</b>
              </label>
              <div className="choice">
              <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="charityForm"
                    id="inlineRadio1"
                    value="Very Weak"
                    onChange={(e) => setcharityForm(e.target.value)}
                  />
                  <label>1</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="charityForm"
                    id="inlineRadio1"
                    value="Weak"
                    onChange={(e) => setcharityForm(e.target.value)}
                  />
                  <label>2</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="charityForm"
                    id="inlineRadio1"
                    value="Moderate"
                    onChange={(e) => setcharityForm(e.target.value)}
                  />
                  <label>3</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="charityForm"
                    id="inlineRadio1"
                    value="Strong"
                    onChange={(e) => setcharityForm(e.target.value)}
                  />
                  <label>4</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="charityForm"
                    id="inlineRadio1"
                    value="Very Strong"
                    onChange={(e) => setcharityForm(e.target.value)}
                  />
                  <label>5</label>
                </div>
              </div>            
            </div>
            </div>
          <br></br>
          <br></br>
          <div className="input-box address">
            <label>
              <b>Documents</b>
            </label>
            <br></br>
            <br></br>
            <div className="column">
              <div>
                <label className="form-label">Upload CV</label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                  name="cv"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div>
                <label className="form-label">Upload Cover Letter </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                  name="CoverLetter"
                  onChange={(e) => setCoverLetter(e.target.files[0])}
                  // onChange={handleInput}
                />
              </div>
            </div>
            <br></br>
            <div className="column">
              <div>
                <label className="form-label">
                  Upload Certicate of Good Conduct
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                  name="GoodConductCert"
                  onChange={(e) => setGoodConductCert(e.target.files[0])}
                />
              </div>
              <div>
                <label className="form-label">Upload Passport-Sized Photos</label>
                <input
                  className="form-control form-control-lg"
                  type="file"
                  id="formFileMultiple"
                  name="passportPhoto"
                  onChange={(e) => setpassportPhoto(e.target.files[0])}
                  multiple
                />
              </div>
            </div>
          </div>
          <br></br>
          <div className="column">
            <div>
              <label className="form-label">Copy of National ID (Front)</label>
              <input
                className="form-control form-control-lg"
                type="file"
                id="formFileLg"
                name="ID_front"
                onChange={(e) => setID_front(e.target.files[0])}
              />
            </div>
            <div>
              <label className="form-label">Copy of National ID (Back)</label>
              <input
                className="form-control form-control-lg"
                type="file"
                id="formFileLg"
                name="ID_back"
                onChange={(e) => setID_back(e.target.files[0])}
              />
            </div>
          </div>

          <br></br>
          <br></br>
          <label>
              <b>Personal Referee</b>
            </label>
          <div className="column">
            <div className="input-box">  
            <input
                  type="text"
                  placeholder="First Name"
                  name="PersonalRefFirstName"
                  onChange={(e) => setPersonalRefFirstName(e.target.value)}
                  required
                />
            </div>
            <div className="input-box">
            <input
                  type="text"
                  placeholder="Last Name"
                  name="PersonalRefSecondName"
                  onChange={(e) => setPersonalRefSecondName(e.target.value)}
                  required
                />
            </div>
          </div>

          <div className="input-box address">
            <div className="column">
              <input
                type="text"
                placeholder="Phone Number"
                name="PersonalRefPhoneNumber"
                onChange={(e) => setPersonalRefPhoneNumber(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Relationship"
                name="PersonalRefRelationship"
                onChange={(e) => setPersonalRefRelationship(e.target.value)}
                required
              />
            </div>
          </div>
          <br>
          </br>

          <label>
              <b>Ministry Referee</b>
            </label>
          <div className="column">
            <div className="input-box">  
              <input
                  type="text"
                  placeholder="First Name"
                  name="MinistryRefFirstName"
                  onChange={(e) => setMinistryRefFirstName(e.target.value)}
                  required
                />
            </div>
            <div className="input-box">
              <input
                  type="text"
                  placeholder="Last Name"
                  name="MinistryRefSecondName"
                  onChange={(e) => setMinistryRefSecondName(e.target.value)}
                  required
                />
            </div>
          </div>
          <div className="input-box address">
            <div className="column">
              <input
                type="text"
                placeholder="Phone Number"
                name="MinistryRefPhoneNumber"
                onChange={(e) => setMinistryRefPhoneNumber(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Relationship"
                name="MinistryRefRelationship"
                onChange={(e) => setMinistryRefRelationship(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" onClick={handleShow}>
            Submit
          </button>
        </form>
       {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Application Status</Modal.Title>
        </Modal.Header>
        {isApplicationSuccessful ? (
          <Modal.Body>
            <p style={{ color: "green" }}>
              Thank you {FormData.FullName}! Your application has been received.
            </p>
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
            <p style={{ color: "red" }}>
              Sorry, there was an error submitting your application. Please try again.
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
            <Modal.Title>Error Submitting your Application</Modal.Title>
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
      </section>
    </>
  );
}

export default ApplicationForm;
