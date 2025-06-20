import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:-translate-y-1 active:translate-y-0',
  {
    variants: {
      variant: {
        default:
          'gradient-ocean text-white shadow-lg hover:shadow-xl focus-visible:ring-blue-200',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl focus-visible:ring-red-200',
        outline:
          'border-2 border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-400 focus-visible:ring-neutral-200',
        secondary:
          'gradient-forest text-white shadow-lg hover:shadow-xl focus-visible:ring-green-200',
        ghost:
          'text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-200',
        link: 'text-blue-600 underline-offset-4 hover:underline focus-visible:ring-blue-200',
        sunset:
          'gradient-sunset text-white shadow-lg hover:shadow-xl focus-visible:ring-orange-200',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-10 rounded-xl px-4 text-sm',
        lg: 'h-14 rounded-2xl px-8 py-4 text-base',
        xl: 'h-16 rounded-3xl px-10 py-5 text-lg font-bold',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
