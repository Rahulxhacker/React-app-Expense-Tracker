import './App.css';
import Balance from './Components.js/Balance';
import Header from './Components.js/Header';
import Expense from './Components.js/Expense';
import TransactionList from './Components.js/TransactionList';
import AddTransaction from './Components.js/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <Expense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
 