# LED Screen Installation App Components

## Core Architecture

### ParentComponent
- Central state management hub
- Maintains configuration and description data states
- Coordinates data flow between child components

### Configuration Component
Form interface for LED installation settings:
- Screen manufacturer selection
- Media player options
- Mount configurations 
- Receptacle box selection
- Orientation toggles (vertical/horizontal)
- Installation type (niche/flat-wall)
- Floor distance measurement
- Niche depth adjustments

### MainComponent
Visual representation and measurement controller containing five subcomponents:

1. **Map** (`map/index.jsx`)
   - Interactive screen placement visualization
   - Dynamic scaling based on container
   - Draggable receptacle placement
   - Visual measurement labels
   - Floor line indicator
   - Props: `currentConfig`, `selectedScreenObj`
   - Key function: `handleReceptacleDrag` for bounded receptacle movement

2. **NicheDimensions** (`dimensions/niche/index.jsx`)
   - Calculates installation space requirements
   - Dynamic margin adjustment (1.5" for <55" screens, 2" for larger)
   - Supports orientation changes
   - Props: `currentConfig`, `selectedScreenObj`, `orientation`

3. **ScreenDimensions** (`dimensions/screen/index.jsx`)
   - Display measurements visualization
   - Automatic orientation adjustments
   - Props: `height`, `width`, `orientation`, `floorDistance`

4. **InfoBox** (`infobox/index.jsx`)
   - Project metadata display
   - Structured information table
   - Props: `descriptionData` (title, drawer, department, screenSize, date)

5. **Notes** (`notes/index.jsx`)
   - Installation requirements
   - Receptacle specifications (6.6" × 6.012" × 3.75")
   - Required components list:
     - 2× Power outlets
     - 1× CAT5 Ethernet outlet

### Description Component
Project metadata input form managing:
- Title
- Drawer
- Department
- Screen Size
- Date

## Data Flow
```
ParentComponent (State)
├── Configuration (Input)
├── MainComponent (Display)
└── Description (Metadata)
```

## Directory Structure
```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── configuration/
│   ├── description/
│   ├── maincomponent/
│   │   ├── dimensions/
│   │   │   ├── niche/
│   │   │   └── screen/
│   │   ├── infobox/
│   │   ├── map/
│   │   └── notes/
│   └── parentcomponent/
└── layout/
```

## State Management
```javascript
// Parent Component State Structure
const [configurationData, setConfigurationData] = useState({
  manufacturer: '',
  mediaPlayer: '',
  mountOption: '',
  receptacleBox: '',
  orientation: 'horizontal',
  installation: 'flat-wall',
  floorDistance: '0',
  nicheDepthVar: '0'
});

const [descriptionData, setDescriptionData] = useState({
  title: '',
  drawer: '',
  department: '',
  screenSize: '',
  date: ''
});
```

## Dependencies
```json
{
  "dependencies": {
    "@mui/material": "^5.x",
    "react": "^18.x",
    "react-konva": "^18.x",
    "konva": "^8.x"
  }
}
```

## Troubleshooting
1. Screen Dimension Issues
   - Verify screen object format
   - Check orientation settings
   - Validate numerical inputs

2. Map Visualization
   - Ensure container has defined dimensions
   - Monitor Konva console errors
   - Verify non-zero screen dimensions

3. Performance Optimization
   - Memoize screen calculations
   - Use debounced updates
   - Implement conditional rendering
   - Batch state updates
