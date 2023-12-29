import { NavBar } from "@/components/nav_bar/NavBar";
import "@app/globals.scss";

export default function ExampleLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
