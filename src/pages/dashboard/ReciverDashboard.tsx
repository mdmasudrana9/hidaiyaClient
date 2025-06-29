"use client";

import {
  Bell,
  CheckCircle,
  Clock,
  Heart,
  MessageSquare,
  Package,
  Star,
  TrendingUp,
  User,
  Users,
  Gift,
  FileText,
  Camera,
} from "lucide-react";
import { useGetmeQuery } from "../../redux/features/auth/authApi";
// Remove this line:
// import { useGetmeQuery } from "../../redux/features/auth/authApi"

export default function ReceiverDashboard() {
  const receivedDonations = [
    {
      date: "01/15/2024",
      amount: "$250",
      donor: "Anonymous Donor",
      category: "Emergency Aid",
      status: "Received",
      message: "For your family's medical expenses",
    },
    {
      date: "01/10/2024",
      amount: "$500",
      donor: "Community Fund",
      category: "Education",
      status: "Received",
      message: "For children's school supplies",
    },
    {
      date: "01/08/2024",
      amount: "$150",
      donor: "Local Mosque",
      category: "Food Aid",
      status: "Processing",
      message: "Monthly food assistance",
    },
  ];

  const thankYouMessages = [
    {
      donor: "Anonymous Donor",
      initials: "AD",
      date: "01/12/2024",
      amount: "$250",
      status: "sent",
    },
    {
      donor: "Community Fund",
      initials: "CF",
      date: "01/08/2024",
      amount: "$500",
      status: "pending",
    },
  ];

  // Replace this:
  // const { data: getme } = useGetmeQuery("")

  const { data: getme } = useGetmeQuery("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Receiver Portal
              </h1>
              <p className="text-sm text-gray-600">
                Manage your support requests
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600 hover:text-orange-600 cursor-pointer transition-colors" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              {/* Change this:
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Assalamu Alaikum, {getme?.data?.name}!</h2>

              // To this: */}
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Assalamu Alaikum
              </h2>
              <p className="text-gray-700 text-lg">
                May Allah bless those who support me
              </p>
              <div className="mt-4 flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Profile Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Trusted Recipient</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl">
                <div className="text-sm opacity-90">Total Received</div>
                <div className="text-2xl font-bold">$2,150</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm font-medium">
                This Month
              </span>
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Gift className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">$900</div>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>3 donations received</span>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm font-medium">
                Active Requests
              </span>
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">2</div>
            <div className="text-sm text-gray-600">Awaiting response</div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm font-medium">
                Supporters
              </span>
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">12</div>
            <div className="flex items-center text-sm text-purple-600">
              <Heart className="w-4 h-4 mr-1" />
              <span>People helping you</span>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm font-medium">
                Thank You Notes
              </span>
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">8</div>
            <div className="text-sm text-gray-600">Messages sent</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Support Received */}
          <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm rounded-xl border border-orange-200">
            <div className="p-6 border-b border-orange-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Recent Support Received
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Donations and aid you've received
                  </p>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                  View All
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-orange-50/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      From
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Purpose
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100">
                  {receivedDonations.map((donation, index) => (
                    <tr
                      key={index}
                      className="hover:bg-orange-50/30 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {donation.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                        {donation.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {donation.donor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div>
                          <div className="font-medium">{donation.category}</div>
                          <div className="text-xs text-gray-500">
                            {donation.message}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${
                            donation.status === "Received"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {donation.status === "Received" ? (
                            <CheckCircle className="w-3 h-3 mr-1" />
                          ) : (
                            <Clock className="w-3 h-3 mr-1" />
                          )}
                          {donation.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Thank You Messages */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-orange-200">
            <div className="p-6 border-b border-orange-200">
              <h3 className="text-xl font-bold text-gray-900">
                Thank You Messages
              </h3>
              <p className="text-gray-600 text-sm">
                Express gratitude to your supporters
              </p>
            </div>

            <div className="p-6 space-y-4">
              {thankYouMessages.map((message, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {message.initials}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 text-sm">
                          {message.donor}
                        </span>
                        <div className="text-xs text-gray-600">
                          {message.amount} • {message.date}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        message.status === "sent"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {message.status}
                    </span>
                  </div>
                  {message.status === "pending" ? (
                    <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                      Send Thank You Message
                    </button>
                  ) : (
                    <div className="text-sm text-gray-600 italic">
                      "Thank you message sent with gratitude 🤲"
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Camera className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">
                    Share Your Story
                  </span>
                </div>
                <p className="text-sm text-blue-700 mb-3">
                  Help donors see the impact of their support by sharing photos
                  and updates.
                </p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Upload Update
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-xl hover:shadow-lg transition-all">
            <Package className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Request Support</h3>
            <p className="text-sm opacity-90">Submit a new support request</p>
          </button>

          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl hover:shadow-lg transition-all">
            <MessageSquare className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Send Thanks</h3>
            <p className="text-sm opacity-90">Thank your supporters</p>
          </button>

          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-xl hover:shadow-lg transition-all">
            <User className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Update Profile</h3>
            <p className="text-sm opacity-90">Keep your information current</p>
          </button>
        </div>
      </main>
    </div>
  );
}
