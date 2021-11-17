/** @jsxImportSource theme-ui */

import { Image as Img, ImageProps } from "theme-ui";

interface Props extends ImageProps {
  src: string;
}
export default function Image({ src, ...rest }: Props) {
  return <Img src={src} {...rest} />;
}
