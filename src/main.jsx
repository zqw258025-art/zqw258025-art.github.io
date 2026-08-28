import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/jetbrains-mono'
import App from './App'
import Resume from './pages/Resume'
import './styles/global.css'

function RouteView() {
  const [path, setPath] = React.useState(window.location.pathname)

  React.useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname)
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return path === '/resume' ? <Resume /> : <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteView />
  </React.StrictMode>
)
