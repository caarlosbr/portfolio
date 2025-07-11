"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import {
  Code,
  Database,
  Cloud,
  Users,
  Lightbulb,
  Clock4,
  BookOpen,
  Target,
  Puzzle,
  RotateCcw,
  Brain,
  Monitor,
  Smartphone,
  Github,
  ExternalLink,
  Download,
  Sparkles,
  Mail,
  Linkedin,
  Figma,
  RefreshCcw,
  Sun,
  Moon,
  Home,
  User,
  Folders,
  Contact
} from "lucide-react"

import imgMyHandStats from "../assets/myhandStats.png"
import prueba from "../assets/prueba.png"
import casa from "../assets/casasrurales.png"
import cara from "../assets/logo_cara.jpg"
import curri from "../assets/CurrículumCarlosBorreguero.pdf"

const projects = [
  {
    id: 1,
    title: "MyHandStats",
    description:
      "MyHandStats es una aplicación que permite a clubes y entrandores de balonmano registrar estadísticas en tiempo real y analizarlas para mejorar el rendimiento del equipo",
    image: imgMyHandStats,
    technologies: ["React", "ChakraUI", "FastAPI", "Figma", "PostgreSQL", "Netlify", "Supabase"],
    github: "https://github.com/pmerida08/myHandStats",
    demo: "https://myhandstats.netlify.app/",
    gradient: "from-red-500 via-pink-500 to-purple-500",
    glowColor: "shadow-red-500/50",
  },
  {
    id: 2,
    title: "Casas Rurales",
    description: "CasasRurales es una web que permite a los usuarios encontrar casas rurales (simulación Airbnb)",
    image: casa,
    technologies: ["HTML", "CSS", "JS", "Figma"],
    github: "https://github.com/caarlosbr/CasasRurales.github.io",
    demo: "https://caarlosbr.github.io/CasasRurales.github.io/index_principal.html",
    gradient: "from-red-500 via-pink-500 to-purple-500",
    glowColor: "shadow-red-500/50",
  },
]

const developingProjects = [
  {
    id: 1,
    title: "StadisticsRA",
    description: "App móvil de entrenamiento de gimnasio con estadísticas avanzadas y seguimiento de progresos",
    image: prueba,
    technologies: ["React", "NodeJS", "ChakraUI", "Figma"],
    github: "https://github.com/caarlosbr/StadisticsRA",
    gradient: "from-orange-400 via-pink-500 to-red-500",
    glowColor: "shadow-orange-400/50",
  },
]

const learningSkills = [
  {
    name: "Python",
    icon: Code,
    category: "Lenguaje",
    color: "from-yellow-400 to-green-400",
    description: "Aprendiendo Python para análisis de datos y ML",
  },
  {
    name: "Machine Learning",
    icon: Brain,
    category: "IA",
    color: "from-purple-500 to-indigo-500",
    description: "Modelos supervisados y no supervisados",
  },
  {
    name: "n8n",
    icon: Code,
    category: "IA",
    color: "from-blue-400 to-green-400",
    description: "Creación de agentes de IA con n8n",
  },
  {
    name: "BigData",
    icon: Database,
    category: "Data Science",
    color: "from-blue-500 to-purple-500",
    description: "Introducción a Big Data y su análisis",
  },
]

