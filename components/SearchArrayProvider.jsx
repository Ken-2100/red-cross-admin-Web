"use client";
import { createContext, useState, useEffect } from "react";

export const SearchArrayDataProvider = createContext(null);
export const dynamic = "force-dynamic";
export const revalidate = 0;

const SearchArrayProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [searchDataArchives, setSearchDataArchives] = useState("");
  const [rootFlag, setRootFlag] = useState("");
  console.log("out flag", rootFlag);

  // Fetch users when the component mounts
  useEffect(() => {
    console.log("Useffect flag", rootFlag);
    const getUsers = async () => {
      try {
        const response = await fetch(
          ` ${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store", // Ensures no caching occurs
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, [rootFlag]); // Only runs on mount

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
        rootFlag,
      }}
    >
      {children}
    </SearchArrayDataProvider.Provider>
  );
};

export default SearchArrayProvider;
