import React from 'react';
import $ from 'jquery';
import '../libs/easing.js';

class BackToTop extends React.Component {
  componentDidMount() {
    $('.back-to-top').click(function (e) {
      e.preventDefault(); // prevent default anchor behavior
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    });

    window.addEventListener('scroll', () => {
      const btn = document.querySelector('.back-to-top');
      if (btn) {
        if (window.pageYOffset > 100) {
          btn.classList.remove('fadeOut');
          btn.style.display = 'block';
          btn.classList.add('fadeIn');
        } else {
          btn.classList.remove('fadeIn');
          btn.classList.add('fadeOut');
        }
      }
    });
  }

  render() {
    return (
      <button
        className="back-to-top animated"
        aria-label="Back to top"
        style={{ display: 'none', position: 'fixed', right: '20px', bottom: '20px' }}
      >
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </button>
    );
  }
}

export default BackToTop;
