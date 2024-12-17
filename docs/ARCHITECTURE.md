# LED Installer Architecture

## System Overview
React-based application for LED screen installation planning and visualization.

## Tech Stack
- Frontend: React 18
- UI Components: Material-UI 5
- Canvas Rendering: React Konva
- State Management: React Hooks

## Application Structure
```
src/
├── App.jsx                 # Application entry
├── main.jsx               # React initialization
├── components/            # React components
│   ├── configuration/     # Installation settings
│   ├── description/       # Project metadata
│   ├── maincomponent/     # Visual components
│   │   ├── dimensions/    # Size calculations
│   │   ├── infobox/       # Project details
│   │   ├── map/          # Visual preview
│   │   └── notes/        # Installation notes
│   └── parentcomponent/   # State management
└── layout/                # Layout components
```

## State Management
```javascript
// Configuration State
interface ConfigState {
  manufacturer: string;
  mediaPlayer: string;
  mountOption: string;
  receptacleBox: string;
  orientation: 'horizontal' | 'vertical';
  installation: 'flat-wall' | 'niche';
  floorDistance: string;
  nicheDepthVar: string;
}

// Description State
interface DescriptionState {
  title: string;
  drawer: string;
  department: string;
  screenSize: string;
  date: string;
}
```

## Data Flow
```
ParentComponent
├── Configuration → Updates installation settings
├── MainComponent → Renders visual elements
└── Description → Manages project metadata
```

## Core Components

### ParentComponent
- Central state manager
- Props distribution
- Event handling

### Configuration
- Form controls
- Input validation
- State updates

### MainComponent
- Visual rendering
- Dimension calculations
- Interactive elements

## Performance Considerations
- Component memoization
- Debounced updates
- Conditional rendering
- Batched state updates

## Security
- Input sanitization
- HTML escaping
- Event validation

## Scalability
- Modular component design
- Reusable utilities
- Extensible state management