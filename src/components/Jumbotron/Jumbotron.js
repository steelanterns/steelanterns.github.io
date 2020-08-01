import React from 'react';


import './Jumbotron.css';

const Jumbotron = () => {

	return(

			<div className="jumbotron jumbotron-fluid j_div">
				<div className="bg-secondary text-white text-center my-5">
					<h1 className="text-center">Welcome to my online <span>myself</span></h1>
					<hr/>
					<h2>Who i am??</h2>
					<p>
						I am steeve, currently studying at the university of Inuka in computer science, 
						I wish to present this site to you so that you can obtain all that you could need to know me 
						from the professional point of view, namely my CV, my achievements etc .....
					</p>
				</div>
			</div>

	);
};

export default Jumbotron;