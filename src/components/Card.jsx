export default function CardGrid() {
const cards = [
  {
    title: "Frontend Developer",
    content:
      "Built responsive web interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS with a focus on clean UI and performance."
  },
  {
    title: "React Native Developer",
    content:
      "Developed cross-platform mobile applications using React Native (Expo), implementing drawer navigation, multilingual support, and API integration."
  },
  {
    title: "Shopify Developer",
    content:
      "Delivered end-to-end Shopify e-commerce solutions including custom theme development, product integration, and live store deployment."
  },
  {
    title: "UI/UX Designer",
    content:
      "Designed interactive UI components such as an animated EV speedometer and converted static designs into scalable React and Tailwind components."
  }
];


  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
         className="w-full min-h-[200px] text-white rounded-xl bg-transparent
hover:bg-blue-600 transition-all duration-[1000ms] 
shadow-[1px_1px_4px_rgba(0,123,255,0.4)] p-6  rounded-xlcursor-pointer p-6 flex flex-col justify-between "
        >
          <div>
            <h2 className="text-xl font-bold mb-2  ">{card.title}</h2>
            <p className="text-gray-200 text-sm">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
    
  );
}
