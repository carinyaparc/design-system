import * as React from 'react';
/** Radio option with label. */
export interface RadioProps { checked?: boolean; label?: React.ReactNode; onChange?: (v: boolean) => void; }
export function Radio(props: RadioProps): JSX.Element;
