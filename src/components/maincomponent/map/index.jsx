import React, { useRef, useState, useEffect } from 'react'
import { Stage, Layer, Rect, Text, Line } from 'react-konva'

const parseVal = (val) => parseFloat((val ?? '0').toString().replace(',', '.')) || 0

const Map = ({ currentConfig, selectedScreenObj }) => {
    const containerRef = useRef(null)
    const [stageSize, setStageSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        if (containerRef.current) {
            const { clientWidth, clientHeight } = containerRef.current
            setStageSize({ width: clientWidth, height: clientHeight })
        }
    }, [containerRef])

    // If no screen selected, just show a message
    if (!selectedScreenObj) {
        return (
            <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
                {stageSize.width > 0 && stageSize.height > 0 && (
                    <Stage width={stageSize.width} height={stageSize.height}>
                        <Layer>
                            <Text x={20} y={20} text='No data available' fontSize={18} fill='#333' />
                        </Layer>
                    </Stage>
                )}
            </div>
        )
    }

    const { orientation, floorDistance } = currentConfig
    let screenHeight = parseVal(selectedScreenObj.Height)
    let screenWidth = parseVal(selectedScreenObj.Width)

    if (orientation === 'horizontal') {
        ;[screenHeight, screenWidth] = [screenWidth, screenHeight]
    }

    const maxDimension = Math.max(screenWidth, screenHeight)
    // Use 60% of the container width for scaling:
    const pxPerInch = stageSize.width > 0 ? (stageSize.width * 0.6) / maxDimension : 1

    const scaledScreenWidth = screenWidth * pxPerInch
    const scaledScreenHeight = screenHeight * pxPerInch

    const centerX = stageSize.width / 2
    const centerY = stageSize.height / 2

    const screenX = centerX - scaledScreenWidth / 2
    const screenY = centerY - scaledScreenHeight / 2

    const nicheMarginInches = 10
    const nicheMargin = nicheMarginInches * pxPerInch
    const nicheX = screenX - nicheMargin
    const nicheY = screenY - nicheMargin
    const nicheWidth = scaledScreenWidth + nicheMargin * 2
    const nicheHeight = scaledScreenHeight + nicheMargin * 2

    const receptacleWidthInches = 20
    const receptacleHeightInches = 10
    const receptacleWidth = receptacleWidthInches * pxPerInch
    const receptacleHeight = receptacleHeightInches * pxPerInch
    const receptacleX = centerX - receptacleWidth / 2
    const receptacleY = centerY + scaledScreenHeight / 2 + 30 * pxPerInch

    const floorDistVal = parseVal(floorDistance)
    const scaledFloorDist = floorDistVal * pxPerInch
    const floorLineY = centerY + scaledFloorDist

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
            {stageSize.width > 0 && stageSize.height > 0 && (
                <Stage width={stageSize.width} height={stageSize.height}>
                    <Layer>
                        <Line points={[centerX, 0, centerX, stageSize.height]} stroke='gray' dash={[4, 4]} />
                        <Line points={[0, centerY, stageSize.width, centerY]} stroke='gray' dash={[4, 4]} />

                        <Line points={[0, floorLineY, stageSize.width, floorLineY]} stroke='black' strokeWidth={1} />
                        <Text x={centerX + 10} y={floorLineY - 20} text={`Floor Distance: ${floorDistance || 'N/A'}`} fontSize={14} fill='#000' />

                        <Rect x={nicheX} y={nicheY} width={nicheWidth} height={nicheHeight} stroke='#000' strokeWidth={4} fillEnabled={false} />

                        <Rect x={screenX} y={screenY} width={scaledScreenWidth} height={scaledScreenHeight} stroke='#000' strokeWidth={2} fill='#ddd' />

                        <Rect
                            x={receptacleX}
                            y={receptacleY}
                            width={receptacleWidth}
                            height={receptacleHeight}
                            stroke='black'
                            dash={[4, 4]}
                            strokeWidth={1}
                            fillEnabled={false}
                        />

                        <Text x={screenX} y={screenY - 20} text={`Screen: ${selectedScreenObj['Screen MFR']}`} fontSize={14} fill='#000' />
                        <Text
                            x={screenX}
                            y={screenY + scaledScreenHeight + 5}
                            text={`H: ${screenHeight.toFixed(2)}"  W: ${screenWidth.toFixed(2)}"`}
                            fontSize={14}
                            fill='#000'
                        />
                    </Layer>
                </Stage>
            )}
        </div>
    )
}

export default Map
