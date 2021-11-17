/** @jsxImportSource theme-ui */

import { NavLink as MenuLink, Link as A, NavLinkProps } from "theme-ui";
import NextLink from "next/link";

interface LinkProps extends NavLinkProps {
  path: string;
  label: string;
  children?: React.ReactNode;
}
export function NavLink({ path, label, children, ...rest }: LinkProps) {
  return (
    <NextLink href={path}>
      <MenuLink {...rest}>{children ? children : label}</MenuLink>
    </NextLink>
  );
}

export function Link({ path, label, children, ...rest }: LinkProps) {
  return (
    <NextLink href={path}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}
