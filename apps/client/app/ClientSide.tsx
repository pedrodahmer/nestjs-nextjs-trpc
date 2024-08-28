"use client";

import { useEffect, useState } from "react";
import { trpc } from "./trpc";

export default function ClientSide() {
  const [greeting, setGreeting] = useState<string>("");
  useEffect(() => {
    trpc.hello.query({ name: "meregali" }).then((response) => {
      setGreeting(response);
    });
  }, []);
  return <h1>eu sou client side! - {greeting}</h1>;
}
