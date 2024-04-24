import React, { useState } from "react";


import myLogo from '../../assets/logo.png';
import ic_home from '../../assets/icons/home.svg';
import ic_card from '../../assets/icons/card.svg';
import ic_listCard from '../../assets/icons/listCard.svg';
import ic_bag from '../../assets/icons/bag.svg';
import ic_setting from '../../assets/icons/setting.svg';
import ic_report from '../../assets/icons/report.svg';
import people_setting from '../../assets/icons/people_setting.svg';

import ic_home_color from '../../assets/icons_fill/home.svg';
import ic_card_color from '../../assets/icons_fill/card.svg';
import ic_listCard_color from '../../assets/icons_fill/listCard.svg';
import ic_bag_color from '../../assets/icons_fill/bag.svg';
import people_setting_color from '../../assets/icons_fill/people_setting.svg';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


function Aside({ onItemSelected }) {
    const [isDropDown, setIsDropDown] = useState(false);
    const toggleDropDown = () => {
        setIsDropDown(!isDropDown);
    };
    const [selectedItem, setSelectedItem] = useState("ໜ້າຫຼັກ");


    // NavItem component
    const NavItem = ({ iconSrc,iconCor, text, dropDown, isDropDown, toggleDropDown, onClick }) => (
        <nav className={` ${selectedItem === text ? 'bg-white text-textColor' : 'text-white'}`}>
            <div className={`flex py-3 px-6 ${dropDown ? 'justify-between items-center' : ''}`} onClick={dropDown ? toggleDropDown : onClick}>
                <div className="flex">
                    <img src={`${selectedItem === text? iconCor:iconSrc}`} alt="" className=" " style={{ fill: 'purple' }} />
                    <p className="pl-4 text-lg font-semibold">{text}</p>
                </div>
                {dropDown ? (isDropDown ? <IoIosArrowDown size={20} /> : <IoIosArrowBack size={20} />) : ""}
            </div>

            <div className={`overflow-hidden transition-max-height duration-700 pl-5 ${isDropDown ? 'max-h-screen' : 'max-h-0'}`}>
                <a href="#" className={`flex py-3 pl-6  ${selectedItem === "ຈັດການໜ້າທີ່ຜູ້ໃຊ້" ? 'bg-white text-textColor' : ''}`} onClick={() => {
                    onItemSelected("manage user");
                    setSelectedItem("ຈັດການໜ້າທີ່ຜູ້ໃຊ້");
                }}>
                    <img src={`${selectedItem === "ຈັດການໜ້າທີ່ຜູ້ໃຊ້"? ic_card_color:ic_card}`} alt="" className=" " />
                    <p className="pl-4 text-lg font-semibold">ຈັດການໜ້າທີ່ຜູ້ໃຊ້</p>
                </a>
                <a href="#" className={`flex py-3 pl-6  ${selectedItem === "ຈັດການສິດທິ" ? 'bg-white text-textColor' : ''}`} onClick={() => {
                    onItemSelected("manage rights");
                    setSelectedItem("ຈັດການສິດທິ");
                }}>
                    <img src={`${selectedItem === "ຈັດການສິດທິ"? ic_card_color:ic_card}`} alt="" className="" />
                    <p className="pl-4 text-lg font-semibold">ຈັດການສິດທິ</p>
                </a>
                <a href="#" className={`flex py-3 pl-6  ${selectedItem === "ຂໍ້ມູນຜູ້ໃຊ້ລະບົບ" ? 'bg-white text-textColor' : ''}`} onClick={() => {
                    onItemSelected("data user");
                    setSelectedItem("ຂໍ້ມູນຜູ້ໃຊ້ລະບົບ");
                }}>
                    <img src={`${selectedItem === "ຂໍ້ມູນຜູ້ໃຊ້ລະບົບ"? people_setting_color:people_setting}`} alt="" className="" />
                    <p className="pl-4 text-lg font-semibold">ຂໍ້ມູນຜູ້ໃຊ້ລະບົບ</p>
                </a>
                <a href="#" className={`flex py-3 pl-6  ${selectedItem === "ກໍານົດສິດທິໃຫ້ຜູ້ໃຊ້" ? 'bg-white text-textColor' : ''}`} onClick={() => {
                    onItemSelected("right for user");
                    setSelectedItem("ກໍານົດສິດທິໃຫ້ຜູ້ໃຊ້");
                }}>
                    <img src={`${selectedItem === "ກໍານົດສິດທິໃຫ້ຜູ້ໃຊ້"? ic_card_color:ic_card}`} alt="" className="" />
                    <p className="pl-4 text-lg font-semibold">ກໍານົດສິດທິໃຫ້ຜູ້ໃຊ້</p>
                </a>
            </div>
        </nav>
    );

    return (
        <aside className="h-screen w-80 shadow-xl bg-gradient-to-b from-textColor to-secondaryColor" >
            {/* logo */}
            <div className="w-full items-center bg-gradient-to-b from-textColor to-primaryColor py-4 px-6">
                <div className="w-1/2 flex justify-start">
                    <img src={myLogo} alt="" className="w-16" />
                    <button className="z-10 w-16 h-16 rounded-full overflow-hidden">
                    </button>
                </div>
            </div>
            {/* navigation */}
            <NavItem iconSrc={ic_home} iconCor={ic_home_color} text="ໜ້າຫຼັກ" onClick={() => { onItemSelected("home"); setSelectedItem("ໜ້າຫຼັກ"); }} />
            <NavItem iconSrc={ic_card} iconCor={ic_card_color} text="ຈັດການຂໍ້ມູນພື້ນຖານ" onClick={() => { onItemSelected("manage"); setSelectedItem("ຈັດການຂໍ້ມູນພື້ນຖານ"); }} />
            <NavItem iconSrc={ic_listCard} iconCor={ic_listCard_color} text="ເບີກຈ່າຍນ້ຳ ແລະ ຊຳລະເງິນ" onClick={() => { onItemSelected("exportAndPay"); setSelectedItem("ເບີກຈ່າຍນ້ຳ ແລະ ຊຳລະເງິນ"); }} />
            <NavItem iconSrc={ic_bag} iconCor={ic_bag_color} text="ຂາຍໜ້າໂຮງງານ" onClick={() => { onItemSelected("front"); setSelectedItem("ຂາຍໜ້າໂຮງງານ"); }} />
            <NavItem iconSrc={ic_listCard} iconCor={ic_listCard_color} text="ບັນທຶກລາຍຈ່າຍ" onClick={() => { onItemSelected("save play"); setSelectedItem("ບັນທຶກລາຍຈ່າຍ"); }} />
            <NavItem iconSrc={ic_setting}  text="ຕັ້ງຄ່າລະບົບ" dropDown={true} isDropDown={isDropDown} toggleDropDown={toggleDropDown} />
            <NavItem iconSrc={ic_report} iconCor={ic_report} text="ລາຍງານ" onClick={() => { onItemSelected("report"); setSelectedItem("ລາຍງານ"); }} />

        </aside>
    );


}

export default Aside;
