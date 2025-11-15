import React from "react";
import dynamic from "next/dynamic";
import ThemeToggle from "@/components/ui/theme-toggle";
import type { MailProps } from "./mail";
import { UserButton } from "@clerk/nextjs";

const Mail = dynamic<MailProps>(
  () => import("./mail").then((mod) => mod.default),
  { ssr: false }
);

const MailDashboard: React.FC = () => {
  return (
    <>
      <div className="absolute bottom-4 left-4">
        <div className="flex items-center gap-2">
          <UserButton/>
          <ThemeToggle />
        </div>
      </div>
      <Mail
        defaultLayout={[20, 32, 48]}
        defaultCollapsed={false}
        navCollapsedSize={4}
      />
    </>
  );
};

export default MailDashboard;
