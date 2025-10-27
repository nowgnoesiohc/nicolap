import React from "react";

type IconProps = {
  icon: "google";
  className?: string;
};

const icons: Record<string, React.FC<{ className?: string }>> = {
  google: ({ className }) => (
    <svg className={className ?? "w-5 h-5"} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
    </svg>
  ),
};

const Icon: React.FC<IconProps> = ({ icon, className }) => {
  const SvgIcon = icons[icon];
  if (!SvgIcon) return null;
  return <SvgIcon className={className} />;
};

export default Icon;
