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
import { useAllProductQuery } from "@/redux/features/product/product.api";
import { Search } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import AddProductModal from "./AddProductModal";

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isFetching } = useAllProductQuery([
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
      <div className="flex justify-between dark:text-white mb-4">
        <h2 className="text-xl font-bold ">Total Product</h2>

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

      <div className="flex justify-end mb-8">
        <AddProductModal />
      </div>
      <Table>
        <TableHeader>
          <TableRow className="text-base">
            <TableHead className="text-black text-base">Product Name</TableHead>
            <TableHead className="text-black text-base">
              Product Price
            </TableHead>
            <TableHead className="text-black text-base">
              Registration Date
            </TableHead>
            <TableHead className="text-black text-base">{`Quantity ( Kg )`}</TableHead>
            <TableHead className="text-black text-base ">Category</TableHead>
            <TableHead className="text-black text-base ">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell className="text-base py-4">{item?.name}</TableCell>
              <TableCell className="text-base">{item.price || "N/A"}</TableCell>
              <TableCell className="text-base">{item.createdAt}</TableCell>
              <TableCell className="text-base">{item.weight} Kg</TableCell>
              <TableCell className="text-base">{item.category}</TableCell>
              <TableCell className="flex items-center gap-8">
                <DeleteModal
                  btn="icon"
                  type="user"
                  id={item.id}
                  message={"Deleting"}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Product;
