import { FC, memo } from "react";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>Some subtitle 2</h2>
    </header>
  );
};

export default memo(Header);
