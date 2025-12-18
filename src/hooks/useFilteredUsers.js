import { useMemo } from "react";
import { useSelector } from "react-redux";

export function useFilteredUsers(apiUsers = []) {
  const { searchTerm, localUsers, sortBy } = useSelector(
    (state) => state.users
  );

  const filteredUsers = useMemo(() => {
    const allUsers = [...(apiUsers || []), ...localUsers];

    return allUsers
      .filter((user) => {
        const term = searchTerm.toLowerCase();
        return (
          (user.name && user.name.toLowerCase().includes(term)) ||
          (user.email && user.email.toLowerCase().includes(term)) ||
          (user.phone && user.phone.toLowerCase().includes(term))
        );
      })
      .sort((a, b) => {
        const aValue = (a[sortBy] || "").toString().toLowerCase();
        const bValue = (b[sortBy] || "").toString().toLowerCase();
        return aValue.localeCompare(bValue);
      });
  }, [apiUsers, localUsers, searchTerm, sortBy]);

  return filteredUsers;
}
