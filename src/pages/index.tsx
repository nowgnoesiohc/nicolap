import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/useAuth";
import { toast } from "sonner";
import { ChatModal } from "@/components/ChatModal";
import { MessageSquare } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();
  const [isChatOpen, setIsChatOpen] = useState(false);

  // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  // 전역 단축키 감지: Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsChatOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("로그아웃되었습니다.");
      navigate("/login");
    } catch (error) {
      console.error("로그아웃 실패:", error);
      toast.error("로그아웃에 실패했습니다.");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">로딩 중...</div>
      </div>
    );
  }

  if (!user) {
    return null; // 리다이렉트 중
  }

  return (
    <>
      <Toaster />
      <ChatModal open={isChatOpen} onOpenChange={setIsChatOpen} />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto max-w-5xl px-4 py-8">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900">
                환영합니다! 👋
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                {user.email}님, Nicolap 프로젝트 메인 페이지입니다
              </p>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Button
                onClick={() => setIsChatOpen(true)}
                className="px-6 py-3 gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                채팅 열기
                <kbd className="ml-2 px-2 py-0.5 bg-white/20 rounded text-xs">
                  ⌘K
                </kbd>
              </Button>
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="px-6 py-3"
              >
                로그아웃
              </Button>
            </div>

            <div className="mt-8 rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold mb-4">사용자 정보</h2>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">이메일:</span> {user.email}
                </p>
                <p>
                  <span className="font-medium">User ID:</span> {user.id}
                </p>
                <p>
                  <span className="font-medium">마지막 로그인:</span>{" "}
                  {new Date(user.last_sign_in_at || "").toLocaleString("ko-KR")}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-border bg-blue-50 p-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                💡 팁
              </h3>
              <p className="text-sm text-gray-600">
                <kbd className="px-2 py-1 bg-white border rounded text-xs mr-1">
                  Cmd/Ctrl + K
                </kbd>
                를 눌러서 어디서든 채팅 모달을 열 수 있습니다!
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
