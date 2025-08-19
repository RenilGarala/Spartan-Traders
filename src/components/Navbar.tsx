"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { PhoneCall } from "lucide-react";
import React from "react";

type NavItem = {
  name: string;
  link: string;
};

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export function Header() {
  return (
    <Navbar className="top-0 mx-auto md:w-full relative md:fixed">
      <NavBody className="flex items-center justify-between w-full">
        <div className="flex flex-1">
          <NavbarLogo />
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <NavItems items={navItems} />
        </div>

        <NavbarButton className="flex gap-4 items-center justify-center">
          <PhoneCall />
          <span>Book A Call</span>
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
    </Navbar>
  );
}
