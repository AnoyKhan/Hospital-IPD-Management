# Hospital IPD Management System - Responsive Layout Guide

## Visual Breakpoint Reference

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         RESPONSIVE BREAKPOINT SYSTEM                         │
└─────────────────────────────────────────────────────────────────────────────┘

   360px      576px       768px        992px        1200px       1400px
    │          │           │            │             │            │
    ▼          ▼           ▼            ▼             ▼            ▼
┌───────┬───────────┬─────────────┬─────────────┬──────────────┬───────────────┐
│  XS   │    SM     │     MD      │     LG      │     XL       │     XXL       │
│Mobile │  Large    │   Tablet    │   Laptop    │   Desktop    │  Ultra-wide   │
│Phone  │  Mobile   │             │             │              │               │
└───────┴───────────┴─────────────┴─────────────┴──────────────┴───────────────┘
```

## Layout Comparison Across Breakpoints

### 1. Sidebar Behavior

```
MOBILE (<768px)                          DESKTOP (≥768px)
┌────────────────────────┐              ┌──────┬─────────────────┐
│ ☰ HMS          [User] │              │      │ Hospital Mgmt   │
├────────────────────────┤              │ Side │  [User]         │
│                        │              │ bar  ├─────────────────┤
│                        │              │ ├─ D │                 │
│   [Main Content]       │              │ ├─ P │  Main Content   │
│                        │              │ ├─ W │                 │
│                        │              │ ├─ B │                 │
└────────────────────────┘              │ └─ R │                 │
                                        └──────┴─────────────────┘
                                        
Sidebar opens as overlay              Sidebar fixed, always visible
with backdrop                         Main content has left margin
```

### 2. Dashboard Stats Grid

```
XS (<576px)          SM (≥576px)           MD/LG (≥768px)        XL (≥1200px)        XXL (≥1400px)
1 COLUMN             2 COLUMNS             3-4 COLUMNS           4 COLUMNS           5 COLUMNS

┌─────────────┐      ┌─────┬─────┐        ┌────┬────┬────┐      ┌───┬───┬───┬───┐  ┌──┬──┬──┬──┬──┐
│   Stat 1    │      │ St1 │ St2 │        │St1 │St2 │St3 │      │S1 │S2 │S3 │S4 │  │S1│S2│S3│S4│S5│
├─────────────┤      ├─────┼─────┤        ├────┼────┼────┤      ├───┼───┼───┼───┤  ├──┼──┼──┼──┼──┤
│   Stat 2    │      │ St3 │ St4 │        │St4 │St5 │St6 │      │S5 │S6 │S7 │S8 │  │S6│S7│S8│..│..│
├─────────────┤      └─────┴─────┘        └────┴────┴────┘      └───┴───┴───┴───┘  └──┴──┴──┴──┴──┘
│   Stat 3    │
├─────────────┤      col-12 col-sm-6      col-12 col-sm-6       col-12 col-sm-6    col-12 col-sm-6
│   Stat 4    │                           col-lg-4 col-xl-3     col-lg-4 col-xl-3  col-lg-4 col-xl-3
└─────────────┘                                                                     col-xxl-2
```

### 3. Form Layout (PatientRegistration)

```
MOBILE (<768px)                          TABLET/DESKTOP (≥768px)
┌──────────────────────────┐            ┌─────────────┬─────────────┐
│ Full Name                │            │ Full Name   │ Gender      │
├──────────────────────────┤            ├─────────────┴─────────────┤
│ Gender    │ Age          │            │ Phone Number              │
├──────────────────────────┤            ├───────────────────────────┤
│ Phone Number             │            │ Address                   │
├──────────────────────────┤            ├───────────────────────────┤
│ Address                  │            │ [Save] [Cancel]           │
├──────────────────────────┤            └───────────────────────────┘
│ [Save]                   │
│ [Cancel]                 │            Side-by-side layout
└──────────────────────────┘            Horizontal buttons

Stack layout
Full-width buttons
```

### 4. Data Table

```
MOBILE (<768px)                          DESKTOP (≥768px)
┌──────────────────────────┐            ┌──────────────────────────────────┐
│ [Search...    ] [Filter] │            │ [Search...]    [Filter]          │
├──────────────────────────┤            ├──────────────────────────────────┤
│ ← → Scroll Horizontally  │            │ ID | Name | Age | Ward | Bed    │
│ ID│Name  │Age│Ward│Bed   │            ├────┼──────┼─────┼──────┼────────┤
├──┼──────┼───┼────┼──────┤            │ 01 │ John │ 42  │ Gen  │ G-12   │
│01│John D│42 │Gen │G-12  │            │ 02 │ Jane │ 38  │ ICU  │ I-05   │
│02│Jane S│38 │ICU │I-05  │            └──────────────────────────────────┘
└──────────────────────────┘
                                        Full table visible
Horizontal scroll                       No scrolling needed
Smaller font (0.8rem)                   Normal font (1rem)
```

### 5. Billing Layout

```
MOBILE (<768px)                          DESKTOP (≥768px)
┌──────────────────────────┐            ┌──────────────┬───────────────┐
│ Bill Header              │            │              │               │
├──────────────────────────┤            │   Charges    │   Summary     │
│                          │            │   Table      │   & Total     │
│   Charges Table          │            │              │               │
│                          │            │              │               │
├──────────────────────────┤            ├──────────────┤               │
│   Summary & Total        │            │   Payment    │               │
│                          │            │   History    │               │
├──────────────────────────┤            │              │               │
│   Payment History        │            │              │               │
└──────────────────────────┘            └──────────────┴───────────────┘

