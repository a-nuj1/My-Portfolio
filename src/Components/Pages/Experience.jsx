import { motion } from "framer-motion";
import { FaLaptopCode, FaChartLine, FaExternalLinkAlt, FaCodeBranch, FaServer } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "SDE-1",
      company: "Inquisitive Digital",
      companyLink: "https://www.inquisitivedigital.com/",
      period: "July 2025 - Present",
      location: "Noida, UP",
      icon: <FaCodeBranch />,
      description: [
        {
          text: "End-to-End Product Ownership: Architecting the official Inquisitive Digital web application from scratch, managing UI design, backend logic, and production deployment.",
          link: "https://www.inquisitivedigital.com/"
        },
        {
          text: "Chauffeur Booking Engine: Developing a premium car rental platform for JK Executive Chauffeurs (London), implementing complex GBP pricing logic and real-time fleet management.",
          link: "https://lavender-salmon-796541.hostingersite.com/"
        },
        {
          text: "Performance Engineering: Scaled The Mystic Healers platform, improving user journey efficiency by 40% through API caching and optimized asset delivery.",
          link: "https://www.themystichealers.com/"
        },
        {
          text: "Automation: Established robust CI/CD pipelines via GitHub Actions for automated testing and ensuring 100% cross-device compatibility."
        }
      ]
    },
    {
      title: "SDE Intern",
      company: "Bluestock Fintech",
      period: "Aug 2024 - Sep 2024",
      location: "Remote",
      icon: <FaLaptopCode />,
      description: [
        { text: "Developed stock market analytics features using ReactJS, Tailwind CSS, and JavaScript." },
        { text: "Led a team of 3 interns to implement pixel-perfect UIs from Figma designs." },
        { text: "Integrated real-time data streams with Python/Django backend systems." }
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="relative py-14 bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-black overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 -left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Section Header */}
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional <span className="text-blue-600 dark:text-purple-400">Journey</span>
            </h2>
            <div className="h-1.5 w-16 bg-blue-500 rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              From building high-stakes fintech tools to architecting full-scale luxury platforms for international clients.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="md:w-2/3 space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative pl-8 border-l-2 border-dashed border-blue-200 dark:border-gray-700 pb-8"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors duration-300" />
                
                {/* Content Card */}
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-sm hover:shadow-xl border border-white/20 dark:border-gray-700 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-purple-400 font-bold text-sm uppercase tracking-wider mb-1">
                        {exp.icon}
                        <span>{exp.title}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.companyLink ? (
                          <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 flex items-center gap-2">
                            {exp.company} <FaExternalLinkAlt className="text-xs" />
                          </a>
                        ) : exp.company}
                      </h3>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-gray-300 rounded-full mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex flex-col gap-1">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-500 dark:text-purple-400 mt-1.5 text-[8px]">●</span>
                          <span>{item.text}</span>
                        </div>
                        {item.link && (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-6 text-xs text-blue-500 dark:text-purple-400 hover:underline flex items-center gap-1 font-semibold"
                          >
                            View  <FaExternalLinkAlt className="text-[10px]" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;