import React from 'react';

const LoadingSkeleton = ({ count = 1, type = 'card' }) => {
  if (type === 'card') {
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="card shadow-sm mb-3">
            <div className="card-body">
              <div className="placeholder-glow">
                <div className="placeholder" style={{ height: '20px', marginBottom: '10px' }}></div>
                <div className="placeholder" style={{ height: '15px', width: '80%' }}></div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }

  if (type === 'table-row') {
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <tr key={i}>
            <td colSpan="6">
              <div className="placeholder-glow">
                <div className="placeholder" style={{ height: '15px' }}></div>
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  }

  if (type === 'chart') {
    return (
      <div className="card shadow-sm">
        <div className="card-body" style={{ height: '300px' }}>
          <div className="placeholder-glow h-100">
            <div className="placeholder h-100"></div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default LoadingSkeleton;
