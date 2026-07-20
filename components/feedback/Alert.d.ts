import * as React from 'react';
/** Inline callout / alert. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'success' | 'warning' | 'info';
  title?: React.ReactNode; children?: React.ReactNode;
}
export function Alert(props: AlertProps): JSX.Element;
