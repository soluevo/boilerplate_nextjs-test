import * as SC from './style'
import { MdApps, MdSchedule, MdPeople, MdStore } from 'react-icons/md'
import { BsGraphUp, BsBookHalf } from 'react-icons/bs'
import { AiFillBook, AiFillFolderOpen } from 'react-icons/ai'
import { FaBriefcase } from 'react-icons/fa'
import { Link, useLocation } from "react-router-dom";

export function SideBar() {
    const location = useLocation();
    return (
        <SC.SideBarContainer>
            <nav>
                <ul>
                    <li>
                        <Link to={'/apps'} className={location.pathname === "/apps" ? "selected" : "not-selected"}>
                            <MdApps size={35} color={'white'} />
                            <span>Apps</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/curves'} className={location.pathname === "/curves" ? "selected" : "not-selected"}>
                            <BsGraphUp size={35} color={'white'} />
                            <span>Curves</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/markets'} className={location.pathname === "/markets" || location.pathname === "/" ? "selected" : "not-selected"}>
                            <MdStore size={35} color={'white'} />
                            <span>Markets</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/orders'} className={location.pathname === "/orders" ? "selected" : "not-selected"}>
                            <BsBookHalf size={35} color={'white'} />
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/portfolio'} className={location.pathname === "/portfolio" ? "selected" : "not-selected"}>
                            <FaBriefcase size={35} color={'white'} />
                            <span>Portfolio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/recipients'} className={location.pathname === "/recipients" ? "selected" : "not-selected"}>
                            <AiFillFolderOpen size={35} color={'white'} />
                            <span>Recipients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/schedule'} className={location.pathname === "/schedule" ? "selected" : "not-selected"}>
                            <MdSchedule size={35} color={'white'} />
                            <span>Schedule</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/journal'} className={location.pathname === "/journal" ? "selected" : "not-selected"}>
                            <AiFillBook size={35} color={'white'} />
                            <span>Journal</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/members'} className={location.pathname === "/members" ? "selected" : "not-selected"}>
                            <MdPeople size={35} color={'white'} />
                            <span>Members</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </SC.SideBarContainer>
    )
}