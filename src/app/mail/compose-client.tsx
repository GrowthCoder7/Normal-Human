// src/app/mail/compose-client.tsx
"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";
import type { ComponentProps } from "react";
import type ComposeButton from "./compose-button";

// If your ComposeButton exports props, replace `any` with the correct props type, e.g.
// import type { ComposeProps } from "./compose-button";
// const Compose = dynamic<ComposeProps>(...)
// For a component with no props, `any` is fine.

const Compose = dynamic<any>(() => import("./compose-button").then((m) => m.default), {
  ssr: false,
});

const ComposeClient: FC<any> = (props) => {
  return <Compose {...props} />;
};

export default ComposeClient;
