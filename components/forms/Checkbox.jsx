import React from 'react';
export function Checkbox({ checked = false, label, onChange, style = {}, ...rest }) {
  const box = {
    width: 22, height: 22, borderRadius: 7, flex: 'none',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: checked ? 'var(--color-primary)' : 'var(--color-card)',
    border: '1.5px solid ' + (checked ? 'var(--color-primary)' : 'var(--color-border)'),
  };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-sans)', fontSize: 15, cursor: 'pointer', ...style }} {...rest}>
      <span style={box} onClick={() => onChange && onChange(!checked)}>
        {checked ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F3ECDB" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg> : null}
      </span>
      {label}
    </label>
  );
}
