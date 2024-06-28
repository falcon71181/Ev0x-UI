import Image from "next/image";

function DisableOfflineAvatar() {
  return (
    <div className="group relative">
      <Image width={100} height={100} className="size-20 md:size-24 lg:size-28 rounded-full bg-slate-500 object-cover opacity-60" src="https://avatars.githubusercontent.com/u/48170773" alt="avatar navigate ui" />
      <span className="absolute bottom-5 right-0 size-5 rounded-full border-[3px] border-white bg-red-500"></span>
    </div>
  );
}

export default DisableOfflineAvatar;
