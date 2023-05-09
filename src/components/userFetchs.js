import { useSelector } from "react-redux";

const userFetchs = ({ users, isLoading, error }) => {
    const { users, isLoading, error } = useSelector((store) => store.user)
  return (
    <div>isLoading</div>
  )
}


export default userFetchs;