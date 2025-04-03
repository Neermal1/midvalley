import React from "react";
import { Menu, Dropdown } from "antd";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

interface MenuItem {
  text: string;
  link: string;
}

interface DropdownProps {
  title: string;
  items: MenuItem[];
}

const { Item } = Menu;

const DropdownComponent: React.FC<DropdownProps> = ({ title, items }) => {
  const renderMenuItems = () => {
    return items?.map((item, index) => (
      <Item key={index}>
        <Link href={item.link}>
          <div>{item.text}</div>
        </Link>
      </Item>
    ));
  };

  const menu = <Menu>{renderMenuItems()}</Menu>;

  return (
    <Dropdown overlay={menu}>
      <div
        className="ant-dropdown-link font-semibold flex space-x-1 items-center cursor-pointer"
        onClick={(e) => e.preventDefault()}
      >
        {title} <RiArrowDropDownLine size={24} />
      </div>
    </Dropdown>
  );
};

export default DropdownComponent;
