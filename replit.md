# HMSync - Hospital Management SaaS

## Overview

HMSync is a professional SaaS landing page for a comprehensive hospital management system. The landing page showcases the product's capabilities and encourages potential customers to request demos for custom pricing. Built with modern web technologies, featuring smooth animations, parallax effects, and a conversion-optimized design.

**Product Positioning:**
- Name: HMSync
- Tagline: "Advanced Control. Owner-First. Fully Customizable."
- Target Market: Global hospitals and healthcare facilities of all sizes
- Business Model: SaaS with custom pricing (no fixed costs shown on website)

## Landing Page Features

The HMSync landing page includes:

- **Hero Section**: Animated gradient background with parallax effects, clear value proposition, and prominent CTAs
- **Problem/Solution Section**: Comparison of traditional systems vs HMSync approach
- **Features Grid**: 9 key modules showcased (Patient, Doctor, OPD, Lab, Admissions, Billing, Analytics, Audit, Backup)
- **Why Choose HMSync**: 4 key differentiators with parallax backgrounds
- **Contact Form**: Validated demo request form (name, email, hospital, phone, message)
- **Footer**: Professional footer with contact information and quick links
- **Theme Toggle**: Light/dark mode support with smooth transitions
- **Responsive Design**: Optimized for mobile, tablet, and desktop

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**October 22, 2025** - Premium Design Overhaul
- Redesigned entire landing page with high-end parallax effects inspired by premium portfolio sites
- Implemented full-screen hero section with multi-layer parallax scrolling
- Added horizontal scrolling features gallery with smooth animations
- Created immersive full-width sections with gradient backgrounds
- Enhanced typography with much larger, bolder text (7xl to 9xl headings)
- Added sophisticated scroll-triggered animations throughout
- Implemented interactive hover effects on all cards with scale and lift animations
- Added gradient-based color accents for visual impact
- Refined spacing and layout for more premium feel
- Enhanced dark mode styling with better contrast
- All animations tested and verified working smoothly

**October 22, 2025** - Codebase Cleanup
- Removed 40 unused UI components to streamline the project
- Kept only essential components: button, input, textarea, card, toast, toaster
- Removed unused use-mobile hook
- Verified landing page functionality after cleanup
- No database, storage, or API route files present (pure frontend landing page)
- Architect-reviewed and confirmed all changes maintain full functionality

**October 22, 2025** - HMSync Landing Page Creation
- Created professional SaaS landing page with HMSync branding
- Implemented Framer Motion animations with parallax effects
- Added scroll-triggered fade-in animations throughout
- Built comprehensive features section showcasing actual HMS capabilities
- Created validated contact/demo request form with React Hook Form + Zod
- Implemented full dark/light mode support with theme toggle
- Responsive design optimized for all screen sizes
- Smooth scrolling and performance-optimized animations
- No fixed pricing displayed - encourages demo requests for custom quotes
- Architect-approved design ready for deployment

## System Architecture

### Frontend Architecture

The landing page is a single-page React 18 application built with TypeScript. It uses Framer Motion for animations and parallax effects, React Hook Form with Zod for form validation, and Tailwind CSS for styling. The design is fully responsive with dark/light mode support via a custom ThemeProvider. Vite is used for development and optimized production builds.

### Key Technologies

- **React 18**: Modern UI library with hooks
- **TypeScript**: Type-safe development
- **Framer Motion**: Smooth animations and parallax effects
- **React Hook Form + Zod**: Form validation and error handling
- **Tailwind CSS**: Utility-first styling
- **Radix UI**: Accessible component primitives
- **Lucide Icons**: Consistent iconography
- **Vite**: Fast development and build tool

### Landing Page Sections

**1. Hero Section**
- Animated gradient background with parallax scrolling effects
- HMSync branding with gradient text effect
- Clear value proposition and tagline
- Two prominent CTAs: "Request a Demo" and "Explore Features"
- Animated scroll indicator

**2. Problem/Solution Section**
- Side-by-side comparison cards
- Traditional system pain points vs HMSync benefits
- Scroll-triggered fade-in animations
- Visual differentiation (red vs green)

**3. Features Grid**
- 9 key HMS modules with icons:
  - Patient Management
  - Doctor Management
  - OPD Management
  - Pathology Lab
  - In-Patient Admissions
  - Billing & Payments
  - Analytics & Reports
  - Audit Logs
  - Backup & Restore
- Hover animations for interactive feel
- Responsive grid layout

**4. Why Choose HMSync**
- Parallax background section
- 4 key differentiators:
  - Fully Customizable
  - Owner-First Control
  - Advanced Features
  - Modern Interface
- Custom quote CTA card (no fixed pricing)

**5. Contact Form**
- Form fields: Name, Email, Hospital Name, Phone, Message
- Full validation with inline error messages
- Success toast notification
- Smooth animations on interaction

**6. Footer**
- 3-column layout
- Contact information (email, phone, location)
- Quick links
- Copyright information

**7. Theme Toggle**
- Fixed position in top-right corner
- Sun/moon icon transition
- Smooth theme switching
- Persisted in localStorage

## External Dependencies

### UI and Animation Libraries
- **Framer Motion**: Animation library for smooth transitions and parallax effects
- **Radix UI**: Accessible component primitives (Button, Input, Card, etc.)
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Icon library for consistent iconography
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation for forms

### Development and Build Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Project Structure

The project contains only the essential files needed for the HMSync landing page:

**Client (Frontend):**
- `/client/src/components/ui/` - Minimal UI components (button, input, textarea, card, toast, toaster)
- `/client/src/components/` - Theme provider and toggle
- `/client/src/pages/landing.tsx` - Main landing page component
- `/client/src/hooks/` - Custom hooks (use-toast)
- `/client/src/lib/` - Utility functions

**Server:**
- `/server/index.ts` - Express server with Vite middleware for development

**Configuration:**
- Standard TypeScript, Vite, Tailwind, and PostCSS configuration files