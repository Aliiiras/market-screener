
import { motion } from "framer-motion";
// import MarketList from "./MarketList.jsx"


function TitleEffected() {
//   const sentence = {
//     hidden:{opacity:1},
//     visible:{
//       opacity:1,
//       transition:{
//         delay:0.5,
//         staggerChildren: 0.08,
//       },
//     },
//   }
// const letter={
//   hidden:{opacity:0 , y:50},
//     visible:{
//       opacity:1,
//     y:0,
//   }
// }
  return (
    <div>
      <motion.div
      className="text-white p-10 text-center rounded-xl mt-20 w-[80%] mx-auto"
      // variants={sentence}
      // initial="hidden"
      // animate="visible"
      animate={{ fontSize: "20px", color: "#fff" }}
      transition={{ duration: 1 }}
    >
      {/* <div className='h-[100vh]'></div> */}
      <div className='flex flex-col m-auto'>
        <h2 className='flex m-auto border border-neutral-900 rounded-2xl px-4 py-2 mb-[30px] text-[16px] font-bold'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" class="text-purple-500 mr-1 mt-1 border-[1px] border-neutral-500 rounded-md" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480 496H48a32 32 0 0 1-32-32V32a16 16 0 0 1 32 0v432h432a16 16 0 0 1 0 32z"></path><path d="M156 432h-40a36 36 0 0 1-36-36V244a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v152a36 36 0 0 1-36 36zm144 0h-40a36 36 0 0 1-36-36V196a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v200a36 36 0 0 1-36 36zm143.64 0h-40a36 36 0 0 1-36-36V132a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v264a36 36 0 0 1-36 36z"></path></svg>
          New opportunities</h2>
        <h1 className='uppercase relative z-10 mb-[40px] text-[40px] font-semibold'><span className='text-purple-600 font-light'>trade</span> your favourite markets</h1>
        <div className="glow-circle-red"></div>
        <h2 className='relative z-10 w-[45vw] m-auto font-semibold tracking-wide font-poppins
'>Wanna buy Bitcoin or trade CFDs on Gold or EUR/USD? We've got you covered with access to 100+ global markets on one platform.
        </h2>
        
        <a className='flex m-auto bg-purple-500 text-white rounded-3xl py-2 px-6 mt-8
         items-center justify-center hover:bg-purple-600 hover:text-white hover:translate-[4px]
         transform transition-all duration-100 font-bold' href=''> View All coins
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg>
        </a>
      </div>
      
    </motion.div>
    </div>

  )
}

export default TitleEffected