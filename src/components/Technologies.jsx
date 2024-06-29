import { motion } from 'framer-motion';
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5 className="text-7xl text-red-400" />
                </motion.div>
                <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoJavascript className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className="text-7xl text-green-400" />
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaPython className="text-7xl text-blue-700" />
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className="text-7xl text-green-700" />
                </motion.div>
                <motion.div variants={iconVariants(7)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMysql className="text-7xl text-orange-700" />
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaGitAlt className="text-7xl text-red-700" />
                </motion.div>
            </div>
        </div>
    )
}

export default Technologies
