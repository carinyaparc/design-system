import React from 'react';
const TONES = {
  success: { bg: 'var(--eucalypt-50)', bd: '#C4DBC9', bar: 'var(--color-primary)', fg: 'var(--eucalypt-700)' },
  warning: { bg: 'var(--bracken-50)', bd: '#E8C4A9', bar: 'var(--color-accent)', fg: 'var(--bracken-700)' },
  info:    { bg: 'var(--branch-50)', bd: '#BcD4D8', bar: 'var(--color-info)', fg: 'var(--branch-700)' },
};
export function Alert({ tone = 'success', title, children, style = {}, ...rest }) {
  const t = TONES[tone];
  const s = { background: t.bg, border: '1px solid ' + t.bd, borderLeft: '5px solid ' + t.bar,
    borderRadius: 'var(--radius-md)', padding: '18px 24px', fontFamily: 'var(--font-sans)', ...style };
  return (
    <div style={s} {...rest}>
      {title ? <div style={{ fontWeight: 700, fontSize: 15, color: t.fg }}>{title}</div> : null}
      {children ? <div style={{ fontSize: 14, color: t.fg, opacity: 0.85, marginTop: 4 }}>{children}</div> : null}
    </div>
  );
}
