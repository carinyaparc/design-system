import * as React from 'react';
/**
 * Pill action button in the Carinya Parc brand.
 * @startingPoint section="Core" subtitle="Primary / secondary / outline / ghost" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
