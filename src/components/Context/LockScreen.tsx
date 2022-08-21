interface Props {
  handleContext: () => void;
}

const LockScreen = ({ handleContext }: Props) => {
  const adminPassword = "admin";

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === adminPassword) {
      handleContext();
    }
  };

  return (
    <div className="w-full h-full flex justify-center bg-[url('./assets/images/lockscreen.jpg')] bg-center bg-no-repeat bg-cover overflow-hidden">
      <input
        className="flex self-center"
        type="text"
        onChange={handleOnChange}
      ></input>
    </div>
  );
};

export default LockScreen;
