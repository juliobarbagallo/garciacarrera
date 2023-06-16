import React from "react";
// import AwesomeSlider from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import 'react-awesome-slider/dist/styles.css';

// import AutoplaySlider from 'react-awesome-slider/hoc/autoplay';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation.scss';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
export default () => (

  // <div style={{ backgroundColor: 'transparent' }}> {/* Set the background color of the container to transparent */}
  //   <AutoplaySlider
  //     play
  //     cancelOnInteraction={false}
  //     interval={6000}
  //     animation="foldOutAnimation"
  //     style={{ maxHeight: '300px', width: '80%' }}
  //   >
  //     <div data-src="/img/psegurosBco-1.png" style={{ maxWidth: '80%', height: 'auto' }} /> {/* Apply inline styles to control the size */}
  //     <div data-src="/img/patronal.jpg" style={{ maxWidth: '80%', height: 'auto' }} />
  //     <div data-src="/img/Sancorseguros.jpg" style={{ maxWidth: '80%', height: 'auto' }} />
  //     <div data-src="/img/zurich-seguros.jpg" style={{ maxWidth: '80%', height: 'auto' }} />
  //     <div data-src="/img/allianz.png" style={{ maxWidth: '80%', height: 'auto' }} />
  //   </AutoplaySlider>
  // </div>

  // <AutoplaySlider
  //   play
  //   cancelOnInteraction={false}
  //   interval={6000}
  //   animation="foldOutAnimation"
  //   style={{ maxHeight: '400px', width: '80%' }}
  // >
  //   <div>
  //     <img
  //       alt=""
  //       src="/img/psegurosBco-1.png"
  //       style={{ maxWidth: '100%', height: 'auto' }} // Apply inline styles for max width and height
  //     />
  //   </div>
  //   <div>
  //     <img
  //       alt=""
  //       src="/img/patronal.jpg"
  //       style={{ maxWidth: '100%', height: 'auto' }}
  //     />
  //   </div>
  //   <div>
  //     <img
  //       alt=""
  //       src="/img/Sancorseguros.jpg"
  //       style={{ maxWidth: '100%', height: 'auto' }}
  //     />
  //   </div>
  //   <div>
  //     <img
  //       alt=""
  //       src="/img/zurich-seguros.jpg"
  //       style={{ maxWidth: '100%', height: 'auto' }}
  //     />
  //   </div>
  //   <div>
  //     <img
  //       alt=""
  //       src="/img/allianz.png"
  //       style={{ maxWidth: '100%', height: 'auto' }}
  //     />
  //   </div>
  // </AutoplaySlider>
  <AutoplaySlider
    play
    cancelOnInteraction={false}
    interval={6000}
    animation="foldOutAnimation"
    // style={{ maxHeight: '300px'}}
  >
    <div
        data-src="/img/psegurosBco-1.png"
        style={{
          maxWidth: '80%',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    <div>
    <img
        alt=""
        src="/img/patronal.jpg"
        
      />

      </div>
    <div data-src="/img/Sancorseguros.jpg" />    
    <div data-src="/img/zurich-seguros.jpg" />
    <div data-src="/img/allianz.png" />
    
  </AutoplaySlider>
);
