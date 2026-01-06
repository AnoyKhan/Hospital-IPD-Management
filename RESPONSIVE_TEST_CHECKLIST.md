# Responsive Design Testing Checklist

Use this checklist to verify responsive behavior across all breakpoints.

## Test Environment Setup

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Device Testing
- [ ] Physical mobile device (Android/iOS)
- [ ] Tablet device
- [ ] Desktop/Laptop
- [ ] Browser DevTools responsive mode

## Breakpoint Testing

### 1. Extra Small (<576px) - Mobile Phones

#### Sidebar & Navigation
- [ ] Hamburger menu icon visible in navbar
- [ ] Sidebar hidden by default
- [ ] Sidebar opens on hamburger click
- [ ] Backdrop overlay appears when sidebar is open
- [ ] Sidebar closes when clicking backdrop
- [ ] Sidebar auto-closes on route navigation
- [ ] Close button (×) visible in sidebar

#### Navbar
- [ ] Brand shows "HMS" (short version)
- [ ] User details hidden
- [ ] Logout button shows icon only
- [ ] No overflow or text wrapping issues

#### Layout
- [ ] No horizontal scrolling on any page
- [ ] Main content has no left margin
- [ ] Content fills full width

#### Forms (PatientRegistration, BedAllocation, etc.)
- [ ] All form fields full-width (col-12)
- [ ] Labels above inputs (not inline)
- [ ] Buttons full-width
- [ ] Easy to tap form controls (min 44px height)
- [ ] Adequate spacing between fields
- [ ] Submit buttons at bottom, easy to reach

#### Tables (PatientsList, BedCategoryRate, etc.)
- [ ] Tables scrollable horizontally
- [ ] Table wrapper prevents page scroll
- [ ] Font size readable (0.8rem minimum)
- [ ] Headers sticky or visible

#### Cards (Dashboard, Reports, etc.)
- [ ] All cards single column (col-12)
- [ ] Card content not cramped
- [ ] Card actions accessible
- [ ] Proper spacing between cards (g-2)

#### Buttons
- [ ] All buttons minimum 44px height
- [ ] Full-width or adequate touch area
- [ ] Easy to distinguish and tap
- [ ] No buttons too close together

### 2. Small (≥576px) - Large Phones

#### Dashboard
- [ ] Stat cards show 2 columns (col-sm-6)
- [ ] Charts still stacked or side-by-side based on design
- [ ] Quick action buttons in row layout (flex-sm-row)

#### Forms
- [ ] Some fields start showing in rows
- [ ] Gender/Age fields half-width (col-6)
- [ ] Buttons in horizontal layout

#### Navigation
- [ ] Sidebar behavior same as mobile
- [ ] Navbar shows more information

#### Reports
- [ ] Report cards show 2 columns
- [ ] Quick stats show 2-3 columns

### 3. Medium (≥768px) - Tablets

#### Sidebar
- [ ] Sidebar fixed and always visible
- [ ] Hamburger menu hidden
- [ ] No backdrop overlay
- [ ] Sidebar close button hidden

#### Navbar
- [ ] Brand shows full text: "Hospital Management System"
- [ ] User details visible (name, role)
- [ ] Logout button shows text + icon

#### Layout
- [ ] Main content has left margin (ms-md-sidebar)
- [ ] Content doesn't overlap with sidebar
- [ ] Proper spacing maintained

#### Forms
- [ ] Fields show in 2-3 columns
- [ ] Logical grouping maintained
- [ ] Labels properly aligned

#### Tables
- [ ] Full table visible without horizontal scroll (if columns permit)
- [ ] Normal font size restored

#### Cards
- [ ] Cards show in 2-3 columns
- [ ] Better utilization of screen space

### 4. Large (≥992px) - Laptops/Small Desktops

#### Dashboard
- [ ] Stat cards show 3-4 columns (col-lg-4 or col-lg-3)
- [ ] Charts side-by-side (col-xl-6)
- [ ] Optimal space utilization

#### Forms
- [ ] Multi-column layouts work smoothly
- [ ] No excessive whitespace
- [ ] Fields grouped logically

#### Reports
- [ ] Report cards show 2-3 columns effectively
- [ ] Quick stats show 4 columns

### 5. Extra Large (≥1200px) - Large Desktops

#### Dashboard
- [ ] Stat cards show 4-5 columns (col-xl-3 or col-xl-2)
- [ ] Charts optimally sized
- [ ] No wasted space

#### All Pages
- [ ] Content well-distributed
- [ ] Typography comfortable to read
- [ ] No excessive stretching

### 6. Extra Extra Large (≥1400px) - Ultra-Wide Screens

