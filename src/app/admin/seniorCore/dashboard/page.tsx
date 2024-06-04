"use client";
import Loader from "@/components/loader";
import Link from "next/link";
import { Router } from "next/router";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [show, setShow] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("adminAccessToken");
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  };

  useEffect(() => {
    try {
      const accessTokenValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("scaccessToken"))
        ?.split("=")[1];
      if (!accessTokenValue) {
        window.location.href = "/admin";
        return;
      }
      setShow(true);
    } catch (error) {
      window.location.href = "/admin";
    }
  }, []);

  return (
    <>
      {show && (
        <div className="flex flex-col h-screen">
          <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Senior Core Dashboard</h1>
            <div>
              <Link
                href="/admin/logout"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          </header>
          <main className="flex justify-center p-6">
            <div className="space-x-4">
              <Link
                href="/admin/seniorCore/gdEvents"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Round 3 : Events
              </Link>
              <Link
                href="/admin/seniorCore/groupdiscussions"
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Create Events GD
              </Link>
            </div>
          </main>
        </div>
      )}
    </>
  );
}