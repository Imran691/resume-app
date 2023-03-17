import Image from "next/image";
import Link from "next/link";
import React from "react";
import { contacts } from "data/contacts-data";

export default function Footer() {
  return (
    <footer className="w-full text-center mt-40 bg-white dark:bg-primary-gray">
      <section
        id="conatact"
        className="flex flex-col gap-12 justify-center items-center py-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary-default">
          Contact
        </h2>
        <div className="flex flex-wrap justify-center gap-5 md:gap-10">
          {contacts.map((cntct) => (
            <ul key={cntct.id}>
              <Link href={cntct.link} target="_blank">
                <Image
                  src={cntct.icon}
                  alt={cntct.text}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
            </ul>
          ))}
        </div>
      </section>
      <h2 className="pb-10">&copy; Copywrite 2023 - Muhammad Imran</h2>
    </footer>
  );
}
