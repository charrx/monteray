import { useState } from "react";
import desktop from "../../assets/images/desktop.jpg";

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
      <form onSubmit={submit}>
        <input
          className=" w-50 h-8 flex rounded-2xl text-center"
          type="text"
          onChange={handleOnChange}
          placeholder="Enter Password"
        ></input>
        <button>Log in</button>
      </form>
    </div>
  );
};

export default LockScreen;
