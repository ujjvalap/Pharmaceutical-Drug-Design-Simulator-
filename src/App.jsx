// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Pages/Header';

// import Footer  from './Pages/Footer_home';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Footer/>} />
//         <Route path="/" element={<Header/>} />

       

//       </Routes>
//     </Router>
//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import Footer from './Pages/Footer_home';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Header is always at the top */}
        <Header />

        {/* Routes will determine the page content */}
        <div className="content-container">
          <Routes>
           
            <Route path="/about" element={<h1>About Us</h1>} />
            <Route path="/contact" element={<h1>Contact Us</h1>} />
          </Routes>
        </div>

        {/* Footer is always at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;



