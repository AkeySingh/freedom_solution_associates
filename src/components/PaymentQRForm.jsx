// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const PaymentQRForm = () => {
//   const [showQR, setShowQR] = useState(false);

//   // Replace with your own QR code URL
//   const qrCodeURL = "https://yourdomain.com/upi-qr-code.png"; // Upload your static UPI QR or use dynamic generator

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <motion.button
//         onClick={() => setShowQR(true)}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg font-semibold"
//       >
//         Make Payment
//       </motion.button>

//       <AnimatePresence>
//         {showQR && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.4 }}
//             className="mt-8 bg-white rounded-xl shadow-2xl p-6 w-full max-w-md text-center"
//           >
//             <h2 className="text-xl font-bold text-gray-800 mb-4">
//               Scan to Pay
//             </h2>

//             <img
//               src={qrCodeURL}
//               alt="QR Code"
//               className="mx-auto w-56 h-56 object-contain border rounded-lg shadow-md"
//             />

//             <div className="mt-4 space-y-1 text-gray-700">
//               <p>
//                 <span className="font-semibold">Pay to:</span> Freedom Solution
//               </p>
//               <p>
//                 <span className="font-semibold">UPI ID:</span> freedom@upi
//               </p>
//               <p>
//                 <span className="font-semibold">Amount:</span> ₹999
//               </p>
//               <p className="text-sm text-gray-500 mt-1">
//                 Use any UPI app to complete the payment.
//               </p>
//             </div>

//             <motion.button
//               onClick={() => setShowQR(false)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="mt-6 bg-red-500 text-white px-5 py-2 rounded-md font-semibold"
//             >
//               Close
//             </motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default PaymentQRForm;
