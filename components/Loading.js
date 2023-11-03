// import React, { useState, useEffect } from 'react';
// import { css } from '@emotion/react';
// import { PropagateLoader } from 'react-spinners';


// const randomQuotes = [
//   "Loading some wisdom...",
//   "Stay patient, this might take a moment...",
//   "Generating inspiration...",
//   "Brewing creativity...",
// ];

// const override = css`
//   display: block;
//   margin: 0 auto;
// `;

// const LoadingScreen = () => {
//   const [quoteIndex, setQuoteIndex] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setQuoteIndex((prevIndex) => (prevIndex + 1) % randomQuotes.length);
//     }, 3000);

//     // Simulate a longer loading time
//     setTimeout(() => {
//       setLoading(false);
//     }, 5000); // Adjust the delay as needed

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   if (loading) {
//     return (
//       <div className="loading-screen">
//         <div className="spinner">
//           <PropagateLoader css={override} size={15} color={'#29D'} loading={true} />
//         </div>
//         <div className="quote">
//           <Typist>
//             {randomQuotes[quoteIndex]}
//           </Typist>
//         </div>
//       </div>
//     );
//   }

//   return null; // Return null when loading is complete
// };

// export default LoadingScreen;
