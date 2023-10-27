"use client";

import Link from "next/link";
import { DashboardContainer } from "./styled";

export default function Dashboard() {
  return (
    <DashboardContainer>
      click go to dashboard <Link href="/about">dashboard</Link>
    </DashboardContainer>
  );
}
