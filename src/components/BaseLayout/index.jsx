import { SideBar } from '../SideBar'
import * as SC from './style'
import { Outlet } from "react-router-dom";

export function BaseLayout() {
  return (
    <SC.MainContainer>
        <SideBar />
        <SC.ContentContainer>
          <Outlet />
        </SC.ContentContainer>
    </SC.MainContainer>
  )
}