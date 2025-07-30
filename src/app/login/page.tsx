import LoginForm from "@/components/modules/Auth/LoginForm";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto  h-screen flex justify-center items-center">
      <div className="w-full flex flex-col gap-12 items-center bg-[#F6F6F6] md:p-28 p-16 rounded-lg border border-white/50">
        <h1 className="text-3xl text-primary font-medium text-center">
          {`Hey there, Super Admin! We're excited to have you back. Let's get you
          logged in!`}
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
