import styles from "../styles/Home.module.css";

export default function Note() {
  return (
    <div className={styles.note}>
      <h1>This is the note title</h1>
      <p>This is the note content</p>
    </div>
  )
}