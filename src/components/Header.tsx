import { FileText } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="flex h-14 items-center px-6">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Workspace</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
