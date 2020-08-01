import React from 'react';

import '../index.css';

import Jumbotron from '../../components/Jumbotron/Jumbotron';

const Home = () => {
	return(
		<div>
			<Jumbotron />
			<div className="d-flex justify-content-around align-items-sm-center align-items-center flex-column flex-sm-column flex-lg-row">
				<div className="mb-3 card_">
				  <h2 className="text-secondary">My Skills</h2>
				  <p>
				  	my skills extend mainly in software such as web, android etc ... and also databases
				  </p>
				</div>
				<div className=" mb-3 card_" >
				  <h2 className="text-secondary">My Achievements</h2>
				  <p>
				  	you will understand, this is my first achievement .. 
				  	but I have already embarked on many other projects that you may see soon !!
				  </p>
				</div>
				<div className="mb-3 card_" >
				  
				</div>
			</div>
		</div>
	);
}


export default Home;
