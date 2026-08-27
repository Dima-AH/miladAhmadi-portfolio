export type NavItem = {
  key: string; 
  path: string;
};

export const navItems: NavItem[] = [
  { key: "home", path: "/" },
  { key: "about", path: "/#about" },
  { key: "projects", path: "/#projects" },
  { key: "contact", path: "/#contact" },
  // { key: "articles", path: "/articles" },
];
