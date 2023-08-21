import { Description, ProfileUser, Image, Name, Tag, Location, Stats, StatsItem, Label, Quantity} from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats:{ followers, views, likes } }) => { 
    return (
      <ProfileUser>
        <Description>
          <Image
           src={avatar}
           alt="User avatar"
           class="avatar"
          />
       <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
        </Description>

        <Stats>
          <StatsItem>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </StatsItem>
        </Stats>
    </ProfileUser>
    );
};