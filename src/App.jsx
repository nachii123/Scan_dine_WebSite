import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Metrics         from './components/Metrics'
import Features        from './components/Features'
import WhyChoose       from './components/WhyChoose'
import Dashboard       from './components/Dashboard'
import TableManagement from './components/TableManagement'
import Campaign        from './components/Campaign'
import Process         from './components/Process'
import MobileShowcase  from './components/MobileShowcase'
import Pricing         from './components/Pricing'
import Testimonials    from './components/Testimonials'
import CTA             from './components/CTA'
import Footer          from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />             {/* Hook: emotional headline + glowing CTA */}
        <Metrics />          {/* Validate: animated counters + city ticker */}
        <Features />         {/* Educate: what you get */}
        <WhyChoose />        {/* Convert: pain points vs solutions */}
        <Dashboard />        {/* Show: admin dashboard with real screenshot */}
        <TableManagement />  {/* Show: real table, order & operations management with live app screenshots */}
        <Campaign />         {/* Show: marketing campaigns with real screenshot */}
        <Process />          {/* Reassure: it's easy to start */}
        <MobileShowcase />   {/* Storytelling: real app screens in iPhone mockups */}
        <Pricing />          {/* Convert: clear pricing */}
        <Testimonials />     {/* Trust: real restaurants, real results */}
        <CTA />              {/* Final push: urgency + strong action */}
      </main>
      <Footer />
    </>
  )
}
