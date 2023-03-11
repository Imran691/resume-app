import { socials } from "data/social-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PhoneIcon from "../public/icons/phone.png";
import MailIcon from "../public/icons/mail.png";
import GitHubIcon from "../public/icons/github.png";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row px-10 md:px-40 py-10 justify-between font-serif bg-stone-700 text-white">
      <div className="footer-col text-3xl">
        <h1>Muhammad Imran</h1>
      </div>
      <ul>
        <li>
          <h2 className="text-2xl pb-4 md:pb-8 pt-8 md:pt-0">Socials</h2>
          {socials.map((scls) => (
            <div key={scls.id} className="px-2 pb-4 pl-10 md:pl-0">
              <Link href={scls.link} target="_blank">
                <Image
                  src={scls.src}
                  alt={scls.src}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            </div>
          ))}
        </li>
      </ul>

      <div>
        <ul>
          <li>
            <h1 className="text-2xl pb-4 md:pb-8">Contact </h1>
          </li>
          <li>
            <div className="flex pb-4 pl-10 md:pl-0">
              <Image
                src={PhoneIcon}
                alt={"phone-icon"}
                width={40}
                height={40}
              />
              <p>0092 335 123456789</p>
            </div>
          </li>
          <li>
            <div className="flex pl-10 md:pl-0">
              <Image src={MailIcon} alt={"mail-icon"} width={40} height={40} />
              <p>mimran691@gmail.com</p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="text-2xl pt-8 md:pt-0 pb-8">Github</li>
          <li className="pl-10 md:pl-0">
            <Link href={"https://github.com/Imran691"} target="_blank">
              <Image
                src={GitHubIcon}
                alt={"github-icon"}
                width={40}
                height={40}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
