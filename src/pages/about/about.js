import React from 'react';

import Caroussel from '../../components/About/Caroussel/Caroussel';

import {
  Link
} from "react-router-dom";

import webdev from './webdevp.png';
import webdev1 from './webdev1.png';
import sdev from './software-development.png';

const About = () => {
	return (

		<div className="container">
			<div className="row">
		      <div className="col">
		        <h2 className="text-center display-3 my-5">About me!!</h2>
		      </div>
		    </div>
		    <div className="row">
		      <div className="col">
		        <div className="text-center h2">
					let's talk about my skills.
					by then, I have certifications, especially in web development, software development and others
				</div>
		      </div>
		    </div>
					

			<div className="row justify-content-center nb-5">
		      <div className="col-8 col-md-4">

		          <div className="card border-0">
		          <img className="card-img-top" src={webdev} alt="Web Development" />
		          <div className="card-body">
		            <p className="card-text text-center">
		            	For your websites, web applications, don't hesitate to 
		            	 <span><Link to="/contact" className="text-info" title="contact me!!"> contact me!</Link></span>
		            </p>
		          </div>
		        </div>
		      </div>

		      <div className="col-8 col-md-4">
		        <div className="card border-0">
		          <img className="card-img-top" src={sdev} alt="software development" />
		          <div className="card-body">
		            <p className="card-text text-center">
		            	For your management applications ,your applications for pc or android 
		            	<span><Link to="/contact" className="text-info" title="contact me!!"> contact me!</Link></span>
		            </p>
		          </div>
		        </div>
		      </div>

		      <div class="col-8 col-md-4">

		      <div class="card border-0">
		          <img class="card-img-top" src={webdev1} alt="others" />
		          <div class="card-body">
		            <p class="card-text text-center">
		            	Also for all other IT services in particular, database management, software maintenance, 
		            	marketing service etc ... <span><Link to="/contact" className="text-info" title="contact me!!">contact me!</Link></span>
		            </p>
		          </div>
		      </div>
		      </div>
		    </div>

		    <div className="row my-5">
		      <div className="col">
		        <div className="text-center h4 text-justify">
					For now I have personal projects in progress, and as I wait to concretize your projects to you by using my skills, 
						you will understand, I have nothing to present to you, I would add them as and when I make them . 
						And so for the moment, you are in the presence of  <span className="text-info">online myself</span>  my very first realization.
				</div>
		      </div>
		    </div>

			<div class="row bg-dark rounded-top">
		      <div class="col">
		        <h2 class="text-white text-center display-4 my-5">Certificates and / or Diploma</h2>
		      </div>
		    </div>
			<div className="row bg-dark pb-5">
				<div className="col">
					<Caroussel />
				</div>
			</div>
		</div>
	);
}


export default About;