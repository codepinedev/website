import Image from "next/image";

export function Header() {
  return (
    <div className="flex flex-row border-b-1 border-gray-200 p-2 justify-center">
      <div className="md:min-w-4xl flex flex-row items-center gap-2">
        <Image src="/pine.png" alt="Pine icon" width={50} height={50} />
      </div>
    </div>
  );
}
