# Saudi Law Conference Website

A modern, responsive website for a Saudi law conference built with Nuxt.js 3. The site features a dynamic interface with smooth animations, real-time countdown, and interactive components.

## Features

### 🎨 UI Components
- Responsive hero section with dynamic content
- Interactive carousel for event highlights
- Real-time countdown timer
- Responsive navigation menu
- FAQ accordion section
- Contact form with validation
- Dynamic footer with social links
- Loading states and animations

### 🛠 Technical Features
- Dynamic content management using Pinia store
- Form validation using Vee-validate & Yup
- Axios integration for API calls
- Custom API error handling
- RTL support
- Route-based code splitting
- Toast notifications

## Technologies Used

### Frontend Framework
- [Vue.js 3](https://vuejs.org/) - Progressive JavaScript framework
- [Nuxt 3](https://nuxt.com/) - Vue.js framework
- [Pinia](https://pinia.vuejs.org/) - State management

### UI Components
- [Element Plus](https://element-plus.org/) - UI component library
- [Swiper](https://swiperjs.com/) - Modern mobile touch slider
- [FontAwesome](https://fontawesome.com/) - Icon library

### Styling
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- Custom CSS with responsive design
- Custom Arabic font (DiodrumArabic)

### Form & Validation
- [Vee-validate](https://vee-validate.logaretm.com/) - Form validation
- [Yup](https://github.com/jquense/yup) - Schema validation

### HTTP Client
- [Axios](https://axios-http.com/) - HTTP client
- Custom axios interceptors

### Notifications
- [Vue3-Toastify](https://vue3-toastify.js.org/) - Toast notifications

## Project Structure
├── assets/ # Static assets (CSS, fonts, icons)
├── components/ # Vue components
├── composables/ # Composable functions
├── layouts/ # Page layouts
├── pages/ # Application views
├── plugins/ # Vue plugins
├── public/ # Public static files
├── services/ # API services
├── stores/ # Pinia stores
└── types/ # TypeScript types


## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
3.Run development server:
npm run dev
4.Build for production:
npm run build

## API Configuration
The API is configured to connect to: https://task.code7x.com/api

Endpoints:
/faqs - Get FAQ items
/contact-us - Submit contact form
/settings - Get site settings
Environment Setup
Make sure to set up required environment variables in your .env file.

Contributing
Fork the repository
Create a feature branch
Commit changes
Push to the branch
Create a Pull Request
License
MIT License
