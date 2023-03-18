import { portfolio } from "data/portfolio-data";
import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-32">
      <h2 className="portfolio-heading">My portfolio</h2>

      <ul className="w-full md:w-5/6 space-y-10 py-5">
      {portfolio.map((pf) => (
        <li key={pf.id} className="portfolio-card">
          <div className="w-full md:w-1/3 h-60">
            <img
              className="h-full w-full object-cover"
              src={pf.card}
              alt={pf.title}
            />
          </div>
          <div className="w-full md:w-2/3 p-5">
            <h2 className="text-3xl font-bold mb-3">{pf.title}</h2>
            <p>{pf.intro}</p>
            <div className="mt-8 font-semibold text-white flex items-center gap-2">
              <Link
                href={pf.github}
                className="portfolio-link bg-primary-default"
                target={"_blank"}
              >
                <img className="w-5 h-5" src={pf.gitLogo} alt="github" />
                github
              </Link>
              <Link
                href={pf.link}
                className="portfolio-link bg-primary-gray dark:bg-primary-black"
                target={"_blank"}
              >
                <img className="w-5 h-5" src={pf.webLogo} alt="website" />
                website
              </Link>
            </div>
          </div>
        </li>
      ))}
      </ul>
    </section>
  );
}
