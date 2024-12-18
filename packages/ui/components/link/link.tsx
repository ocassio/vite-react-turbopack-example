import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface CustomLinkProps {
    url: string;
    children?: ReactNode;
}

const CustomLink: FC<CustomLinkProps> = ({ url, children }) => {
    return <Link to={url}>{children}</Link>;
};

export default CustomLink;
