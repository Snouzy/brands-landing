/** @jsxImportSource theme-ui */

import { Image, NavLinkProps } from "theme-ui";
import { Link } from "components/link";

interface Props extends NavLinkProps {
  image: string;
}
export default function Logo({ image, ...rest }: Props) {
  return (
    <Link
      path="/"
      label="Logo"
      sx={{
        variant: "links.logo",
        display: "flex",
        alignItems: "center",
      }}
      {...rest}
    >
      <Image
        src={image}
        alt="Vazee BRANDS logo"
        sx={{ height: "100%", width: "100%" }}
      />
    </Link>
  );
}
