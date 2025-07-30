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
import { useAllOrdersQuery } from "@/redux/features/dashboard/dashboard.api";
import { Search } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isFetching } = useAllOrdersQuery([
    { name: "limit", value: 15 },
    ...(searchTerm ? [{ name: "searchTerm", value: searchTerm }] : []),
  ]);

  if (isFetching) {
    return <Spinner />;
  }

  const handleSubmit = (data: FieldValues) => {
    setSearchTerm(data.search);
  };

  const orders = data?.data?.data;

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
            <TableHead className="text-black text-base">Order Id</TableHead>
            <TableHead className="text-black text-base">Product Name</TableHead>
            <TableHead className="text-black text-base">
              Delivery Address
            </TableHead>
            <TableHead className="text-black text-base">Phone Number</TableHead>
            <TableHead className="text-black text-base ">
              Receiver Name
            </TableHead>
            <TableHead className="text-black text-base ">Status</TableHead>
            <TableHead className="text-black text-base ">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.map((item: any, idx: number) => (
            <TableRow key={item.id}>
              <TableCell className="text-base py-4">0{idx + 1}</TableCell>
              <TableCell className="text-base">
                {item?.product?.name || "N/A"}
              </TableCell>
              <TableCell className="text-base">
                {item?.deliveryAddress}
              </TableCell>
              <TableCell className="text-base">{item?.phoneNumber}</TableCell>
              <TableCell className="text-base">{item?.name}</TableCell>
              <TableCell className="text-base">{item?.orderStatus}</TableCell>
              <TableCell className="flex items-center gap-8">
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

export default Orders;
