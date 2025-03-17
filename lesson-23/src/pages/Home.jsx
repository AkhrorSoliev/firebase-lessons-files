// styles
import styles from "./Home.module.css";

// custom hooks
import { useCollection } from "../hooks/useCollection";

// components
import TransactionsList from "../components/TransactionsList";
import TransactionForm from "../components/TransactionForm";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Home() {
  const { user } = useGlobalContext();
  const { data: transactions } = useCollection("transactions", [
    "uid",
    "==",
    user?.uid,
  ]);
  return (
    <div className={`${styles.home} container`}>
      <div style={{ flexShrink: 0 }}>
        {transactions?.length ? (
          <TransactionsList transactions={transactions} />
        ) : (
          <h2>You don't have transactions yet</h2>
        )}
      </div>
      <div>
        <h2>Add New Transacion:</h2>
        <TransactionForm />
      </div>
    </div>
  );
}

export default Home;
