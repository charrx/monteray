import { useState } from "react";
import desktop from "../../assets/images/desktop.jpg";
import { IoArrowForwardSharp } from "react-icons/io5";

interface Props {
  handleAppContext: () => void;
}

const LockScreen = ({ handleAppContext }: Props) => {
  const adminPassword = "admin"; // This can be changes to whatever you want.
  const [password, setPassword] = useState("");
  const [isInvalidForm, setIsInvalidForm] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleFormValidation = () => {};

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    if (password === adminPassword) {
      handleAppContext();
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center bg-[url('./assets/images/lockscreen.jpg')] bg-center bg-no-repeat bg-cover overflow-hidden">
      <img
        className="w-40 h-40 rounded-full"
        src={desktop}
        alt="user icon"
      ></img>
      <h1 className="text-2xl text-white">Admin</h1>
      <form className="block" onSubmit={submit}>
        <div className="w-52 h-9 flex flex-row items-center justify-between bg-white rounded-2xl p-2">
          <input
            className="w-5/6 text-sm border-none bg-transparent outline-none p-2"
            type="password"
            onChange={handleOnChange}
            placeholder="Enter Password"
          ></input>
          <div className="w-1/6">
            <button className="w-7 h-7 flex justify-center items-center border-2 border-solid rounded-full">
              <IoArrowForwardSharp />
            </button>
          </div>
        </div>
      </form>
      <p className="text-xs text-white">Touch ID or Enter Password</p>
    </div>
  );
};

export default LockScreen;
