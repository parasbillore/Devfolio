import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Let's Connect
          </h1>
          <p className="font-light text-sm xs:text-base">
            I am always eager to connect with fellow professionals, potential
            collaborators, and anyone interested in my work. You can contact me
            directly via email at{" "}

            <a  href="mailto:parasbillorepb@gmail.com" className="text-accent font-bold underline" target="_blank">
              parasbillorepb@gmail.com.{" "}
            </a>

            For more about my professional journey and to see my work, visit
            my GitHub profile at {" "}
            <a href="https://github.com/parasbillore" className="text-accent font-bold underline" target="_blank">
              github.com/parasbillore{" "}
            </a>
             and my LinkedIn profile at{" "}
            <a href="https://linkedin.com/in/paras-billore" className="text-accent font-bold underline" target="_blank">
              linkedin.com/in/paras-billore{" "}
            </a>
            Alternatively, you can contact me using the form below. I look
            forward to connecting with you!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
