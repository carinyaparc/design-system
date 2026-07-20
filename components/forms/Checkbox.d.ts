import * as React from 'react';
/** Checkbox with label. Controlled via checked/onChange. */
export interface CheckboxProps { checked?: boolean; label?: React.ReactNode; onChange?: (v: boolean) => void; }
export function Checkbox(props: CheckboxProps): JSX.Element;
