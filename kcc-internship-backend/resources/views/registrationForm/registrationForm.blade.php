<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intern Application</title>
</head>
<body>
<section className="container" style={{marginTop: "310vh",}}>
        <div
          style="
            display: flex;
            justifyContent: center;
            alignItems: center;
            height: 25vh;" 
          
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
              required
            />
          </div>
          <div className="column">
            <div className="input-box">
              <label>Email Address</label>
              <input
                type="text"
                placeholder="Enter email address"
                name="email"                
                required
              />
            </div>
            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter phone number"
                name="PhoneNumber"                
                required
              />
            </div>
          </div>
          <div className="column" style= "marginTop: 2%;">
            <div className="col-md-6" style="display: flex; flexDirection: column;">
              <label>Birth Date</label>
              <input
                type="date"
                placeholder="Enter birth date"
                name="DateofBirth"                
                max={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div className="col-md-6">
              <label>Gender</label>
              <div className="gender-option">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"                    
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
                required
              />
            </div>
            <div className="input-box">
              <label>KRA Number</label>
              <input
                type="text"
                placeholder="Enter kra number"
                name="KRA_number"                
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
                required
              />
            </div>
            <div className="input-box">
              <label>Current Church</label>
              <input
                type="text"
                placeholder="Enter current Church"
                name="currentChurch"               
                required
              />
            </div>
          </div>
          
          <div className="column">
            <div className="input-box" style="display: flex; flexDirection: column;">
              <label>Relationship Status</label>
              <select>
                <option value="option1">Single</option>
                <option value="option2">Married</option>
                <option value="option3">Engaged</option>
              </select>
            </div>
            <div className="input-box">
            <label>Hobbies</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                name="Hobbies"                
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
              ></textarea>
            </div>
          </div>
          <div className="gender-option" style="marginTop :2%;">
            <label>
              On a scale of 1 – 5 (1 being lowest and 5 being highest) how are
              you doing in the following spiritual disciplines:
            </label>
            <div className="column" style="marginTop :2%;">
            <div className="col-md-6">
              <label style="marginRight :2%;">
                <b>Prayer</b>
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="prayerForm"
                  id="inlineRadio1"
                  value="1"
                />
                <label>1</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="prayerForm"
                  id="inlineRadio1"
                  value="2"
                />
                <label>2</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="prayerForm"
                  id="inlineRadio1"
                  value="3"
                />
                <label>3</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="prayerForm"
                  id="inlineRadio1"
                  value="4"
                />
                <label>4</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="prayerForm"
                  id="inlineRadio1"
                  value="5"
                />
                <label>5</label>
              </div>
            </div>
            <div className="col-md-8">
            <label style="marginRight :2%;">
                <b>Fasting</b>
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fastingForm"
                  id="inlineRadio1"
                  value="1"
                />
                <label>1</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fastingForm"
                  id="inlineRadio1"
                  value="2"
                />
                <label>2</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fastingForm"
                  id="inlineRadio1"
                  value="3"
                />
                <label>3</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fastingForm"
                  id="inlineRadio1"
                  value="4"
                />
                <label>4</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fastingForm"
                  id="inlineRadio1"
                  value="5"
                />
                <label>5</label>
              </div>
            </div> 
            </div>
            <div className="column" style="marginTop :1%;">
            <div className="col-md-6">
              <label style="marginRight :2%;">
                <b>Witnessing</b>
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="witnessingForm"
                  id="inlineRadio1"
                  value="1"
                />
                <label>1</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="witnessingForm"
                  id="inlineRadio1"
                  value="2"
                />
                <label>2</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="witnessingForm"
                  id="inlineRadio1"
                  value="3"
                />
                <label>3</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="witnessingForm"
                  id="inlineRadio1"
                  value="4"
                />
                <label>4</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="witnessingForm"
                  id="inlineRadio1"
                  value="5"
                />
                <label>5</label>
              </div>
            </div>
            <div className="col-md-8">
              <label style="marginRight :2%;">
                <b>Reading your Bible</b>
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bibleReadingForm"
                  id="inlineRadio1"
                  value="1"
                />
                <label>1</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bibleReadingForm"
                  id="inlineRadio1"
                  value="2"
                />
                <label>2</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bibleReadingForm"
                  id="inlineRadio1"
                  value="3"
                />
                <label>3</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bibleReadingForm"
                  id="inlineRadio1"
                  value="4"
                />
                <label>4</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bibleReadingForm"
                  id="inlineRadio1"
                  value="5"
                />
                <label>5</label>
              </div>
            </div>

            </div>
            <div className="column" style="marginTop :1%;">
              <label>
                  <b>Caring For the Vulnerable</b>
                </label>
              <div className="col-md-8">
               
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="charityForm"
                    id="inlineRadio1"
                    value="1"
                  />
                  <label>1</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="charityForm"
                    id="inlineRadio1"
                    value="2"
                  />
                  <label>2</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="charityForm"
                    id="inlineRadio1"
                    value="3"
                  />
                  <label>3</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="charityForm"
                    id="inlineRadio1"
                    value="4"
                  />
                  <label>4</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="charityForm"
                    id="inlineRadio1"
                    value="5"
                  />
                  <label>5</label>
                </div>
                <div className="col-md-4">
                  
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
                />
              </div>
              <div>
                <label className="form-label">Upload Cover Letter </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                  name="CoverLetter"
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
                />
              </div>
              <div>
                <label className="form-label">Upload Passport-Sized Photos</label>
                <input
                  className="form-control form-control-lg"
                  type="file"
                  id="formFileMultiple"
                  name="passportPhoto"
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
              />
            </div>
            <div>
              <label className="form-label">Copy of National ID (Back)</label>
              <input
                className="form-control form-control-lg"
                type="file"
                id="formFileLg"
                name="ID_back"
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
                  required
                />
            </div>
            <div className="input-box">
            <input
                  type="text"
                  placeholder="Last Name"
                  name="PersonalRefSecondName"
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
                required
              />
              <input
                type="text"
                placeholder="Relationship"
                name="PersonalRefRelationship"
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
                  required
                />
            </div>
            <div className="input-box">
              <input
                  type="text"
                  placeholder="Last Name"
                  name="MinistryRefSecondName"
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
                required
              />
              <input
                type="text"
                placeholder="Relationship"
                name="MinistryRefRelationship"
                required
              />
            </div>
          </div>
          <button type="submit" onClick={handleShow}>
            Submit
          </button>
        </form>
       <!-- Modal  -->
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Application Status</Modal.Title>
        </Modal.Header>
        {isApplicationSuccessful ? (
          <Modal.Body>
            <p style="color: green;">
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
            <p style="color: red;">
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

        <!-- {/* Error Modal */} -->
        <Modal show={error !== ""} onHide={() => setError("")} centered>
          <Modal.Header closeButton>
            <Modal.Title>Error Submitting your Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style=" color: red;" >{error}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setError("")}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
</body>
</html>