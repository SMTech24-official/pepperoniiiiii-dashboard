"use client";
// import { useOverViewQuery } from "@/redux/features/user/user.api";
import { ClipboardMinus, Contact, Pickaxe, Users } from "lucide-react";
import React from "react";

const OverView = () => {
  // const { data } = useOverViewQuery(undefined);

  const overView = [];

  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-2  gap-7">
        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <Users />
            <p className="text-grayText">Total User</p>
          </div>
          <h1 className="text-[32px] font-bold">{overView?.totalUsers}</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <Contact />
            <p className="text-grayText">Total Project</p>
          </div>
          <h1 className="text-[32px] font-bold">{overView?.totalProjects}</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <ClipboardMinus />
            <p className="text-grayText">Total Jobs</p>
          </div>
          <h1 className="text-[32px] font-bold">{overView?.totalJobs}</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <Pickaxe />
            <p className="text-grayText">Total Worker</p>
          </div>
          <h1 className="text-[32px] font-bold">
            {overView?.totalServiceProviders}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OverView;
