"use client";
import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Modal from "../components/Modal";
import Loading from "../components/sharedComponets/Loading";
import Error from "../components/sharedComponets/Error";

type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

export default function UsersPage() {
  const { data, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="p-4 md:p-6">
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-sm md:text-base">
              <th className="p-2 md:p-3 border">Name</th>
              <th className="p-2 md:p-3 border">Email</th>
              <th className="p-2 md:p-3 border">Company</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className="cursor-pointer hover:bg-gray-50 text-sm md:text-base"
              >
                <td className="p-2 md:p-3 border">{user.name}</td>
                <td className="p-2 md:p-3 border break-all md:break-normal">
                  {user.email}
                </td>
                <td className="p-2 md:p-3 border">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal isOpen={!!selectedUser} onClose={() => setSelectedUser(null)}>
        {selectedUser && (
          <div className="p-2 sm:p-4">
            <h2 className="text-lg sm:text-xl font-bold mb-2">
              {selectedUser.name}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              📧 {selectedUser.email}
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              🏢 {selectedUser.company.name}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
