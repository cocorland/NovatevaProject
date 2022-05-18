import ToolbarComponent from './MainPage/Toolbar';
import { Sidebar } from './MainPage/Sidebar';
import { ChatMenu } from './MainPage/ChatMenu';
import { Contactsbar } from './MainPage/Contactsbar';

import React from 'react'

export const MainPage = () => {
  return (
    <>
        <ToolbarComponent />
        <Sidebar />
        <ChatMenu />
        <Contactsbar />
    </>
  )
}
