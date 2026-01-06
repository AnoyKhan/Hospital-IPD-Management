import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Unauthorized from './pages/Unauthorized.jsx';
import { RequireAuth, RequireRole } from './components/Protected.jsx';
import PatientsList from './pages/PatientsList.jsx';
import PatientRegistration from './pages/PatientRegistration.jsx';
import OpdToIpd from './pages/OpdToIpd.jsx';
import IpdAdmissionForm from './pages/IpdAdmissionForm.jsx';
import AdmissionSlip from './pages/AdmissionSlip.jsx';
import WardSetup from './pages/WardSetup.jsx';
import BedCategoryRate from './pages/BedCategoryRate.jsx';
import BedAvailability from './pages/BedAvailability.jsx';
import BedAllocation from './pages/BedAllocation.jsx';
import BedTransfer from './pages/BedTransfer.jsx';
import DoctorVisitNotes from './pages/DoctorVisitNotes.jsx';
import DiagnosisTreatmentPlan from './pages/DiagnosisTreatmentPlan.jsx';
import VitalSigns from './pages/VitalSigns.jsx';
import NursingNotes from './pages/NursingNotes.jsx';
import ProcedureNotes from './pages/ProcedureNotes.jsx';
import TestRequest from './pages/TestRequest.jsx';
import LabResultEntry from './pages/LabResultEntry.jsx';
import ReportViewer from './pages/ReportViewer.jsx';
import MedicineOrder from './pages/MedicineOrder.jsx';
import DailyMedicineChart from './pages/DailyMedicineChart.jsx';
import IssueReturn from './pages/IssueReturn.jsx';
import OTSchedule from './pages/OTSchedule.jsx';
import OTBooking from './pages/OTBooking.jsx';
import OTNotes from './pages/OTNotes.jsx';
import LiveBillPreview from './pages/billing/LiveBillPreview.jsx';
import PaymentScreen from './pages/billing/PaymentScreen.jsx';
import DueDiscountView from './pages/billing/DueDiscountView.jsx';
import Discharge from './pages/discharge/Discharge.jsx';
import ReportsDashboard from './pages/reports/ReportsDashboard.jsx';
import IPDAdmissionReport from './pages/reports/IPDAdmissionReport.jsx';
import BedOccupancyReport from './pages/reports/BedOccupancyReport.jsx';
import IncomeReport from './pages/reports/IncomeReport.jsx';
import DueReport from './pages/reports/DueReport.jsx';
import NotFound from './pages/NotFound.jsx';
import ServerError from './pages/ServerError.jsx';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected dashboard for all authenticated roles */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor", "Nurse", "Pharmacist", "Accounts"]}>
                <Dashboard />
              </RequireRole>
            </RequireAuth>
          }
        />

        {/* Patient Management */}
        <Route
          path="/patients"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor", "Nurse"]}>
                <PatientsList />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/patients/register"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Nurse"]}>
                <PatientRegistration />
              </RequireRole>
            </RequireAuth>
          }
        />

        {/* Admissions */}
        <Route
          path="/admissions/opd-to-ipd"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor"]}>
                <OpdToIpd />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/admissions/ipd"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Nurse"]}>
                <IpdAdmissionForm />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/admissions/slip"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Nurse", "Accounts"]}>
                <AdmissionSlip />
              </RequireRole>
            </RequireAuth>
          }
        />

        {/* Ward & Bed Management */}
        <Route
          path="/wards/setup"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin"]}>
                <WardSetup />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/beds/categories"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Accounts"]}>
                <BedCategoryRate />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/beds/availability"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Nurse", "Doctor"]}>
                <BedAvailability />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/beds/allocation"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Nurse"]}>
                <BedAllocation />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/beds/transfer"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Nurse"]}>
                <BedTransfer />
              </RequireRole>
            </RequireAuth>
          }
        />

        {/* Clinical & Treatment */}
        <Route
          path="/clinical/doctor-notes"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor"]}>
                <DoctorVisitNotes />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/clinical/diagnosis"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor"]}>
                <DiagnosisTreatmentPlan />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/clinical/vitals"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor", "Nurse"]}>
                <VitalSigns />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/clinical/nursing-notes"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Nurse"]}>
                <NursingNotes />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/clinical/procedure-notes"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor", "Nurse"]}>
                <ProcedureNotes />
              </RequireRole>
            </RequireAuth>
          }
        />

        {/* Investigation & Diagnostic */}
        <Route
          path="/investigations/request"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor", "Nurse"]}>
                <TestRequest />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/investigations/results"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Nurse"]}>
                <LabResultEntry />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/investigations/report"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor", "Nurse", "Accounts"]}>
                <ReportViewer />
              </RequireRole>
            </RequireAuth>
          }
        />

        {/* Pharmacy */}
        <Route
          path="/pharmacy"
          element={<Navigate to="/pharmacy/order" replace />}
        />
        <Route
          path="/pharmacy/order"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor", "Nurse"]}>
                <MedicineOrder />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/pharmacy/chart"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Nurse", "Pharmacist"]}>
                <DailyMedicineChart />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/pharmacy/issue-return"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Pharmacist", "Nurse"]}>
                <IssueReturn />
              </RequireRole>
            </RequireAuth>
          }
        />

        {/* Operation Theatre */}
        <Route
          path="/ot/schedule"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor", "Nurse"]}>
                <OTSchedule />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/ot/booking"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor"]}>
                <OTBooking />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/ot/notes"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor", "Nurse"]}>
                <OTNotes />
              </RequireRole>
            </RequireAuth>
          }
        />

        {/* Billing */}
        <Route
          path="/billing/live"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor", "Nurse", "Accounts"]}>
                <LiveBillPreview />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/billing/payment"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Accounts"]}>
                <PaymentScreen />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/billing/due-discount"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Accounts"]}>
                <DueDiscountView />
              </RequireRole>
            </RequireAuth>
          }
        />

        {/* Discharge */}
        <Route
          path="/discharge"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Doctor", "Nurse", "Accounts"]}>
                <Discharge />
              </RequireRole>
            </RequireAuth>
          }
        />

        {/* Reports */}
        <Route
          path="/reports"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Accounts"]}>
                <ReportsDashboard />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/reports/admission"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Accounts"]}>
                <IPDAdmissionReport />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/reports/occupancy"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Accounts"]}>
                <BedOccupancyReport />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/reports/income"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Accounts"]}>
                <IncomeReport />
              </RequireRole>
            </RequireAuth>
          }
        />
        <Route
          path="/reports/due"
          element={
            <RequireAuth>
              <RequireRole roles={["Admin", "Accounts"]}>
                <DueReport />
              </RequireRole>
            </RequireAuth>
          }
        />

        {/* Error Pages */}
        <Route path="/error/404" element={<NotFound />} />
        <Route path="/error/500" element={<ServerError />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
