import React from "react";

interface LinkProps {
  classN?: string;
  href: string;
  content: string;
}

const Link = ({ classN, href, content }: LinkProps) => {
  return <a className={classN} href={href} target="_blank" rel="noreferrer">{content}</a>;
};

export default Link;
