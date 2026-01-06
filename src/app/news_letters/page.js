"use client";
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Download, CalendarDays } from 'lucide-react';

// Mock Data (same as before)
const newsletters = [
    {
        id: 1,
        title: "CTEF Assam Chapter, 12 March 2024",
        date: "Mar 12, 2024",
        coverImage: "/news_letters/nl_1.jpg",
        fileUrl: "#",
    },
    {
        id: 2,
        title: "CTEF Assam Chapter, 12 August 2023",
        date: "Aug 12, 2023",
        coverImage: "/news_letters/nl_2.jpg",
        fileUrl: "#",
    },
    {
        id: 3,
        title: "CTEF Assam Chapter, 25 February 2023",
        date: "Feb 25, 2023",
        coverImage: "/news_letters/nl_3.jpg",
        fileUrl: "#",
    },
    {
        id: 4,
        title: "CTEF Assam Chapter, 06 September 2022",
        date: "Sep 06, 2022",
        coverImage: "/news_letters/nl_4.jpg",
        fileUrl: "#",
    },
    {
        id: 5,
        title: "CTEF Assam Chapter, 18 January 2022",
        date: "Jan 18, 2022",
        coverImage: "/news_letters/nl_5.jpg",
        fileUrl: "#",
    },
    {
        id: 6,
        title: "CTEF Assam Chapter, 01 June 2021",
        date: "Jun 01, 2021",
        coverImage: "/news_letters/nl_6.jpg",
        fileUrl: "#",
    },
    {
        id: 7,
        title: "CTEF Assam Chapter, 01 January 2021",
        date: "Jan 01, 2021",
        coverImage: "/news_letters/nl_7.jpg",
        fileUrl: "#",
    },
];

export default function NewsletterPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            {/* Header Section - Matches the 'About Us' banner style */}
            <div className="bg-emerald-950 py-16 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Newsletters
                </h1>
                <p className="text-green-100 max-w-3xl mx-auto text-sm md:text-base">
                    Stay informed with our latest updates, reports, and insights. Download and explore our collection of newsletters.
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-10">
                {/* Section Title with accent color */}
                <div className="mb-10">
                    <span className="text-[#f59e0b] font-semibold uppercase tracking-wider text-sm">
                        OUR LATEST EDITIONS
                    </span>
                    <h2 className="text-3xl font-bold text-[#004d33] mt-2">
                        Explore Our <span className="text-[#f59e0b]">Publications</span>
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3">
                    {newsletters.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
                        >
                            {/* Cover Photo Container */}
                            <div className="relative h-[380px] w-full overflow-hidden bg-gray-100">
                                <img
                                    src={item.coverImage}
                                    alt={item.title}
                                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-[#004d33]/0 group-hover:bg-[#004d33]/10 transition-colors duration-300" />
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Date Badge */}
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <CalendarDays className="w-4 h-4 mr-2 text-[#f59e0b]" />
                                    <span>{item.date}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#004d33] mb-3 group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                                    {item.title}
                                </h3>

                                {/* Spacer */}
                                <div className="flex-grow" />

                                {/* Download Button */}
                                <a
                                    href={item.fileUrl}
                                    download
                                    className="mt-4 w-full flex items-center justify-center gap-2 bg-white text-[#004d33] border-2 border-[#004d33] hover:bg-[#004d33] hover:text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 group/btn"
                                >
                                    <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
                                    <span>Download PDF</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}