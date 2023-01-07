export default function Footer() {
    let dt = new Date();

    return (
        <footer>
           <p>Copyright ⓒ {dt.getFullYear()}</p>
        </footer>
    )
  }