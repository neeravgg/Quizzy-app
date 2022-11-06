import "../styles/globals.css";
import { ThemeProvider } from "../components/context/ThemeContext";
import SidebarProvider from "../components/context/SidebarProvider";
import TestProvider from "../components/context/TestProvider";
import SideBar from "../components/Sidebar/sideBar";
import Navbar from "../components/Navbar/navbar";
import { SessionProvider } from "next-auth/react";
import LogoutALert from "../components/Alert/logoutAlert";
// import {bubbles} from 'hero-patterns'

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <div
        className='font-raleway bg-skin-muted dark:bg-gradient-to-r from-[#141414] to-[#2c2c2e]'
        // style={{
        //   // backgroundColor : '#141414', 
        //   backgroundImage: bubbles('#141414', 0.1)
        // }}
      >
        <SidebarProvider>
          <TestProvider>
            <ThemeProvider>
              <SideBar />
              <Navbar />
              <LogoutALert />
              <Component {...pageProps} />
            </ThemeProvider>
          </TestProvider>
        </SidebarProvider>
      </div>
    </SessionProvider>
  );
}
export default MyApp;
