import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";

const Account = () => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        className="rounded-full border-2"
        src=""
        alt="avatar"
        width={40}
        height={10}
      />
      <p>Daniela londono</p>
      <button>
        <IoChevronDown />
      </button>
    </div>
  );
};

export default Account;
