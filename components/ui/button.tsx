import type { VariantProps } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-night-200 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-sage text-night-200 shadow-sm hover:bg-sage-dark hover:shadow-md",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90",
        outline:
          "border border-surface-light bg-transparent shadow-sm hover:bg-surface hover:text-cream",
        secondary:
          "bg-surface-light text-cream shadow-sm hover:bg-surface",
        ghost:
          "text-cream-muted hover:text-cream hover:bg-surface",
        link: "text-sage underline-offset-4 hover:underline hover:text-sage-light",
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-8 px-4 py-2 text-sm",
        lg: "h-12 px-8 py-4 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button">
  & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
