import React from 'react';
import { createRoot } from 'react-dom/client';

// Import CSS in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css';
import './style.css';

// Import JS libraries (non-React)
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

// Import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader.jsx';

// Grab the root element
const container = document.getElementById('root');
const root = createRoot(container); // New React 18/19 API

root.render(
  <React.Fragment>
    <Navbar />
    <Intro />
    <About />
    <Portfolio />
    <Contact />
    <BackToTop />
    <Preloader />
  </React.Fragment>
);

// Optional: service worker for PWA features
serviceWorker.unregister();
