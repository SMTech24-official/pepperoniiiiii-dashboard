/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Spinner from "@/components/common/Spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAllOrdersQuery } from "@/redux/features/dashboard/dashboard.api";

const LatestOrders = () => {
  const { data, isFetching } = useAllOrdersQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }

  console.log(data?.data?.data);

  const orders = data?.data?.data;

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white mb-5">
        Latest Orders
      </h2>
      <div className="bg-white p-6 rounded-xl">
        <Table>
          <TableHeader>
            <TableRow className="text-base">
              <TableHead className="text-black text-base">
                Product Name
              </TableHead>
              <TableHead className="text-black text-base">
                Delivery Address
              </TableHead>
              <TableHead className="text-black text-base">
                Phone Number
              </TableHead>
              <TableHead className="text-black text-base ">
                Receiver Name
              </TableHead>
              <TableHead className="text-black text-base">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell className="text-base">
                  {item?.product?.name}
                </TableCell>
                <TableCell className="text-base">
                  {item.deliveryAddress}
                </TableCell>
                <TableCell className="text-base">{item.phoneNumber}</TableCell>
                <TableCell className="text-base">{item.name}</TableCell>
                <TableCell className="text-base">{item.orderStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LatestOrders;
