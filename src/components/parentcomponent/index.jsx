import { useState } from 'react'
import Configuration from '../configuration'
import MainComponent from '../maincomponent'
import Description from '../description'

// ==============================|| PARENT COMPONENT ||============================== //

const ParentComponent = () => {
    const [currentConfig, setCurrentConfig] = useState({
        selectedScreen: '',
        selectedMediaPlayer: '',
        selectedMount: '',
        selectedBox: '',
        orientation: 'horizontal',
        installation: 'niche',
        floorDistance: '',
        nicheDepthVar: '',
    })

    const [descriptionData, setDescriptionData] = useState({
        title: '',
        drawer: '',
        department: '',
        screenSize: '',
        date: '',
    })

    const handleConfigChange = (newConfig) => {
        setCurrentConfig(newConfig)
    }

    return (
        <div style={{ display: 'flex' }}>
            <Description data={descriptionData} setData={setDescriptionData} />
            <Configuration currentConfig={currentConfig} onConfigChange={handleConfigChange} />

            <MainComponent currentConfig={currentConfig} />
        </div>
    )
}

export default ParentComponent
