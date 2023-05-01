import styles from "@/app/page.module.css";
import Header from "@/app/components/header/header";
import Link from "next/link";

export default function Login() {
  return (
    <main className={styles.main}>
      <Header title={`Login`} />
      <Link href={`/`}>Go back to Home</Link>
    </main>
  );
}
