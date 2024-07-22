"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import ThemeSwitcher from "@components/theme/ThemeSwitcher";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-11/12 mx-auto dark:bg-black bg-white">
      <div className="desktop-nav-bar sm:flex hidden w-full justify-around my-3">
        <div className="container logo">
          <Link href="/">
            <Image
              src="https://i.postimg.cc/Jnhhr0NQ/logo-65947cbb.png"
              alt="Logo"
              width={120}
              height={120}
              className="rounded-xl shadow-lg"
            />
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row gap-6 font-serif text-xl">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="hover:text-orange-500">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="hover:text-orange-500"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>{" "}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="hover:text-orange-500"
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>{" "}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="hover:text-orange-500"
              >
                Features
              </NavigationMenuLink>
            </NavigationMenuItem>{" "}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="hover:text-orange-500"
              >
                Gallery
              </NavigationMenuLink>
            </NavigationMenuItem>{" "}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="hover:text-orange-500"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ThemeSwitcher />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="container mobile-nav-bar sm:hidden flex">
        <div className="container logo">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100.08 114.27"
              className="w-14 h-14 dark:text-white text-black fill-current"
            >
              <title>L8333m.tif</title>
              <path d="M0 57V31.76a4.07 4.07 0 0 1 2.21-4.07c8.05-4.49 16.1-9.04 24.06-13.69 2.27-1.34 4-1.31 6.33.09 10.74 6.34 21.66 12.39 32.51 18.56 3.54 2 7 4.13 10.58 6.15a4 4 0 0 1 2.17 3.78c.21 5.25.18 10.49.06 15.74 0 1.3.29 1.81 1.54 1.08q3.56-2.07 7.09-4.2a2.46 2.46 0 0 0 1-2.41V36.54a3.57 3.57 0 0 0-2.14-3.35Q68.71 23.66 52 14.09C48.48 12.07 45 10 41.4 8c-1.3-.73-1.59-1.49-.18-2.34C44.29 3.85 47.36 2 50.48.28c1.4-.78 2.59.27 3.71.9 7.09 4 14.15 8.12 21.23 12.17 7.29 4.17 14.58 8.37 21.93 12.42a4.56 4.56 0 0 1 2.73 4.54q-.14 14.11 0 28.24a5 5 0 0 1-3 5c-12.49 7-24.89 14.15-37.4 21.1C57 86.13 55.59 88 56 91.14a21.45 21.45 0 0 1 0 4.24c-.15 2.19.68 2.13 2.26 1.22Q75.08 87 91.89 77.42c1.81-1 3.65-2 5.49-3 1.52-.81 2.52-.29 2.57 1.38.11 3.16.06 6.33 0 9.49a3.38 3.38 0 0 1-2.09 2.89q-22.34 12.74-44.67 25.5a2.72 2.72 0 0 1-3 .19c-8.64-5-17.29-10-26-14.9A3.79 3.79 0 0 1 22 95.16c.27-6.39 0-12.8-.2-19.16-.32-10.58 0-21.15-.27-31.72-.1-3.49.53-7 .23-10.45-.2-2.3-.55-2.65-2.66-1.57-7 3.59-7 3.59-7 11.5V88c0 3.66-.34 3.84-3.61 2-2-1.16-4-2.34-6.1-3.43A4.25 4.25 0 0 1 0 82.28C.09 73.87 0 65.46 0 57zm34.08 3v22.68c0 8.36 0 8.36 7.46 12.24l.22.12c1.54.96 2.24.55 2.24-1.31V81.99a3.57 3.57 0 0 1 2.1-3.58c5.75-3.16 11.44-6.43 17.15-9.68 1.35-.77 2.36-1.72 2.33-3.51-.06-5.41 0-10.82 0-16.23a3.2 3.2 0 0 0-1.8-3c-8.9-5.11-17.78-10.24-26.63-15.3-2.7-1.54-3.06-1.29-3.06 1.81q-.03 13.72-.01 27.5z" />
              <path d="M56 57.13c.94 3.73-1.07 5.63-4.07 7-2 1-4 2.08-5.92 3.16-1.25.69-2 .3-2-1.06q-.06-9.09 0-18.18c0-1.31.79-1.78 2-1.08 2.89 1.65 5.78 3.27 8.64 5 2.2 1.27 1.11 3.44 1.35 5.16z" />
            </svg>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <AlignJustify className="w-8 h-8 dark:text-white text-black fill-current" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="list-none flex-col gap-5">
                  <li>
                    <Link href="/" className="hover:text-orange-600">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-orange-600">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-orange-600">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-orange-600">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-orange-600">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-orange-600">
                      Contact
                    </Link>
                  </li>

                  <li>
                    <ThemeSwitcher />
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
