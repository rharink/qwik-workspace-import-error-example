import { HTMLAttributes } from "@builder.io/qwik";

// QwikIntrinsicElements["svg"] is not available for declaration emitting
export type IconProps = HTMLAttributes<any>;

type Size = 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | string;

export type RectIconProps = Omit<IconProps, "width" | "height"> & {
  size?: Size;
};
