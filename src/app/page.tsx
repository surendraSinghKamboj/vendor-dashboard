import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Link from "next/link";
import vendor from "@/assets/vendor.png";

export default function HeroSection() {
  return (
    <>
      <div className="flex justify-end mt-2 mr-2">
        <Link href="/login">
          <Button type="button">Login</Button>
        </Link>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Become a Vendor on Our E-commerce Platform
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join our thriving marketplace, reach millions of customers,
                  and grow your business. Register now to start selling!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input type="email" placeholder="Enter your email" />
                  <Button type="submit">Register Now</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By registering, you agree to our{" "}
                  <Link href="/terms" className="underline underline-offset-2">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="font-medium">10,000+ Active Vendors</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    width="24"
                    height="24"
                    viewBox="40 -1 170 250"
                  >
                    <path
                      fill="#010101"
                      d="M153 23h41l15-23H55L40 23h26c27 0 52 2 62 25H55L40 71h91v1c0 17-14 43-60 43H48v22l90 113h41L85 133c39-2 75-24 80-62h29l15-23h-45c-1-9-5-18-11-25z"
                    />
                  </svg>
                  <span className="font-medium">1Cr. Annual Sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={vendor}
                width={550}
                height={550}
                alt="E-commerce vendors succeeding"
                className="aspect-square animate-pulse overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
