"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import GridGlobe from "./globeGrid";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./magicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id:number;
  img:string;
  imgClassName:string;
  spareImg:string;
  titleClassName:string;
  
}) => {

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "raskanr.j07@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}

      style={{
        background:"rgb(4,7,29)",
        backgroundColor:"linear-gradient(90deg, rgba(4,7,29,1) 0% , rgba(12,14,35,1) 100%)"
      }}
    >

      {/* Image */}

      <div className={`${id == 6} && 'flex justify-center h-full'`}>
        <div className="w-full h-full absolute">
          {
            img && (
              <img 
               src={img}
               alt={img}
               className={cn(imgClassName,'object-cover object-center')}
              />
            )
          }
        </div>
        <div className={`absolute right-0 -bottom-5 ${id == 5  && 'w-full opacity-80'}`}>
          {
            spareImg && (
              <img 
               src={spareImg}
               alt={spareImg}
               className={cn(imgClassName,'object-cover object-center')}
              />
            )
          }
        </div>

        {
          id == 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute z-50 flex item-center justify-center text-white font-bold ">

              </div>
            </BackgroundGradientAnimation>
          )
        }
        

        <div className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}>

          {/* description */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

            {/* Title */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

       

        {/* grid globe */}

        {
          id == 2  && <GridGlobe />
        }

          {
          id === 3 && (
            <div className="flex gap-1  w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 p-2 ">
                {["nextJS","reactJs","mongoDB"].map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-[#C1C2D3] text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className=" py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 ">
                <span className="py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {["nextJS","reactJs","mongoDB"].map((item, i) => (
                  <span
                    key={i}
                    className=" py-2 px-3 text-[#C1C2D3] text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

         {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                isCopyButton={true}
              />          

              
            </div>
          )}


          
           </div>                 
      </div>
    </div>
  );
};