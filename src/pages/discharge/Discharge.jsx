import React, { useState } from 'react';
import Wizard from '../../components/common/Wizard.jsx';
import DischargeSummary from './DischargeSummary.jsx';
import FinalBillReview from './FinalBillReview.jsx';
import FollowupAdvice from './FollowupAdvice.jsx';

const Discharge = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const steps = ['Discharge Summary', 'Final Bill Review', 'Follow-up Advice'];

  const components = [
    <DischargeSummary key="summary" />,
    <FinalBillReview key="bill" />,
    <FollowupAdvice key="advice" />,
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setCompleted(true);
    setTimeout(() => {
      window.print();
    }, 500);
  };

  if (completed) {
    return (
      <div className="container-fluid">
        <div className="card shadow-sm">
          <div className="card-body text-center py-4 py-md-5">
            <div className="display-6 mb-3">✓</div>
            <h4 className="mb-3">Discharge Completed</h4>
            <p className="text-muted mb-4">Patient discharge process finalized. Summary has been sent to print.</p>
            <button className="btn btn-primary w-100 w-sm-auto" onClick={() => setCompleted(false)}>
              Back to Discharge
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="mb-3">
        <Wizard
          steps={steps}
          currentStep={currentStep}
          onNext={handleNext}
          onPrev={handlePrev}
          onSubmit={handleSubmit}
          loading={false}
        />
      </div>

      <div className="mt-4">
        {components[currentStep]}
      </div>

      {/* Print-friendly styles */}
      <style>{`
        @media print {
          body { margin: 0; padding: 0; }
          .card { border: none; box-shadow: none; page-break-inside: avoid; }
          .btn, .card-footer { display: none; }
          .table { font-size: 0.9rem; }
          h4, h5, h6 { color: #000; }
          .alert { border: 1px solid #999; background: #f9f9f9; }
        }
      `}</style>
    </div>
  );
};

export default Discharge;
