import React, { useState } from "react";
import { BsFillChatRightFill, BsTelephoneFill } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai'
import { IoMail } from 'react-icons/io5';
import { TiGroup } from 'react-icons/ti';
import { BiSearchAlt } from 'react-icons/bi'
import { Avatar, Button, Dropdown, Menu, Space, Badge } from 'antd';

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Archive
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Blocked
                    </a>
                ),
            },
        ]}
    />
);

const Leftbar: React.FunctionComponent<any> = (props) => {
    const [chat, setChat] = useState<boolean>(true)
    const [call, setCall] = useState<boolean>(false)
    const [mail, setMail] = useState<boolean>(false)
    const [group, setGroup] = useState<boolean>(false)
    const [title, setTitle] = useState<string>("Chats")
    const [badge, setBadge] = useState<boolean>(true)

    const chatBox = [
        {
            id: 1,
            img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            name: "Ankit Mishra",
            message: "Are we meeting today?",
            time: "2:43pm",
            badge: "4"
        },
        {
            id: 2,
            img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            name: "Ankit Mishra",
            message: "Are we meeting today?",
            time: "1:41pm",
            badge: "4"
        },
        {
            id: 3,
            img: "https://joeschmoe.io/api/v1/random",
            name: "Ankit Mishra",
            message: "I don't love you",
            time: "2:43pm",
            badge: "1"
        },
        {
            id: 4,
            img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            name: "Ankit Mishra",
            message: "Are we meeting today?",
            time: "2:43pm",
            badge: "0"
        },
        {
            id: 5,
            img: "https://i.pravatar.cc/150?u=a042581f4e25056704b",
            name: "Ankit Mishra",
            message: "Are we meeting today?",
            time: "2:43pm",
            badge: "5"
        },
        {
            id: 6,
            img: "https://i.pravatar.cc/150?u=a042581f4e25056704b",
            name: "Ankit Mishra",
            message: "Are we meeting today?",
            time: "2:43pm",
            badge: "10"
        },
        {
            id: 7,
            img: "https://i.pravatar.cc/150?u=a042581f4e25056704b",
            name: "Ankit Mishra",
            message: "Are we meeting today?",
            time: "2:43pm",
            badge: "10"
        },
        {
            id: 8,
            img: "https://i.pravatar.cc/150?u=a042581f4e25056704b",
            name: "Ankit Mishra",
            message: "Are we meeting today?",
            time: "2:43pm",
            badge: "10"
        },
        {
            id: 9,
            img: "https://i.pravatar.cc/150?u=a042581f4e25056704b",
            name: "Ankit Mishra",
            message: "Are we meeting today?",
            time: "2:43pm",
            badge: "10"
        },
        {
            id: 10,
            img: "https://i.pravatar.cc/150?u=a042581f4e25056704b",
            name: "Ankit Mishra",
            message: "Are we meeting today?",
            time: "2:43pm",
            badge: "10"
        },
    ]

    function handleChat() {
        setChat(true)
        setCall(false)
        setMail(false)
        setGroup(false)
        setTitle("Chats")
    }
    function handleCall() {
        setChat(false)
        setCall(true)
        setMail(false)
        setGroup(false)
        setTitle("Calls")
    }
    function handleMail() {
        setChat(false)
        setCall(false)
        setMail(true)
        setGroup(false)
        setTitle("Mails")
    }
    function handleGroup() {
        setChat(false)
        setCall(false)
        setMail(false)
        setGroup(true)
        setTitle("Groups")
    }
    return <>
        <div className="fixed top-0 left-0 w-1/4 bg-slate-50">

            {/* navbar starts */}
            <div className='flex items-center justify-between px-5 py-5 bg-white shadow-lg shadow-purple-100'>
                <BsFillChatRightFill
                    onClick={handleChat}
                    className={chat ? "text-2xl cursor-pointer text-purple-500 " : "text-2xl cursor-pointer hover:text-purple-500 text-gray-400 transition-all duration-500"}
                />
                <BsTelephoneFill
                    onClick={handleCall}
                    className={call ? "text-2xl cursor-pointer text-purple-500" : "text-2xl cursor-pointer hover:text-purple-500 text-gray-400 transition-all duration-500"}
                />
                <IoMail
                    onClick={handleMail}
                    className={mail ? "text-3xl cursor-pointer text-purple-500" : "text-3xl cursor-pointer hover:text-purple-500 text-gray-400 transition-all duration-500"}
                />
                <TiGroup
                    onClick={handleGroup}
                    className={group ? "text-3xl cursor-pointer text-purple-500" : "text-3xl cursor-pointer hover:text-purple-500 text-gray-400 transition-all duration-500"}
                />
                <Avatar src="https://joeschmoe.io/api/v1/random" className="w-32 bg-white cursor-pointer" />
            </div>
            {/* navbar ends */}

            {/* header starts */}
            <div className="flex items-center justify-between w-full px-5 py-4 font-bold ">
                <h1 className="my-0 text-4xl">
                    {title}
                </h1>
                <Dropdown overlay={menu} placement="bottomRight" className="mt-1">
                    <AiFillPlusCircle className="text-3xl text-purple-500 cursor-pointer" />
                </Dropdown>
            </div>


            {/* Searchbar starts */}
            <div className="flex items-center justify-center mx-5 bg-white shadow-lg rounded-3xl shadow-purple-100">

                <BiSearchAlt className="mx-3 text-2xl" />
                <input type="search" placeholder="Search here" className="w-full py-2 mr-3 text-base focus:outline-none" />
            </div>

            {/* chats start */}
                <div className="w-full px-5 mt-5 overflow-scroll ">
                    {chatBox.map((item) => (
                        <div className="flex items-center px-3 py-4 mt-3 bg-white shadow-lg shadow-purple-200 rounded-2xl" key={item.id}>
                            <Avatar size="large" src={item.img} className="bg-white cursor-pointer w-96" />
                            <div className="flex flex-col w-full pr-4 cursor-pointer">
                                <div className="flex items-center justify-between w-full ml-4 ">
                                    <h6 className="my-0 text-base font-bold capitalize font-Roboto">
                                        {item.name}
                                    </h6>
                                    <small className="text-xs font-medium text-purple-500 font-Roboto">4:43pm</small>
                                </div>
                                <div className="flex items-center justify-between w-full mt-1 ml-4">
                                    <p className="my-0 text-sm font-light text-gray-500 text-light font-Roboto">
                                        {item.message}
                                    </p>
                                    <Badge count={badge ? `${item.badge}` : 0} className="text-sm font-Roboto" style={{ backgroundColor: '#A754F5' }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            {/* chats end */}



        </div>
    </>;
};

export default Leftbar;