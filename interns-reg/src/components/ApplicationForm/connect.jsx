const [selectedOption, setSelectedOption] = useState();
  const [options, setOptions] = useState([]);

  const [FullName, setFullName] = useState("");
  const [email, setemail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [id_number, setid_number] = useState("");
  const [KRA_number, setKRA_number] = useState("");
  const [DateofBirth, setDateofBirth] = useState("");
  const [gender, setgender] = useState("");
  const [county, setcounty] = useState("");
  const [residence, setresidence] = useState("");
  const [SchoolName, setSchoolNAme] = useState("");
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
    let item = {
      FullName,
      email,
      PhoneNumber,
      id_number,
      KRA_number,
      DateofBirth,
      gender,
      county,
      residence,
      SchoolName,
      SchoolAddress,
      course,
      YearofGrad,
      cv,
      CoverLetter,
      GoodConductCert,
      RefFirstName,
      RefSecondName,
      RefPhoneNumber,
      RefRelationship,
      message,
    };
    console.log(item);
    let result = await fetch("http://localhost:8000/api/applicants", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    setFullName("");
    setemail("");
    setPhoneNumber("");
    setid_number();
    setKRA_number();
    setDateofBirth();
    setgender("");
    setcounty("");
    setresidence("");
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
        const response = await fetch("counties.json");
        const options = await response.json();
        setOptions(
          options.map(({ id, counties, code }) => ({
            id,
            label: counties,
            value: code,
          }))
        );
      } catch (error) {
        // Handle the error appropriately
      }
    };
    getOptions();
  }, []);

  const ApplicationForm = () => {
    const [formData, setFormData] = useState({
      FullName: '',
      email: '',
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
      cv: '',
      CoverLetter: '',
      GoodConductCert: '',
      RefFirstName: '',
      RefSecondName: '',
      RefPhoneNumber: '',
      RefRelationship: '',
      message: '',
    });

    const handleSubmit = (event) => {
      event.preventDefault();
    
      axios.post('http://localhost:8000/api/applicants', formData)
        .then((response) => {
          // Handle the response from the server
          console.log(response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
};