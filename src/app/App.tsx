
import './App.css'

import Carousel from '../components/Carousel/Carousel'

// ---------------------------------------------------------------------------

const App = () => {
  return (
        <>
            <h1>PacificESI Carousel Demo</h1>
            <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
                <Carousel>
                    <img src="https:///esi.com.au/static/img/cavFoil2_2560x1440.png" alt="placeholder" />
                    <img src="https://esi.com.au/static/img/pamcomfort_oct09.jpg" alt="placeholder" />
                    <img src="https://esi.com.au/static/img/mergedShinjukuForSlider.png" alt="placeholder" />
                    <img src="https://esi.com.au/static/img/mesh.png" alt="placeholder" />
                </Carousel>
            </div>
    </>
  )
}

// ---------------------------------------------------------------------------

export default App
