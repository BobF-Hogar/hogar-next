import Dashboard from "./dashboard/Dashboard"

export const screens = [
    {
        name: "SCREEN_DASHBOARD",
        path: "/",
        element: <Dashboard />,
    },
    {
        name: "SCREEN_SCENES",
        path: "/scenes",
        element: <div>TODO: Scenes</div>,
    },
    {
        name: "SCREEN_ROOMS",
        path: "/rooms",
        element: <div>TODO: Rooms</div>,
    },
    {
        name: "SCREEN_SPEAKER",
        path: "/speaker",
        element: <div>TODO: Speaker</div>,
    },
    {
        name: "SCREEN_SETTINGS",
        path: "/settings",
        element: <div>TODO: Settings</div>,
    },
];