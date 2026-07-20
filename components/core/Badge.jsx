import React from 'react';
const TONES = {
  success: { background: 'var(--eucalypt-50)', color: 'var(--eucalypt-700)' },
  warning: { background: 'var(--kangaroo-100)', color: 'var(--kangaroo-700)' },
  info:    { background: 'var(--branch-100)', color: 'var(--branch-700)' },
};
export function Badge({ tone = 'success', dot = false, children, style = {}, ...rest }) {
  const s = { display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)',
    fontWeight: 600, fontSize: 12.5, borderRadius: 'var(--radius-pill)', padding: '5px 12px', ...TONES[tone], ...style };
  return <span style={s} {...rest}>{dot ? <span style={{ width: 7, height: 7, borderRadius: 999, background: 'currentColor' }} /> : null}{children}</span>;
}
