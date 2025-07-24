"use client";
import Image from "next/image";
import userImg from "../../../assets/placeholders/user-placeholder.jpg";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import Spinner from "@/components/common/Spinner";

const MyProfile = () => {
  const { data, isFetching } = useGetMeQuery(undefined);
  const userData = data?.data;

  if (isFetching) {
    return <Spinner />;
  }
  return (
    <div className="flex justify-center items-center py-5">
      <div className="md:w-[650px] bg-white/40  md:p-12 p-5 md:rounded-3xl rounded-2xl border-[3px] border-white text-center md:space-y-7 space-y-4">
        <div className="rounded-full overflow-hidden flex justify-center">
          <Image
            src={userImg}
            alt="user"
            width={1000}
            height={1000}
            className="w-[125px] h-[125px] rounded-full"
          />
        </div>

        <h2 className="md:text-[32px] text-2xl font-medium text-center">
          Personal Information
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="text-start ">
            <h3 className="md:text-[25px] text-xl font-semibold">Name</h3>
            <p className="md:text-2xl text-[#0C0B2199]">Danielle Campbell </p>
          </div>
          <div className="text-start ">
            <h3 className="md:text-[25px] text-xl font-semibold">Email</h3>
            <p className="md:text-2xl text-[#0C0B2199]">{userData?.email}ariklee@gmail.com</p>
          </div>
          <div className="text-start">
            <h3 className="md:text-[25px] text-xl font-semibold">Mobile No</h3>
            <p className="md:text-2xl text-[#0C0B2199]">
              {userData?.phoneNumber}+1 567 2543 642
            </p>
          </div>
          <div className="text-start">
            <h3 className="md:text-[25px] text-xl font-semibold">Address</h3>
            <p className="md:text-2xl text-[#0C0B2199]">
              {userData?.phoneNumber}United Sate Of America
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
