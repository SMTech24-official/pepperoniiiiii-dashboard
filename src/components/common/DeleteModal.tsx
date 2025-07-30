/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";
import { PencilOff } from "lucide-react";
import { useBlockUserMutation } from "@/redux/features/dashboard/dashboard.api";

interface DeleteModalProps {
  id: string;
  type: "restaurant" | "user";
  btn: "icon" | "btn";
  message: "Blocking" | "Unblocking" | "Deleting";
}

const DeleteModal = ({ id, type, btn, message }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  const [blockUser] = useBlockUserMutation();

  const handleDelete = async () => {
    const toastId = toast.loading(`Blocking...`);
    try {
      let res;
      if (type === "restaurant") {
        // res = await deletRestaurant(id).unwrap();
      } else if (type === "user") {
        res = await blockUser(id).unwrap();
      }

      if (res.data) {
        toast.success("Blocked Successfully", { id: toastId });
        setOpen(false);
      } else {
        toast.error(res?.error?.data?.message || "Failed to Block", {
          id: toastId,
        });
        setOpen(false);
      }
    } catch (err: any) {
      toast.error(err?.data?.message || `Failed to Block`, {
        id: toastId,
      });
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {btn === "icon" ? (
        <DialogTrigger className=" text-primary">
          <PencilOff />
        </DialogTrigger>
      ) : (
        <DialogTrigger className="gradient-border md:w-2/5">
          <div className="content">Delete</div>
        </DialogTrigger>
      )}

      <DialogContent className="max-w-[450px] !rounded-3xl [&>button]:hidden">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col justify-center items-center gap-5 text-center">
              <h3 className="text-xl font-medium">
                Are you sure you want to proceed with {message}?
              </h3>
              <div className="flex md:gap-5 gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="bg-red-500 py-2 px-6 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-green-500 py-2 px-6 rounded-lg"
                >
                  Confirm
                </button>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
