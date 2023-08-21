import { GlobalStyle } from "./GlobalStyle";
import { Profile } from "./profileUser/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friendList/FriendList";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";
import user from '../dataUser/user.json';
import data from '../dataUser/data.json';
import friends from '../dataUser/friends.json';
import transactions from '../dataUser/transactions.json';
import { Layout } from "./Layout.styled";



export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </Layout>
  );
};






