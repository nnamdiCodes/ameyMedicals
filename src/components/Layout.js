import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = ({ isActive, toggleMenu, isDarkMode, handleClick }) => {
    return (
        <div className="Layout">
            <Header 
                isActive={isActive}
                toggleMenu={toggleMenu}
                isDarkMode={isDarkMode}
                handleClick={handleClick}
            />
            <Outlet />
            <Footer 
                isDarkMode={isDarkMode}
            />
        </div>
    )
}

export default Layout