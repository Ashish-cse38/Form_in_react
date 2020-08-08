import React from "react";
import "./form.style.css";


const Form = props => {
	return (
	  <div className="container h-150">

	   <form onSubmit={props.execute}>
	    <div className="row">
         <div className="offset-md-5">
          <label style={{color:"white"}}><h4><u>Enter Details</u></h4></label>
         </div>
         </div><br></br>
	    
	    <div className="row">
	     <div className="col-md-4 offset-md-2">
	      <input
	       type="text"
	       className="form-control"
	       placeholder="Parent's name"
	       name="p_name"
	       autoComplete="off"
	       required
	      />
	     </div>
	     <div className="col-md-4">
	      <input
	       type="tel"
	       className="form-control"
	       placeholder="Contact number"
	       name="phone"
	       pattern="[0-9]{10}"
           autoComplete="off"
           required
          />
         </div>
         <br></br> <br></br> <br></br> <br></br>

          <div className="col-md-4 offset-md-2">
	      <input
	       type="email"
	       className="form-control"
	       placeholder="Parent's email ID"
	       name="email"
	       autoComplete="off"
	       required
	      />
	     </div>
	     <div className="col-md-4 ">
	      <input
	       type="text"
	       className="form-control"
	       placeholder="Child's name"
	       name="child"
           autoComplete="off"
           required
          />
         </div> <br></br> <br></br> <br></br> <br></br>

         <div className="col-md-3 offset-md-3">
          <label style={{color:"white"}}>Age:</label>
	      <input type="number"
	       name="age"
	       min="2" max="30"
	       required
	      />
         </div>

         <div className="col-md-3">
         <label style={{color:"white"}}><h4>Choose Program</h4></label>
	      <select name="choose" style={{background: "transparent", color:"white"}} onChange={props.sloton} required>
	          <option value="" defaultValue>Select a program to enroll to</option>
              {props.array.map((x, idx) =>
                 <option key={idx} value={x.course_name} style={{color: "black"}}>{x.course_name}</option> )};
          </select> 
	     </div><br></br> <br></br> <br></br> <br></br> <br></br>

         <div className="row">
         <div className="offset-md-4">
          <label style={{color:"white"}}><h4><u>Choose Date and Time slot for trial</u></h4></label>
         </div>
         </div><br></br> <br></br> <br></br> <br></br>
	     <div className="col-md-3 offset-md-3">
	      <label style={{color:"white"}}>Date:</label>
	       <select name="date" style={{background: "transparent", color:"white"}} onChange={props.clickon} required>
	        <option value="" defaultValue>Select Date</option>
                {props.months.slice(0,7).map((x, idx) =>
                 <option key={idx} value={props.date.getDate() + idx} style={{color: "black"}}>{props.date.getDate() + idx}th {props.months[props.date.getMonth()]}</option> )};
          </select>
	     </div>
	     <div className="col-md-3">
	     <label style={{color:"white"}}>Time slot:</label>
	      <select name="time" style={{background: "transparent", color:"white"}} required>
	          <option value="" defaultValue>Select Time slot</option>
              {props.times.map((x, idx) =>
                 <option key={idx} value={x} style={{color: "black"}}>{x}</option> )};
          </select> 
         </div><br></br> <br></br> <br></br> <br></br>
	     
         <div className="row">
         <div className="offset-md-5">
          <button className="btn btn-warning">Submit Information</button>
         </div>
         </div>

        </div>
       </form>
      </div>
     );
    };


export default Form;