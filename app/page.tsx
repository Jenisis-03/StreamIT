"use client";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Home() {
  const [roomID, setRoomID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { fullName, setFullName } = useUser();

  useEffect(() => {
    setFullName("");
  }, []);
  
  const handleJoinRoom = () => {
    setIsLoading(true);
    router.push(`/room/${roomID}?role=Audience`);
  };
  
  const handleCreateRoom = () => {
    setIsLoading(true);
    router.push(`/room/${uuid()}`);
  };

  // Updated testimonials with placeholder images that won't cause errors
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 overflow-x-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
      
      <div className="min-h-screen w-full flex flex-col">
        {/* Main login card section */}
        <div className="flex items-center justify-center px-6 py-16 md:py-24">
          <div className="w-full max-w-md rounded-2xl backdrop-blur-xl bg-white/10 p-6 md:p-8 shadow-2xl border border-white/10 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex p-3 rounded-full bg-blue-600/20 ring-1 ring-blue-500/30 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 7l-7 5 7 5V7z"></path>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">
                Smooth Live Streaming
              </h1>
              <p className="text-gray-300 text-sm mx-auto max-w-xs">
                Professional SDK for global communication and streaming
              </p>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-medium text-gray-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Your Name
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => setFullName(e.target.value.toString())}
                    className="block w-full pl-4 pr-4 py-3 text-sm border border-slate-700 rounded-lg bg-slate-800/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 shadow-sm transition duration-200 group-hover:border-slate-600"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {fullName && fullName.length >= 3 && (
                <div className="transition-all duration-500 ease-in-out space-y-5 animate-fadeIn">
                  <div className="space-y-2">
                    <label htmlFor="roomid" className="text-xs font-medium text-gray-300 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      Room ID
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        id="roomid"
                        value={roomID}
                        onChange={(e) => setRoomID(e.target.value)}
                        className="block w-full pl-4 pr-4 py-3 text-sm border border-slate-700 rounded-lg bg-slate-800/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 shadow-sm transition duration-200 group-hover:border-slate-600"
                        placeholder="Enter room ID to join"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <button
                      className={`w-full py-3 px-4 text-sm rounded-lg font-medium transition-all duration-200 shadow-lg ${roomID ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-700 text-gray-400 cursor-not-allowed'}`}
                      onClick={handleJoinRoom}
                      disabled={!roomID || isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Joining...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>
                          </svg>
                          Join Stream
                        </span>
                      )}
                    </button>
                    
                    <div className="relative flex items-center py-2">
                      <div className="flex-grow border-t border-slate-700"></div>
                      <span className="flex-shrink mx-3 text-xs text-gray-400">or</span>
                      <div className="flex-grow border-t border-slate-700"></div>
                    </div>
                    
                    <button
                      className="w-full py-3 px-4 text-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-px"
                      onClick={handleCreateRoom}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Creating...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                          </svg>
                          Create New Stream
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Powered by ZegoCloud
              </p>
            </div>
          </div>
        </div>
        
        {/* Testimonials section */}
        <div className="py-12 md:py-16 px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
              Trusted by Professionals Worldwide
            </h2>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </div>
    </div>
  );
}