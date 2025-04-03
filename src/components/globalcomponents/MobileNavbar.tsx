/* eslint-disable @next/next/no-img-element */
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import Link from "next/link";
import { useState } from "react";
import DropdownComponent from "./Dropdown";

const academicProgramsItems = [
  { text: "Science Stream", link: "/academics/science-stream" },
  { text: "Management Stream", link: "/academics/management-stream" },
  { text: "Arts Stream", link: "/academics/arts-stream" },
];

const aboutItems = [
  { text: "About College", link: "/about" },
  { text: "Message from Principal", link: "/message_from_principal" },
  { text: "Our Team", link: "/team" },
];

const MobileNavbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="flex justify-between items-center lg:hidden px-8 md:px-16 lg:px-24 xl:px-24 py-2 sticky top-0 z-40 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-24 h-auto" />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div>
        <MenuOutlined onClick={showDrawer} className="text-xl text-primary" />
      </div>

      {/* Drawer */}
      <Drawer
        title="Mid Valley SS/College"
        placement="left"
        closable={true}
        onClose={onClose}
        open={visible}
        width={300}
      >
        <div className="grid gap-y-4">
          <NavItem name="Home" navigateTo="/" />
          <DropdownComponent title="About us" items={aboutItems} />
          <DropdownComponent
            title="Academic Programs"
            items={academicProgramsItems}
          />
          <NavItem name="Resources" navigateTo="/resources" />
          <NavItem name="Gallery" navigateTo="/gallery" />
          <NavItem name="Contact us" navigateTo="/contact" />
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNavbar;

const NavItem = ({ name, navigateTo }: any) => {
  return (
    <div>
      <Link href={navigateTo} className="text-sm font-semibold">
        {name}
      </Link>
    </div>
  );
};
