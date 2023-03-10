import React from "react";

interface LinkProps {
  classN?: string;
  href: string;
  content: string | React.ReactNode;
  title?: string;
}

const Link = ({ classN, href, content, title }: LinkProps) => {
  return <a className={classN} href={href} target="_blank" rel="noreferrer" title={title} >{content}</a>;
};

export default Link;
