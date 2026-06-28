"use client";

import { useEffect } from "react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

export default function LordiconProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Register the Lordicon custom element
      // @ts-ignore
      defineElement(lottie.loadAnimation);
    }
  }, []);

  return <>{children}</>;
}
