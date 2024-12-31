import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function Footer  ()  {
    const handleClick = (link) => {
                // Optional: Handle link click logic, e.g., opening the link or tracking clicks.
                window.open(link, '_blank');
            };
    return (
        <footer className="footer">
            <div className="footer-summary">
                <h4>Made by shubhmmsk © 2025 All Rights Reserved<br></br><span className='connect'> Connet with us 💖</span></h4>
            </div>
            <div className="social-links">
                <a href="https://www.instagram.com/_shubham.sk" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/shubhammmsk" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.youtube.com/@Talkswithcode" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/in/shubham-kadam-98b3801b5 " target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;

// import React from 'react';
// import './Footer.css'; // Import your CSS file
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './style.css'

// function Footer() {
//     const handleClick = (link) => {
//         // Optional: Handle link click logic, e.g., opening the link or tracking clicks.
//         window.open(link, '_blank');
//     };

//     return (
//         <footer>
//             <div className="footer-summary">
//                 <p>Happy New Year! Follow us on social media.</p>
//             </div>
//             <div className="social-links">
//                 <i 
//                     className="fab fa-facebook social-icon" 
//                     onClick={() => handleClick('https://www.facebook.com')}
//                 ></i>
//                 <i 
//                     className="fab fa-instagram social-icon" 
//                     onClick={() => handleClick('https://www.instagram.com')}
//                 ></i>
//                 <i 
//                     className="fab fa-github social-icon" 
//                     onClick={() => handleClick('https://www.github.com')}
//                 ></i>
//                 <i 
//                     className="fab fa-twitter social-icon" 
//                     onClick={() => handleClick('https://www.twitter.com')}
//                 ></i>
//             </div>
//         </footer>
//     );
// }

// export default Footer;
