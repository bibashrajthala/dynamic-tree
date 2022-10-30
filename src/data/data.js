export const treeData = [
  {
    key: "0",
    label: "node 0",
    icon: "folder",
    title: "folder",
    children: [
      {
        key: "1",
        label: "node 1",
        icon: "folder",
        title: "folder",
        children: [
          {
            key: "1.1",
            label: "leaf 1.1",
            icon: "file",
            title: "file",
          },
        ],
      },
      {
        key: "2",
        label: "node 2",
        icon: "folder",
        title: "folder",
        children: [
          {
            key: "2.1",
            label: "node 2.1",
            icon: "folder",
            title: "folder",
            children: [
              {
                key: "2.1.1",
                label: "leaf 2.1.1",
                icon: "file",
                title: "file",
              },
            ],
          },
          {
            key: "2.2",
            label: "node 2.2",
            icon: "folder",
            title: "folder",
            children: [
              {
                key: "2.2.1",
                label: "leaf 2.2.1",
                icon: "file",
                title: "file",
              },
              {
                key: "2.2.2",
                label: "leaf 2.2.2",
                icon: "file",
                title: "file",
              },
            ],
          },
        ],
      },
    ],
  },
];
