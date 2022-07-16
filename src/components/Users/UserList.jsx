import React, { useEffect, useContext } from "react";
import Spinner from "../Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/Github/GithubContext";

const UserList = () => {
  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-20 mb-10">
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserList;
