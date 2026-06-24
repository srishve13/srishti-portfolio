import clipquery from "./assets/projects/clipquery.png";
import medikart from "./assets/projects/medikart.png";
import lipreader from "./assets/projects/lipreader.png";
import { FaGithub, FaLinkedin, FaReact, FaJava, FaPython, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiTensorflow, SiOpencv, SiTailwindcss, SiFastapi, SiMysql, SiPostman, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  PlayCircle,
  Pill,
  Brain,
  ExternalLink,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./components/Reveal";
import { MdEmail } from "react-icons/md";
import resume from "./assets/resume.pdf";
import { FaFilePdf } from "react-icons/fa";
import "@fontsource/space-grotesk";
import profilePic from "./assets/profile.jpeg";
import { ChevronDown } from "lucide-react";
import igdtuwLogo from "./assets/logos/igdtuw.png";
import ignouLogo from "./assets/logos/ignou.png";
import { FaPhoneAlt } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-cyan-400/20 bg-[#050816]/70 px-8 py-4 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.08)]">
        <div className="flex items-center gap-6 text-sm md:text-base md:gap-8 font-medium">
          <a
            href="#about"
            className="transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
              About
            </a>
            <a
              href="#projects"
              className="transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                Projects
              </a>
              <a href="#skills"
              className="transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              >
                Skills
              </a>
              <a href="#contact"
              className="transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                Contact
              </a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center px-8 lg:px-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-blob absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-3xl"></div>

          <div className="animate-blob absolute right-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/15 blur-3xl"></div>
        </div>

        <div className="absolute left-[20%] top-[35%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[180px]"></div>
        <div className="absolute right-[5%] top-[20%] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[180px]"></div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.4fr_0.6fr] items-center">

          <div className="w-full">

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              MCA Student • Full Stack Developer • AI Enthusiast
            </p>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl font-bold tracking-tight md:text-8xl"
            >
              Hi, I'm{" "}
              <span className="text-cyan-400">
                Srishti
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-lg text-gray-300"
            >
              I build things that think - from AI-powered video search engines to full-stack e-commerce platforms. Currently pursuing MCA at IGDTUW, Delhi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity:1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >

              <a
                href="#projects"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
              >
                View Projects
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/5 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              >
                <FaFilePdf className="text-[#FF4B4B]" />
                <span>Resume</span>
              </a>
              <a
                href="https://github.com/srishve13"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/5 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              >
                <FaGithub className="text-white" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/srishti-kumari-99721a380"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/5 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              >
                <FaLinkedin className="text-[#0A66C2]" />
                LinkedIn
              </a>

            </motion.div>

            <div className="scroll-indicator mt-16 flex items-center gap-2 text-sm text-gray-500">
              <span>Scroll to explore</span>
              <ChevronDown size={16} />
            </div>

          </div>
        <Reveal delay={0.4}>
          <div className="hidden lg:flex justify-center -mt-12">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/25 blur-[80px]"></div>
              <img
                src={profilePic}
                alt="Srishti"
                className="relative z-10 h-[350px] w-[350px] rounded-full object-cover border border-cyan-500/20 transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,0.35)]"
              />
            </div>
          </div>
        </Reveal>

        </div>

      </section>

      <div className="my-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <section id="about"
      className="px-8 pb-24 lg:px-24">
        <div className="mb-20">
          <Reveal delay={0.15}>
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                About Me
              </p>

              <h2 className="text-4xl font-bold mb-6">
                Building at the intersection of code and intelligence.
              </h2>

              <div className="text-gray-300 text-lg leading-9 space-y-8">
                <p>
                  I'm an MCA student and developer with a strong interest in{" "}
                  <strong className="text-cyan-400">
                    AI/ML systems
                  </strong>
                  {" "}and{" "}
                  <strong className="text-cyan-400">
                    full-stack engineering
                  </strong>
                  . I enjoy solving problems that combine creativity with technical depth - whether it's training deep learning models, designing scalable backend systems, or building intuitive user experiences.
                </p>
                <p>
                  My recent work includes{" "}
                  <strong className="text-cyan-400">
                    semantic video search
                  </strong>
                  ,{" "}
                  <strong className="text-cyan-400">
                    deep learning-based lip reading
                  </strong>
                  , and full-stack e-commerce applications. Each project has challenged me to explore new technologies and strengthen my understanding of software development and machine learning.
                </p>
                <p>
                  I'm constantly learning, experimenting with new frameworks, and exploring advancements in{" "}
                  <strong className="text-cyan-400">
                    computer vision
                  </strong>
                   {" "}and{" "} 
                  <strong className="text-cyan-400">
                    natural language processing
                  </strong>
                   . My goal is to build intelligent software that is both practical and impactful.
                </p>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <p className="text-cyan-400 text-sm font-medium">
                2025 - 2027
              </p>
              <img
                src={igdtuwLogo}
                alt="IGDTUW"
                className="mt-4 h-12 w-12 object-contain opacity-80"
              />

              <h3 className="text-2xl font-bold text-white mt-4">
              Master of Computer Applications 
              </h3>

              <p className="mt-3 text-gray-400">
              Indira Gandhi Delhi Technical University for Women (IGDTUW)
              </p>
            </div>

          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <p className="text-cyan-400 text-sm font-medium">
              2022 - 2025
            </p>
            <img
              src={ignouLogo}
              alt="IGNOU"
              className="mt-4 h-16 w-16 object-contain opacity-80"
            />

            <h3 className="text-2xl font-bold text-white">
              Bachelor of Computer Applications
            </h3>

            <p className="mt-3 text-gray-400">
              Indira Gandhi National Open University (IGNOU)
            </p>
          </div>
          </Reveal>

          

          <div id="projects" className="md:col-span-2 mt-12 mb-4">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Projects
            </p>

            <h2 className="text-4xl font-bold">
              Things I've Built
            </h2>

            <p className="mt-4 text-gray-400 max-w-2xl">
              A collection of AI-powered and full-stack applications built to solve real-world problems.
            </p>
          </div>
        
          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <PlayCircle size={24} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      ClipQuery
                    </h3>

                    <p className="text-sm text-gray-400">
                      AI Semantic Video Search
                    </p>
                  </div>
                </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://clip-query.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-cyan-400/50 px-4 py-2 font-medium text-cyan-400 transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                >
                  <span>View</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://github.com/srishve13/ClipQuery"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-cyan-400/50 px-3 py-3 font-medium text-cyan-400 transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"  
                >
                  <FaGithub className="text-white" />
                </a>
              </div>
            </div>

            <div className="mt-6 mb-6 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={clipquery}
                alt="ClipQuery"
                className="w-full transition duration-500 hover:scale-105"
              />
            </div>

              <p className="text-gray-300 leading-relaxed">
                AI-powered semantic video search system that finds relevant clips using natural language instead of keywords.
              </p>

              <ul className="mt-6 space-y-2 text-gray-400">
                <li>• Frame extraction & BLIP caption generation</li>
                <li>• Semantic retrieval with SentenceTransformers</li>
                <li>• Timestamp-based FFmpeg clip extraction</li>
                <li>• Interactive search dashboard</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                  React.js
                </span>

                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                  FastAPI
                </span>

                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                  OpenCV
                </span>

                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                  BLIP
                </span>

                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                  SentenceTransformers
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <ShoppingCart size={24} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      MediKart
                    </h3>

                    <p className="text-sm text-gray-400">
                      Full-Stack E-Commerce Platform
                    </p>
                  </div>
                </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://medi-kart-one.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-cyan-400/50 px-4 py-2 font-medium text-cyan-400 transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                >
                  <span>View</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://github.com/srishve13/MediKart"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-cyan-400/50 px-3 py-3 font-medium text-cyan-400 transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"  
                >
                  <FaGithub className="text-white" />
                </a>
              </div>
            </div>

            <div className="mt-6 mb-6 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={medikart}
                alt="MediKart"
                className="w-full transition duration-500 hover:scale-105"
              />
            </div>

              <p className="text-gray-300 leading-relaxed">
                Full-stack medicine e-commerce platform built with React, Spring Boot and PostgreSQL.
              </p>

              <ul className="mt-6 space-y-2 text-gray-400">
                <li>• Product search, cart & order management</li>
                <li>• Secure authentication system</li>
                <li>• REST APIs for frontend-backend communication</li>
                <li>• PostgreSQL database deployment</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">React.js</span>
                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">Spring Boot</span>
                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">PostgreSQL</span>
                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">REST API</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Brain size={24} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Lip Reader
                    </h3>

                    <p className="text-sm text-gray-400">
                      Deep Learning Lip Reading System
                    </p>
                  </div>
                </div>

                <span className="rounded-xl border border-cyan-500/20 px-4 py-2 text-sm text-gray-400">
                  Academic
                </span>
              </div>

              <div className="mt-6 mb-6 overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={lipreader}
                  alt="Lip Reader"
                  className="w-full transition duration-500 hover:scale-105"
                />
              </div>

              <p className="text-gray-300 leading-relaxed">
                Deep learning-based lip-reading application capable of predicting spoken words from visual mouth movements.
              </p>

              <ul className="mt-6 space-y-2 text-gray-400">
                <li>• Computer Vision based preprocessing</li>
                <li>• Sequence modelling using deep learning</li>
                <li>• Video-to-text prediction pipeline</li>
                <li>• Real-time inference experiments</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">Python</span>
                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">TensorFlow</span>
                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">OpenCV</span>
                <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">Deep Learning</span>
              </div>

            </div>
          </Reveal>
        
        
            
      </div>
      
      <Reveal delay={0.2}>
        <div id="skills"
        className="mt-20 mb-6">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
            Skills
          </p>

          <h2 className="text-4xl font-bold">
            What I Know
          </h2>

          <p className="mt-4 text-gray-400">
            Core concepts, programming languages and tools I use.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Programming
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaJava className="text-[#ED8B00]" />
                  <span>Java</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPython className="text-[#3776AB]" />
                <span>Python</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-blue-500 font-bold">C</span>
                <span>C</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-purple-500 font-bold">C++</span>
                <span>C++</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          <h3 className="text-xl font-bold text-cyan-400 mb-4">
            Core CS  
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span>🧩</span>
              <span>DSA</span>
            </div>
            <div className="flex items-center gap-3">
              <span>⚙️</span>
              <span>OOP</span>
            </div>
            <div className="flex items-center gap-3">
              <span>🗄️</span>
              <span>DBMS</span>
            </div>
            <div className="flex items-center gap-3">
              <span>🌐</span>
              <span>Computer Networks</span>
            </div>
            <div className="flex items-center gap-3">
              <span>💻</span>
              <span>Operating Systems</span>
            </div>
          </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Development
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span>🎨</span>
                <span>Frontend Development</span>
              </div>

              <div className="flex items-center gap-3">
                <span>⚙️</span>
                <span>Backend Development</span>
              </div>

              <div className="flex items-center gap-3">
                <span>🔗</span>
                <span>REST APIs</span>
              </div>

              <div className="flex items-center gap-3">
                <span>🚀</span>
                <span>Full Stack Development</span>  
              </div> 

            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Tools
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaGitAlt className="text-[#F05032]" />
                <span>Git</span>
            </div>

            <div className="flex items-center gap-3">
              <FaGithub className="text-white" />
              <span>GitHub</span>
            </div>

            <div className="flex items-center gap-3">
              <SiPostman className="text-[#FF6C37]" />
              <span>Postman</span>
            </div>

            <div className="flex items-center gap-3">
              <VscVscode className="text-[#007ACC]" />
              <span>VS Code</span>
            </div>

            </div>
          </div>
        </Reveal>
      </div>

      <div className="md:col-span-2">
          <Reveal delay={0.2}>
            <div className="mt-12 mb-4">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
                Technologies
              </p>

              <h2 className="text-4xl font-bold">
                Tech Stack
              </h2>

              <p className="mt-4 text-gray-400 max-w-2xl">
                Technologies I've worked with across  full-stack development and AI projects.
              </p>
            </div>
          </Reveal>
        </div>
      <Reveal delay={0.3}> 
        <div className="md:col-span-2 flex flex-wrap gap-4 w-full">
          <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-white/5 px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <FaReact className="text-[#61DAFB] text-xl" />
            <span>React</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-white/5 px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <SiTailwindcss className="text-[#06B6D4] text-xl" />
            <span>Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-white/5 px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <FaJava className="text-[#ED8B00] text-xl" />
            <span>Java</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-white/5 px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <SiSpringboot className="text-[#6DB33F] text-xl" />
            <span>Spring Boot</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-white/5 px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <SiPostgresql className="text-[#4169E1] text-xl" />
            <span>PostgreSQL</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-white/5 px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <SiMysql className="text-[#4479A1] text-xl" />
            <span>MySQL</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-white/5 px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <FaPython className="text-[#3776AB] text-xl" />
            <span>Python</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-white/5 px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <SiOpencv className="text-[#5C3EE8] text-xl" />
            <span>OpenCV</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-white/5 px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <SiTensorflow className="text-[#FF6F00] text-xl" />
            <span>TensorFlow</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-white/5 px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <SiFastapi className="text-[#009688] text-xl" />
            <span>FastAPI</span>
          </div>

        </div>
            
      </Reveal>
      </section >

      <div className="my-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <section id="contact"
      className="px-8 pb-40 lg:px-24">
        <Reveal delay={0.2}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Contact
            </p>

            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              Let's Work Together<span className="text-cyan-400 glow-dot">.</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
              I'm open to internships, collaborations, and interesting projects.
              Whether you have an idea or just want to say hello, my inbox is always open.
            </p>
            <div className="mt-10">
              <a
                href="mailto:srishve13@gmail.com"
                target="_blank"
                className="inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                Get In Touch
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-gray-400">
              <a
                href="mailto:srishve13@gmail.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-cyan-400 transition"  
              >
                <MdEmail className="text-[#EA4335]" />
                <span>srishve13@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/srishti-kumari-99721a380/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition"  
              >
                <FaLinkedin className="text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/srishve13"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition"  
              >
                <FaGithub className="text-white" />
                <span>GitHub</span>
              </a>
              <a
                href="https://leetcode.com/u/srishv13/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition"  
              >
                <SiLeetcode className="text-[#FFA116]" />
                <span>LeetCode</span>
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/srishurg6/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <SiGeeksforgeeks className="text-[#2F8D46]" />
                <span>GFG</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 transition hover:text-cyan-400">
                <FaPhoneAlt
                  className="text-green-500" />
                    <span>+91 7488117315</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal delay={0.3}>
        <div className="mt-32 border-t border-white/10 pt-12 pb-12 text-center text-sm text-gray-500">
          <p>© 2026 Srishti Kumari</p>
        </div>
      </Reveal>

    </div>
  );
}

export default App;