import { FriendsItem } from "./FriendsItem";

export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
          {friends.map(friend => (
            <FriendsItem key={friend.id} friends={friend} /> 
          ))}
        </ul>
    );
};