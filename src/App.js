import React from "react";
import "./App.css";
import Form from "./components/form.component";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


class App extends React.Component {
 constructor() {
		super();
		this.state = {
			infmt: [],  //Information from api is stored here
      today: new Date(),
      months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
      times: ['12 am','1 am','2 am','3 am','4 am','5 am','6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm','9 pm','10 pm','11 pm'],
      act_times: [],
      slots: undefined  //Variable to store number of slots for course
		};
    this.handleChange = this.handleChange.bind(this);
    this.slotSet = this.slotSet.bind(this);

	}

  //Get information from api and store it in a state variable
	componentDidMount(){
        this.getArticles().then(res =>
            {
               console.log(res);
                this.setState({infmt : res.data});
            });
    }

   //Find number of slots for the course and store it
    slotSet(event) {
      let sub = event.target.value;
      console.log(sub);
      for(var i=0; i<this.state.infmt.length; i++){
        if (this.state.infmt[i].course_name === sub){
          console.log(this.state.infmt[i].slots.length);
         this.setState({
         slots: this.state.infmt[i].slots.length
      });
    }
    }

  }

  //Get the value of option selected for day to set time slots
    handleChange(event) {
      let value = event.target.value;
      console.log(value);
      let x_arr = [];
      let total = (24 - this.state.today.getHours()) + ((value-(this.state.today.getDate()+1))*24) - 4;
      let start = 0;
      let stop = 0;
      let end = this.state.slots;

 
      if(value == this.state.today.getDate()){
        if(this.state.today.getHours() + 4 < 24){
          x_arr = this.state.times.slice(this.state.today.getHours()+4);
        }
        else{
          x_arr = [];
        }
         this.setState({
           act_times: x_arr  });
        }

      else{
        if(end - total < 0){
          x_arr = [];
        }
        else if(end - total >=0){
          if(value == this.state.today.getDate()+1 && this.state.today.getHours()+4 > 24){
            start = (this.state.today.getHours() + 4)%24;
            console.log(start);
          }
          else if(value == this.state.today.getDate()+1 && this.state.today.getHours()+4 <24){
            start = 0;
          }

           if(end - total >=24){
           stop = this.state.times.length;
        }
         else if(end - total < 24){
           stop = (end - total);
           console.log(stop);
         }

         x_arr = this.state.times.slice(start, stop);
  
        }
         this.setState({
           act_times: x_arr });
    
      this.setState({
        dateval: value
      });
    }
  }

  //Return the information from api
    getArticles(){
        return axios.get('https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec');
     };


render() {
  return (
    <div className="App">
     <Form array={this.state.infmt} date={this.state.today} months={this.state.months}
      clickon={this.handleChange} slots={this.state.slots} times={this.state.act_times}
      sloton={this.slotSet}/>
    </div>
  );
 }
}

export default App;