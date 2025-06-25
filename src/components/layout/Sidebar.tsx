import {
  BookMarked,
  BookOpen,
  BookText,
  Calculator,
  Clock,
  Compass,
  Heart,
  HeartHandshake,
  LogIn,
  MessageCircle,
  Video,
  X,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: "হোম", path: "/", icon: <BookOpen size={20} /> },
    { name: "কুরআন", path: "/quran", icon: <BookText size={20} /> },
    { name: "হাদিস", path: "/hadith", icon: <BookMarked size={20} /> },
    { name: "নামাজের সময়", path: "/prayer-times", icon: <Clock size={20} /> },
    { name: "কিবলা", path: "/qibla-direction", icon: <Compass size={20} /> },
    {
      name: "যাকাত ক্যালকুলেটর",
      path: "/zakat-calculator",
      icon: <Calculator size={20} />,
    },
    { name: "ইসলামিক বই", path: "/books", icon: <BookOpen size={20} /> },
    { name: "লেকচার", path: "/lectures", icon: <Video size={20} /> },
    { name: "দোয়া ও যিকর", path: "/dua", icon: <Heart size={20} /> },
    {
      name: "দান করুন",
      path: "/dashboard/donate",
      icon: <HeartHandshake size={20} />,
    },
    { name: "Login", path: "/auth/login", icon: <LogIn size={20} /> },
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

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
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
          </ul>
        </nav>

        <div className="p-4 mt-auto">
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
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
