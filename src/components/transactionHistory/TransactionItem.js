import { TableData, TrLinie } from "./TransactionItem.styled";

export const TransactionItem = ({ items: { type, amount, currency } }) => {
    return (
        <TrLinie>
          <TableData>{type}</TableData>
          <TableData>{amount}</TableData>
          <TableData>{currency}</TableData>
        </TrLinie>
    );
 };