#### Layout
- [ ] Content centered with max-width constraints
- [ ] No excessive horizontal stretching
- [ ] Sidebar proportions maintained

#### Dashboard
- [ ] Stat cards show 5-6 columns (col-xxl-2)
- [ ] Charts maintain aspect ratio

## Functional Testing

### Sidebar Functionality
- [ ] Opens/closes smoothly on mobile
- [ ] No animation glitches
- [ ] Backdrop clickable
- [ ] Auto-closes on navigation
- [ ] State persists correctly

### Navigation
- [ ] All routes accessible
- [ ] Active route highlighted
- [ ] Navigation items tappable/clickable
- [ ] Dropdowns work (if any)

### Forms
- [ ] All fields accessible
- [ ] Validation works
- [ ] Submit buttons functional
- [ ] No fields cut off or hidden
- [ ] Error messages visible

### Tables
- [ ] Sorting works (if implemented)
- [ ] Filtering works
- [ ] Search functional
- [ ] Pagination works (if implemented)
- [ ] Row actions accessible

### Modals
- [ ] Open/close properly
- [ ] Fullscreen on mobile (if implemented)
- [ ] Content readable
- [ ] Actions accessible

## Visual Testing

### Typography
- [ ] All text readable at all sizes
- [ ] No text overflow
- [ ] Proper line heights
- [ ] Headings scale appropriately

### Spacing
- [ ] Consistent spacing at all breakpoints
- [ ] No cramped or excessive spacing
- [ ] Gaps appropriate (g-2 mobile, g-3 desktop)

### Colors & Contrast
- [ ] All text meets contrast requirements
- [ ] Colors consistent across breakpoints
- [ ] Badges and labels readable

### Images & Icons
- [ ] Images scale properly
- [ ] Icons appropriately sized
- [ ] No distortion or pixelation

## Performance Testing

### Load Time
- [ ] Page loads quickly on mobile network
- [ ] Images optimized
- [ ] No layout shift during load

### Animations
- [ ] Sidebar animation smooth
- [ ] Transitions not janky
- [ ] No performance issues on older devices

### Memory Usage
- [ ] No memory leaks
- [ ] Sidebar state managed efficiently

## Accessibility Testing

### Touch Targets
- [ ] All buttons min 44px height
- [ ] Adequate spacing between interactive elements
- [ ] Easy to tap on touch devices

### Keyboard Navigation
- [ ] Tab order logical
- [ ] All interactive elements reachable
- [ ] Focus indicators visible

### Screen Readers
- [ ] Labels for form inputs
- [ ] ARIA attributes where needed
- [ ] Meaningful alt text

## Cross-Browser Testing

### Chrome
- [ ] All features work
- [ ] Styles render correctly
- [ ] DevTools responsive mode matches real devices

### Firefox
- [ ] All features work
- [ ] Styles render correctly
- [ ] No Firefox-specific issues

### Safari
- [ ] All features work
- [ ] iOS-specific styles work
- [ ] Touch gestures work

### Edge
- [ ] All features work
- [ ] Styles render correctly

## Specific Page Testing

### Dashboard
- [ ] Stat cards responsive (1→2→3→4→5 cols)
- [ ] Charts adapt to screen size
- [ ] Quick actions accessible

### PatientRegistration
- [ ] Form fields stack/unstacknaturally
- [ ] All inputs accessible
- [ ] Submit button easy to reach

### PatientsList
- [ ] Table scrollable on mobile
- [ ] Search and filters work
- [ ] Add patient button accessible

### BedAllocation
- [ ] Dropdowns work on mobile
- [ ] Form usable on small screens

### LiveBillPreview
- [ ] Bill details readable
- [ ] Tables scrollable
- [ ] Summary visible

### Discharge (Wizard)
- [ ] Wizard steps visible
- [ ] Navigation buttons work
- [ ] Step labels hidden/shown appropriately

### Reports
- [ ] Report cards responsive
- [ ] Quick stats adapt
- [ ] Links accessible

## Known Issues / Notes

### Issues Found
- [ ] Document any issues discovered during testing
- [ ] Note browser/device where issue occurs
- [ ] Severity: Critical / High / Medium / Low

### Areas Needing Improvement
- [ ] List any pages/components that need further responsive work
- [ ] Note any UX improvements suggested

## Sign-Off

### Tester Information
- **Name**: ___________________________
- **Date**: ___________________________
- **Environment**: ___________________________

### Test Results
- [ ] All critical tests passed
- [ ] Minor issues documented
- [ ] Ready for production

### Notes
```
Add any additional notes, observations, or recommendations here.
```

---

**Checklist Version**: 1.0  
**Last Updated**: December 2025  
**Based on**: RESPONSIVE_DESIGN.md implementation
