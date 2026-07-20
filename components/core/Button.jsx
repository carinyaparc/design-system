import React from 'react';

const PADS = { sm: '10px 20px', md: '14px 28px', lg: '16px 34px' };
const FS = { sm: 13, md: 15, lg: 17 };
const VARIANTS = {
  primary:   { background: 'var(--color-primary)', color: 'var(--color-primary-foreground)', border: '1.5px solid transparent' },
  secondary: { background: 'var(--color-secondary)', color: 'var(--color-secondary-foreground)', border: '1.5px solid transparent' },
  outline:   { background: 'transparent', color: 'var(--color-primary)', border: '1.5px solid var(--color-primary)' },
  ghost:     { background: 'transparent', color: 'var(--color-accent)', border: '1.5px solid transparent' },
};

export function Button({ variant = 'primary', size = 'md', block = false, disabled = false, children, style = {}, ...rest }) {
  const s = {
    fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: FS[size], lineHeight: 1,
    borderRadius: 'var(--radius-pill)', padding: PADS[size], cursor: disabled ? 'not-allowed' : 'pointer',
    display: block ? 'flex' : 'inline-flex', width: block ? '100%' : 'auto',
    alignItems: 'center', justifyContent: 'center', gap: 8,
    opacity: disabled ? 0.45 : 1, transition: 'background .15s ease, color .15s ease',
    ...VARIANTS[variant], ...style,
  };
  return <button style={s} disabled={disabled} {...rest}>{children}</button>;
}
