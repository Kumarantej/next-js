import Link from "next/link";
export default function About() {
  return (
    <h2>
      click go to dashboard <Link href="/dashboard">dashboard</Link>
    </h2>
  );
}
