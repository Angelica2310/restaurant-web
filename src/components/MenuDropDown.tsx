import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import { SquareMenu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MenuPage() {
  return (
    <div className="z-50">
      <DropDownMenu.Root>
        <DropDownMenu.Trigger className="items-center">
          <div aria-label="navigation menu">
            <SquareMenu width={30} height={30} />
          </div>
        </DropDownMenu.Trigger>
        <DropDownMenu.Portal>
          <DropDownMenu.Content className="flex flex-col justify-center items-center w-screen mt-6 bg-[--background] p-[5px] z-50">
            <Link href="/">
              <DropDownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] px-[25px] text-[13px] text-darktext outline-none hover:bg-[#69311f] hover:text-white">
                Home
              </DropDownMenu.Item>
            </Link>
            <Link href="/menu">
              <DropDownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] px-[25px] text-[13px] text-darktext outline-none hover:bg-[#69311f] hover:text-white">
                Our Menu
              </DropDownMenu.Item>
            </Link>
            <Link href="/about">
              <DropDownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] px-[25px] text-[13px] text-darktext outline-none hover:bg-[#69311f] hover:text-white">
                About us
              </DropDownMenu.Item>
            </Link>
            <Link href="/contact">
              <DropDownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] px-[25px] text-[13px] text-darktext outline-none hover:bg-[#69311f] hover:text-white">
                Contact us
              </DropDownMenu.Item>
            </Link>

            <DropDownMenu.Arrow className="fill-[#dfdcdc]" />
          </DropDownMenu.Content>
        </DropDownMenu.Portal>
      </DropDownMenu.Root>
    </div>
  );
}
