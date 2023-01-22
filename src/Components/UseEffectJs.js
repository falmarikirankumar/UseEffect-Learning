// import React from "react";
// import { useEffect, useState } from "react";
// // import "../App.css";
// const UseEffectJs = () => {
//   const [num1, setNum1] = useState(2);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const get = await fetch(
//         `https://hub.dummyapis.com/employee?noofRecords=${num1}&idStarts=1001`
//       );

//       const response = await get.json();
//       setData(response);
//       console.log(response);
//     }

//     getData();
//     document.title = `(${num1}) Employees Online`;
//   }, [num1]);

//   return (
//     <div>
//       <div>
//         <button onClick={() => setNum1(num1 + 2)}>Click {num1}</button>

//         {data.map((element, index) => {
//           return (
//             <div key={index} className="data">
//               <h4>{element.firstName}</h4>
//               <h4>{element.lastName}</h4>
//               <h4>{element.email}</h4>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default UseEffectJs;
