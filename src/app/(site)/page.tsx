import { Container } from "@/components/Common/Container";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FIRE Money Manager",
  description: "Manage your finances with FIRE Money Manager",
};

export default function Home() {
  return (
    <Container className="max-w-c-1390">
      <Hero />
      {/* <Features /> */}
      <Benefits />
    </Container>
  );
}
