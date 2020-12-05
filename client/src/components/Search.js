import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Submit from './Submit';

function Search() {
   const history = useHistory();
    const submit = () => {
      console.log("Hello");
      history.push('/Submit');
    }
   
   
    return (
      <Router>

        <div className="container-fluid search_container">
      <div className="row">
      <div className="col-xs-9 col-sm-8 L2hide lbl-align">
      <form>
           <button class="btn btn-default" type="submit" value="Labels"> Labels <spam className="Cnumbers">180</spam></button>
           <button class="btn btn-default" type="submit" value="Milestones"> Milestones <spam className="Cnumbers">0</spam></button>
         </form>
      </div>
      <div className="col-xs-3 col-sm-4 L2hide btn-align">
      <button type="button" class="btn btn-success">New</button>
      </div>
       
       <div className="col-xs-12 col-md-8 filter space Twidth">
       <div class="input-group">
         <span class="input-group-btn">
         <div className="dropdown">
          <button class="btn btn-default" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filters
          <span className="dropdown-caret"></span></button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
               <li><a class="dropdown-item" href="##">Show all</a></li> 
               <li><a class="dropdown-item" href="##">is Open</a></li>
               <li><a class="dropdown-item" href="##">is Closed</a></li>
            </ul>
         </div>
        </span>
        <form><input type="text" className="form-control" placeholder="Search issue" /></form>
        </div>
       </div>

       <div className="col-xs-6 col-sm-3 space Lwidth L1hide">
         <form>
           <button class="btn btn-default" type="submit" value="Labels"> Labels <spam className="Cnumbers">180</spam></button>
           <button class="btn btn-default" type="submit" value="Milestones"> Milestones <spam className="Cnumbers">0</spam></button>
         </form>
       </div>
       
       <div className="col-xs-6 col-sm-1 filter space center-align L1hide">
          <button onClick={submit} type="button" class="btn btn-success">New issue</button>
       </div>

      </div>
      </div>
   
      </Router>
     
      
    );
};

export default Search;