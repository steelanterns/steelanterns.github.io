import React from 'react';


const Contact= () => {
	return (
		<div className="container">
			<div className="row">
		      <div className="col">
		        <h2 className="text-center display-3 my-5">Contact me!!</h2>
		      </div>
		    </div>

		    <div className="row justify-content-center nb-5">
		      <div className="col-8 col-md-4">
		        <dl>
		        	<dt>By phone</dt>
		        	<dd>+50946374488 / +50941006787</dd>
		        </dl>
		      </div>
		      <div className="col-8 col-md-4">
		        <dl>
		        	<dt>My address</dt>
		        	<dd>Port-au-prince, Carrefour, Arcachon 32 #99</dd>
		        </dl>
		      </div>
		      <div className="col-8 col-md-4">
		        <dl>
		        	<dt>By mail</dt>
		        	<dd>steevejeanchilles@gmail.com</dd>
		        	<dd>freudjeanchilles@gmail.com</dd>
		        	<dd>jsteeveralph@yahoo.com</dd>
		        </dl>
		      </div>
		    </div>

		    <div className="row">
		      <div className="col">
		        <h2 className="text-center h3 my-5">Or more simply click <span>
		        	<a href="mailto:steevejeanchilles@gmail.com" className="text-info" title="send me an email!!">here </a></span>
		        	 to leave me an email
		        </h2>
		      </div>
		    </div>
			
		</div>
	);
}


export default Contact ;