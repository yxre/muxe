'use client';
import React, {useState} from "react";
import classnames from "classnames";
import {isDevMode} from "@/utilities";


const getMenuItemClasses = (isActive:boolean) => {
    return classnames(
        "block py-2 pl-3 pr-4 text-gray-300  rounded md:bg-transparent  md:p-0 dark:text-white ",
        {
            "text-gray-700 md:text-grey-700 md:dark:text-gray-400  bg-gray-400 underline underline-offset-4": isActive,
            "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 ": !isActive,
            "dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": !isActive
        }
    )
}

const isActive = (url: RegExp) => {
   return url.test(global.window?.location?.pathname)
}

export const Menu = ({}) => {
    const [showHeader, setShowHeader] = useState(false);
    const toggleHeader = () => setShowHeader(!showHeader);

    return <>
        <button
            data-collapse-toggle="navbar-default"
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
          text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
          focus:ring-2 focus:ring-white dark:text-gray-400 dark:hover:bg-gray-800 
          dark:focus:ring-gray-600 bg-transparent`}
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleHeader}
        >
            <span className="sr-only">Open main menu</span>
            <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                />
            </svg>
        </button>
        <div className={classnames({hidden: !showHeader}, " w-full md:block md:w-auto")}
             id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-900 md:dark:bg-transparent dark:border-gray-700">
                <li>
                    <a
                        href="#"
                        className={getMenuItemClasses(isActive(/^\/?$/))}
                        aria-current="page"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={getMenuItemClasses(isActive(/^\/inspo/))}
                    >
                        Inspo
                    </a>
                </li>
                {isDevMode() && <li>
                    <a
                        href="#"
                        className={getMenuItemClasses(isActive(/^\/upload/))}
                    >
                        Upload
                    </a>
                </li>}
                {isDevMode() && <li>
                    <a
                        href="#"
                        className={getMenuItemClasses(isActive(/^\/editor/))}
                    >
                        Editor
                    </a>
                </li> }
            </ul>
        </div>
    </>
}