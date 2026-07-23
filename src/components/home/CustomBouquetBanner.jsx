// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import customBouquet from "/src/images/home_build/image1.png"; // add your image

// // export default function CustomBouquetBanner() {
// //   return (
// //     <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
// //       <motion.div
// //         initial={{ opacity: 0, y: 25 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.6 }}
// //         className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#fff7f5] to-[#fdecec] shadow-xl"
// //       >
// //         <div className="grid grid-cols-2 overflow-hidden rounded-3xl bg-gradient-to-r from-[#fff7f5] to-[#fdecec] shadow-lg">

// //           {/* Left Image */}
// //           <div className="h-full">
// //             <img
// //               src={customBouquet}
// //               alt="Build Your Own Bouquet"
// //               className="h-full w-full object-cover"
// //             />
// //           </div>

// //           {/* Right Content */}
// //           <div className="flex flex-col justify-center px-4 py-3 sm:px-6">
// //             <span className="rounded-full bg-pink-100 px-4 py-1 text-sm font-semibold text-pink-600">
// //               ✨ Our Signature Experience
// //             </span>

// //             <h2 className="mt-2 font-display text-lg font-semibold text-cocoa sm:text-2xl lg:text-4xl">
// //               Build Your Own
// //               <br />
// //               Bouquet & Hamper
// //             </h2>

// //             <p className="mt-2 text-xs leading-relaxed text-cocoa-light sm:text-sm">
// //               Create a one-of-a-kind bouquet or gift hamper crafted just for your special moments.
// //             </p>

// //             <div className="mt-4 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 sm:text-sm">
// //               <span>🌸 Flowers</span>
// //               <span>🍫 Chocolates</span>
// //               <span>📸 Photos</span>
// //               <span>💍 Jewellery</span>
// //             </div>

// //             <Link
// //               to="/build-your-own-bouquet"
// //               className="mt-3 inline-flex w-fit rounded-full bg-cocoa px-4 py-2 text-xs font-medium text-white"
// //             >
// //               Start Customizing →
// //             </Link>
// //           </div>
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // }
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import customBouquet from "/src/images/home_build/image1.png"; // add your image

// export default function CustomBouquetBanner() {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 25 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#eaf5fb] via-[#f3f9fc] to-[#fffaf3] shadow-[0_8px_30px_rgba(60,110,150,0.12)] ring-1 ring-[#d9ecf5]"
//       >
//         {/* top-right highlight pill */}
//         <span className="absolute right-3 top-3 z-10 hidden items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#2f6690] shadow-[0_2px_10px_rgba(60,110,150,0.15)] backdrop-blur sm:inline-flex sm:right-5 sm:top-5">
//           🎨 1000+ Custom Combinations
//         </span>

//         <div className="grid grid-cols-5 items-stretch sm:h-[260px]">
//           {/* Left Image */}
//           <div className="relative col-span-2 h-full overflow-hidden">
//             <img
//               src={customBouquet}
//               alt="Build Your Own Bouquet"
//               className="h-full w-full object-cover"
//             />
//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 sm:to-white/20" />
//           </div>

//           {/* Right Content */}
//           <div className="col-span-3 flex flex-col justify-center gap-2 px-4 py-4 sm:gap-3 sm:px-8 sm:py-6">
//             <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#dcf0f9] px-3 py-1 text-[10px] font-semibold tracking-wide text-[#276184] sm:text-xs">
//               ✨ Our Signature Experience
//             </span>

//             <h2 className="font-display text-base font-semibold leading-tight text-[#1f3b4d] sm:text-2xl lg:text-[2rem]">
//               Build Your Own Bouquet
//               <span className="hidden sm:inline"> &amp; Hamper</span>
//             </h2>

//             <p className="max-w-md text-[11px] leading-relaxed text-[#5c7686] sm:text-sm">
//               Create a one-of-a-kind bouquet or gift hamper crafted just for your special moments.
//             </p>

//             <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-medium text-[#3a5b6e] sm:gap-x-4 sm:text-sm">
//               <span>🌸 Flowers</span>
//               <span>🍫 Chocolates</span>
//               <span>📸 Photos</span>
//               <span>💍 Jewellery</span>
//             </div>

//             <Link
//               to="/build-your-own-bouquet"
//               className="group mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-[#2f6690] to-[#3d84b8] px-4 py-2 text-[11px] font-semibold text-white shadow-[0_4px_16px_rgba(47,102,144,0.35)] transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_6px_20px_rgba(47,102,144,0.45)] sm:px-6 sm:py-2.5 sm:text-sm"
//             >
//               Start Customizing
//               <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import customBouquet from "/src/images/home_build/image1.png"; // add your image

export default function CustomBouquetBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FBF7F1] via-[#FFF8F2] to-[#FDF2E8] shadow-[0_8px_30px_rgba(122,92,69,0.14)] ring-1 ring-[#F0E1C8]"
      >
        {/* top-right highlight pill */}
        <span className="absolute right-3 top-3 z-10 hidden items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold text-[#7A5C45] shadow-[0_2px_10px_rgba(122,92,69,0.18)] backdrop-blur sm:inline-flex sm:right-5 sm:top-5 ring-1 ring-[#F5E4BF]">
          🎨 1000+ Custom Combinations
        </span>

        <div className="grid grid-cols-5 items-stretch sm:h-[260px]">
          {/* Left Image */}
          <div className="relative col-span-2 h-full overflow-hidden">
            <img
              src={customBouquet}
              alt="Build Your Own Bouquet"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FBF7F1]/25 sm:to-[#FBF7F1]/35" />
          </div>

          {/* Right Content */}
          <div className="col-span-3 flex flex-col justify-center gap-2 px-4 py-4 sm:gap-3 sm:px-8 sm:py-6">
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#F5E4BF] px-3 py-1 text-[10px] font-semibold tracking-wide text-[#7A5C45] sm:text-xs">
              ✨ Our Signature Experience
            </span>

            <h2 className="font-display text-base font-semibold leading-tight text-[#5C4530] sm:text-2xl lg:text-[2rem]">
              Build Your Own Bouquet
              <span className="hidden sm:inline"> &amp; Hamper</span>
            </h2>

            <p className="max-w-md text-[11px] leading-relaxed text-[#8C7460] sm:text-sm">
              Create a one-of-a-kind bouquet or gift hamper crafted just for your special moments.
            </p>

            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-medium text-[#7A5C45] sm:gap-x-4 sm:text-sm">
              <span>🌸 Flowers</span>
              <span>🍫 Chocolates</span>
              <span>📸 Photos</span>
              <span>💍 Jewellery</span>
            </div>

            <Link
              to="/build-your-own-bouquet"
              className="group mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-[#7A5C45] to-[#9C7A54] px-4 py-2 text-[11px] font-semibold text-white shadow-[0_4px_16px_rgba(122,92,69,0.35)] transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_6px_20px_rgba(122,92,69,0.45)] sm:px-6 sm:py-2.5 sm:text-sm"
            >
              Start Customizing
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
