import styles from "../styles/Home.module.css";
import Note from "../components/note";
import notes from "../public/notes";

function createNotes(item:any) {
    return (
        <Note
            key={item.key}
            title={item.title}
            content={item.content}
        />
    )
}

export default function Main() {
    return (
        <main className={styles.main}>
            {notes.map(createNotes)}
        </main>
    )
}