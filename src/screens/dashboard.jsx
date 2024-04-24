// Home.js
import React, { useState } from "react";
import Aside from "./component/aside.jsx";
import HomeScreen from "./home/homeScreen.jsx";
import ManageScreen from "./manage/manageScreen.jsx";
import ExportAndPayScreen from "./exportAndPay/exportAndPay.jsx";

function Dashboard() {
  const [selectedItem, setSelectedItem] = useState('home');
  const handleItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem);

  };
  const renderContent = () => {
    switch (selectedItem) {
      case 'home':
        return <HomeScreen />;
      case 'manage':
        return <ManageScreen />;
      case 'exportAndPay':
        return <ExportAndPayScreen />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 flex ">
      {/* Side */}
      <Aside onItemSelected={handleItemSelected} />

      <div className="w-full flex flex-col h-screen overflow-y-hidden bg-bgColor">
        {/* <!-- Desktop Header --> */}
        <div className="w-full items-center bg-white py-4 px-6 hidden sm:flex shadow-lg">
          <div className="w-1/2 bg-slate-400">  </div>
          <div className="relative w-1/2 flex justify-end ">
            <button className="realtive z-10 w-16 h-16 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
              <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" alt="description" />
            </button>

          </div>
        </div>
        {/* content here */}
        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard;
