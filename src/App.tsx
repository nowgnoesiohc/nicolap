import { useState } from "react";
import { Routes } from "react-router";
import { Notfound } from "@/pages/notfound";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-background">
        <Header />
        <TabNavigation hasUnreadMessages={hasUnreadMessages} />
        <main className="max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <ChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </>
  );
}

export default App;
