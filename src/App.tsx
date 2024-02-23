import styles from "./App.module.css";
import Form from "./components/Form/Form";
import ListContainer from "./components/ListContainer/ListContainer";

function App() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Form />
        <ListContainer />
      </div>
    </main>
  );
}

export default App;
