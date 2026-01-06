import CustomCard from "../components/Card";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-20 bg-transparent overfolw-y scroll-behavior: smooth;">
      <div className="m-6 space-y-6">
        <p className="text-3xl leading-relaxed text-blue-300">
         
        Hi 👋 I'm Riya Awadhiya

        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          I am a Computer Science student (B.Tech CSE – 2026) with hands-on experience in web
        and app develpment . I enjoy building clean, user-friendly, and scalable applications.
        </p>
        
        <p className="text-lg leading-relaxed text-gray-300">
      Currently working as a freelance Shopify developer, building and managing Shopify stores end-to-end—from initial setup to final deployment.        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Completed a 6-month internship as a Frontend React Native Developer at KrishiVerse,
          where I contributed to building a Shopify website and developed features for a React Native mobile application.

           Previously, I completed a 3-month internship as a UI/UX designer at Hartalkar Innovations, where I designed the UI for a speedometer project.
        </p>
      </div>

      {/* Skills Section */}
   

<div className="p-4 mt-12 mb-10 flex border justify-center w-fit  mx-auto">
  <h2 className="whitespace-nowrap text-xl sm:text-xl md:text-3xl lg:text-4xl text-blue-300 font-semibold text-center">
    Technologies & Skills
  </h2>
</div>

      <div className="flex justify-start gap-1 flex-wrap">
        <CustomCard />
      </div>
    </section>
  );
}
