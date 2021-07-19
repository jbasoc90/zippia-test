import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from 'axios';

import Job from './job' 

import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
                  jobs:[],
                  is7days: false,
                  }
  }

  callApi(){
    axios.post("https://www.zippia.com/api/jobs/", {
      "companySkills": true,
      "dismissedListingHashes": [],
      "fetchJobDesc": true,
      "jobTitle": "Business Analyst",
      "locations": [],
      "numJobs": 20,
      "previousListingHashes": []
      })
    .then(res => 
      {
        if(res.data.jobs){
          this.setState({jobs:res.data.jobs});
        }
      });
  }

  componentDidMount(){
    this.callApi();
  }

  setFilterDate(){
    console.log("onSetFilterDate")
    this.setState({is7days: !this.state.is7days})
  }


render(){
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/test/jobs">
            <a href="#" onClick={() => this.setFilterDate()}> {!this.state.is7days? "Show jobs in the last 7 days": "Refresh date filter"}</a>
            <Job limit={10} jobsData={this.state.jobs} is7DaysSelected={this.state.is7days}/>
          </Route>
        </Switch>

        <Route render={() => <Redirect to="/test/jobs" />} />
      </Router>
    </div>
  );
}
}

export default App;
