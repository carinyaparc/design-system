import * as React from 'react';
/**
 * Surface-filled content card with optional media, kicker and title.
 * @startingPoint section="Core" subtitle="Media / stat / feature card" viewport="700x320"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  kicker?: React.ReactNode;
  title?: React.ReactNode;
  media?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
