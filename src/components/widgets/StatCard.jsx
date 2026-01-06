import React from 'react';

const StatCard = ({ title, value, subtitle, icon, variant = 'primary' }) => {
  const colorMap = {
    primary: { bg: 'var(--hospital-primary)', bgLight: 'rgba(30, 90, 150, 0.1)' },
    success: { bg: 'var(--status-success)', bgLight: 'rgba(16, 185, 129, 0.1)' },
    warning: { bg: 'var(--status-warning)', bgLight: 'rgba(245, 158, 11, 0.1)' },
    danger: { bg: 'var(--status-danger)', bgLight: 'rgba(239, 68, 68, 0.1)' },
    info: { bg: 'var(--status-info)', bgLight: 'rgba(14, 165, 233, 0.1)' },
  };

  const colors = colorMap[variant] || colorMap.primary;

  return (
    <div className="card border-left overflow-hidden h-100" style={{ borderLeftColor: colors.bg }}>
      <div className="card-body p-0">
        <div className="p-3 pb-0">
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{icon}</div>
        </div>
        <div className="p-3 pt-2">
          <div className="text-muted small text-uppercase fw-bold letter-spacing" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
            {title}
          </div>
          <div className="fs-3 fw-bold my-2" style={{ color: colors.bg }}>{value}</div>
          {subtitle && (
            <div className="text-muted small" style={{ fontSize: '0.85rem' }}>
              {subtitle}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
