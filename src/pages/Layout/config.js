export const sidebarData = [
  {
    key: "group1",
    title: {
      icon: "dashboard",
      text: "Menu 1"
    },
    children: [
      {
        key: "1.1",
        text: "Menu 1 Submenu 1",
        path: "/menu1/submenu1"
      },
      {
        key: "1.2",
        text: "Menu 1 Submenu 2",
        path: "/menu1/submenu2"
      }
    ]
  },
  {
    key: "group2",
    title: {
      icon: "play-circle",
      text: "Menu 2"
    },
    children: [
      {
        key: "2.1",
        text: "Submenu1",
        path: "/menu2/submenu1"
      },
      {
        key: "2.2",
        text: "Submenu2",
        path: "/menu2/submenu2"
      }
    ]
  }
];

export const groupKey = sidebarData.map(item => item.key);
