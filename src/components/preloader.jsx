import React from 'react';

class Preloader extends React.Component {
  constructor() {
    super();
    // Initial state: preloader is visible
    this.state = {
      isVisible: true
    };
  }

  componentDidMount() {
    // Simulate a "loading done" delay (e.g., wait for data or assets)
    // After 1 second, hide the preloader
    setTimeout(() => {
      this.setState({ isVisible: false });
    }, 1000); // 1000ms = 1 second
  }

  render() {
    // If preloader should not be shown, render nothing (null)
    if (!this.state.isVisible) return null;

    // Otherwise, show a full-screen preloader box
    return (
      <div
        id="preloader"
        style={{
          position: 'fixed',         // Sticks to the screen
          top: 0,
          left: 0,
          height: '100vh',          // Full height
          width: '100vw',           // Full width
          backgroundColor: '#fff',  // White background
          zIndex: 9999,             // Sits above all other elements
          display: 'flex',          // Center content with flex
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.5s ease' // Smooth fade-out
        }}
      >
        {/* Replace this with a spinner, image, or animation */}
        <p style={{ color: '#333', fontSize: '20px' }}>Loading...</p>
      </div>
    );
  }
}

export default Preloader;


// import React from 'react';
// import $ from 'jquery'; // Import jQuery to manipulate the DOM

// class Preloader extends React.Component {
//   // This lifecycle method runs after the component is inserted into the DOM
//   componentDidMount() {
//     // Wait for the entire window to load (includes images, fonts, etc.)
//     $(window).on('load', function () {
//       // Check if the #preloader element exists in the DOM
//       if ($('#preloader').length) {
//         // Wait 100ms, then fade it out slowly
//         $('#preloader').delay(100).fadeOut('slow', function () {
//           // After fade out, completely remove the preloader element from the DOM
//           $(this).remove();
//         });
//       }
//     });
//   }

//   // This renders a full-screen white div with id "preloader"
//   render() {
//     return <div id="preloader"></div>;
//   }
// }

// export default Preloader;




