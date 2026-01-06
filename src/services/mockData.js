// Centralized Mock Data Service
// This file provides consistent dummy data across all pages
// Replace with actual API calls when backend is ready

export const mockPatients = [
  { id: 'IPD-001', name: 'John Doe', age: 45, gender: 'M', ward: 'General', bed: 'G-12', status: 'Admitted', phone: '9876543210', address: '123 MG Road, Mumbai' },
  { id: 'IPD-002', name: 'Sarah Khan', age: 30, gender: 'F', ward: 'ICU', bed: 'ICU-03', status: 'Admitted', phone: '9876543211', address: '456 Park Street, Delhi' },
  { id: 'IPD-003', name: 'Arjun Mehta', age: 64, gender: 'M', ward: 'Private', bed: 'P-08', status: 'Discharged', phone: '9876543212', address: '789 Lake View, Bangalore' },
  { id: 'IPD-004', name: 'Lina Patel', age: 52, gender: 'F', ward: 'General', bed: 'G-07', status: 'Admitted', phone: '9876543213', address: '321 River Road, Pune' },
  { id: 'IPD-005', name: 'Rahul Sharma', age: 38, gender: 'M', ward: 'ICU', bed: 'ICU-01', status: 'Admitted', phone: '9876543214', address: '654 Hill Station, Jaipur' },
];

export const mockWards = [
  { name: 'General', type: 'General', beds: 40, occupied: 32, available: 8 },
  { name: 'Private', type: 'Private', beds: 20, occupied: 15, available: 5 },
  { name: 'ICU', type: 'ICU', beds: 10, occupied: 8, available: 2 },
  { name: 'NICU', type: 'NICU', beds: 6, occupied: 4, available: 2 },
];

export const mockBedCategories = [
  { category: 'General Ward', rate: 1500, description: 'Shared ward with basic facilities' },
  { category: 'Private Room', rate: 3500, description: 'Private room with attached bathroom' },
  { category: 'ICU', rate: 5000, description: 'Intensive Care Unit with 24/7 monitoring' },
  { category: 'NICU', rate: 6000, description: 'Neonatal ICU for newborns' },
];

export const mockBeds = {
  General: Array.from({ length: 40 }, (_, i) => {
    const code = `G-${String(i + 1).padStart(2, '0')}`;
    const status = i < 32 ? 'Occupied' : 'Available';
    return { code, status, patientId: status === 'Occupied' ? `IPD-${String(i + 1).padStart(3, '0')}` : null };
  }),
  Private: Array.from({ length: 20 }, (_, i) => {
    const code = `P-${String(i + 1).padStart(2, '0')}`;
    const status = i < 15 ? 'Occupied' : 'Available';
    return { code, status, patientId: status === 'Occupied' ? `IPD-${String(i + 41).padStart(3, '0')}` : null };
  }),
  ICU: Array.from({ length: 10 }, (_, i) => {
    const code = `ICU-${String(i + 1).padStart(2, '0')}`;
    const status = i < 8 ? 'Occupied' : 'Available';
    return { code, status, patientId: status === 'Occupied' ? `IPD-${String(i + 61).padStart(3, '0')}` : null };
  }),
  NICU: Array.from({ length: 6 }, (_, i) => {
    const code = `NICU-${String(i + 1).padStart(2, '0')}`;
    const status = i < 4 ? 'Occupied' : 'Available';
    return { code, status, patientId: status === 'Occupied' ? `IPD-${String(i + 71).padStart(3, '0')}` : null };
  }),
};

export const mockVitalSigns = [
  { time: '08:00', bp: '120/80', pulse: 72, temp: 98.6, spo2: 98 },
  { time: '10:00', bp: '125/82', pulse: 75, temp: 98.7, spo2: 97 },
  { time: '12:00', bp: '118/78', pulse: 70, temp: 98.5, spo2: 99 },
  { time: '14:00', bp: '122/80', pulse: 74, temp: 98.8, spo2: 98 },
  { time: '16:00', bp: '120/79', pulse: 73, temp: 98.6, spo2: 97 },
  { time: '18:00', bp: '124/81', pulse: 76, temp: 98.9, spo2: 98 },
];

export const mockMedicines = [
  { id: 1, name: 'Paracetamol 650mg', type: 'Tablet', stock: 500, category: 'Analgesic' },
  { id: 2, name: 'Amoxicillin 500mg', type: 'Capsule', stock: 200, category: 'Antibiotic' },
  { id: 3, name: 'Omeprazole 20mg', type: 'Tablet', stock: 150, category: 'Antacid' },
  { id: 4, name: 'Ceftriaxone 1g', type: 'Injection', stock: 80, category: 'Antibiotic' },
  { id: 5, name: 'Insulin Glargine', type: 'Injection', stock: 50, category: 'Antidiabetic' },
  { id: 6, name: 'Metformin 500mg', type: 'Tablet', stock: 300, category: 'Antidiabetic' },
  { id: 7, name: 'Aspirin 75mg', type: 'Tablet', stock: 400, category: 'Antiplatelet' },
  { id: 8, name: 'Atorvastatin 10mg', type: 'Tablet', stock: 250, category: 'Statin' },
];

