/* eslint-disable @typescript-eslint/no-explicit-any */

import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormSelect from "@/components/form/MyFormSelect";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAddProductMutation } from "@/redux/features/product/product.api";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddProductModal = () => {
  const [open, setOpen] = useState(false);
  const [addProduct] = useAddProductMutation();

  const categoryOptions = [
    { label: "Chicks", keyOption: "CHICKS", value: "CHICKS" },
    { label: "Feed", keyOption: "FEED", value: "FEED" },
    { label: "Medicine", keyOption: "MED", value: "MED" },
    { label: "Tools", keyOption: "TOOL", value: "TOOL" },
    { label: "Equipment", keyOption: "EQUIP", value: "EQUIP" },
  ];

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Uploading...");

    const { image, ...restData } = data;

    const formData = new FormData();

    formData.append("data", JSON.stringify(restData));

    formData.append("image", image);

    try {
      await addProduct(formData).unwrap();
      toast.success("Uploaded successfully", { id: toastId });
      setOpen(false);
    } catch (err: any) {
      toast.error(err.data?.message || "Faild to Upload", { id: toastId });
    }
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="px-7 py-2 bg-primary text-white rounded-lg ">
          Add Product
        </DialogTrigger>

        <DialogContent className="max-w-[750px] !rounded-3xl [&>button]:hidden">
          <DialogHeader>
            <DialogTitle>
              <div className="space-y-7">
                <h3 className="text-2xl font-medium text-center">
                  Upload New Product
                </h3>

                <MyFormWrapper onSubmit={handleSubmit} className="w-full">
                  <div className="grid md:grid-cols-2 gap-4">
                    <MyFormInput name="name" label="Product Name" />
                    <MyFormInput name="price" label="Product Price" />
                    <MyFormInput name="stock" label="Stock" />
                    <MyFormSelect
                      name="category"
                      options={categoryOptions}
                      label="Choose Category"
                    />
                    <MyFormInput name="weight" label="Product Quantity" />
                    <MyFormInput name="Product Name" label="Available Stock" />
                  </div>
                  <MyFormInput
                    type="file"
                    acceptType="image/*"
                    isMultiple={true}
                    name="image"
                    label="Available Stock"
                  />

                  <MyFormInput
                    type="textarea"
                    name="description"
                    label="Product Description"
                  />

                  <MyBtn name="Submit" width="w-full" />
                </MyFormWrapper>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProductModal;
