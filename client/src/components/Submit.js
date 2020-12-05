import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

function Submit(){
    const [userName, setUsername] = useState("");
    const [issues, setreviews] = useState("");
    const [reviewList, setReviewlist] = useState([]);
    const history = useHistory();

    useEffect(() => {
      Axios.get("http://localhost:3001/api/get").then((response) => {
       setReviewlist(response.data);  
       //console.log(response);
      });
    }, []);
    const submitIssue = () => {
      Axios.post("http://localhost:3001/api/insert", {
        userName: userName,
        issue: issues
      }).then(() => {
        alert("Sucessfully inserted..!");
      });

      const x = document.forms["myForm"]["userName"].value;
      const y = document.forms["myForm"]["issue"].value;
      if ((x === "" || x === null) || (y === "" || y === null)) 
      { 
        alert("No Issue found...!");
      }
      else
      { 
        alert("Succesfully added...!")
        history.push("/Issue");
      }
    };
    return (
      <form name="myForm">
        <div className="form"> 
        <label>Name</label>
        <input
         type="text"
         name="userName"
         onChange={(e) => {
          setUsername(e.target.value);
        }} required />
        <label>Type Issues</label>
        <input
         type="text"
         name="issue"
         onChange={(e) => {
          setreviews(e.target.value);
        }} required/>
        <button onClick={submitIssue} type="submit">Submit</button>

      </div>
      </form>
    )
}

export default Submit;