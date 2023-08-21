import { TableHeader, WrapperTransaction } from "./TransactionHistory.styled";
import { TransactionItem } from "./TransactionItem";

export const TransactionHistory = ({ items }) => { 
    return (
        <WrapperTransaction>
          <TableHeader>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </TableHeader>
          <tbody>
            {items.map(item => (
              <TransactionItem key={item.id} items={item} />
            ))}
          </tbody>
        </WrapperTransaction>
    );
};