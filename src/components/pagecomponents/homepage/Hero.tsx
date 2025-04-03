/* eslint-disable @next/next/no-img-element */  
import animated from "@/assets/animated-jsons/heroSection.json";  
import {  
  PrimaryButton,  
  SecondaryButton,  
} from "@/components/globalcomponents/Buttons";  
import { useEffect, useRef } from "react";  

export default function Hero() {  
  const container = useRef<HTMLDivElement | null>(null);  

  useEffect(() => {  
    if (typeof window !== "undefined" && container.current) {  
      import("lottie-web").then((lottieModule) => {  
        const animation = lottieModule.default.loadAnimation({  
          container: container.current!,  
          renderer: "svg",  
          loop: true,  
          autoplay: true,  
          animationData: animated,  
        });  

        return () => {  
          animation.destroy();  
        };  
      });  
    }  
  }, []);  

  return (  
    <section className="component-px py-8 lg:py-0 bg-gradient-to-t from-green-50 via-transparent to-transparent">  
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">  
        <div className="flex items-center justify-start">  
          <div>  
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">  
              Building Leaders, Inspiring Excellence  
            </h1>  
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-8">  
              At Mid Valley SS/College, we strive to cultivate leaders and  
              foster excellence. Our commitment to providing quality education  
              ensures that every student receives the support and resources  
              needed to reach their full potential. Through innovative programs  
              and dedicated faculty, we empower students to succeed in a dynamic  
              world.  
            </p>  

            <div className="flex space-x-4">  
              <PrimaryButton buttonName="About us" navigateTo="/about" />  
              <SecondaryButton buttonName="Contact us" navigateTo="/contact" />  
            </div>  
          </div>  
        </div>  

        <div ref={container} className="flex justify-center items-center"></div>  
      </div>  
    </section>  
  );  
}  