Stacked sections                        Two-column layout
col-12                                  col-lg-7 + col-lg-5
```

## Component Responsive Classes Quick Reference

### Grid Columns
```
Single column on all sizes:
col-12

Mobile full, desktop half:
col-12 col-md-6

Mobile full, tablet half, desktop quarter:
col-12 col-sm-6 col-md-4 col-lg-3

Dashboard stats (1→2→3→4→5):
col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2
```

### Gaps & Spacing
```
Smaller on mobile, larger on desktop:
g-2 g-md-3

Margin utilities:
m-2 m-md-3
p-2 p-md-3

Mobile-first margin:
ms-0 ms-md-sidebar (no margin mobile, sidebar margin desktop)
```

### Flexbox Direction
```
Stack on mobile, row on desktop:
flex-column flex-sm-row

Align items:
align-items-start align-items-sm-center
```

### Button Sizing
```
Full width on mobile, auto on desktop:
w-100 w-sm-auto

Fixed width on all sizes:
style={{ minWidth: '120px' }}
```

### Visibility
```
Show on mobile only:
d-inline d-sm-none
d-block d-sm-none

Hide on mobile:
d-none d-sm-inline
d-none d-md-flex
d-none d-lg-block
```

## Touch Target Sizes

```
MOBILE                      DESKTOP
┌──────────────────┐        ┌──────────────┐
│                  │        │              │
│   Button Text    │  44px  │ Button Text  │ 40px
│                  │        │              │
└──────────────────┘        └──────────────┘

Minimum 44px height         Can be slightly smaller
Large tap area              Mouse precision available
```

## Typography Scaling

```
SIZE      XS        SM        MD        LG        XL
────────────────────────────────────────────────────
h1        2rem      2.25rem   2.5rem    2.5rem    2.5rem
h2        1.75rem   2rem      2rem      2rem      2rem
h3        1.5rem    1.5rem    1.75rem   1.75rem   1.75rem
h4        1.25rem   1.25rem   1.5rem    1.5rem    1.5rem
h5        1.1rem    1.1rem    1.25rem   1.25rem   1.25rem
body      0.9rem    0.95rem   1rem      1rem      1rem
small     0.8rem    0.85rem   0.875rem  0.875rem  0.875rem

Using clamp() for fluid typography:
font-size: clamp(0.9rem, 2vw, 1.25rem);
```

## Real-World Device Examples

```
Device                    Width   Breakpoint  Sidebar    Columns
────────────────────────────────────────────────────────────────
iPhone SE                 375px   XS          Offcanvas  1
iPhone 12/13              390px   XS          Offcanvas  1
iPhone 14 Pro Max         430px   XS          Offcanvas  1
Samsung Galaxy S21        360px   XS          Offcanvas  1
iPhone in landscape       667px   SM          Offcanvas  2
iPad Mini                 768px   MD          Fixed      2-3
iPad Pro 11"              834px   MD          Fixed      3
iPad Pro 12.9"           1024px   LG          Fixed      3-4
MacBook Air 13"          1280px   XL          Fixed      4
MacBook Pro 16"          1728px   XXL         Fixed      5
iMac 27"                 2560px   XXL         Fixed      5
```

## CSS Utility Patterns

### Layout Container
```css
.container-fluid          /* Full width */
style={{ maxWidth: 900 }} /* Constrained width */
```

### Responsive Padding
```css
py-2 py-md-3              /* Vertical padding */
px-0 px-md-2              /* Horizontal padding */
p-2 p-md-3 p-lg-4         /* All-around padding */
```

### Responsive Text Alignment
```css
text-start text-md-center  /* Left on mobile, center on desktop */
text-center text-md-end    /* Center on mobile, right on desktop */
```

### Responsive Display
```css
d-block d-md-flex          /* Block on mobile, flex on desktop */
d-none d-lg-block          /* Hidden until large screens */
```

## Developer Cheat Sheet

```jsx
// Standard page wrapper
<div className="container-fluid">
  <div className="row g-2 g-md-3">
    {/* Content */}
  </div>
</div>

// Responsive header
<div className="d-flex flex-column flex-sm-row 
               align-items-start align-items-sm-center 
               justify-content-between gap-2 mb-3">
  <h5 className="mb-0">Title</h5>
  <button className="btn btn-primary w-100 w-sm-auto">Action</button>
</div>

// Responsive form row
<div className="row g-2 g-md-3">
  <div className="col-12 col-md-6">
    <input className="form-control" />
  </div>
  <div className="col-6 col-md-3">
    <select className="form-select" />
  </div>
</div>

// Responsive card grid
<div className="row g-2 g-md-3">
  {items.map(item => (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div className="card">
        {/* Card content */}
      </div>
    </div>
  ))}
</div>

// Responsive button group
<div className="d-flex flex-column flex-sm-row gap-2">
  <button className="btn btn-primary w-100 w-sm-auto">Save</button>
  <button className="btn btn-secondary w-100 w-sm-auto">Cancel</button>
</div>
```

---

**Document Version**: 1.0  
**Last Updated**: December 2025  
**Purpose**: Visual reference for responsive implementation  
**See Also**: RESPONSIVE_DESIGN.md, RESPONSIVE_SUMMARY.md
