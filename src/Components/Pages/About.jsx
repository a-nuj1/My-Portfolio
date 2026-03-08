import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCode, FaRocket, FaGlobeAmericas } from "react-icons/fa";
import { SiMongodb, SiLeetcode, SiJavascript, SiTypescript } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-14 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-blue-200 dark:bg-purple-900 opacity-30"
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Side - Heading & Tech Stack */}
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
              whileHover={{ scale: 1.02 }}
            >
              The <span className="text-blue-600 dark:text-purple-400">Developer</span> Behind the Code
              <div className="h-1.5 w-20 bg-blue-500 dark:bg-purple-500 mt-4 rounded-full"></div>
            </motion.h2>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: <SiJavascript className="text-yellow-500" />, text: "JavaScript" },
                { icon: <SiTypescript className="text-blue-400" />, text: "TypeScript" },
                { icon: <FaReact className="text-blue-500" />, text: "React/Next" },
                { icon: <FaNodeJs className="text-green-500" />, text: "Node.js" },
                { icon: <SiMongodb className="text-green-600" />, text: "MongoDB" },
                { icon: <SiLeetcode className="text-orange-500" />, text: "Knight @1885" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-full shadow-sm cursor-default"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="md:w-2/3 space-y-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl leading-relaxed">
              <span className="font-bold text-gray-900 dark:text-white">I don't just build websites; I engineer products.</span> 🚀 
              Currently an <span className="text-blue-600 dark:text-purple-400 font-semibold">SDE-1 at Inquisitive Digital</span>, 
              where I own the full software development lifecycle—from the first pixel of design to the final CI/CD deployment.
            </p>

            <div className="grid md:grid-cols-2 gap-4 py-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border-t-4 border-blue-500"
              >
                <FaGlobeAmericas className="text-2xl text-blue-500 mb-2" />
                <h4 className="font-bold text-gray-900 dark:text-white">Global Reach</h4>
                <p className="text-sm">Architecting premium booking engines for the London chauffeur market with complex GBP pricing logic.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border-t-4 border-purple-500"
              >
                <FaRocket className="text-2xl text-purple-500 mb-2" />
                <h4 className="font-bold text-gray-900 dark:text-white">Performance First</h4>
                <p className="text-sm">Optimized high-traffic wellness platforms, slashing network latency and improving journey efficiency by 60%.</p>
              </motion.div>
            </div>

            <motion.div 
              className="relative bg-blue-600 dark:bg-purple-900 p-6 rounded-2xl shadow-xl text-white"
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-4 right-4 text-white/20 text-5xl">
                <SiLeetcode />
              </div>
              <p className="text-lg font-medium leading-relaxed italic">
                "Solving complex problems is my adrenaline :)" 
              </p>
              <p className="mt-2 text-sm opacity-90">
                With over <span className="font-bold">900+ problems solved</span> and a Knight badge on LeetCode (1885 Rating), I bring deep algorithmic thinking to every line of production code.
              </p>
            </motion.div>

            <p className="text-lg leading-relaxed">
              Whether it's refactoring for <span className="font-semibold text-blue-600 dark:text-purple-400">100% mobile responsiveness</span> or 
              integrating real-time analytics, I focus on delivering scalable, clean, and user-centric solutions. 
              Let’s build the next big thing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;