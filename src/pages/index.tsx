import { useNavigate } from "react-router";
import { useEffect } from "react";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/useAuth";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();

  // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

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
                onClick={handleSignOut}
                variant="outline"
                className="px-6 py-3"
              >
                로그아웃
              </Button>
            </div>

            <div className="mt-8 rounded-lg border p-6">
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
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
