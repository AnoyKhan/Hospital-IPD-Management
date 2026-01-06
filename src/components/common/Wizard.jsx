import React from 'react';

const Wizard = ({ steps = [], currentStep = 0, onNext, onPrev, onSubmit, loading = false }) => {
  return (
    <div className="card shadow-sm">
      {/* Step Indicator */}
      <div className="card-header bg-white">
        <div className="row g-2 align-items-center">
          <div className="col">
            <div className="d-flex justify-content-between">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center flex-grow-1">
                  <div
                    className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-2 ${
                      idx <= currentStep
                        ? 'bg-primary text-white'
                        : 'bg-light text-muted border'
                    }`}
                    style={{ width: '36px', height: '36px', fontWeight: 'bold', fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}
                  >
                    {idx < currentStep ? '✓' : idx + 1}
                  </div>
                  <div className="small text-muted d-none d-sm-block">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="card-body">
        <slot-content />
      </div>

      {/* Navigation */}
      <div className="card-footer bg-light d-flex flex-column flex-sm-row justify-content-between gap-2">
        <button
          className="btn btn-outline-secondary w-100 w-sm-auto order-1 order-sm-0"
          onClick={onPrev}
          disabled={currentStep === 0 || loading}
        >
          ← Previous
        </button>
        <div className="text-muted small text-center order-0 order-sm-1">
          Step {currentStep + 1} of {steps.length}
        </div>
        {currentStep === steps.length - 1 ? (
          <button
            className="btn btn-success w-100 w-sm-auto order-2"
            onClick={onSubmit}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Complete'}
          </button>
        ) : (
          <button
            className="btn btn-primary w-100 w-sm-auto order-2"
            onClick={onNext}
            disabled={loading}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
};

export default Wizard;
