"use client";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Image from "next/image";
import React from "react";
import admin from "@/assets/admin.png";
import Link from "next/link";

const page = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: "url(/kart.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Card>
        <div className="flex justify-center">
          <Image src={admin} width={50} height={50} alt="admin" />
        </div>
        <Input
          name="username"
          type="text"
          placeholder="User Name"
          handleChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          handleChange={handleChange}
        />
        <div className="flex justify-between items-center my-2">
          <Link href="#" className="text-blue-500 text-sm">
            Forgot Password?
          </Link>
        </div>
        <Button type="submit">Login</Button>
      </Card>
    </div>
  );
};

export default page;
