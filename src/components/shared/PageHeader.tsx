"use client";
import Image from "next/image";
import userImg from "../../assets/placeholders/user-placeholder.jpg";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between mt-6 mb-10">
      <h1 className="md:text-[32px] text-2xl font-bold">{title}</h1>
      <div className="flex gap-2 items-center">
        <Image
          src={userImg}
          alt="profile image"
          width={100}
          height={100}
          className="w-8 h-8 rounded-full"
        />
        <p>Danielle Campbell </p>
      </div>
    </div>
  );
};

export default PageHeader;