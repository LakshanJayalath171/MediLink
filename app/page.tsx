import {Image} from "next/dist/client/image-component";
import {loginImage, logo} from "@/public/Assest/assest";
import { SlPhone } from "react-icons/sl";
import { MdOutlineAttachEmail } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import PatientForm from "@/component/PatientForm";

export default function Home() {
  return(
      <div className="flex items-center justify-center w-screen h-full">
      {/*  left*/}
        <div className="flex-1 w-full h-screen">
          <Image src={loginImage} alt="Login Image" className="w-full h-screen "/>
        </div>

      {/*  right*/}
        <div className="bg-[#00150E] w-full min-h-screen flex-2">
            <div className=" mt-0 mb-0 ml-10 mr-10">
                <div className="w-54 h-24 mt-2 mb-2 ml-6 mr-6 ">
                    <Image src={logo} alt="Logo"/>
                </div>
                <div className="mt-3 mb-3 ml-10 mr-10 ">
                    <h1 className="text-white text-2xl font-bold ">Hi There,...</h1>
                    <p className="text-blue-50 ">Get Started with Appointments</p>
                </div>

                {/*inputs*/}
                <div className="mt-3 mb-3 ml-10 mr-10">
                    <PatientForm/>
                </div>

            {/*    copyright*/}
                <div className="flex w-full h-full pt-0 pb-0 pl-10 pr-10 justify-between">
                    <p className="text-gray-400">© 2026 | MediLink copyright</p>
                    <p className="text-gray-400 cursor-pointer">admin</p>
                </div>
            </div>
        </div>
      </div>
  )
}
