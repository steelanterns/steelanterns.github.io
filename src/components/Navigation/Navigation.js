import React from 'react';

import './Navigation.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from '../../pages/home/home';
import About from '../../pages/about/about';
import Contact from '../../pages/contact/contact';
import Error404 from '../../pages/error/errorPage';


export const Navigation = () => {
	return(
		<Router>

			<nav className="navbar-light bg-light navbar navbar-expand-sm shadow-sm sticky-top">
			    <Link className="navbar-brand" to={'/'}>
			       Steeve Ralph M. <span className="border boder-secondary shadow-sm p-2">Jean Chilles</span>
			    </Link>

			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
			      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>

			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			      <ul className="navbar-nav">
			        <li className="nav-item active">
			          <Link to={'/'} className="nav-link">Home <span className="sr-only">(current)</span></Link>
			        </li>
			        <li className="nav-item">
			          <Link to={'/About'} className="nav-link" href="/about">About</Link>
			        </li>
			        <li className="nav-item">
			          <Link to={'/Contact'} className="nav-link" href="/contact">Contact</Link>
			        </li>
			      </ul>

			    </div>

			    <div className="d-flex w-25 justify-content-around">
			    <a href="https://www.linkedin.com/in/steeve-jean-chilles-6a0658186/" target="_blank" rel="noopener noreferrer" className="text-secondary"><i className="fa fa-linkedin fa-lg"></i></a>
				    <a href="https://web.facebook.com/steelanternes" target="_blank" rel="noopener noreferrer" className="text-secondary"><i className="fa fa-facebook fa-lg"></i></a>
				    <a href="https://twitter.com/jeanchilles" target="_blank" rel="noopener noreferrer" className="text-secondary"><i className="fa fa-twitter fa-lg"></i></a>
				    <a href="https://www.instagram.com/steevejeanchilles/" target="_blank" rel="noopener noreferrer" className="text-secondary"><i className="fa fa-instagram fa-lg"></i></a>
				</div>
		  	</nav>

		  	<Switch>
		  		<Route exact path="/" component={Home}>
            		<Home />
          		</Route>
          		<Route path="/about" component={About}>
            		<About />
          		</Route>
          		<Route path="/contact" component={Contact}>
            		<Contact />
          		</Route>
          		<Route path="/errorPage" component={Error404}>
            		<Error404 />
          		</Route>
          		<Redirect to="/errorPage" component={Error404} />
        	</Switch>

        </Router>
	);
};