// src/features/auth/Reciver.tsx
import AppForm from "../../../components/form/AppForm";
import AppButton from "../../../components/form/ui/AppButton";

import { NavLink, useNavigate } from "react-router-dom";
import AppFormInput from "../../../components/form/ui/AppFormInput ";
import { useCreateReciverMutation } from "../../../redux/features/reciver/Reciver.api";
import { toast } from "sonner";

interface DonorFormData {
  name: string;
  gender: "male" | "female" | "other";
  email: string;
  password: string;
}

const Reciver = () => {
  const [createRciver] = useCreateReciverMutation();
  const navigate = useNavigate();

  const onSubmit = (data: DonorFormData) => {
    console.log("Form submitted with data:", data);
    // const toastId = toast.loading("Cerating...");
    // Map to your backend payload
    const payload = {
      password: data.password,
      reciver: {
        name: data.name,
        gender: data.gender,
        email: data.email,
      },
    };

    // Replace this with your API call
    // apiService.createDonor(payload).then(...).catch(...)
    console.log("Backend payload:", payload);
    createRciver(payload)
      .unwrap()
      .then((response) => {
        //console.log("Donor created successfully:", response);
        toast.success("Donor registered successfully!");
        navigate("/auth/login");
      })
      .catch((error) => {
        console.error("Error creating donor:", error);
        toast.error("Failed to register donor. Please try again.", {
          //id: toastId,
          duration: 2000,
        });

        // Handle error (e.g., show a toast notification)
      });
  };

  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="rounded-xl bg-[#1F2937] shadow-md overflow-hidden p-6 sm:p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Reciver Registration
        </h2>
        <AppForm onSubmit={onSubmit}>
          <AppFormInput name="name" label="Full Name" required />{" "}
          <AppFormInput
            name="gender"
            label="Gender"
            required
            helperText="Gender must be use lowercase 'male' or 'female"
          />
          <AppFormInput name="email" label="Email" type="email" required />
          <AppFormInput
            name="password"
            label="Password"
            type="password"
            required
          />
          <AppButton
            type="submit"
            label="Register as Reciver"
            className="mt-4 w-full"
          />
        </AppForm>
      </div>
    </div>
  );
};

export default Reciver;
