import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm "
        >
            <div className="p-6 logo">
                <Logo />
            </div>
            <div className="flex flex-col w-full sidebar-routes">
                <SidebarRoutes />
            </div>
        </div>
    )
}

export default Sidebar;