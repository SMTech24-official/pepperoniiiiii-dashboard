"use client";
import { useOverViewQuery } from "@/redux/features/dashboard/dashboard.api";
import { ClipboardMinus, Contact, HandCoins } from "lucide-react";
import React from "react";

const OverView = () => {
  const { data } = useOverViewQuery(undefined);

  const overView = data?.data;

  return (
    <div className="mb-8">
      <div className="grid md:grid-cols-3 grid-cols-2  gap-7">
        <div className="bg-white p-8 rounded-2xl space-y-5">
          <div className="flex gap-3 items-center">
            <div className="bg-[#0080800F] p-2 rounded-lg text-primary">
              <HandCoins />
            </div>
            <p className="text-xl text-primary font-medium">Total Revenue</p>
          </div>
          <h1 className="md:text-4xl text-2xl font-bold">
            ${overView?.totalRevenue}
          </h1>
        </div>

        <div className="bg-white p-8 rounded-2xl space-y-5">
          <div className="flex gap-3 items-center">
            <div className="bg-[#0080800F] p-2 rounded-lg text-primary">
              <Contact />
            </div>
            <p className="text-xl text-primary font-medium">Total Order</p>
          </div>
          <h1 className="md:text-4xl text-2xl font-bold">
            {overView?.totalOrders}
          </h1>
        </div>

        <div className="bg-white p-8 rounded-2xl space-y-5">
          <div className="flex gap-3 items-center">
            <div className="bg-[#0080800F] p-2 rounded-lg text-primary">
              <ClipboardMinus />
            </div>
            <p className="text-xl text-primary font-medium">Total Diagnosis</p>
          </div>
          <h1 className="md:text-4xl text-2xl font-bold">
            {overView?.totalDiagnosis}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OverView;
