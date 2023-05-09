import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/user/userSlice";

const UserFetches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { users, isLoading, error } = useSelector((store) => store.user);
  const [loading, setLoading] = useState(isLoading);
  const [hasError, setError] = useState(!!error);

  useEffect(() => {
    setLoading(isLoading);
    setError(!!error);
  }, [isLoading, error]);

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (hasError === true) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>`{user.name.first} {user.name.last}`</li>
        ))}
      </ul>
    </div>
  );
};

export default UserFetches;
