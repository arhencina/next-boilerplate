import styles from "@/app/page.module.css";
import Header from "@/app/components/header/header";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header title={`Home`} />
      <Link href={`/login`}>Go to Login</Link>
    </main>
  );
}
