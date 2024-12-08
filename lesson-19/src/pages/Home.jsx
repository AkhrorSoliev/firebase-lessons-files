// styles
import styles from "./Home.module.css";

// custom hooks
import { useCollection } from "../hooks/useCollection";

// components
import TransactionsList from "../components/TransactionsList";
import TransactionForm from "../components/TransactionForm";

function Home() {
  const { data: transactions } = useCollection("transactions");
  return (
    <div className={`${styles.home} container`}>
      {transactions && <TransactionsList transactions={transactions} />}
      <div>
        <h2>Add New Transacion:</h2>
        <TransactionForm />
      </div>
    </div>
  );
}

export default Home;