const hardSkills = [
  {
    name: "React",
    icon: Code,
    category: "Frontend",
    color: "from-blue-400 to-cyan-400",
    description: "Desarrollo de interfaces modernas",
  },
  {
    name: "JavaScript",
    icon: Code,
    category: "Lenguaje",
    color: "from-yellow-400 to-orange-400",
    description: "ES6+, Async/Await, APIs",
  },
  {
    name: "Node.js",
    icon: Code,
    category: "Backend",
    color: "from-green-400 to-emerald-400",
    description: "APIs REST",
  },
  {
    name: "PHP",
    icon: Code,
    category: "Backend",
    color: "from-green-400 to-emerald-400",
    description: "APIs REST",
  },
  {
    name: "Git y GitHub",
    icon: Github,
    category: "Herramientas",
    color: "from-orange-500 to-red-500",
    description: "Control de versiones, GitHub",
  },
  {
    name: "VSCode",
    icon: Code,
    category: "Herramientas",
    color: "from-orange-500 to-red-500",
    description: "Editor de Código",
  },
  {
    name: "Figma",
    icon: Figma,
    category: "Herramientas",
    color: "from-orange-500 to-red-500",
    description: "Diseño UI/UX, prototipado",
  },
  {
    name: "Docker",
    icon: Cloud,
    category: "DevOps",
    color: "from-blue-500 to-cyan-500",
    description: "Containerización, microservicios",
  },
  {
    name: "MySQL",
    icon: Database,
    category: "Database",
    color: "from-blue-600 to-purple-600",
    description: "Queries complejas, optimización",
  },
  {
    name: "HTML",
    icon: Code,
    category: "Frontend",
    color: "from-blue-600 to-purple-600",
    description: "Desarrollo de estructuras, semántica",
  },
  {
    name: "CSS",
    icon: Code,
    category: "Frontend",
    color: "from-blue-600 to-purple-600",
    description: "Desarollo de estilos, Flexbox, Grid",
  },
  {
    name: "Chakra UI",
    icon: Code,
    category: "Frontend",
    color: "from-blue-600 to-purple-600",
    description: "Estilos, Diseño responsive",
  },
]

const softSkills = [
  {
    name: "Adaptabilidad",
    icon: RefreshCcw,
    color: "from-purple-400 to-pink-500",
    description: "Flexible ante cambios y nuevos desafíos",
  },
  {
    name: "Trabajo en Equipo",
    icon: Users,
    color: "from-indigo-400 to-blue-500",
    description: "Colaboración efectiva y sinergia grupal",
  },
  {
    name: "Creatividad",
    icon: Lightbulb,
    color: "from-yellow-500 to-red-500",
    description: "Soluciones innovadoras",
  },
  {
    name: "Gestión del Tiempo",
    icon: Clock4,
    color: "from-cyan-400 to-blue-600",
    description: "Optimización de tareas y prioridades",
  },
  {
    name: "Aprendizaje Continuo",
    icon: BookOpen,
    color: "from-emerald-400 to-green-600",
    description: "Siempre actualizándome con nuevas tecnologías",
  },
  {
    name: "Ambición",
    icon: Target,
    color: "from-emerald-400 to-green-600",
    description: "Siempre buscando nuevas metas y desafíos",
  },
  {
    name: "Resolución de Problemas",
    icon: Puzzle,
    color: "from-emerald-400 to-green-600",
    description: "Siempre buscando nuevas soluciones a los desafíos",
  },
  {
    name: "Proactividad",
    icon: RotateCcw,
    color: "from-emerald-400 to-green-600",
    description: "Siempre actualizándome con nuevas tecnologías",
  },
]

