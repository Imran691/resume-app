import { socials } from "data/social-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PhoneIcon from "../public/icons/phone.png";
import MailIcon from "../public/icons/mail.png";
import GitHubIcon from "../public/icons/github.png";

export default function Footer() {
  return (
    <section>
      <div className="flex flex-col md:flex-row px-2 md:px-6 py-10 justify-around font-serif bg-stone-700 text-white">
        <div className="footer-col text-3xl">
          <h1>Muhammad Imran</h1>
        </div>

        <div>
          <h2 className="text-2xl pb-4 md:pb-8 pt-8 md:pt-0">Socials</h2>
          <div className="flex">
          {socials.map((scls) => (
            <ul key={scls.id} className="pl-6 md:pl-0 px-2 md:px-4">
              <Link href={scls.link} target="_blank">
                <Image
                  src={scls.src}
                  alt={scls.src}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            </ul>
          ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl pb-4 md:pb-8 pt-8 md:pt-0">Contact </h1>
          <div className="flex pl-10 md:pl-0 px-2 md:px-4">
            <Image src={PhoneIcon} alt={"phone-icon"} width={40} height={40}/>
            <Image src={MailIcon} alt={"mail-icon"} width={40} height={40}/>
          </div>
        </div>

        <div>
          <h1 className="text-2xl pb-4 md:pb-8 pt-8 md:pt-0">Github</h1>
          <div className="pl-10 md:pl-0">
            <Link href={"https://github.com/Imran691"} target="_blank">
              <Image
                src={GitHubIcon}
                alt={"github-icon"}
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
