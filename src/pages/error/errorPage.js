import React from 'react';

import {
  Link
} from "react-router-dom";

const Error404 = () => {
	return (
		<div>
		<h1>Vous vous retrouvez dans une page n'existant pas sur le site web </h1>
		<Link to='/'>Return to home Page!</Link>
		</div>
	);
};

export default Error404;