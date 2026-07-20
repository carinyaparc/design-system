import * as React from 'react';
/** Small pill label tinted from a colour ramp. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'eucalypt' | 'kangaroo' | 'bracken' | 'branch' | 'outline';
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
