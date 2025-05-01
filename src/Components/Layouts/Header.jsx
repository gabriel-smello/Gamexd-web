import React from "react";
import joystick from "../../assets/joystick-favicon.png";
import { Search } from "lucide-react";
import { Avatar, Dropdown } from "antd";
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

  return (
    <div className="mx-auto mt-1">
      <div className="flex content-center justify-between">
        <div
          className="flex content-center items-center cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img alt="Gamexd" src={joystick} className="h-15 w-auto" />
          <h1 className="text-2xl text-blue-theme">GameXD</h1>
        </div>

        <div className="w-3/10 relative content-center">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
          <input
            className="w-full pl-10 pr-4 py-2 rounded-3xl bg-background-secondary focus:outline-none text-gray-500 focus:text-white"
            placeholder="Search..."
          />
        </div>

        <div className="flex content-center items-center">
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
      </div>
    </div>
  );
};

export default Header;
