import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import ic_restart from '../../assets/icons/restart.svg';
import ic_save from '../../assets/icons/save.svg';
import ic_search from '../../assets/icons/search.svg';
import ic_edit from '../../assets/icons/edit.svg';
import ic_pintter from '../../assets/icons/pintter.svg';
import ic_delete from '../../assets/icons/delete.svg';
import location from '../../assets/icons/location.png';
import ic_add from '../../assets/icons/add.svg';
function ExportAndPayScreen() {

    //dropdow
    const [selectedEmployee, setSelectedEmployee] = useState("ທ້າວ ເລັນ");
    const employeeData = ["saab", "option2", "option3"];

    const CustomDropdown = ({ options, selectedOption, onSelect }) => {
        const [isOpenDropDown, setIsOpenDropDown] = useState(false);
        const toggleDropdown = () => {
            setIsOpenDropDown(!isOpenDropDown);
        };
        const handleSelect = (option) => {
            onSelect(option);
            toggleDropdown();
        };
        return (
            <div className="relative ">
                <div className="hover:cursor-pointer flex w-full border border-lineColor rounded-md my-2 px-5  justify-between items-center py-2" onClick={toggleDropdown}>
                    {selectedOption}
                    {isOpenDropDown ? <IoIosArrowDown /> : <IoIosArrowBack />}
                </div>
                {isOpenDropDown && (
                    <ul className=" absolute border border-lineColor overflow-y-auto z-10 w-full bg-white rounded-md px-3 ">
                        {options.map((option, index) => (
                            <li key={index} onClick={() => handleSelect(option)} className="text-lg hover:cursor-pointer my-1 ">
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    return (
        <div className="px-10 pt-2 ">
            <div className=" border border-lineColor  rounded-lg flex py-3 pl-6 mt-2 mr-2">
                <div className="w-1/3">
                    <p className="font-semibold text-lg">ເລືອກທີມ</p>
                    <CustomDropdown
                        options={employeeData}
                        selectedOption={selectedEmployee}
                        onSelect={setSelectedEmployee}
                    />
                </div>
                <div className="w-10"></div>
                <div className="w-1/3">
                    <p className="font-semibold text-lg">ວັນທີ</p>
                    <div className="relative ">
                        <div className="hover:cursor-pointer flex w-full border border-lineColor rounded-md my-2 px-5  justify-between items-center py-2" >
                            <p className="font-light"> DD / MM / YYYY</p>
                            <FaCalendarAlt />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[400px] border border-lineColor rounded-md mt-5 flex flex-col justify-between">
                <div className="">
                    <p className="text-lg font-medium my-4 pl-6">ຂໍ້ມູນການເອົານ້ຳອອກຈາກໂຮງງານ ສາຍນ້ຳ ທ້າວເລັນ</p>
                    <div className="border  border-lineColor w-full py-3  bg-lineColor  items-center px-5 grid grid-cols-8">
                        <p className="text-base font-normal flex justify-center">ລຳດັບຖ້ຽວ</p>
                        <p className="text-base font-normal flex justify-center ">ເວລາ</p>
                        <p className="text-base font-normal flex justify-center ">ວັນທີ</p>
                        <p className="text-base font-normal flex justify-center ">ຕຸກອອກ</p>
                        <p className="text-base font-normal flex justify-center ">ຕຸກເປົ່າ</p>
                        <p className="text-base font-normal flex justify-center ">ບໍ່ໝົດ</p>
                        <p className="text-base font-normal flex justify-center ">ການຈັດການ</p>
                    </div>
                    <div className="w-full py-5  bg-white grid grid-cols-8 items-center px-5 border-b border-lineColor">
                        <p className="text-base font-light flex justify-center">01</p>
                        <p className="text-base font-light flex justify-center ">13:57</p>
                        <p className="text-base font-light flex justify-center ">19/2/2024</p>
                        <p className="text-base font-light flex justify-center ">110</p>
                        <p className="text-base font-light flex justify-center ">10</p>
                        <p className="text-base font-light flex justify-center ">10</p>
                        <div className="  flex justify-center items-center bg-scueess rounded-md py-1 px-2 border border-lineColor">
                            <div className=" text-center flex justify-between items-center">ສຳເລັດ</div>
                        </div>
                        <div className="flex justify-center  ">
                            <img src={ic_edit} alt="" className="w-6 h-6" />
                            <p className="text-base font-light text-textColor">Edit</p>
                        </div>
                    </div>
                    <div className="w-full py-5  bg-white grid grid-cols-8 items-center px-5 border-b border-lineColor">
                        <p className="text-base font-light flex justify-center">01</p>
                        <p className="text-base font-light flex justify-center ">13:57</p>
                        <p className="text-base font-light flex justify-center ">19/2/2024</p>
                        <p className="text-base font-light flex justify-center ">110</p>
                        <p className="text-base font-light flex justify-center ">10</p>
                        <p className="text-base font-light flex justify-center ">10</p>
                        <div className="  flex justify-center items-center bg-scueess rounded-md py-1 px-2 border border-lineColor">
                            <div className=" text-center flex justify-between items-center">ສຳເລັດ</div>
                        </div>
                        <div className="flex justify-center  ">
                            <img src={ic_edit} alt="" className="w-6 h-6" />
                            <p className="text-base font-light text-textColor">Edit</p>
                        </div>
                    </div>
                    <div className="w-full py-5  bg-white grid grid-cols-8 items-center px-5 border-b border-lineColor">
                        <p className="text-base font-normal flex justify-center text-textColor ">ເບີກໃໝ່</p>
                        <p className="text-base font-light flex justify-center ">13:57</p>
                        <p className="text-base font-light flex justify-center ">19/2/2024</p>
                        <p className="text-base font-light flex justify-center border border-lineColor mx-10 py-1 rounded-md">110</p>
                        <p className="text-base font-light flex justify-center border border-lineColor mx-10 py-1 rounded-md">110</p>
                        <p className="text-base font-light flex justify-center border border-lineColor mx-10 py-1 rounded-md">_ _</p>
                        <div className="  flex justify-center items-center bg-watting rounded-md py-1 px-2 border border-lineColor">
                            <div className=" text-center font-normal flex justify-between items-center">ລໍຖ້າດຳເນີນການ</div>
                        </div>
                        <div className="flex justify-center  ">
                            <img src={ic_edit} alt="" className="w-6 h-6" />
                            <p className="text-base font-light text-textColor">Edit</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between px-5  mb-5">
                    <div className="w-1/12 border border-lineColor bg-white rounded-md items-center justify-center flex" >
                        <p className="text-base font-light text-center ">ກັບຄືນ</p>
                    </div>
                    <div className="w-1/12 border border-lineColor bg-white rounded-md items-center justify-center flex" >
                        <p className="text-base font-light text-center ">ຕໍ່ໄປ</p>
                    </div>
                </div>
            </div>
            <div className=" border border-lineColor rounded-md mt-5">
                <p className="text-lg font-medium my-4 pl-6">ຂໍ້ມູນການຊຳລະເງິນ</p>
                <div className="border  border-lineColor w-full py-3  bg-lineColor  items-center px-5 grid grid-cols-8">
                    <p className="text-base font-normal flex justify-center">ລຳດັບ</p>
                    <p className="text-base font-normal flex justify-center ">ຈຳນວນລົງ</p>
                    <p className="text-base font-normal flex justify-center ">ຕິດໜີ້</p>
                    <p className="text-base font-normal flex justify-center ">ໄດ້ໜີ້</p>
                    <p className="text-base font-normal flex justify-center ">ຈ່າຍ</p>
                    <p className="text-base font-normal flex justify-center ">ລວມເງິນ</p>
                    <p className="text-base font-normal flex justify-center ">ລົງນອກ</p>
                    <p className="text-base font-normal w-1/6 "></p>
                </div>
                <div className="w-full py-5  bg-white grid grid-cols-8 items-center px-5 border-b border-lineColor rounded-md">
                    <p className="text-base font-light flex justify-center ">1</p>
                    <p className="text-base font-light flex justify-center ">0</p>
                    <p className="text-base font-light flex justify-center ">1</p>
                    <p className="text-base font-light flex justify-center ">1</p>
                    <p className="text-base font-light flex justify-center ">1</p>
                    <p className="text-base font-light flex justify-center ">4</p>
                    <p className="text-base font-light flex justify-center border border-lineColor mx-10 py-1 rounded-md">10</p>
                    <div className="  flex justify-center items-center bg-greenBottle rounded-md py-1 px-2 border border-lineColor mx-7">
                        <div className=" text-center text-white font-normal flex justify-between items-center ">ຊຳລະເງິນ</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExportAndPayScreen;
