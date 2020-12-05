import React, {useState, useEffect} from "react";
import './App.css';
import Axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Submit from "./components/Submit";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
  //     setPosts(res.data);
  //     setLoading(false);
  //   }
  //   fetchPosts();
  // }, []);
  useEffect(() => {
    setLoading(true);
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setPosts(response.data);
      setLoading(false);
    });
  }, []);
  
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOffirstPost = indexOfLastPost - postsPerPage;
  const currentPosts  = posts.slice(indexOffirstPost, indexOfLastPost);

  //Change the page
  const paginate = pageNumber => setCurrentpage(pageNumber);
   return (
     <Router>
         <div className="container">
         <h1>My app</h1>
          <Link to="/Issue"><button type="button" className="btn btn-success">Issue Page</button></Link>
 
        <switch>
          <Route path="/Issue">
           <Search />
           <Posts posts={currentPosts} loading={loading} />
           <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          </Route>

          <Route path="/Submit">
            <Submit />
          </Route>

        </switch>
        </div>
     </Router>

  );
};

export default App;

/*
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Submit from "./components/Submit";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

      
        <Switch>
          <Route path="/about">
            <Submit />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
 */