import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineLocationMarker
} from "react-icons/hi";

const Info = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineUser className="text-2xl mt-1 text-accent-light" />
          <div>
            <p className="text-lg">Date of Birth</p>
            <p>11 December 2003</p>
          </div>
        </div>
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineLocationMarker className="text-2xl mt-1 text-accent-light" />
          <div>
            <p className="text-lg">Location</p>
            <p>Manila, Philippines</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineMail className="text-2xl mt-1 text-accent-light" />
          <div>
            <p className="text-lg">Email Address</p>
            <p className="text-sm pt-1">chua.haniellejermayn@gmail.com</p>
          </div>
        </div>
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlinePhone className="text-2xl mt-1 text-accent-light my-auto" />
          <div>
            <p className="text-lg">Phone Number</p>
            <p>+63 993 935 5665</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
