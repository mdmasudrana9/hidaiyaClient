import React from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, LanguagesIcon as LanguageIcon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useDirection } from "../../contexts/DirectionContext";
import { useAppSelector } from "../../redux/hooks";
import { selectToken, TUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const { direction, toggleDirection } = useDirection();
  const token = useAppSelector(selectToken);
  const user = token ? (verifyToken(token) as unknown as TUser) : null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">ই</span>
            </div>
            <span className="text-xl font-medium text-primary-600 dark:text-primary-400">
              ইসলামিক হাব
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleDirection}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label={direction === "ltr" ? "Switch to RTL" : "Switch to LTR"}
          >
            <LanguageIcon size={20} />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a href="#" className="hidden md:block btn btn-primary">
            ডাউনলোড অ্যাপ
          </a>
          {user && (
            <Link
              to={`/dashboard/${user.role}`} // ✅ Correct string interpolation
              className="md:block btn btn-outline"
            >
              {"Dashboard"}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
