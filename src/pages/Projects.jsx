export default function Projects() {
  const projects = [
    {
      title: "Freelance shopify store",
      description: "Working on end-to-end Shopify projects , navigation bar (navbar) customization, UI enhancements, Gmc / GA4 setup and performance-focused storefront updates.",
      tech: ["JavaScript", "HTML", "CSS"," Liquids"],
      link: "https://ollypolly.in/"
    },
    {
      title: "Bluewave app",
      description: "Developed a cross-platform React Native mobile application using Expo. Implemented drawer navigation, multilingual support, and REST API integration.",
      tech: ["React Native", "Tailwind CSS", "Zustand" , "Node js" , "Express js" , "Firebase"],
      link: ""
    },
    {
      title: "KrishiVerse Shopify Store",
      description: "Built and managed an eCommerce website for KrishiVerse using Shopify platform.",
      tech: ["Shopify", "Liquid", "HTML", "CSS"],
      link: "https://shop.ouranosrobotics.com/"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 md:px-20 bg-transparent">

      {/* Project Cards */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-transparent hover:bg-blue-600 transition-all duration-[1000ms] 
                       rounded-xl p-6 shadow-md border border-gray-700
                       hover:shadow-lg hover:blue transition"
          >
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            <div className="text-sm text-gray-400 mb-4">
              {project.tech.join(" · ")}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 underline text-sm"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
