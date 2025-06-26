const TransactionPreview = ({transaction}) => {
    return (
        <div className="transaction-preview">
            <h2>{transaction.id}</h2>
            <h2>{transaction.retailer}</h2>
            <h2>{transaction.amount}</h2>
        </div>
    );
}

export default TransactionPreview;