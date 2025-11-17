// src/app/mail/mail-client.tsx
"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";
import type { MailProps } from "./mail"; // must match the exported type in mail.tsx

// dynamic import done inside a Client Component — allowed to use ssr: false
const Mail = dynamic<MailProps>(
  () => import("./mail").then((mod) => mod.default),
  { ssr: false }
);

const MailClient: FC<MailProps> = (props) => {
  return <Mail {...props} />;
};

export default MailClient;
