// import { useRef } from "react";

// const Form = () => {
//   const elInput = useRef();
//   const elSelect = useRef();

//   const handleSubmit = () => {
//     if (elInput.current.value != "") {
//       fetch("https://restcountries.com/v3.1/name/" + elInput.current.value)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data) {
//             setCountry({
//               isLoading: false,
//               data: data,
//             });
//           }
//         })
//         .catch((err) =>
//           setCountry({
//             isLoading: false,
//             data: [],
//             isError: err.message,
//           })
//         );
//     } else {
//       fetch("https://restcountries.com/v3.1/all")
//         .then((res) => res.json())
//         .then((data) => {
//           if (data) {
//             setCountry({
//               ...country,
//               isLoading: false,
//               data: data,
//             });
//           }
//         })
//         .catch((err) => {
//           if (err) {
//             setCountry({
//               ...country,
//               isLoading: false,
//               data: [],
//               isError: err.message,
//             });
//           }
//         });
//     }
//   };
//   return (
//     <>
 
//     </>
//   );
// };

// export default Form;
