// styles
import styles from "./Home.module.css";

// custom hooks
import { useCollection } from "../hooks/useCollection";

// components
import TransactionsList from "../components/TransactionsList";

function Home() {
  const { data: transactions } = useCollection("transactions");
  return (
    <div className="container">
      {transactions && <TransactionsList transactions={transactions} />}
    </div>
  );
}

export default Home;
