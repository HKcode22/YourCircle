// "use client"
// import React, { useState, useEffect } from 'react';
// import db from '@/firebase';

// const Circle = ({ circleId }) => {
//   const [circle, setCircle] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCircle = async () => {
//       try {
//         const doc = await db.collection('circles').doc(circleId).get();
//         if (doc.exists) {
//           setCircle(doc.data());
//         } else {
//           console.log("No such circle!");
//         }
//       } catch (error) {
//         console.error("Error fetching circle: ", error);
//       }
//       setLoading(false);
//     };

//     fetchCircle();
//   }, [circleId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {circle ? (
//         <div>
//           <h2>{circle.name}</h2>
//           <p>{circle.description}</p>
//           {/* Render other details of the circle */}
//         </div>
//       ) : (
//         <p>No circle found.</p>
//       )}
//     </div>
//   );
// };

// export default Circle;
