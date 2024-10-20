import { motion } from 'framer-motion';
import profile from '../assets/Headshot2.png';
import { HERO_CONTENT } from "../constant";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Simran Manwani</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end">
                        <motion.img variants={container(0)} initial="hidden" animate="visible" src={profile} className="lg:max-w-md h-[400px] rounded-full" alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
