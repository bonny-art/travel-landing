import {
  COPYRIGHT,
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIALS,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { isValidElement } from "react";

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link key={link} href="/">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link
                      key={link.label}
                      href="/"
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="whitespace-nowrap">{link.label}:</p>
                      <p className="medium-14 whitespace-nowrap text-blue-70">
                        {link.value}
                      </p>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-grey-30">
                  {SOCIALS.links.map((link) => (
                    <Link key={link} href="/">
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-4 w-full text-center text-gray-30">
          © {year} {COPYRIGHT.title}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
