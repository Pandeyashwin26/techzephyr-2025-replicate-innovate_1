import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import { ThemeProvider } from './components/ThemeProvider'
import Home from './pages/Home'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <ScrollProgress />
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}
