import { React, useEffect, useState } from "react";

function ApplicationForm() {

	const [selectedOption, setSelectedOption] = useState();
	const [options, setOptions] = useState([]);

	const [FirstName, setFirstName] = useState("");
	const [LastName, setLastName] = useState("");
	const [email, setemail] = useState("");
	const [PhoneNumber, setPhoneNumber] = useState("");
	const [gender, setgender] = useState("");
	const [address, setaddress] = useState("");
	const [county, setcounty] = useState("");
	const [residence, setresidence] = useState("");
	const [country, setcountry] = useState("");
	const [SchoolNAme, setSchoolNAme] = useState("");
	const [SchoolAddress, setSchoolAddress] = useState("");
	const [course, setcourse] = useState("");
	const [YearofGrad, setYearofGrad] = useState("");
	const [cv, setcv] = useState("");
	const [CoverLetter, setCoverLetter] = useState("");
	const [GoodConductCert, setGoodConductCert] = useState("");
	const [RefFirstName, setRefFirstName] = useState("");
	const [RefSecondName, setRefSecondName] = useState("");
	const [RefPhoneNumber, setRefPhoneNumber] = useState("");
	const [RefRelationship, setRefRelationship] = useState("");
	const [message, setmessage] = useState("");
	

	async function Application() {
		// convert the data to an object
		let item = { FirstName, LastName, email, PhoneNumber, gender, address, county, residence, country, SchoolNAme, SchoolAddress, course, YearofGrad, cv, CoverLetter, GoodConductCert, RefFirstName, RefSecondName, RefPhoneNumber, RefRelationship, message }
		console.log(item);
		let result = await fetch("http://localhost:8000/api/applicants",
			{
				method: 'POST',
				body: JSON.stringify(item),
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			})
		result = await result.json()
		localStorage.setItem("user-info", JSON.stringify(result))
		setFirstName(""); 
		setLastName("");
		setemail("");
		setPhoneNumber("");
		setgender("");
		setaddress("");
		setcounty("");
		setresidence("");
		setcountry("");
		setSchoolNAme("");
		setSchoolAddress("");
		setcourse("");
		setYearofGrad("");
		setcv("");
		setCoverLetter("");
		setGoodConductCert("");
		setRefFirstName("");
		setRefSecondName("");
		setRefPhoneNumber("");
		setRefRelationship("");
		setmessage("");
	}

	useEffect(() => {
		const getOptions = async () => {
		try {
			const response = await fetch("data.json");
			const options = await response.json();
			setOptions(
			options.map(({ id, countries, code }) => ({
				id,
				label: countries,
				value: code,
			}))
			);
		} catch (error) {
			// Handle the error appropriately
		}
		};
		getOptions();
	}, []);
	
    return (
        <>
        <div className="wrapper">
            <form action="" id="wizard">
            {/* <!-- SECTION 1 --> */}
                <h2></h2>
                <section>
                    <div className="inner">
                        <div className="image-holder">
							<img className="form-image" src="images/kcclogo.png" alt=""/>
						</div>
                        <div className="form-content" >
                            <div className="form-header">
								<h3>Application</h3>
							</div>
                            <p className="guide">Personal Information</p>
                            <div className="form-row">
                                <div className="form-holder">
                                    <input 
										type="text" 
										placeholder="First Name" 
										className="form-control"
										name="FirstName"
										id="FirstName"
										onChange={(e) => setFirstName(e.target.value)}
										required
									/>
                                </div>
                                <div className="form-holder">
                                    <input 
									type="text" 
									placeholder="Last Name" 
									className="form-control"
									name="LastName"
									required
									/>
                                </div>
						    </div>
                            <div className="form-row">
                                <div className="form-holder">
                                    <input type="text" placeholder="Your Email" className="form-control" name="email" required/>
                                </div>
                                <div className="form-holder">
                                    <input type="text" placeholder="Phone Number" className="form-control" name="PhoneNumber" required/>
                                </div>
						    </div>
                            <div className="form-row">
                            <div className="form-holder">
								<input type="text" placeholder="Age" className="form-control"/>
							</div>
                            <div className="form-holder" style={{alignSelf: 'flex-end', transform: 'translateY(4px)',}}>
                                <div className="checkbox-tick">
                                    <label className="male">
                                        <input type="radio" name="gender" value="male" checked/> Male<br></br>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="female">
                                        <input type="radio" name="gender" value="female"/> Female<br></br>
                                        <span className="checkmark"></span>
                                    </label>
								</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                {/* <!-- SECTION 2 --> */}
                <h2></h2>
                <section>
                    <div className="inner">
                        <div className="image-holder">
							<img className="form-image" src="images/kcclogo.png" alt=""/>
						</div>
                        <div className="form-content">
                            <div className="form-header">
                                <h3>Application</h3>
                            </div>
                            <p className="guide">Personal Information Address</p>
                            <div className="form-row">
                                <div className="form-holder w-100">
                                    <input type="text" placeholder="Address" className="form-control" name="address" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-holder">
                                    <input type="text" placeholder="County" className="form-control" name="county" required/>
                                </div>
                                <div className="form-holder">
                                    <input type="text" placeholder="Estate/Place of residence" className="form-control" name="residence" required/>
                                </div>
                            </div>
                            <div className="form-row">
								<div className="select">
									<div className="form-holder">
										<div className="select-control">Country</div>
										<i className="zmdi zmdi-caret-down"></i>
									</div>
									{/* <ul id="country-select" className="dropdown">
									</ul> */}
									{/* <select name="countries" id="country-select" className="dropdown" options={options}>
										<option value={{}}></option>
									</select> */}
									<select
										className="text-xl"
										defaultValue={selectedOption}
										onChange={setSelectedOption}
										options={options}
										required
										isClearable={true}
										id="countries-code"
										name="country"
									>
									{options.map((options) => (
										<option key={options.id} value={options.value}>
										{options.label}
										</option>
									))}
									</select>
								</div>
								<div className="form-holder"></div>
							</div>
                        </div>
                    </div>
                </section>

                {/* <!-- SECTION 3 --> */}
                <h2></h2>
                <section>
                    <div className="inner">
						<div className="image-holder">
							<img className="form-image" src="images/kcclogo.png" alt=""/>
						</div>
						<div className="form-content">
							<div className="form-header">
								<h3>Application</h3>
							</div>
							<p className="guide">Education Info</p>
							<div className="form-row">
								<div className="form-holder w-100">
									<input type="text" placeholder="School Name" className="form-control" name="SchoolNAme" required/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-holder">
									<input type="text" placeholder="School Address" className="form-control" name="SchoolAddress" required/>
								</div>
								<div className="form-holder">
									<input type="text" placeholder="Major/Course" className="form-control" name="course" required/>
								</div>
								
							</div>

							<div className="form-row">
								<div className="select">
									<div className="form-holder">
										<select type="text" id="ddlYears" placeholder="Year" className="form-control" name="YearofGrad" required>
											<option value="">Year of Graduation</option>
										</select> 
										
										{/* <!-- <select id="ddlYears"></select> --> */}
									</div>
								</div>
								<div className="form-holder"></div>
							</div>
						</div>
					</div>
                </section>

                {/* <!-- SECTION 4 --> */}
                <h2></h2>
                <section>
                    <div className="inner">
						<div className="image-holder">
							<img className="form-image" src="images/kcclogo.png" alt=""/>
						</div>
						<div className="form-content">
							<div className="form-header">
								<h3>Application</h3>
							</div>
							<p className="guide">Attach Qualification Documents</p>
							<div className="form-row">
								<div className="form-holder">
									<label className="fileSelect">Upload CV</label>
								</div>
								<div className="form-holder">
									<input type="file" className="fileElem" name="cv" required/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-holder">
									<label className="fileSelect">Upload Cover Letter</label>
								</div>
								<div className="form-holder">
									<input type="file" className="fileElem" name="CoverLetter" required/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-holder">
									<label className="fileSelect">Upload Certificate of Good Conduct</label>
								</div>
								<div className="form-holder">
									<input type="file" className="fileElem" name="GoodConductCert" required/>
								</div>
							</div>
						</div>
					</div>
                </section>

                {/* <!-- SECTION 5 --> */}
                <h2></h2>
                <section>
                    <div className="inner">
						<div className="image-holder">
							<img className="form-image" src="images/kcclogo.png" alt=""/>
						</div>
						<div className="form-content" >
							<div className="form-header">
								<h3>Application</h3>
							</div>
							<p className="guide">References</p>
							<div className="form-row">
							</div>
							<div className="form-row">
								<div className="form-holder">
									<input type="text" placeholder="First Name" className="form-control" name="RefFirstName" required/>
								</div>
								<div className="form-holder">
									<input type="text" placeholder="Last Name" className="form-control" name="RefSecondName" required/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-holder">
									<input type="text" placeholder="Phone Number" className="form-control" name="RefPhoneNumber" required/>
								</div>
								<div className="form-holder">
									<input type="text" placeholder="Relationship" className="form-control" name="RefRelationship" required/>
								</div>
							</div>
						</div>
					</div>
                </section>

                {/* <!-- SECTION 7 --> */}
                <h2></h2>
                <section>
                    <div className="inner">
						<div className="image-holder">
							<img className="form-image" src="images/kcclogo.png" alt=""/>
						</div>
						<div className="form-content">
							<div className="form-header">
								<h3>Application</h3>
							</div>
							<p className="guide">Send an optional message</p>
							<div className="form-row">
								<div className="form-holder w-100">
									<textarea id="" placeholder="Your messagere here!" className="form-control" style={{height: '99px',}} name="message"></textarea>
								</div>
							</div>
							{/* <div className="checkbox-circle mt-24">
								<label>
									<input type="checkbox" checked/>  Are you a <a href="#">Born Christian ?</a>
									<span className="checkmark"></span>
								</label>
							</div> */}
						</div>
					</div>
                </section>
            </form>
        </div>
        </>
    );
}

export default ApplicationForm;