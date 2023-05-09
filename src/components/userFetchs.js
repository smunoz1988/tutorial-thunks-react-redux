import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserFetches = () => {
  const { users, isLoading, error } = useSelector((store) => store.user);
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  if (loading === 'not loading') {
    return (
      <p className="quoteAuthor">
        Loading
      </p>
    );
  }

  if (hasError === true) {
    return (
      <p className="quoteAuthor">
        Error
      </p>
    );
  }
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserFetches;
