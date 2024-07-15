import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export function useMenu() {
    return useContext(MenuContext);
}

export const MenuProvider = ({ children }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // 新增一个方法来设置菜单的状态
    const setOpen = (open) => {
        setMenuOpen(open);
    };

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu, setOpen }}>
            {children}
        </MenuContext.Provider>
    );
};
