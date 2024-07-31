import { SVGProps } from "react";

import Prisma from "@/lib/prisma";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TClient = typeof Prisma.client;
