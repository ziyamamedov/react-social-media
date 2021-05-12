import MainLayout from "../../components/layouts/MainLayout";
import styled from "styled-components";
import Link from "next/link";
import { Avatar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/reducers";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();

  const user = useSelector(
    (state: RootState) => state.users[Number(router.query.id)]
  );

  const friendsList = useSelector((state: RootState) => {
    return user.friends.map((friend) => ({
      name: state.users[friend].name,
      id: state.users[friend].id,
      photoUrl: state.users[friend].photoUrl,
    }));
  });
  return (
    <MainLayout title="Social-Media | Main">
      <Container>
        <Sidebar>
          <Avatar
            className="user-avatar"
            src={user.photoUrl}
            alt="User photo"
            variant="square"
          ></Avatar>
          <Link href={`/friend/friends/${user.id}`}>
            <FriendsLabel>
              <span className="friends-label__title">Friends</span>
              <span className="friends-label__quan">{user.friends.length}</span>
            </FriendsLabel>
          </Link>
          <UserFriends>
            {friendsList.map((friend) => (
              <Link key={friend.id} href={`/friend/${friend.id}`}>
                <a>
                  <Avatar src={friend.photoUrl} className="friends-avatar" />
                  <span>{friend.name}</span>
                </a>
              </Link>
            ))}
          </UserFriends>
        </Sidebar>

        <MainBody>
          <UserName> {user.name}</UserName>
          <UserInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            quibusdam necessitatibus similique? Eveniet obcaecati nemo esse
            harum doloremque quia incidunt facere fuga perferendis, quam commodi
            assumenda suscipit quidem aliquid ipsam.
          </UserInfo>
          <InfoBar>
            <Link href={`/friend/friends/${user.id}`}>Friends</Link>
            <Link href="/photos">Photos</Link>
            <Link href="/videos">Videos</Link>
          </InfoBar>
        </MainBody>
      </Container>
    </MainLayout>
  );
}

//Layout styles
const Container = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  max-width: 200px;

  .user-avatar {
    width: 200px;
    height: 200px;
    margin-bottom: 1rem;
  }
`;
const MainBody = styled.div`
  display: flex;
  flex-direction: column;
`;

//Friends List styles
const UserFriends = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0.25rem;
    font-size: 13px;
    color: cornflowerblue;
  }

  .friends-avatar {
    width: 50px;
    height: 50px;
    margin-bottom: 0.5rem;
  }
`;
const FriendsLabel = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;

  .friends-label__title {
    margin-right: 1rem;
  }
  .friends-label__quan {
    font-size: 12px;
    color: #9d9d9d;
  }
`;

//User info styles
const UserInfo = styled.p`
  max-width: 30rem;
  margin-bottom: 2rem;
`;
const UserName = styled.h1`
  margin-bottom: 1rem;
`;
const InfoBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: cornflowerblue;
  border-top: 1px solid #9d9d9d73;
  border-bottom: 1px solid #9d9d9d73;
  padding: 1rem 0;
`;
