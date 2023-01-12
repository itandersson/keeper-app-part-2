import styles from "../styles/Home.module.css";

export default function Note(props: { key: number, title: string, content: string }) {
  return (
    <div className={styles.note}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}