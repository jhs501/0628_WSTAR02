import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Logo } from '@pmndrs/branding'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
      <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        C2K
        <br />
        WSTARS형석
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40 }}>
        click
        <br />
        click
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>28/06/2023</div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
  </>
)
