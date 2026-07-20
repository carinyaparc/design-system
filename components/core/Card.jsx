import React from 'react';

export function Card({ kicker, title, media, footer, children, style = {}, ...rest }) {
  const wrap = {
    background: 'var(--color-card)', border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', overflow: 'hidden',
    fontFamily: 'var(--font-sans)', color: 'var(--color-card-foreground)', ...style,
  };
  return (
    <div style={wrap} {...rest}>
      {media ? <div style={{ aspectRatio: '16 / 10', overflow: 'hidden' }}>{media}</div> : null}
      <div style={{ padding: 28 }}>
        {kicker ? <div style={{ fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', fontSize: 11, color: 'var(--color-accent)' }}>{kicker}</div> : null}
        {title ? <div style={{ fontFamily: 'var(--font-heading)', fontSize: 23, lineHeight: 1.2, marginTop: 8 }}>{title}</div> : null}
        {children ? <div style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--color-muted-foreground)', marginTop: 10 }}>{children}</div> : null}
        {footer ? <div style={{ marginTop: 18 }}>{footer}</div> : null}
      </div>
    </div>
  );
}
