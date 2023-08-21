import { FriendsList } from "./FriendList.styled";
import { FriendsItem } from "./FriendsItem";

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
          {friends.map(friend => (
            <FriendsItem key={friend.id} friends={friend} /> 
          ))}
        </FriendsList>
    );
};