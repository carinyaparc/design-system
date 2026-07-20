import React from 'react';
export function Input({ label, hint, invalid = false, style = {}, ...rest }) {
  const input = {
    fontFamily: 'var(--font-sans)', fontSize: 15, width: '100%', boxSizing: 'border-box',
    background: 'var(--color-card)', color: 'var(--color-foreground)',
    border: '1.5px solid ' + (invalid ? 'var(--color-destructive)' : 'var(--color-input)'),
    borderRadius: 'var(--radius-md)', padding: '13px 16px', outline: 'none', ...style,
  };
  return (
    <label style={{ display: 'block', fontFamily: 'var(--font-sans)' }}>
      {label ? <span style={{ display: 'block', fontWeight: 600, fontSize: 13.5, marginBottom: 8 }}>{label}</span> : null}
      <input style={input} {...rest} />
      {hint ? <span style={{ display: 'block', fontSize: 12, color: 'var(--color-muted-foreground)', marginTop: 6 }}>{hint}</span> : null}
    </label>
  );
}
