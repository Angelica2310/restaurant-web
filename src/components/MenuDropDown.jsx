import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import { SquareMenu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MenuPage() {
  return (
    <div>
      <DropDownMenu.Root>
        <DropDownMenu.Trigger className="items-center">
          <div aria-label="navigation menu">
            <SquareMenu width={30} height={30} />
          </div>
        </DropDownMenu.Trigger>
        <DropDownMenu.Portal>
          <DropDownMenu.Content className="min-w-[220px] rounded-md bg-[#dfdcdc] p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade">
            <Link href="/">
              <DropDownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-darktext outline-none hover:bg-[#69311f] hover:text-white">
                Home
              </DropDownMenu.Item>
            </Link>
            <Link href="/menu">
              <DropDownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-darktext outline-none hover:bg-[#69311f] hover:text-white">
                Our Menu
              </DropDownMenu.Item>
            </Link>
            <Link href="/about">
              <DropDownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-darktext outline-none hover:bg-[#69311f] hover:text-white">
                About us
              </DropDownMenu.Item>
            </Link>
            <Link href="/contact">
              <DropDownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-darktext outline-none hover:bg-[#69311f] hover:text-white">
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
