import React from 'react';


const Footer = () => {
	return(
		<footer className="text-left-center w-100 bg-secondary p-2 mt-4">
			<div className="d-flex">
				<div className="mr-auto">Online myself &copy; 2020 Steeve Jean Chilles</div>
				<div className="d-flex w-25 ml-10 justify-content-around ">
				    <a href="https://www.linkedin.com/in/steeve-jean-chilles-6a0658186/" target="_blank" rel="noopener noreferrer" className="text-secondary"><i className="fa fa-linkedin fa-lg" style={{color: 'white'}}></i></a>
					    <a href="https://web.facebook.com/steelanternes" target="_blank" rel="noopener noreferrer" className="text-secondary"><i className="fa fa-facebook fa-lg" style={{color: 'white'}}></i></a>
					    <a href="https://twitter.com/jeanchilles" target="_blank" rel="noopener noreferrer" className="text-secondary"><i className="fa fa-twitter fa-lg" style={{color: 'white'}}></i></a>
					    <a href="https://www.instagram.com/steevejeanchilles/" target="_blank" rel="noopener noreferrer" className="text-secondary"><i className="fa fa-instagram fa-lg" style={{color: 'white'}}></i></a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;