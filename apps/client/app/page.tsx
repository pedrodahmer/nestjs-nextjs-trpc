import Image from "next/image";
import { trpc } from "./trpc";
import ClientSide from "./ClientSide";

export default async function Home() {
  const response = await trpc.hello.query({ name: "nicholas" });
  return (
    <div className="flex flex-col gap-10">
      <h1>eu sou server side - {response}</h1>
      <ClientSide />
    </div>
  );
}
