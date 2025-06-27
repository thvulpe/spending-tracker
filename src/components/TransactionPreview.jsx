import { TransactionContext } from '../context/TransactionContext';
import trashIcon from '../icons/trash.png';
import { useContext } from 'react';

const TransactionPreview = ({transaction}) => {
    const {transactions, setTransactions} = useContext(TransactionContext);

    const deleteHandler = (transaction) => {
        let newTransactions = transactions.filter((t) => {
            return (t.id !== transaction.id);
        })
        setTransactions(newTransactions);
    }

    return (
        <div className="transaction-preview">
            <div className='cell'>{transaction.retailer}</div>
            <div className='cell'>{transaction.amount}</div>
            <div className='cell'>{transaction.date}</div>
            <button className='trash-button' onClick={() => {deleteHandler(transaction)}}>
                <img src={trashIcon} alt="trash bin" />
            </button>
        </div>
    );
}

export default TransactionPreview;