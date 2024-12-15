import { useState } from 'react'
import Configuration from '../configuration'
import MainComponent from '../maincomponent'

const ParentComponent = () => {
    const [currentConfig, setCurrentConfig] = useState({
        selectedScreen: '',
        selectedMediaPlayer: '',
        selectedMount: '',
        selectedBox: '',
        orientation: 'vertical',
        installation: 'niche',
        floorDistance: '',
        nicheDepth: '',
    })

    const handleConfigChange = (newConfig) => {
        setCurrentConfig(newConfig)
    }

    return (
        <div style={{ display: 'flex' }}>
            {/* Left side: Configuration component */}
            <Configuration currentConfig={currentConfig} onConfigChange={handleConfigChange} />

            {/* Right side: MainComponent which receives the updated config */}
            <MainComponent currentConfig={currentConfig} />
        </div>
    )
}

export default ParentComponent
