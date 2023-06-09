import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay 
            showThumbs={false} 
            emulateTouch 
            infiniteLoop
            // width={'50%'}
    >
    <div>
      <img
        alt=""
        src="/img/psegurosBco-1.png"
      />
      <p className="legend">Provincia Seguros</p>
    </div>
    <div>
      <img alt="" src="/img/patronal.jpg" />
      <p className="legend">Federación Patronal</p>
    </div>
    <div>
      <img alt="" src="/img/experta.jpg" />
      <p className="legend">Experta Seguros</p>
    </div>
    <div>
      <img alt="" src="/img/sancor.svg" />
      <p className="legend">Sancor Seguros</p>
    </div>
    <div>
      <img alt="" src="/img/zurich-seguros.jpg" />
      <p className="legend">Zurich Seguros</p>
    </div>
    <div>
      <img alt="" src="/img/allianz.png" />
      <p className="legend">Allianz Seguros</p>
    </div>
  </Carousel>
);
