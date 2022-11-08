import PropTypes from 'prop-types';
import scss from './Transaction.module.scss';

const TransactionHistory = ({ items }) => (
  <table className={scss.transactionHistory}>
    <thead >
      <tr className={scss.head}>
        <th className={scss.head__item}>Type</th>
        <th className={scss.head__item}>Amount</th>
        <th className={scss.head__item}>Currency</th>
      </tr>
    </thead>

    <tbody className={scss.body}>
      {items.map(({ type, amount, currency, id }) => (
        <TableRow type={type} amount={amount} currency={currency} key={id} />
      ))}
    </tbody>
  </table>
);

const TableRow = ({ type, amount, currency }) => (
  <tr className={scss.row}>
    <td className={scss.row__type}>{type}</td>
    <td className={scss.row__type}>{amount}</td>
    <td className={scss.row__type}>{currency}</td>
  </tr>
);

export { TransactionHistory };
