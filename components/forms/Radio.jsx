import React from 'react';
export function Radio({ checked = false, label, onChange, style = {}, ...rest }) {
  const ring = {
    width: 22, height: 22, borderRadius: 999, flex: 'none',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    border: '2px solid ' + (checked ? 'var(--color-primary)' : 'var(--color-border)'),
  };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-sans)', fontSize: 15, cursor: 'pointer', ...style }} {...rest}>
      <span style={ring} onClick={() => onChange && onChange(true)}>
        {checked ? <span style={{ width: 11, height: 11, borderRadius: 999, background: 'var(--color-primary)' }} /> : null}
      </span>
      {label}
    </label>
  );
}