// Componente de partículas flotantes
function FloatingParticles({ darkMode }) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 ${darkMode ? "bg-blue-400" : "bg-blue-600"} rounded-full opacity-30`}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

// Cursor personalizado
function CustomCursor({ darkMode }) {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }
    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [cursorX, cursorY])

  return (
    <motion.div
      className={`fixed top-0 left-0 w-8 h-8 ${darkMode ? "bg-gradient-to-r from-blue-400 to-purple-400" : "bg-gradient-to-r from-blue-600 to-purple-600"} rounded-full pointer-events-none z-50 mix-blend-difference`}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  )
}

function ProjectCard({ project, index, darkMode }) {
  const [viewMode, setViewMode] = useState("desktop")
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className={`p-8 ${darkMode ? "bg-gray-900/80" : "bg-white/80"} backdrop-blur-xl border ${darkMode ? "border-gray-700" : "border-gray-300"} rounded-lg hover:border-transparent transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2`}
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Project Preview */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => setViewMode("desktop")}
                  className={`p-3 rounded-md transition-all duration-300 ${
                    viewMode === "desktop"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : `${darkMode ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800"}`
                  }`}
                >
                  <Monitor className="w-5 h-5" />
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => setViewMode("mobile")}
                  className={`p-3 rounded-md transition-all duration-300 ${
                    viewMode === "mobile"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : `${darkMode ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800"}`
                  }`}
                >
                  <Smartphone className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
            <motion.div className="relative" animate={{ rotateY: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
              {viewMode === "desktop" ? (
                <div className="relative">
                  <div
                    className={`${darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-gray-300 to-gray-400"} rounded-t-xl p-3 shadow-2xl`}
                  >
                    <div
                      className={`${darkMode ? "bg-black" : "bg-white"} rounded-lg p-0 relative overflow-hidden w-full`}
                    >
                      <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-red-500">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${darkMode ? "bg-gradient-to-b from-gray-800 to-gray-900" : "bg-gradient-to-b from-gray-300 to-gray-400"} h-6 rounded-b-xl shadow-lg`}
                  ></div>
                  <div
                    className={`${darkMode ? "bg-gray-700" : "bg-gray-500"} h-3 w-40 mx-auto rounded-b-lg shadow-md`}
                  ></div>
                </div>
              ) : (
                <div className="relative max-w-xs mx-auto">
                  <div
                    className={`${darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-gray-300 to-gray-400"} rounded-3xl p-3 shadow-2xl`}
                  >
                    <div className={`${darkMode ? "bg-black" : "bg-white"} rounded-2xl p-0 relative overflow-hidden`}>
                      <div
                        className={`${darkMode ? "bg-gray-800" : "bg-gray-400"} w-20 h-1.5 rounded-full mx-auto mb-3`}
                      ></div>
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-auto transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div
                        className={`${darkMode ? "bg-gray-800" : "bg-gray-400"} w-16 h-1.5 rounded-full mx-auto mt-3`}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
          {/* Project Info */}
          <div className="space-y-6">
            <div>
              <motion.h3
                className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${darkMode ? "from-white to-gray-300" : "from-gray-800 to-gray-600"} mb-3`}
                whileHover={{ scale: 1.05 }}
              >
                {project.title}
              </motion.h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed text-lg`}>
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`px-4 py-2 ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 border-gray-600 hover:border-gray-500" : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 border-gray-400 hover:border-gray-500"} rounded-full text-sm font-medium border transition-all duration-300`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="flex gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 border ${darkMode ? "border-gray-600 text-white hover:border-gray-400 hover:bg-gray-800" : "border-gray-400 text-gray-800 hover:border-gray-600 hover:bg-gray-100"} rounded-md transition-all duration-300`}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Demo Live
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"} overflow-hidden cursor-none`}
    >
      <CustomCursor darkMode={darkMode} />
      <FloatingParticles darkMode={darkMode} />

      {/* Animated Background */}
      <div className="fixed inset-0">
        <div
          className={`absolute inset-0 ${darkMode ? "bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30" : "bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50"} animate-pulse`}
        ></div>
        <motion.div
          style={{ y, opacity }}
          className={`absolute inset-0 ${darkMode ? "bg-gradient-to-t from-transparent via-blue-500/10 to-purple-500/10" : "bg-gradient-to-t from-transparent via-blue-200/20 to-purple-200/20"}`}
        />
        <div
          className={`absolute inset-0 ${darkMode ? "bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" : "bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]"}`}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 ${darkMode ? "bg-black/10" : "bg-white/10"} backdrop-blur-3xl border-b ${darkMode ? "border-white/10" : "border-black/10"} transition-all duration-500`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 group"
            >
              <motion.div className="relative" whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.6 }}>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </motion.div>
              <div className="flex flex-col">
                <motion.h1
                  className="text-xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Carlos Borreguero
                </motion.h1>
                <span
                  className={`text-xs font-medium ${darkMode ? "text-gray-400" : "text-gray-600"} tracking-wider uppercase`}
                >
                  Full Stack Developer
                </span>
              </div>
            </motion.div>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center">
              <div
                className={`flex items-center gap-1 p-2 rounded-2xl ${darkMode ? "bg-white/5" : "bg-black/5"} backdrop-blur-xl border ${darkMode ? "border-white/10" : "border-black/10"}`}
              >
                {[
                  { name: "Inicio", href: "#inicio", icon: <Home/> },
                  { name: "Sobre mí", href: "#sobremi", icon: <User/> },
                  { name: "Proyectos", href: "#proyectos", icon: <Folders/> },
                  { name: "Contacto", href: "#contacto", icon: <Contact/> },
                ].map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 group ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-sm">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId="navHover"
                    />
                    <motion.div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl ${darkMode ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"} backdrop-blur-xl border ${darkMode ? "border-white/20" : "border-black/20"} transition-all duration-300 group overflow-hidden`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="relative z-10 flex items-center gap-2"
                  animate={{ x: darkMode ? 0 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div animate={{ rotate: darkMode ? 0 : 180 }} transition={{ duration: 0.5 }}>
                    {darkMode ? (
                      <Sun className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <Moon className="w-5 h-5 text-blue-400" />
                    )}
                  </motion.div>
                  <span className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-800"} hidden sm:block`}>
                    {darkMode ? "Claro" : "Oscuro"}
                  </span>
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: darkMode ? 0 : 1 }}
                />
              </motion.button>

              {/* CTA Button */}
              <motion.a
                href="#contacto"
                className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-semibold rounded-2xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Hablemos</span>
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Foto Personal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mx-auto lg:mx-0 order-2 lg:order-1"
            >
              <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow blur-lg opacity-75"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                <img
                  src={cara || "/placeholder.svg"}
                  alt="Mi foto"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-ping"></div>
              </div>
            </motion.div>
            {/* Texto Hero */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full"
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 leading-tight break-words"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  style={{
                    background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)",
                    backgroundSize: "300% 300%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    wordBreak: "break-word",
                    hyphens: "auto",
                  }}
                >
                  BIENVENIDO
                  <br />
                  <span className={darkMode ? "text-white" : "text-gray-900"}></span>
                </motion.h1>
                <motion.p
                  className={`text-lg sm:text-xl lg:text-2xl ${darkMode ? "text-gray-300" : "text-gray-600"} mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Buenas soy Carlos, un apasionado desarrollador web, actualmente estudiando ML y IA, y Bienvenido a mi
                  Portfolio
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-base sm:text-lg rounded-md hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Ver Proyectos
                    </button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={curri}
                      download
                      className={`w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 ${darkMode ? "border-gray-600 text-white hover:border-white hover:bg-white hover:text-black" : "border-gray-400 text-gray-800 hover:border-gray-800 hover:bg-gray-800 hover:text-white"} text-base sm:text-lg rounded-md transition-all duration-300`}
                    >
                      <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Descargar CV
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="sobremi" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mis Habilidades
            </h2>
            <p className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-4xl mx-auto leading-relaxed`}>
              Aquí puedes ver un resumen de mis habilidades técnicas y blandas. Me apasiona aprender y mejorar
              continuamente, y siempre estoy abierto a nuevos desafíos y oportunidades para crecer como desarrollador.
            </p>
          </motion.div>

          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Hard Skills
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {hardSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.3 },
                    }}
                    className="group relative"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                      style={{
                        background: `linear-gradient(45deg, ${skill.color
                          .replace("from-", "")
                          .replace("to-", "")
                          .split(" ")
                          .join(", ")})`,
                      }}
                    />
                    <div
                      className={`relative p-6 ${darkMode ? "bg-gray-900/80" : "bg-white/80"} backdrop-blur-xl border ${darkMode ? "border-gray-700" : "border-gray-300"} rounded-xl hover:border-transparent transition-all duration-500 hover:shadow-2xl group-hover:shadow-current/25`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className={`text-4xl ${darkMode ? "text-white" : "text-gray-800"}`}
                          whileHover={{
                            scale: 1.2,
                            rotate: [0, -10, 10, 0],
                            transition: { duration: 0.5 },
                          }}
                        >
                          <Icon className="w-8 h-8" />
                        </motion.div>
                        <div>
                          <h4
                            className={`text-xl font-bold ${darkMode ? "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300" : "text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600"} transition-all duration-300`}
                          >
                            {skill.name}
                          </h4>
                          <span
                            className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white font-medium`}
                          >
                            {skill.category}
                          </span>
                        </div>
                      </div>
                      <p
                        className={`${darkMode ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-700"} text-sm leading-relaxed transition-colors duration-300`}
                      >
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Soft Skills
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      transition: { duration: 0.3 },
                    }}
                    className="group relative"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                      style={{
                        background: `linear-gradient(45deg, ${skill.color
                          .replace("from-", "")
                          .replace("to-", "")
                          .split(" ")
                          .join(", ")})`,
                      }}
                    />
                    <div
                      className={`relative p-6 h-56 flex flex-col justify-between ${darkMode ? "bg-gray-900/60" : "bg-white/60"} backdrop-blur-xl border ${darkMode ? "border-gray-700" : "border-gray-300"} rounded-2xl hover:border-transparent transition-all duration-500 hover:shadow-2xl group-hover:shadow-current/25 text-center`}
                    >
                      <motion.div
                        className={`mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}
                        whileHover={{
                          scale: 1.3,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.6 },
                        }}
                      >
                        <Icon className="w-10 h-10 mx-auto" />
                      </motion.div>
                      <h4
                        className={`text-lg font-bold ${darkMode ? "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300" : "text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600"} mb-3 transition-all duration-300`}
                      >
                        {skill.name}
                      </h4>
                      <p
                        className={`${darkMode ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-700"} text-sm leading-relaxed transition-colors duration-300`}
                      >
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Learning Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                  Aprendiendo
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      transition: { duration: 0.3 },
                    }}
                    className="group relative"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                      style={{
                        background: `linear-gradient(45deg, ${skill.color.replace("from-", "").replace("to-", "").split(" ").join(", ")})`,
                      }}
                    />
                    <div
                      className={`relative p-6 h-56 flex flex-col justify-between ${darkMode ? "bg-gray-900/60" : "bg-white/60"} backdrop-blur-xl border ${darkMode ? "border-gray-700" : "border-gray-300"} rounded-2xl hover:border-transparent transition-all duration-500 hover:shadow-2xl group-hover:shadow-current/25 text-center`}
                    >
                      <motion.div
                        className={`mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}
                        whileHover={{
                          scale: 1.3,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.6 },
                        }}
                      >
                        <Icon className="w-10 h-10 mx-auto" />
                      </motion.div>
                      <h4
                        className={`text-lg font-bold ${darkMode ? "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300" : "text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600"} mb-3 transition-all duration-300`}
                      >
                        {skill.name}
                      </h4>
                      <p
                        className={`${darkMode ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-700"} text-sm leading-relaxed transition-colors duration-300`}
                      >
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div
            className={`absolute top-20 left-10 w-20 h-20 ${darkMode ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20" : "bg-gradient-to-r from-blue-300/30 to-purple-300/30"} rounded-full blur-xl animate-float`}
          ></div>
          <div
            className={`absolute bottom-20 right-10 w-32 h-32 ${darkMode ? "bg-gradient-to-r from-pink-500/20 to-red-500/20" : "bg-gradient-to-r from-pink-300/30 to-red-300/30"} rounded-full blur-xl animate-float`}
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className={`absolute top-1/2 left-1/4 w-16 h-16 ${darkMode ? "bg-gradient-to-r from-cyan-500/20 to-teal-500/20" : "bg-gradient-to-r from-cyan-300/30 to-teal-300/30"} rounded-full blur-xl animate-float`}
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mis proyectos
            </h2>
            <p className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
              Una colección de mis creaciones más innovadoras
            </p>
          </motion.div>
          <div className="space-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </section>

      {/* Developing Projects Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              En Desarrollo
            </h2>
            <p className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
              Proyectos en los que estoy trabajando actualmente
            </p>
          </motion.div>
          <div className="space-y-24">
            {developingProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              ¡Conectemos!
            </h2>
            <p className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} mb-12`}>
              ¿Tienes una idea revolucionaria? ¡Hagámosla realidad juntos!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:carlosborregueror@gmail.com",
                  color: "from-red-500 to-pink-500",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/carlos-borreguero-540823296/",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/caarlosbr",
                  color: "from-gray-500 to-gray-700",
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${contact.color} text-white text-lg rounded-md hover:shadow-2xl hover:shadow-current/25 transition-all duration-300`}
                  >
                    <contact.icon className="w-6 h-6 mr-3" />
                    {contact.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
