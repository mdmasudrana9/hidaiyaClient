import { NavLink } from "react-router-dom";
import AppButton from "../../../components/form/ui/AppButton";

const Registration = () => {
  return (
    <div className="">
      <div className="w-full flex items-center justify-center py-20">
        <div className="rounded-xl bg-white flex gap-5 shadow-md overflow-hidden p-6 sm:p-8">
          <NavLink to={"/auth/register/donor"}>
            <AppButton label="Register as a Donor" />
          </NavLink>
          <NavLink to={"/auth/register/receiver"}>
            <AppButton label="Register as a Reciver" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Registration;
