import React from 'react';

const TONES = {
  eucalypt: { background: 'var(--eucalypt-50)', color: 'var(--eucalypt-700)' },
  kangaroo: { background: 'var(--kangaroo-100)', color: 'var(--kangaroo-700)' },
  bracken:  { background: 'var(--bracken-100)', color: 'var(--bracken-700)' },
  branch:   { background: 'var(--branch-100)', color: 'var(--branch-700)' },
  outline:  { background: 'transparent', color: 'var(--color-muted-foreground)', boxShadow: 'inset 0 0 0 1.5px var(--color-border)' },
};

export function Tag({ tone = 'eucalypt', children, style = {}, ...rest }) {
  const s = {
    display: 'inline-flex', alignItems: 'center', gap: 7,
    fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13.5,
    borderRadius: 'var(--radius-pill)', padding: '8px 16px', ...TONES[tone], ...style,
  };
  return <span style={s} {...rest}>{children}</span>;
}
