import React from "react";
import { Image, useBreakpointValue } from "@chakra-ui/react";

type ImgProps = {
	src: string[] | Record<string, any>;
} & Omit<React.ComponentProps<typeof Image>, "src">;

const ResponsiveImage = (prop: ImgProps) => {
	const { src, ...imgProps } = prop;
	const imgSrc = useBreakpointValue(src);
	return <Image {...imgProps} src={imgSrc} h={'100%'} objectFit={'cover'} />;
};

export default ResponsiveImage;