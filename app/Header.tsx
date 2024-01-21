"use client";
import { Avatar, Box, Button, Card, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GiSpikedDragonHead } from "react-icons/gi";
import Spinner from "./components/Spinner";
import { FaHome } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import HeaderTitle from "./components/HeaderTitle";
const Header = () => {
  const currentPath = usePathname();
const {status,data:session} = useSession()
  const link = [
    { label: "home", href: "/" },
    { label: "list", href: "/issues" },
  ];
  return (
    <nav    className="bg-center  space-x-6 mb-5 px-5     h-[45vh] bg-[url('https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D')]">
      <div className="pt-3 flex justify-between">
      <Link
        href={"/"}
        className="flex  text-white font-bold text-2xl">
{/*         <GiSpikedDragonHead /> */}
        CODING STORY
      </Link>
      <ul className="flex space-x-6 text-[16px] items-center">
        {link.map((v, i) => (
          <li
            key={i}
            className="text-gray-400 hover:text-gray-600 .transition-colors font-semibold">
            <Link
              className={
                v.href === currentPath ? "text-white flex flex-col items-center" : "text-gray-400  flex flex-col items-center"
              }
              href={v.href}>
                {v.label === 'home' && <FaHome/>}
                {v.label === 'list' && <CiBoxList/>}
              {v.label}
            </Link>
          </li>
        ))}
      <li className="text-gray-400 hover:text-gray-600">
          {status === 'authenticated' && 
            <DropdownMenu.Root  >
  <DropdownMenu.Trigger>
     <Avatar className="cursor-pointer"
     referrerPolicy="no-referrer"
     radius="full" size='2' src={session?.user!.image!} fallback='?'/> 
  </DropdownMenu.Trigger>
  <DropdownMenu.Content className="hover:bg-white border border-blue-500 p-0" highContrast variant="soft">
    <DropdownMenu.Separator />
    <DropdownMenu.Item  className="w-full hover:bg-white">
    <Card className="w-[20vw] z-30 hover:bg-white">
  <Flex gap="3" align="center">
    <Avatar
      size="3"
      src={session?.user!.image!}
      radius="full"
      fallback="T"
    />
    <Box>
      <Text as="div" size="2" weight="bold">
      {session.user?.email}
      </Text>
      <Text as="div" size="2" className="flex items-center" color="gray">
   {session?.expires.split('T')[0]} 로그인함
      </Text>
    </Box>
  </Flex>
</Card>
      
      </DropdownMenu.Item>
    <DropdownMenu.Separator />
 
    <DropdownMenu.Separator />
    
    <DropdownMenu.Item   color="red">
    <Link href={'/api/auth/signout'}>Log Out</Link>
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>}
          {status === 'unauthenticated' && <Link href={'/api/auth/signin'}>Log In</Link>}
          {status === 'loading' && <Spinner/>}
      </li>
      </ul>
      </div>
   <HeaderTitle/>
    </nav>
  );
};

export default Header;
