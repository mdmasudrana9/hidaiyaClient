import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDirection } from "./contexts/DirectionContext";
import { useTheme } from "./contexts/ThemeContext";
import "leaflet/dist/leaflet.css";

// Layout components
import Layout from "./components/layout/Layout";
import MobileNavigation from "./components/layout/MobileNavigation";

// Pages
import HomePage from "./pages/HomePage";
import QuranPage from "./pages/QuranPage";
import HadithPage from "./pages/HadithPage";
import PrayerTimesPage from "./pages/PrayerTimesPage";
import QiblaDirectionPage from "./pages/QiblaDirectionPage";
import ZakatCalculatorPage from "./pages/ZakatCalculatorPage";
import BooksPage from "./pages/BooksPage";
import ComingSoon from "./pages/ComingSoon";
import LecturesPage from "./pages/LecturesPage";
import DuaPage from "./pages/DuaPage";
import DonatePage from "./pages/DonatePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import SurahDetailPage from "./pages/SurahDetailPage";
import HadithCollectionPage from "./pages/HadithCollectionPage";
import Login from "./pages/auth/login/Login";
import Registration from "./pages/auth/registration/Registration";
import Donor from "./pages/auth/registration/Donor";
import Reciver from "./pages/auth/registration/Reciver";

import ReciverDashboard from "./pages/dashboard/ReciverDashboard";
import AuthLayout from "./components/layout/AuthLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import DonorDashboard from "./pages/dashboard/DonorDashboard";

function App() {
  const { direction } = useDirection();
  const { theme } = useTheme();

  useEffect(() => {
    // Apply direction to document
    document.documentElement.dir = direction;

    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("pattern-dark");
      document.body.classList.remove("pattern-light");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("pattern-dark");
      document.body.classList.add("pattern-light");
    }
  }, [direction, theme]);

  return (
    <div
      className={`font-bengali min-h-screen ${direction === "rtl" ? "rtl" : "ltr"}`}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/quran" element={<QuranPage />} />
          <Route path="/hadith" element={<HadithPage />} />
          <Route path="/prayer-times" element={<PrayerTimesPage />} />
          <Route path="/qibla-direction" element={<QiblaDirectionPage />} />
          <Route path="/zakat-calculator" element={<ZakatCalculatorPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/lectures" element={<LecturesPage />} />
          <Route path="/dua" element={<DuaPage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quran/surah/:id" element={<SurahDetailPage />} />
          <Route
            path="/hadith/collection/:id"
            element={<HadithCollectionPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="register/donor" element={<Donor />} />
          <Route path="register/receiver" element={<Reciver />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="zakatDonor" element={<DonorDashboard />} />
          <Route path="zakatReciver" element={<ReciverDashboard />} />
          <Route path="donate" element={<DonatePage />} />
        </Route>
      </Routes>
      <MobileNavigation />
    </div>
  );
}

export default App;
