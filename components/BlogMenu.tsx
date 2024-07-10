import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

export default function BlogMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Básico de golpes",
      href: "/golpes-basico",
    },
    {
      title: "Tipos de golpes",
      href: "/golpes-um-pouco-alem",
    },
    {
      title: "Kit de personagens e arquétipos",
      href: "/arquetipos",
    },
  ];

  return (
    <>
      <div className="hidden sm:flex gap-4 py-6 md:py-10">
        <div className="">
          <ul>
            {menuItems.map(({ title, href }, index) => (
              <li key={`${title}-${index}`}>
                <Link
                  className="w-full py-1 my-1"
                  color="foreground"
                  href={href}
                  size="lg"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Navbar
        isBordered
        className="sm:hidden"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">Tutorial</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarMenu className="pt-20">
          {menuItems.map(({ title, href }, index) => (
            <NavbarMenuItem key={`${title}-${index}`}>
              <Link className="w-full" color="foreground" href={href} size="lg">
                {title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
