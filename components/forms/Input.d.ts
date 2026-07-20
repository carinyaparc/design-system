import * as React from 'react';
/** Text input with label and hint. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode; hint?: React.ReactNode; invalid?: boolean;
}
export function Input(props: InputProps): JSX.Element;
