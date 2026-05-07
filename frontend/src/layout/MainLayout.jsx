// import Navbar from "../components/Navbar";
// import { FaHeart } from "react-icons/fa";

// const MainLayout = ({ children }) => {
//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col">

//       <Navbar />

//       {/* Main Content */}
//       <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
//         {children}
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-gray-100 bg-white mt-auto">
//         <div className="max-w-7xl mx-auto px-6 py-8">

//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

//             {/* Brand */}
//             <div className="flex items-center gap-2">
//               <span className="inline-flex w-6 h-6 bg-gray-950 rounded-md items-center justify-center">
//                 <span className="text-white text-[10px] font-black">S</span>
//               </span>
//               <span className="font-black text-gray-950 text-sm tracking-tight">
//                 ShopHub
//               </span>
//             </div>

//             {/* Center links */}
//             <div className="flex items-center gap-6 text-xs text-gray-400 font-medium">
//               <a href="#" className="hover:text-gray-700 transition-colors duration-150">
//                 Privacy Policy
//               </a>
//               <a href="#" className="hover:text-gray-700 transition-colors duration-150">
//                 Terms of Use
//               </a>
//               <a href="#" className="hover:text-gray-700 transition-colors duration-150">
//                 Support
//               </a>
//             </div>

//             {/* Right — made with love */}
//             <p className="text-xs text-gray-400 flex items-center gap-1">
//               Made with
//               <FaHeart className="text-red-400 text-[10px]" />
//               in India
//             </p>

//           </div>

//           {/* Bottom line */}
//           <div className="border-t border-gray-100 mt-6 pt-5 text-center">
//             <p className="text-xs text-gray-300">
//               © {new Date().getFullYear()} ShopHub. All rights reserved.
//             </p>
//           </div>

//         </div>
//       </footer>

//     </div>
//   );
// };

// export default MainLayout;


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;