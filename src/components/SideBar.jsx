import Pic from "../assets/my_profile.jpg";

function SideBar() {
  return (
    <div className="w-full sm:w-3/4 lg:w-1/4 bg-black border border-blue-300 h-1/2 text-white p-4 m-2 rounded-3xl relative top-24 left-16">
      
      {/* Large screen profile */}
      <div className="hidden lg:flex flex-col items-center relative left-5">
        <ProfileCard isMobile={false} />
      </div>

      {/* Small screen profile */}
      <div className="block lg:hidden flex flex-row items-center justify-center">
        <ProfileCard isMobile={true} />
      </div>

      {/* Contact Info */}
      <hr className="hidden lg:block border border-[#1f1f1f] my-6" />
      <div className="hidden lg:block space-y-4">
        <InfoItem icon="📧" label="EMAIL" value="riyaawadhiya8200@gmail.com" />
        <InfoItem icon="📱" label="PHONE" value="+91 89 6235 7984" />
        <InfoItem icon="🎂" label="BIRTHDAY" value="July 25, 2004" />
        <InfoItem icon="📍" label="LOCATION" value="Jabalpur M.P" />
      </div>
    </div>
  );
}

function ProfileCard({ isMobile }) {
  const imageBorder = isMobile ? "border-[5px]" : "border-[15px]";
  const nameSize = isMobile ? "text-xl" : "text-lg";
  const textCard =
    "bg-gray-700 text-white px-4 py-2 rounded-lg mt-2 text-center";

  return (
    <>
      <div
        className={`rounded-xl border border-solid border-gray-500 ${imageBorder} ${
          isMobile ? "ml-2" : "lg:w-[180px]"
        }`}
      >
        <img
          src={Pic}
          alt="Profile"
          className="w-[150px] h-[150px] object-cover"
        />
      </div>

      <div className="w-2/3 p-4 m-5 text-black rounded-xl text-center">
        <h2 className={`${textCard} ${nameSize}`}>Riya Awadhiya</h2>
        <p className={`${textCard} text-sm`}>Frontend Developer</p>
      </div>
    </>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center space-x-4 p-3 bg-transparent rounded-xl border border-gray-600">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-sm break-all">{value}</p>
      </div>
    </div>
  );
}


export default SideBar;
