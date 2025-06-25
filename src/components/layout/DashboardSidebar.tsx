import {
  BookOpen,
  HeartHandshake,
  LogIn,
  MessageCircle,
  Timer,
  User,
  X,
} from "lucide-react";
import React, { Profiler } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  logout,
  selectToken,
  TUser,
} from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DashboardSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector(selectToken);

  const user = token ? (verifyToken(token) as unknown as TUser) : null;
  console.log("user :>> ", user?.role);

  const handleLogout = () => {
    // Implement your logout logic here
    dispatch(logout());
    navigate("/auth/login");
  };

  const ZDmenuItems = [
    { name: "হোম", path: "/", icon: <BookOpen size={20} /> },

    {
      name: "ডোনার ড্যাশবোর্ড",
      path: "/dashboard/zakatDonor",
      icon: <BookOpen size={20} />,
    },
    {
      name: "দান করুন",
      path: "/dashboard/donate",
      icon: <HeartHandshake size={20} />,
    },
    { name: "ইতিহাস", path: "/histroy", icon: <Timer size={20} /> },
    { name: "গ্রহক", path: "/recivers", icon: <User size={20} /> },
    { name: "যোগাযোগ", path: "/contact", icon: <MessageCircle size={20} /> },
    //{ name: "Login", path: "/auth/login", icon: <LogIn size={20} /> },
  ];
  const ZRmenuItems = [
    { name: "হোম", path: "/", icon: <BookOpen size={20} /> },
    {
      name: "রিসিভার ড্যাশবোর্ড",
      path: "/dashboard/reciver",
      icon: <BookOpen size={20} />,
    },
    { name: "গ্রহন করুন", path: "/recive", icon: <HeartHandshake size={20} /> },
    //{ name: "Login", path: "/auth/login", icon: },
    { name: "যোগাযোগ", path: "/contact", icon: <MessageCircle size={20} /> },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:translate-x-0 md:static md:h-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center md:hidden">
          <span className="text-xl font-medium text-primary-600 dark:text-primary-400">
            ইসলামিক হাব
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {user?.role === "zakatDonor" && (
          <nav className="p-4">
            <ul className="space-y-2">
              {ZDmenuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) => `
                    flex items-center space-x-3 px-4 py-3 rounded-md transition-colors
                    ${
                      isActive
                        ? "bg-primary-500 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }
                  `}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
              <li
                onClick={handleLogout}
                className="flex items-center hover:text-red-500 cursor-pointer gap-2 space-x-3 px-4 py-3 rounded-md transition-colors"
              >
                {" "}
                <LogIn size={20} />
                Logout
              </li>
            </ul>
          </nav>
        )}
        {user?.role === "zakatReciver" && (
          <nav className="p-4">
            <ul className="space-y-2">
              {ZRmenuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) => `
                    flex items-center space-x-3 px-4 py-3 rounded-md transition-colors
                    ${
                      isActive
                        ? "bg-primary-500 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }
                  `}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
              <li
                onClick={handleLogout}
                className="flex cursor-pointer hover:text-red-500 items-center gap-2 space-x-3 px-4 py-3 rounded-md transition-colors"
              >
                {" "}
                <LogIn size={20} />
                Logout
              </li>
            </ul>
          </nav>
        )}

        {/* <div className="p-4 mt-auto">
          <a
            href="#"
            className="btn btn-primary w-full mb-2 flex items-center justify-center"
          >
            <span>ডাউনলোড অ্যান্ড্রয়েড অ্যাপ</span>
          </a>
          <a
            href="#"
            className="btn btn-outline w-full flex items-center justify-center"
          >
            <span>ডাউনলোড উইন্ডোজ অ্যাপ</span>
          </a>
        </div> */}
      </aside>
    </>
  );
};

export default DashboardSidebar;
