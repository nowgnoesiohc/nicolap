import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import ChatPanel from "@/components/ChatPanel";
import Notes from "./Notes";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(true);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsChatOpen((prev) => !prev);
        if (!isChatOpen) {
          setHasUnreadMessages(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isChatOpen]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TabNavigation hasUnreadMessages={hasUnreadMessages} />
      <main className="max-w-5xl mx-auto">
        <Notes />
      </main>
      <ChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;
