import { useState } from 'react'
import Configuration from '../configuration'
import MainComponent from '../maincomponent'

// ==============================|| PARENT COMPONENT ||============================== //

const ParentComponent = () => {
    const [currentConfig, setCurrentConfig] = useState({
        selectedScreen: '',
        selectedMediaPlayer: '',
        selectedMount: '',
        selectedBox: '',
        orientation: 'vertical',
        installation: 'niche',
        floorDistance: '',
        nicheDepthVar: '',
    })

    const handleConfigChange = (newConfig) => {
        setCurrentConfig(newConfig)
    }

    return (
        <div style={{ display: 'flex' }}>
            <Configuration currentConfig={currentConfig} onConfigChange={handleConfigChange} />

            <MainComponent currentConfig={currentConfig} />
        </div>
    )
}

export default ParentComponent
