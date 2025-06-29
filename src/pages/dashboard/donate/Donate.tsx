import AppButton from "../../../components/form/ui/AppButton";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AppForm from "../../../components/form/AppForm";
import AppFormInput from "../../../components/form/ui/AppFormInput ";
import AppFormTextarea from "../../../components/form/ui/AppFormTextarea";
import AppFormSelect from "../../../components/form/ui/AppformSelect";
import { useGetmeQuery } from "../../../redux/features/auth/authApi";
import {
  useAddDonateMutation,
  useInitPaymentMutation,
} from "../../../redux/features/donate/DonateApi";

interface DonorFormData {
  message: string;
  method: "Bank Transfer" | "Other" | "Cash" | "Nagad" | "Rocket" | "bKash";
  date: string;
  amount: string;
  donorId?: string;
}

const medthodOption = [
  { value: "bKash", label: "bKash" },
  { value: "Nagad", label: "Nagad" },
  { value: "Rocket", label: "Rocket" },
  { value: "Bank Transfer", label: "Bank Transfer" },
  { value: "Cash", label: "Cash" },
  { value: "Other", label: "Other" },
];

const DonateForm = () => {
  const { data: getme } = useGetmeQuery("");

  // useEffect(() => {
  //   if (getme?.data?.name) {
  //     setValue("donorId", getme.data.donorId);
  //   }
  // }, [getme, setValue]);

  const userData = getme?.data;
  console.log("userData :>> ", userData);

  const userOption =
    userData?.id && userData?.name
      ? [{ value: userData._id, label: userData.name }]
      : [];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AppFormInput name="amount" label="Amount" type="number" required />
        <AppFormInput name="date" label="Date" required />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AppFormSelect
          options={medthodOption}
          name="method"
          label="Method"
          required
        />
        <AppFormSelect
          options={userOption}
          name="donorId"
          label="User"
          required
        />
      </div>

      <AppFormTextarea name="message" label="Message" />
      <AppButton type="submit" label="Donate Now" className="mt-4 w-full" />
    </>
  );
};

const Donate = () => {
  const navigate = useNavigate();
  const [initPayment] = useInitPaymentMutation();

  const onSubmit = async (data: DonorFormData) => {
    try {
      const payload = {
        ...data,
      };

      const res: any = await initPayment(payload).unwrap();
      console.log("Payment init response:", res);

      if (res?.url) {
        window.location.href = res.url;
      } else {
        toast.error("Failed to initiate payment.");
      }
    } catch (error) {
      console.error("Payment init failed:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="rounded-xl bg-[#1F2937] shadow-md overflow-hidden p-3 sm:p-8 max-w-md w-full">
        <h2 className="text-2xl text-red font-semibold mb-6 text-center">
          Donate Here
        </h2>
        <AppForm onSubmit={onSubmit}>
          <DonateForm />
        </AppForm>
      </div>
    </div>
  );
};

export default Donate;