export const mockMedicineOrders = [
  { id: 'MO-001', patientId: 'IPD-001', medicine: 'Paracetamol 650mg', dosage: '1-0-1', frequency: 'After meals', duration: '5 days', prescribedBy: 'Dr. Smith', date: '2025-12-24' },
  { id: 'MO-002', patientId: 'IPD-002', medicine: 'Ceftriaxone 1g', dosage: 'IV', frequency: 'BD', duration: '7 days', prescribedBy: 'Dr. Johnson', date: '2025-12-23' },
  { id: 'MO-003', patientId: 'IPD-001', medicine: 'Omeprazole 20mg', dosage: '1-0-0', frequency: 'Before breakfast', duration: '10 days', prescribedBy: 'Dr. Smith', date: '2025-12-24' },
];

export const mockLabTests = [
  { id: 'LAB-001', name: 'Complete Blood Count (CBC)', category: 'Hematology', cost: 500 },
  { id: 'LAB-002', name: 'Blood Sugar Fasting', category: 'Biochemistry', cost: 150 },
  { id: 'LAB-003', name: 'Lipid Profile', category: 'Biochemistry', cost: 800 },
  { id: 'LAB-004', name: 'Liver Function Test', category: 'Biochemistry', cost: 1200 },
  { id: 'LAB-005', name: 'Kidney Function Test', category: 'Biochemistry', cost: 1000 },
  { id: 'LAB-006', name: 'X-Ray Chest PA', category: 'Radiology', cost: 900 },
  { id: 'LAB-007', name: 'ECG', category: 'Cardiology', cost: 400 },
  { id: 'LAB-008', name: 'Ultrasound Abdomen', category: 'Radiology', cost: 1500 },
];

export const mockTestRequests = [
  { id: 'REQ-001', patientId: 'IPD-001', test: 'CBC', status: 'Pending', requestDate: '2025-12-24', requestedBy: 'Dr. Smith' },
  { id: 'REQ-002', patientId: 'IPD-002', test: 'X-Ray Chest', status: 'Completed', requestDate: '2025-12-23', requestedBy: 'Dr. Johnson' },
  { id: 'REQ-003', patientId: 'IPD-003', test: 'Blood Sugar', status: 'In Progress', requestDate: '2025-12-24', requestedBy: 'Dr. Williams' },
];

export const mockOTSlots = [
  { id: 'OT-1', name: 'OT-1 (Major)', available: true, currentProcedure: null },
  { id: 'OT-2', name: 'OT-2 (Minor)', available: false, currentProcedure: 'Appendectomy - IPD-005' },
  { id: 'OT-3', name: 'OT-3 (Emergency)', available: true, currentProcedure: null },
];

export const mockOTBookings = [
  { id: 'OTB-001', patientId: 'IPD-001', patientName: 'John Doe', procedure: 'Laparoscopic Cholecystectomy', surgeon: 'Dr. Smith', date: '2025-12-25', time: '10:00 AM', ot: 'OT-1', status: 'Scheduled' },
  { id: 'OTB-002', patientId: 'IPD-005', patientName: 'Rahul Sharma', procedure: 'Appendectomy', surgeon: 'Dr. Johnson', date: '2025-12-24', time: '02:00 PM', ot: 'OT-2', status: 'In Progress' },
  { id: 'OTB-003', patientId: 'IPD-002', patientName: 'Sarah Khan', procedure: 'Cesarean Section', surgeon: 'Dr. Williams', date: '2025-12-26', time: '09:00 AM', ot: 'OT-1', status: 'Scheduled' },
];

export const mockBillingCharges = [
  { id: 1, description: 'Bed Charges - General Ward', category: 'Bed', qty: 3, rate: 1500, date: '2025-12-20' },
  { id: 2, description: 'Doctor Consultation', category: 'Professional', qty: 2, rate: 750, date: '2025-12-21' },
  { id: 3, description: 'Nursing Care', category: 'Service', qty: 3, rate: 300, date: '2025-12-21' },
  { id: 4, description: 'CBC Test', category: 'Lab', qty: 1, rate: 500, date: '2025-12-22' },
  { id: 5, description: 'X-Ray Chest', category: 'Radiology', qty: 1, rate: 900, date: '2025-12-22' },
  { id: 6, description: 'Paracetamol 650mg', category: 'Pharmacy', qty: 15, rate: 5, date: '2025-12-20' },
  { id: 7, description: 'Ceftriaxone 1g', category: 'Pharmacy', qty: 7, rate: 120, date: '2025-12-21' },
];

