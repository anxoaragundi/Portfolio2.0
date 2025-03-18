import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-gray-800 dark:text-gray-100 animate-fade-in">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Frontend Developer & UI/UX Enthusiast
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm a passionate frontend developer with a keen eye for design and user experience.
                My goal is to create beautiful, responsive, and user-friendly websites.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                With expertise in modern web technologies like React, TypeScript, and Tailwind CSS,
                I build scalable and maintainable applications that users love.
              </p>
            </div>
            <div className="order-first md:order-last">
              {/* Placeholder for profile image */}
              <div className="w-48 h-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full shadow-md"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">My Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card */}
            <div className="card">
              <div className="h-48 bg-gray-200 dark:bg-gray-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief description of the project and its key features.
                </p>
                <div className="flex gap-2">
                  <a href="#" className="text-blue-600 hover:text-blue-700">Demo</a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="text-blue-600 hover:text-blue-700">Code</a>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
