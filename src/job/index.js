import React from 'react';
import './index.css';

var currDate = new Date();
currDate = currDate.setDate(currDate.getDate()-7);

class Job extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedCompany: "",
      count: 0,
      }
  }

  onSelectedCompany(companyName) {
    this.setState({selectedCompany:companyName});
  }

render(){
  return (
    <div className="App">
      <div>{this.props.jobsData.slice(0, 10).map(job => 
      
      {
          if(this.props.is7DaysSelected){
            var date = Date.parse(job.OBJpostingDate);
            if(date >= currDate)

              if(this.state.selectedCompany !== "" && this.state.selectedCompany === job.companyName)
                return (<div className="job-cont" key={job.listingHash}>
                  <p className="job-title">{job.jobTitle}</p>
                  <a className="company-name" onClick={() => this.onSelectedCompany(job.companyName)} href="#">{job.companyName}</a>
                  <hr/>
                  <p>{job.shortDesc}</p>
                  
                  <div className="posted-date">
                    Posted {job.postedDate}
                  </div>
                </div>)
              else {
                if(this.state.selectedCompany !== "") return null;

                return (<div className="job-cont" key={job.listingHash}>
                  <p className="job-title">{job.jobTitle}</p>
                  <a className="company-name" onClick={() => this.onSelectedCompany(job.companyName)}  href="#">{job.companyName}</a>
                  <hr/>
                  <p>{job.shortDesc}</p>

                  <div className="posted-date">
                      Posted {job.postedDate}
                    </div>
                </div>)
                return null;
              }
            }
            else{
              if(this.state.selectedCompany !== "" && this.state.selectedCompany === job.companyName)
                return (<div className="job-cont" key={job.listingHash}>
                  <p className="job-title">{job.jobTitle}</p>
                  <a className="company-name" onClick={() => this.onSelectedCompany(job.companyName)}  href="#">{job.companyName}</a>
                  <hr/>
                  <p>{job.shortDesc}</p>

                  <div className="posted-date">
                      Posted {job.postedDate}
                    </div>
                </div>)
              else {
                if(this.state.selectedCompany !== "") return null;

                return (<div className="job-cont" key={job.listingHash}>
                  <p className="job-title">{job.jobTitle}</p>
                  <a className="company-name" onClick={() => this.onSelectedCompany(job.companyName)}  href="#">{job.companyName}</a>
                  <hr/>
                  <p>{job.shortDesc}</p>

                  <div className="posted-date">
                      Posted {job.postedDate}
                    </div>
                </div>)
              }
            }
          
         
      }
      
      
      )}
        
      </div>
    </div>
  );
}
}

export default Job;
