import styles from "./header.module.css";

export default function Header({ title }: HeaderProps) {
  return (
    <main className={styles.main}>
      <div>{title}</div>
    </main>
  );
}
