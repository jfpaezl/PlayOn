import { HeaderWrapper } from './Header.style';

import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <li><Link className='link' to="/home">Home</Link></li>
                    <li><Link className='link' to="/">Movies</Link></li>
                    <li><Link className='link' to="/home">Series</Link></li>
                    <li><Link className='link' to="/home">Top</Link></li>
                </ul>
                <div className='contentIcons'>
                    { !search ? <input type="text" placeholder='Search...' className='search'/>: null}
                    {search ? <IoSearchOutline className='icon' onClick={handlerSearch}/>: <MdClose className='icon' onClick={handlerSearch}/>}
                    <IoMdNotificationsOutline className='icon'/>
                    <Link className='link' to="/profile"><span className='sr-only'>Ir al perfil de usuario:</span><CgProfile className='icon'/></Link>
                </div>

            </nav>
        </HeaderWrapper>
    );
}