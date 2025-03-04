import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] xl:w-[14%] p-4">
        <Link href="/" className="flex items-center lg:justify-start gap-2">
          <Image src="/logo.png" all="logo" width={32} height={32} />
          <span className="hidden lg:block">SGPU</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] xl:w-[86%] "></div>
    </div>
  );
}
