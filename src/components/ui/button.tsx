import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:-translate-y-0.5',
  {
    variants: {
      variant: {
        default:
          'bg-medical-600 text-white hover:bg-medical-700 shadow-lg hover:shadow-xl focus-visible:ring-medical-200',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl focus-visible:ring-red-200',
        outline:
          'border-2 border-medical-600 text-medical-600 bg-white hover:bg-medical-600 hover:text-white focus-visible:ring-medical-200',
        secondary:
          'bg-health-600 text-white hover:bg-health-700 shadow-lg hover:shadow-xl focus-visible:ring-health-200',
        ghost:
          'text-medical-600 hover:bg-medical-50 focus-visible:ring-medical-200',
        link: 'text-medical-600 underline-offset-4 hover:underline focus-visible:ring-medical-200',
        medical:
          'bg-gradient-medical text-white hover:opacity-90 shadow-lg hover:shadow-xl focus-visible:ring-medical-200',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-10 rounded-lg px-4 text-sm',
        lg: 'h-14 rounded-xl px-8 text-base',
        xl: 'h-16 rounded-2xl px-10 py-4 text-lg font-semibold',
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
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
