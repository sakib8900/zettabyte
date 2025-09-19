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

  if (loading) return <Loading/>;
  if (error) return <Error/>

  return (
    <div className="p-6">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Company</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className="cursor-pointer hover:bg-gray-50"
            >
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Modal isOpen={!!selectedUser} onClose={() => setSelectedUser(null)}>
        {selectedUser && (
          <div>
            <h2 className="text-xl font-bold mb-2">{selectedUser.name}</h2>
            <p className="text-gray-700">📧 {selectedUser.email}</p>
            <p className="text-gray-700">🏢 {selectedUser.company.name}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}
