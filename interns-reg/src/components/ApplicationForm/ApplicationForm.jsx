import { React, useEffect, useState } from "react";
import axios from 'axios';

function ApplicationForm() {

  const [formData, setFormData] = useState({
    FullName: '',
    email: '',
    PhoneNumber: '',
    id_number: '',
    KRA_number: '',
    DateofBirth: '',
    gender: '',
    county: '',
    residence: '',
    SchoolName: '',
    SchoolAddress: '',
    course: '',
    YearofGrad: '',
    cv: null,
    CoverLetter: null,
    GoodConductCert: null,
    RefFirstName: '',
    RefSecondName: '',
    RefPhoneNumber: '',
    RefRelationship: '',
    message: ''
  })

  const handleInput = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  async function handleSubmit(event){


    const requestOptions={
      method:'POST',
      headers:{
        // 'Content-Type':'application/json',
        'Content-Type': 'multipart/form-data'
    },

      body: JSON.stringify(formData),
    }

    event.preventDefault();

    console.log(formData)

    await fetch('http://localhost:8000/api/applicants', requestOptions)
    .then((response) => {
      // Handle the response from the server
      if(response.ok){
        console.log('response', response);
        return response.json();
      }else{
        throw new Error("Something went wrong!");
      }
    
    }).then(data => {
      alert(`Thank you ${formData.FullName}! Your application has been received.`);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });

    
  }
  

  return (
      <section className="container">
        <header>Application Form</header>
        <form onSubmit= { handleSubmit } className="form">
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
            required />
          </div>

          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input 
              type="text" 
              placeholder="Enter phone number" 
              name="PhoneNumber"
              onChange={handleInput}
              required />
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
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gender" onChange={handleInput} id="inlineRadio1" value="Male"/>
              <label class="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gender" onChange={handleInput} id="inlineRadio2" value="Female"/>
              <label class="form-check-label" for="inlineRadio2">Female</label>
            </div>
              {/* <div className="gender">
                <input
                type="radio" 
                id="check-male" 
                name="gender"
                onChange={handleInput}
                checked />
                <label for="check-male">male</label>
              </div>
              <div className="gender">
                <input 
                  type="radio" 
                  id="check-female" 
                  name="gender"
                  onChange={handleInput}
                />
                <label for="check-female">Female</label>
              </div> */}
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
                <label for="formFileLg" className="form-label">
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
                <label for="formFileLg" className="form-label">
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
                <label for="formFileLg" className="form-label">
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
              <div>
              </div>
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
                <label for="formFileLg" className="form-label">
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
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Additional Message</label>
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
          <button type="submit">Submit</button>
        </form>
      </section>
  );
}

export default ApplicationForm;

