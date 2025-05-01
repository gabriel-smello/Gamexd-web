import React, { useState } from "react";
import "../../App.css";
import joystick from "../../assets/joystick-favicon.png";
import { MenuIcon, Search, X } from "lucide-react";
import { Avatar, Drawer, Dropdown } from "antd";
import { UserRound } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", key: "home" },
  { name: "Browse", href: "/browse", key: "browse" },
  { name: "Details", href: "/details", key: "details" },
];

const dropdownItems = [
  { key: "1", label: "Login", href: "#" },
  { key: "2", label: "Register", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="mx-auto mt-1 md:px-4">
      <div className="flex content-center justify-between">
        <div
          className="flex content-center items-center cursor-pointer min-w-[140px]"
          onClick={() => (window.location.href = "/")}
        >
          <img alt="Gamexd" src={joystick} className="h-15 w-auto mr-1" />
          <h1 className="text-2xl text-blue-theme">GameXD</h1>
        </div>

        <div className="flex-grow min-w-[150px] max-w-md w-3/10 relative content-center">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
          <input
            className="w-full pl-10 pr-4 py-2 rounded-3xl bg-background-secondary focus:outline-none text-gray-500 focus:text-white"
            placeholder="Search..."
          />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex content-center items-center">
          {navigation.map((item) => {
            const isHome = item.href === "/";
            const isActive = isHome
              ? location.pathname === "/"
              : location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                aria-current={isActive ? "page" : undefined}
                className={classNames(
                  isActive
                    ? "text-blue-theme"
                    : "text-gray-500 hover:text-gray-300",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="ml-5">
            <Dropdown
              menu={{ items: dropdownItems }}
              dropdownRender={() => (
                <div className="bg-background-secondary p-2 rounded-md w-45 shadow-lg">
                  {dropdownItems.map((item) => (
                    <a key={item.key} href={item.href}>
                      <div className="!text-gray-500 hover:bg-gray-700 p-2 rounded-md block">
                        {item.label}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            >
              <div className="flex content-center items-center gap-2 bg-background-secondary rounded-full cursor-pointer">
                <h1 className="text-sm my-2 ml-4">Profile</h1>
                <div className="my-1 mr-3">
                  <Avatar size="large" icon={<UserRound />} />
                </div>
              </div>
            </Dropdown>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-500"
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuIcon size={24}></MenuIcon>
        </button>
      </div>
      <Drawer
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        closable={false}
        width={250}
        style={{
          backgroundColor: "var(--color-background-secondary)",
          padding: 16,
        }}
      >
        {/* CLOSE ICON */}
        <div className="flex justify-end mb-4">
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="text-white cursor-pointer" />
          </button>
        </div>

        {/* CLOSE ICON */}
        <div className="mb-2">
          <Avatar size="large" icon={<UserRound />} />
        </div>

        {/* MOBILE NAV */}
        <div className="flex flex-col space-y-4">
          {navigation.map((item) => {
            const isHome = item.href === "/";
            const isActive = isHome
              ? location.pathname === "/"
              : location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                aria-current={isActive ? "page" : undefined}
                className={classNames(
                  isActive ? "!text-blue-theme" : "!text-gray-500",
                  "text-xl"
                )}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="mt-4">
            {dropdownItems.map((item) => {
              const isHome = item.href === "/";
              const isActive = isHome
                ? location.pathname === "/"
                : location.pathname.startsWith(item.href);
              return (
                <a
                  key={item.key}
                  href={item.href}
                  className={classNames(
                    isActive ? "!text-blue-theme" : "!text-gray-500",
                    "block py-1"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
