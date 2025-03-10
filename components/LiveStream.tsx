"use client";

import useUser from "@/hooks/useUser";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useMemo, useRef } from "react";
import { v4 as uuid } from "uuid";

const LiveStream = ({ roomid }: { roomid: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { fullName } = useUser();
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Add router

  const role_str = searchParams.get("role") || "Host";
  const role =
    role_str === "Host"
      ? ZegoUIKitPrebuilt.Host
      : role_str === "Cohost"
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  const sharedLinks = useMemo(() => {
    const currentUrl = window.location.host + pathname;
    const links = [];
    
    if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
      links.push({
        name: "Join as co-host",
        url: `${currentUrl}?role=Cohost`,
      });
    }

    links.push({
      name: "Join as audience",
      url: `${currentUrl}?role=Audience`,
    });

    return links;
  }, [role, pathname]);

  const appID = parseInt(process.env.NEXT_PUBLIC_ZEGO_APP_ID!);
  const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET!;

  const kitToken = useMemo(() => {
    return ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      uuid(),
      fullName || "user" + Date.now(),
      720
    );
  }, [appID, serverSecret, roomid, fullName]);

  const zp = useMemo(() => {
    return ZegoUIKitPrebuilt.create(kitToken);
  }, [kitToken]);

  useEffect(() => {
    if (!containerRef.current) return;

    const joinRoom = async () => {
      try {
        await zp.joinRoom({
          container: containerRef.current!,
          scenario: {
            mode: ZegoUIKitPrebuilt.LiveStreaming,
            config: { role },
          },
          sharedLinks,
        });
      } catch (error) {
        console.error("Failed to join room:", error);
      }
    };

    joinRoom();

    return () => {
      // Fixed: Remove .catch() as destroy() doesn't return a promise
      zp.destroy();
    };
  }, [zp, role, sharedLinks]);

  // Add back button handler
  const handleBack = () => {
    router.push('/'); // Navigate to home page
  };

  return (
    <div>
      {/* Back button */}
      <button 
        onClick={handleBack} 
        className="fixed top-4 left-4 z-10 bg-white px-4 py-2 rounded"
      >
        ← Back to Home
      </button>
      
      <div className="w-full h-screen" ref={containerRef}></div>
    </div>
  );
};

export default LiveStream;