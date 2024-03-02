import { HeaderWrapper } from './Header.style';

import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';

export default function Header() {
    const [search, setSearch] = useState(true);
    
    const handlerSearch = () => {
        setSearch(!search);
    }
    return (
        <HeaderWrapper className='container containerModificated'>
            <div>
                <h1>PlayOn</h1>
            </div>
            <nav className='nav'>
                <ul>
                    <li>Home</li>
                    <li>Movies</li>
                    <li>Series</li>
                    <li>Top</li>
                </ul>
                <div className='contentIcons'>
                    { !search ? <input type="text" placeholder='Search...' className='search'/>: null}
                    {search ? <IoSearchOutline className='icon' onClick={handlerSearch}/>: <MdClose className='icon' onClick={handlerSearch}/>}
                    <IoMdNotificationsOutline className='icon'/>
                    <CgProfile className='icon'/>
                </div>

            </nav>
        </HeaderWrapper>
    );
}