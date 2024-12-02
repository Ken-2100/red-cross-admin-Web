"use client";
import { createContext, useState, useEffect } from "react";

export const SearchArrayDataProvider = createContext(null);

const SearchArrayProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [searchDataArchives, setSearchDataArchives] = useState("");
  const [rootFlag, setRootFlag] = useState("");

  useEffect(() => {
    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/stream`
    );

    eventSource.onmessage = (event) => {
      const updatedData = JSON.parse(event.data);
      setUsers(updatedData);
    };

    eventSource.onerror = (error) => {
      console.error("SSE error:", error);
      eventSource.close(); // Optionally close on error
    };

    return () => {
      eventSource.close();
    };
  }, []);

  // Filter users based on the current data
  const notAdminUsers = users.filter(
    (val) => val.userType !== "admin" && val.certificatedApproved === false
  );

  const graudatedUsers = users.filter(
    (val) => val.certificatedApproved === true
  );

  const finalUsers = notAdminUsers.filter((val) => {
    const lowercaseSearch = searchData.toLowerCase();
    return Object.values(val).some(
      (field) =>
        typeof field === "string" &&
        field.toLowerCase().includes(lowercaseSearch)
    );
  });

  const archivedUsers = graudatedUsers.filter((val) => {
    const lowercaseSearch = searchDataArchives.toLowerCase();
    return Object.values(val).some(
      (field) =>
        typeof field === "string" &&
        field.toLowerCase().includes(lowercaseSearch)
    );
  });

  return (
    <SearchArrayDataProvider.Provider
      value={{
        finalUsers,
        searchData,
        setSearchData,
        archivedUsers,
        searchDataArchives,
        setSearchDataArchives,
        setRootFlag,
      }}
    >
      {children}
    </SearchArrayDataProvider.Provider>
  );
};

export default SearchArrayProvider;
