import { motion } from "framer-motion";
import crochetPattern from "../../assets/patterns/didi_bnadoge.png";

import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import CustomRequestForm from "./CustomRequestForm";

// const features = [
//   {
//     title: "Can We Make It?",
//     desc: "We'll check if your design can be crocheted.",
//     icon: "🧶",
//   },
//   {
//     title: "Get Final Price",
//     desc: "Receive an estimated price on WhatsApp.",
//     icon: "💰",
//   },
// ];

export default function DidiYeBanaDoge() {
  return (
    // <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8FB] via-[#FFF1F6] to-[#FFE8F1] py-20 lg:py-28">
<section className="relative overflow-hidden bg-[#FDFBF8] py-20 lg:py-28">

  {/* Pattern */}
  <div
    className="absolute inset-0 opacity-[0.40] pointer-events-none"
    style={{
      backgroundImage: `url(${crochetPattern})`,
      backgroundRepeat: "repeat",
      backgroundSize: "800px",
      backgroundPosition: "center",
    }}
  />

  {/* Background Glow */}
  <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#D46A94]/10 blur-[120px]" />
  <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#8DB8A4]/10 blur-[120px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6"></div>

    {/* Background Glow */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#D46A94]/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#8DB8A4]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-[#F2D8E2] bg-[#FFE4EE] px-5 py-2 text-sm font-semibold text-[#D46A94]">
              <Sparkles size={16} />
              CUSTOM CROCHET REQUEST
            </span>

            <div className="space-y-5">

              <h2 className="font-display text-4xl font-bold leading-tight text-[#5A3F50] sm:text-5xl">
                Didi, Ye Bana Doge?
                <span className="ml-2">💛</span>
              </h2>

              <p className="max-w-xl text-lg leading-8 text-[#7A6270]">
                Found a crochet design on
                <span className="font-semibold text-[#D46A94]">
                  {" "}Instagram
                </span>,
                <span className="font-semibold text-[#D46A94]">
                  {" "}Pinterest
                </span>
                {" "}or any website?
              </p>

              <p className="max-w-xl leading-8 text-[#7A6270]">
                Don't worry if it's not available in our shop.

                Simply upload a screenshot and we'll let you know if we can recreate it for you.
              </p>
            </div>
            {/* Cards */}

            {/* <div className="grid gap-4">
              {features.map((item) => (
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  key={item.title}
                  className="rounded-3xl border border-[#F2D8E2] bg-white p-5 shadow-md transition-all hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFE4EE] text-2xl">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#5A3F50]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#7A6270]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="rounded-[32px] border border-[#F2D8E2] bg-white/90 p-3 shadow-[0_20px_60px_rgba(212,106,148,0.18)] backdrop-blur-xl">
              <CustomRequestForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";
// import { UploadCloud, Search, MessageCircle } from "lucide-react";
// import CustomRequestForm from "./CustomRequestForm";

// const steps = [
//   {
//     title: "Upload a reference image",
//     desc: "Share the design you have in mind — a photo, a screenshot, a sketch.",
//     icon: UploadCloud,
//   },
  
//   {
//     title: "We reply on WhatsApp",
//     desc: "You'll hear back directly with price and delivery time.",
//     icon: MessageCircle,
//   },
// ];

// const chips = ["Handmade", "Custom Orders", "Made on Request"];

// const easeOut = [0.22, 1, 0.36, 1];

// export default function DidiYeBanaDoge() {
//   return (
//     <section className="relative overflow-hidden bg-[#FDFBF8] py-24 lg:py-32">
//       <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#FD7F79]/10 blur-[140px]" />
//       <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#F4DAC7]/40 blur-[120px]" />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.9, ease: easeOut }}
//             className="flex flex-col justify-center"
//           >
//             <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#683E22]/60">
//               Custom Requests
//             </span>

//             <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-[#2B0F05] sm:text-5xl">
//               Didi, Ye Bana Doge?
//             </h2>

//             <p className="mt-6 max-w-md text-base leading-[1.8] text-[#683E22]/70 sm:text-lg">
//               Found something you love on Pinterest or Instagram? Send us a
//               reference image and we'll tell you if it can be handmade — with
//               a price and timeline, on WhatsApp.
//             </p>

//             {/* Steps */}
//             <div className="relative mt-12 flex flex-col gap-10">
//               <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[#683E22]/20 via-[#683E22]/10 to-transparent" />
//               {steps.map((step, i) => (
//                 <motion.div
//                   key={step.title}
//                   initial={{ opacity: 0, x: -16 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.5 }}
//                   transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
//                   className="group relative flex gap-5"
//                 >
//                   <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#683E22]/20 bg-[#FEF9EE] text-[#683E22] transition-colors duration-500 group-hover:border-[#FD7F79]/40 group-hover:bg-[#F4DAC7]/60">
//                     <step.icon size={17} strokeWidth={1.5} />
//                   </span>
//                   <div className="pt-1.5">
//                     <h3 className="font-display text-base font-medium text-[#2B0F05]">
//                       {step.title}
//                     </h3>
//                     <p className="mt-1 text-sm leading-relaxed text-[#683E22]/60">
//                       {step.desc}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Chips */}
//             <div className="mt-12 flex flex-wrap gap-3">
//               {chips.map((chip) => (
//                 <span
//                   key={chip}
//                   className="rounded-full border border-[#683E22]/20 px-4 py-1.5 text-xs font-medium tracking-wide text-[#683E22]/70 transition-colors duration-500 hover:border-[#FD7F79]/40 hover:text-[#2B0F05]"
//                 >
//                   {chip}
//                 </span>
//               ))}
//             </div>
//           </motion.div>

//           {/* RIGHT — form */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
//             className="flex items-center"
//           >
//             <div className="w-full rounded-[28px] border border-[#F4DAC7] bg-white/70 p-2 shadow-[0_30px_80px_-20px_rgba(43,15,5,0.18)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_40px_100px_-20px_rgba(43,15,5,0.22)] sm:p-3">
//               <div className="rounded-[22px] bg-white/40 p-4 sm:p-6">
//                 <CustomRequestForm />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
