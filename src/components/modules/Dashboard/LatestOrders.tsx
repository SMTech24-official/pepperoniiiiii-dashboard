import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LatestOrders = () => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Latest Orders
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="text-base">
            <TableHead className="text-black ">Product Name</TableHead>
            <TableHead className="text-black">Delivery Address</TableHead>
            <TableHead className="text-black">Phone Number</TableHead>
            <TableHead className="text-black ">Receiver Name</TableHead>
            <TableHead className="text-black">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Test Developer</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default LatestOrders;
