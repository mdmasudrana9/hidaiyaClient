import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <main className="flex-1 p-4 md:p-6 pt-20 md:pt-24 pb-24 md:pb-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
