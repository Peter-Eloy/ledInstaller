import React, { useRef, useState, useEffect } from 'react'
import { Stage, Layer, Rect, Text, Line, Group } from 'react-konva'

// ==============================|| SCALE FOR MAP COMPONENT ||============================== //

const parseVal = (val) => parseFloat((val ?? '0').toString().replace(',', '.')) || 0

const SimpleMeasurement = ({ startX, startY, endX, endY, label }) => {
    const isVertical = startX === endX
    const fontSize = 12
    const labelOffset = 10
    const color = '#007AFF'

    const midX = (startX + endX) / 2
    const midY = (startY + endY) / 2

    let textX, textY
    if (isVertical) {
        textX = startX - labelOffset
        textY = midY - fontSize / 2
    } else {
        textX = midX
        textY = startY - labelOffset - fontSize
    }

    return (
        <Group listening={false}>
            <Line points={[startX, startY, endX, endY]} stroke={color} strokeWidth={1} />
            <Text
                x={textX}
                y={textY}
                text={label}
                fontSize={fontSize}
                fill={color}
                align='center'
                verticalAlign='middle'
                offsetX={!isVertical ? label.length * fontSize * 0.2 : 0}
                listening={false}
            />
        </Group>
    )
}

// ==============================|| MAP COMPONENT ||============================== //

const Map = ({ currentConfig, selectedScreenObj }) => {
    const containerRef = useRef(null)
    const [stageSize, setStageSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        if (containerRef.current) {
            const { clientWidth, clientHeight } = containerRef.current
            setStageSize({ width: clientWidth, height: clientHeight })
        }
    }, [containerRef])

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

    if (orientation === 'vertical') [screenHeight, screenWidth] = [screenWidth, screenHeight]

    const marginSpace = 100
    const availableWidth = stageSize.width - marginSpace * 2
    const availableHeight = stageSize.height - marginSpace * 2
    const maxScreenDimension = Math.max(screenWidth, screenHeight)
    const floorDistVal = parseVal(floorDistance)
    const totalRequiredHeight = screenHeight + floorDistVal + 20

    const widthScale = availableWidth / (maxScreenDimension + 40)
    const heightScale = availableHeight / totalRequiredHeight
    const pxPerInch = Math.min(widthScale, heightScale, availableWidth / 200)

    const scaledScreenWidth = screenWidth * pxPerInch
    const scaledScreenHeight = screenHeight * pxPerInch

    const centerX = stageSize.width / 2
    const centerY = (stageSize.height - scaledScreenHeight) / 3

    const screenX = centerX - scaledScreenWidth / 2
    const screenY = centerY
    const screenCenterX = screenX + scaledScreenWidth / 2
    const screenCenterY = screenY + scaledScreenHeight / 2

    const nicheMarginInches = 10
    const nicheMargin = nicheMarginInches * pxPerInch
    const nicheX = screenX - nicheMargin
    const nicheY = screenY - nicheMargin
    const nicheWidth = scaledScreenWidth + nicheMargin * 2
    const nicheHeight = scaledScreenHeight + nicheMargin * 2

    const receptacleWidthInches = 6.25
    const receptacleHeightInches = 6.94
    const receptacleWidth = receptacleWidthInches * pxPerInch
    const receptacleHeight = receptacleHeightInches * pxPerInch

    const receptacleStartX = screenCenterX - receptacleWidth / 2
    const receptacleStartY = screenCenterY - receptacleHeight / 2

    const scaledFloorDist = floorDistVal * pxPerInch
    const floorLineY = screenCenterY + scaledFloorDist

    const nicheWidthLabel = `${(nicheWidth / pxPerInch).toFixed(1)}"`
    const nicheHeightLabel = `${(nicheHeight / pxPerInch).toFixed(1)}"`
    const screenWidthLabel = `${screenWidth.toFixed(1)}"`
    const screenHeightLabel = `${screenHeight.toFixed(1)}"`
    const floorDistLabel = floorDistVal > 0 ? `${floorDistance}"` : ''

    const floorLineX = screenX - 90
    const nicheHeightLineX = nicheX - 30
    const screenHeightLineX = nicheX + nicheWidth + 30
    const nicheWidthLineY = nicheY - 30
    const screenWidthLineY = screenY + scaledScreenHeight + 60

    const handleReceptacleDrag = (e) => {
        const shape = e.target
        let newX = shape.x()
        let newY = shape.y()

        if (newX < screenX) newX = screenX
        if (newX + receptacleWidth > screenX + scaledScreenWidth) newX = screenX + scaledScreenWidth - receptacleWidth
        if (newY < screenY) newY = screenY
        if (newY + receptacleHeight > screenY + scaledScreenHeight) newY = screenY + scaledScreenHeight - receptacleHeight

        shape.x(newX)
        shape.y(newY)
    }

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
            {stageSize.width > 0 && stageSize.height > 0 && (
                <Stage width={stageSize.width} height={stageSize.height}>
                    <Layer>
                        <Rect
                            x={receptacleStartX}
                            y={receptacleStartY}
                            width={receptacleWidth}
                            height={receptacleHeight}
                            fill='rgba(200,200,200,0.5)'
                            stroke='black'
                            dash={[4, 4]}
                            strokeWidth={1}
                            draggable={true}
                            onDragMove={handleReceptacleDrag}
                        />
                    </Layer>

                    <Layer listening={false}>
                        {floorDistVal > 0 && (
                            <>
                                <Rect
                                    x={marginSpace}
                                    y={floorLineY}
                                    width={stageSize.width - marginSpace * 2}
                                    height={4}
                                    fill='#333'
                                    shadowBlur={3}
                                    shadowOpacity={0.3}
                                />
                                <Line points={[marginSpace, floorLineY, stageSize.width - marginSpace, floorLineY]} stroke='black' strokeWidth={3} />
                            </>
                        )}

                        <Line points={[screenCenterX, nicheY - 50, screenCenterX, nicheY + nicheHeight + 50]} stroke='gray' dash={[4, 4]} />
                        <Line points={[nicheX - 50, screenCenterY, nicheX + nicheWidth + 50, screenCenterY]} stroke='gray' dash={[4, 4]} />

                        {floorDistVal > 0 && (
                            <SimpleMeasurement startX={floorLineX} startY={screenCenterY} endX={floorLineX} endY={floorLineY} label={floorDistLabel} />
                        )}

                        <SimpleMeasurement
                            startX={nicheHeightLineX}
                            startY={nicheY}
                            endX={nicheHeightLineX}
                            endY={nicheY + nicheHeight}
                            label={nicheHeightLabel}
                        />

                        <SimpleMeasurement
                            startX={screenHeightLineX}
                            startY={screenY}
                            endX={screenHeightLineX}
                            endY={screenY + scaledScreenHeight}
                            label={screenHeightLabel}
                        />

                        <SimpleMeasurement startX={nicheX} startY={nicheWidthLineY} endX={nicheX + nicheWidth} endY={nicheWidthLineY} label={nicheWidthLabel} />

                        <SimpleMeasurement
                            startX={screenX}
                            startY={screenWidthLineY}
                            endX={screenX + scaledScreenWidth}
                            endY={screenWidthLineY}
                            label={screenWidthLabel}
                        />

                        <Rect x={nicheX} y={nicheY} width={nicheWidth} height={nicheHeight} stroke='#000' strokeWidth={1} fillEnabled={false} />

                        <Rect x={screenX} y={screenY} width={scaledScreenWidth} height={scaledScreenHeight} stroke='#000' strokeWidth={3} fillEnabled={false} />
                    </Layer>
                </Stage>
            )}
        </div>
    )
}

export default Map
