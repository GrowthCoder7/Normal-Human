import React from "react";
import ThemeToggle from "@/components/ui/theme-toggle";
import MailClient from "./mail-client";
import { UserButton } from "@clerk/nextjs";
import ComposeClient from "./compose-client";

const MailDashboard: React.FC = () => {
  return (
    <>
      <div className="absolute bottom-4 left-4">
        <div className="flex items-center gap-2">
          <UserButton/>
          <ThemeToggle />
          <ComposeClient/>
        </div>
      </div>
      <MailClient
        defaultLayout={[20, 32, 48]}
        defaultCollapsed={false}
        navCollapsedSize={4}
      />
    </>
  );
};

export default MailDashboard;
