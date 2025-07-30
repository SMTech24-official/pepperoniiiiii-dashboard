/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import DeleteModal from "@/components/common/DeleteModal";
import Spinner from "@/components/common/Spinner";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAllUserQuery } from "@/redux/features/dashboard/dashboard.api";
import { Eye, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isFetching } = useAllUserQuery([
    { name: "limit", value: 15 },
    ...(searchTerm ? [{ name: "searchTerm", value: searchTerm }] : []),
  ]);

  if (isFetching) {
    return <Spinner />;
  }

  const handleSubmit = (data: FieldValues) => {
    setSearchTerm(data.search);
  };

  const users = data?.data?.data;

  return (
    <div className="bg-white p-6 rounded-xl mt-12">
      <div className="flex justify-between dark:text-white mb-8">
        <h2 className="text-xl font-bold ">Total Users</h2>

        <div className="flex gap-3">
          <div className="inline-block">
            <button
              onClick={() => setSearchTerm("")}
              className="border border-primary rounded-lg p-3"
            >
              All
            </button>
          </div>
          <MyFormWrapper onSubmit={handleSubmit} className="flex items-start">
            <MyFormInput name="search" placeholder="Search..." />

            <button className="p-[13px] border border-white/70">
              <Search />
            </button>
          </MyFormWrapper>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="text-base">
            <TableHead className="text-black text-base">User Name</TableHead>
            <TableHead className="text-black text-base">Contract No</TableHead>
            <TableHead className="text-black text-base">
              Registration Date
            </TableHead>
            <TableHead className="text-black text-base">Status</TableHead>
            <TableHead className="text-black text-base ">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell className="text-base py-4">{item?.fullName}</TableCell>
              <TableCell className="text-base">
                {item.phoneNumber || "N/A"}
              </TableCell>
              <TableCell className="text-base">{item.createdAt}</TableCell>
              <TableCell className="text-base">
                {item.isDeleted ? "Blocking" : "Active"}
              </TableCell>
              <TableCell className="flex items-center gap-8">
                <Link href={""}>
                  <Eye />
                </Link>

                <DeleteModal
                  btn="icon"
                  type="user"
                  id={item.id}
                  message={item?.isDeleted ? "Unblocking" : "Blocking"}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagement;
