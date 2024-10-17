import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  ArrowDownToLine,
  CheckCircle,
  Leaf,
} from 'lucide-react'

const perks = [
  {
    name: 'Instant Delivery',
    Icon: ArrowDownToLine,
    description:
      'Get your assets delivered to your email in seconds and download them right away.',
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description:
      'Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.',
  },
  {
    name: 'For the Planet',
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto flex flex-col sm:flex-row items-center justify-between max-w-5xl">
        {/* Left Side: Text Content */}
        <div className="text-center sm:text-left flex flex-col items-center sm:items-start max-w-3xl">
          <h6 className="text-blue-600 mb-4 tracking-wider uppercase">
            Exclusive Products
          </h6>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Discover the Future of Technology
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-prose">
            At GadgetHub, we bring you the latest and greatest in tech. Whether
            you're looking for a powerful laptop, the newest smartphone, or
            essential accessories to complement your devices, we've got you
            covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* Right Side: Image with Overlay */}
        <div className="relative mt-10 sm:mt-0 sm:ml-10">
          {/* Background Product Image */}
          <img
            src="/images/laptop.png"
            alt="Exclusive Tech Products"
            className="w-full max-w-sm lg:w-[550px] object-contain"
          />

          {/* Overlay Headset Image */}
          <img
            src="/images/headset.png"
            alt="Headset"
            className="absolute top-[1.5rem] sm:top-[1.5rem] left-[10%] w-36 lg:w-44 object-contain"
          />

          {/* Round Badge with Price */}
          <div className="absolute top-[80%] left-[5%] bg-white rounded-full flex items-center justify-center w-[5rem] h-[5rem] text-xs lg:text-sm font-medium shadow-lg">
            <div className="text-center">
              <span className="block uppercase text-neutral">Only</span>
              <span className="font-bold text-lg lg:text-xl text-red-900 text-secondary">
                $299
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: List Products */}
    </MaxWidthWrapper>


    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
        {perks.map((perk) => (
          <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
          </div>
        ))}

        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
}
