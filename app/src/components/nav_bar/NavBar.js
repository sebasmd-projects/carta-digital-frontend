import { IoFootball } from "react-icons/io5";
import { NavBarItems } from "./NavBarItems";

const menuItems = [
  {
    path: "/",
    icon: <IoFootball size={40} />,
    title: "Inicio",
    subTitle: "inicio",
  },
  {
    path: "/admin",
    icon: <IoFootball size={40} />,
    title: "Admin",
    subTitle: "Admin Page",
  },
  {
    path: "/admin/login",
    icon: <IoFootball size={40} />,
    title: "Admin Login",
    subTitle: "Admin Login Page",
  },
  {
    path: "/counter",
    icon: <IoFootball size={40} />,
    title: "Contador",
    subTitle: "Contador",
  },
  {
    path: "/counter/display",
    icon: <IoFootball size={40} />,
    title: "Counter",
    subTitle: "Contador Client Side",
  },
];

export const NavBar = () => {
  return (
    <div id="nav" className="flex p-2 m-2">
      {menuItems.map((item) => (
        <NavBarItems key={item.path} {...item} />
      ))}
    </div>
  );
};