export const mockPayments = [
  { id: 'PAY-001', amount: 3000, method: 'Cash', reference: 'ADV-1001', date: '2025-12-21', receivedBy: 'Accounts Staff' },
  { id: 'PAY-002', amount: 1500, method: 'UPI', reference: 'UPI-AX123', date: '2025-12-23', receivedBy: 'Accounts Staff' },
];

export const mockAdmissions = [
  { id: 'IPD-001', patientName: 'John Doe', age: 45, gender: 'M', ward: 'General', bed: 'G-12', admissionDate: '2025-12-20', status: 'Active' },
  { id: 'IPD-002', patientName: 'Sarah Khan', age: 30, gender: 'F', ward: 'ICU', bed: 'ICU-03', admissionDate: '2025-12-22', status: 'Active' },
  { id: 'IPD-003', patientName: 'Arjun Mehta', age: 64, gender: 'M', ward: 'Private', bed: 'P-08', admissionDate: '2025-12-15', status: 'Discharged' },
  { id: 'IPD-004', patientName: 'Lina Patel', age: 52, gender: 'F', ward: 'General', bed: 'G-07', admissionDate: '2025-12-21', status: 'Active' },
  { id: 'IPD-005', patientName: 'Rahul Sharma', age: 38, gender: 'M', ward: 'ICU', bed: 'ICU-01', admissionDate: '2025-12-23', status: 'Active' },
];

export const mockDueData = [
  { patientId: 'IPD-001', patientName: 'John Doe', amount: 12500, paid: 4500, due: 8000, status: 'Due Soon', dueDate: '2025-12-28' },
  { patientId: 'IPD-002', patientName: 'Sarah Khan', amount: 45000, paid: 15000, due: 30000, status: 'Overdue', dueDate: '2025-12-23' },
  { patientId: 'IPD-004', patientName: 'Lina Patel', amount: 8900, paid: 3000, due: 5900, status: 'Due Soon', dueDate: '2025-12-29' },
  { patientId: 'IPD-005', patientName: 'Rahul Sharma', amount: 78000, paid: 25000, due: 53000, status: 'Overdue', dueDate: '2025-12-22' },
];

export const mockDoctors = [
  { id: 'DOC-001', name: 'Dr. Rajesh Kumar', specialization: 'General Surgery', phone: '9876543220' },
  { id: 'DOC-002', name: 'Dr. Priya Sharma', specialization: 'Cardiology', phone: '9876543221' },
  { id: 'DOC-003', name: 'Dr. Anil Mehta', specialization: 'Orthopedics', phone: '9876543222' },
  { id: 'DOC-004', name: 'Dr. Sunita Patel', specialization: 'Gynecology', phone: '9876543223' },
  { id: 'DOC-005', name: 'Dr. Vikram Singh', specialization: 'Neurology', phone: '9876543224' },
];

// Helper functions for mock operations
export const getPatientById = (id) => mockPatients.find((p) => p.id === id);
export const getWardByName = (name) => mockWards.find((w) => w.name === name);
export const getBedsByWard = (wardName) => mockBeds[wardName] || [];
export const getMedicineById = (id) => mockMedicines.find((m) => m.id === id);
export const getTestById = (id) => mockLabTests.find((t) => t.id === id);
export const getDoctorById = (id) => mockDoctors.find((d) => d.id === id);

// Mock async operations (simulating API calls)
export const fetchPatients = () => new Promise((resolve) => setTimeout(() => resolve(mockPatients), 500));
export const fetchWards = () => new Promise((resolve) => setTimeout(() => resolve(mockWards), 500));
export const fetchBeds = (ward) => new Promise((resolve) => setTimeout(() => resolve(getBedsByWard(ward)), 500));
export const fetchMedicines = () => new Promise((resolve) => setTimeout(() => resolve(mockMedicines), 500));
export const fetchLabTests = () => new Promise((resolve) => setTimeout(() => resolve(mockLabTests), 500));
export const fetchDoctors = () => new Promise((resolve) => setTimeout(() => resolve(mockDoctors), 500));

// Dashboard stats calculator
export const getDashboardStats = () => {
  const totalPatients = mockPatients.filter((p) => p.status === 'Admitted').length;
  const totalBeds = mockWards.reduce((sum, w) => sum + w.beds, 0);
  const occupiedBeds = mockWards.reduce((sum, w) => sum + w.occupied, 0);
  const todaysCollection = mockPayments.reduce((sum, p) => sum + p.amount, 0);
  const pendingDue = mockDueData.reduce((sum, d) => sum + d.due, 0);
  
  return {
    totalPatients,
    bedOccupancy: { occupied: occupiedBeds, total: totalBeds },
    todaysAdmission: 14, // Mock value
    todaysCollection,
    pendingDue,
  };
};
