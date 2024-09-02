const LeftSidebar = () => {
  return (
    <div className="absolute top-4 left-4 bg-gray-400 h-[calc(100%-2rem)] w-64 rounded-md text-white">
        <div className="flex justify-around items-center">
        <div className="p-4">AWS Services</div>
        <div>search</div>
        </div>
    </div>
  );
};

export default LeftSidebar;
