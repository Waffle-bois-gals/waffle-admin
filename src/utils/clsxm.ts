import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function clsxm(...classes: any[]) {
  return twMerge(clsx(...classes));
}
