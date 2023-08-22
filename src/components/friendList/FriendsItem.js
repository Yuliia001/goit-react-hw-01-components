import { Avatar, Item, Name, Status } from "./FriendsItem.styled";

export const FriendsItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <Item>
            <Status $online={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Item>
    );
};