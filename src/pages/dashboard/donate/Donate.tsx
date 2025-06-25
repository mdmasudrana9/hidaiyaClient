// src/features/auth/Donate.tsx
import AppForm from "../../../components/form/AppForm";
import AppButton from "../../../components/form/ui/AppButton";

import { useNavigate } from "react-router-dom";
import AppFormInput from "../../../components/form/ui/AppFormInput ";
import AppFormTextarea from "../../../components/form/ui/AppFormTextarea";
import AppFormSelect from "../../../components/form/ui/AppformSelect";
import { useGetmeQuery } from "../../../redux/features/auth/authApi";

//import { useCreateDonorMutation } from "../../../redux/features/donor/Donate.api";

interface DonorFormData {
  name: string;
  gender: "male" | "female" | "other";
  email: string;
  password: string;
}

const medthodOption = [
  { value: "bKash", label: "bKash" },
  { value: "Nagad", label: "Nagad" },
  { value: "Rocket", label: "Rocket" },
  { value: "Bank Transfer", label: "Bank Transfer" },
  { value: "Cash", label: "Cash" },
  { value: "Other", label: "Other" },
];

const Donate = () => {
  //const [createDonor] = useCreateDonorMutation();
  const { data: getme } = useGetmeQuery("zakatDonor");
  console.log("getme :>> ", getme);
  const navigate = useNavigate();

  const onSubmit = (data: DonorFormData) => {
    console.log("Form submitted with data:", data);
    //const toastId = toast.loading("Cerating...");
    // Map to your backend payload
    const payload = {
      password: data.password,
      donor: {
        name: data.name,
        gender: data.gender,
        email: data.email,
      },
    };

    // Replace this with your API call
    // apiService.createDonor(payload).then(...).catch(...)
    console.log("Backend payload:", payload);
    //createDonor(payload)
    //   .unwrap()
    //   .then((response) => {
    //     //console.log("Donate created successfully:", response);
    //     toast.success("Donate registered successfully!");
    //     navigate("/auth/login");
    //   })
    //   .catch((error) => {
    //     console.error("Error creating donor:", error);
    //     toast.error("Failed to register donor. Please try again.", {
    //       //id: toastId,
    //       duration: 2000,
    //     });

    //     // Handle error (e.g., show a toast notification)
    //   });
  };

  return (
    <div className="w-full flex items-center justify-center ">
      <div className="rounded-xl bg-[#1F2937] shadow-md overflow-hidden p-3 sm:p-8 max-w-md w-full">
        <h2 className="text-2xl text-red font-semibold mb-6 text-center">
          Donate Here
        </h2>
        <AppForm onSubmit={onSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AppFormInput name="amount" label="Amount" type="number" required />
            <AppFormInput name="date" label="Date" required />
          </div>

          <AppFormSelect
            options={medthodOption}
            name="method"
            label="Method"
            required
          />
          <AppFormTextarea name="message" label="Message" />

          <AppButton type="submit" label="Donate Now" className="mt-4 w-full" />
        </AppForm>
      </div>
    </div>
  );
};

export default Donate;
