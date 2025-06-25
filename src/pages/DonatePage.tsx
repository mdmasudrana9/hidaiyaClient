import React from "react";
import SectionHeader from "../components/common/SectionHeader";
import {
  Heart,
  HeartHandshake,
  School,
  Users,
  Utensils,
  Home,
} from "lucide-react";
import Donate from "./dashboard/donate/Donate";

// Sample data for charity organizations
const charities = [
  {
    id: 1,
    name: "ইসলামিক ফাউন্ডেশন",
    description:
      "ইসলামিক শিক্ষা, গবেষণা এবং দাওয়াতি কার্যক্রম পরিচালনা করে। এছাড়া মসজিদ নির্মাণ, মাদ্রাসা পরিচালনা ও উন্নয়নে সহায়তা করে।",
    icon: <HeartHandshake size={24} />,
    website: "https://islamicfoundation.gov.bd",
    paymentMethods: ["বিকাশ", "নগদ", "রকেট"],
  },
  {
    id: 2,
    name: "বাংলাদেশ মুসলিম এইড",
    description:
      "এতিম, বিধবা, দরিদ্র ও দুঃস্থদের জন্য বিভিন্ন কল্যাণমূলক কার্যক্রম পরিচালনা করে। বিশেষ করে শিক্ষা, স্বাস্থ্য ও আশ্রয় সহায়তা প্রদান করে।",
    icon: <Users size={24} />,
    website: "https://www.muslimaid.org",
    paymentMethods: ["বিকাশ", "নগদ", "পেপাল"],
  },
  {
    id: 3,
    name: "আস-সুন্নাহ ফাউন্ডেশন",
    description:
      "আস-সুন্নাহ ফাউন্ডেশন একটি অরাজনৈতিক, অলাভজনক শিক্ষা, দাওয়াহ ও পূর্ণত মানবকল্যাণে নিবেদিত সেবামূলক প্রতিষ্ঠান।",
    icon: <School size={24} />,
    website: "https://assunnahfoundation.org/",
    paymentMethods: ["বিকাশ", "নগদ"],
  },
  {
    id: 4,
    name: "দুস্থ সাহায্য কেন্দ্র",
    description:
      "অসহায় মানুষদের জন্য খাদ্য, বস্ত্র, চিকিৎসা সহায়তা প্রদান করে। এছাড়া প্রাকৃতিক দুর্যোগ ও আপদকালীন সময়ে সাহায্য প্রদান করে।",
    icon: <Utensils size={24} />,
    website: "https://example.org",
    paymentMethods: ["বিকাশ", "নগদ", "রকেট", "পেপাল"],
  },
];

// Sample data for donation categories
const donationCategories = [
  {
    id: "orphans",
    name: "এতিম সাহায্য",
    description: "এতিম শিশুদের শিক্ষা, খাদ্য ও বাসস্থান সহায়তা প্রদান করুন।",
    icon: <Heart size={24} />,
  },
  {
    id: "education",
    name: "শিক্ষা সহায়তা",
    description: "গরিব ও মেধাবী ছাত্রছাত্রীদের শিক্ষা সহায়তা প্রদান করুন।",
    icon: <School size={24} />,
  },
  {
    id: "food",
    name: "খাদ্য সহায়তা",
    description: "অভাবগ্রস্থ পরিবারগুলোকে খাদ্য সহায়তা প্রদান করুন।",
    icon: <Utensils size={24} />,
  },
  {
    id: "housing",
    name: "বাসস্থান সহায়তা",
    description: "গৃহহীন পরিবারের জন্য বাসস্থান নির্মাণে সহায়তা করুন।",
    icon: <Home size={24} />,
  },
];

const DonatePage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <SectionHeader
        title="দান করুন"
        subtitle="বিশ্বস্ত ইসলামিক দাতব্য প্রতিষ্ঠানে দান করুন এবং সাওয়াব অর্জন করুন"
      />

      <div className="mb-12 text-center">
        <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-medium text-primary-800 dark:text-primary-200 mb-4">
            দানের মাধ্যমে উপকৃত হোন দুনিয়া ও আখিরাতে
          </h3>
          <p className="text-primary-700 dark:text-primary-300 mb-4">
            "যে ব্যক্তি আল্লাহর পথে একটি খেজুর পরিমাণ সম্পদ হালাল উপার্জন থেকে
            দান করে—আর আল্লাহ শুধু হালাল সম্পদই গ্রহণ করেন—আল্লাহ তা তাঁর ডান
            হাতে গ্রহণ করেন। অতঃপর তিনি তা তার জন্য লালন-পালন করেন, যেভাবে
            তোমাদের কেউ তার ঘোড়ার বাচ্চাকে লালন-পালন করে। ফলে তা পাহাড়ের মতো
            বিশাল আকার ধারণ করে।"
          </p>
          <p className="text-primary-700 dark:text-primary-300 text-sm italic">
            — সহিহ বুখারী, হাদিস নং ১৪১০
          </p>
        </div>
      </div>

      <Donate />

      <section className="mb-12">
        <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">
          দানের খাত নির্বাচন করুন
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationCategories.map((category) => (
            <div
              key={category.id}
              className="card p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-500 mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {category.description}
              </p>
              <button className="btn btn-primary mt-auto">দান করুন</button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">
          বিশ্বস্ত দাতব্য প্রতিষ্ঠান
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {charities.map((charity) => (
            <div key={charity.id} className="card p-6">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-500 mr-4">
                  {charity.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {charity.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {charity.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      পেমেন্ট পদ্ধতি:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {charity.paymentMethods.map((method) => (
                        <span
                          key={method}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={charity.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline text-sm"
                    >
                      ওয়েবসাইট দেখুন
                    </a>
                    <button className="btn btn-primary text-sm">
                      দান করুন
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
