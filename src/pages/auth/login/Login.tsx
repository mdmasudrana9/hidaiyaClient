// src/features/auth/Login.tsx

import AppForm from "../../../components/form/AppForm";
import AppButton from "../../../components/form/ui/AppButton";

import { NavLink, useNavigate } from "react-router-dom";
import AppFormInput from "../../../components/form/ui/AppFormInput ";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useAppDispatch } from "../../../redux/hooks";
import { toast } from "sonner";

import { setUser, TUser } from "../../../redux/features/auth/authSlice";
import { verifyToken } from "../../../utils/verifyToken";

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  type FormValues = {
    email: string;
    password: string;
  };
  const defaultValues = {
    email: "Jdcfanvc.doe@example.com",
    password: "Zk1234",
  };
  const onSubmit = async (data: FormValues) => {
    console.log("data :>> ", data);
    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log("res :>> ", res);
      const user = verifyToken(res.data.accessToken) as unknown as TUser;
      console.log("user :>> ", user);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Login successful!", { id: toastId, duration: 2000 });
      navigate(`/dashboard/${user.role}`);
    } catch (error) {
      //toast.dismiss();
      //console.error("Login error:", error);
      toast.error("Login failed. Please check your credentials.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="rounded-xl bg-[#1F2937] shadow-md overflow-hidden p-6 sm:p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <AppForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <AppFormInput
            name="email"
            label="Email"
            type="email"
            required
            placeholder="you@example.com"
          />
          <AppFormInput
            name="password"
            label="Password"
            type="password"
            required
            placeholder="••••••••"
          />
          <AppButton label="Login" className="mt-4 w-full" type="submit" />
        </AppForm>
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <NavLink
            to="/auth/register"
            className="text-[#29BB89] hover:underline"
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
