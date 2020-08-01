import React from 'react';
import wdv from './web-dev.png';
import fmn from './fmn.png';

const Caroussel = () => {
	return(

        <div id="carouselExampleControls" className="carousel slide w-75 mx-auto" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={wdv} className="d-block w-100" alt="Web Development" />
            </div>
            <div className="carousel-item">
              <img src={fmn} className="d-block w-100" alt="Fondamentaux du Marketing Numerique" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

	);
}

export default Caroussel;