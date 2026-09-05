export const tiers = [
  { num: 'Tier 1', name: 'Perception Layer', body: 'Cameras, drones, satellites, IoT and custom BuildMore sensors collecting raw data from the physical world.' },
  { num: 'Tier 2', name: 'Edge Processing Layer', body: 'On-site gateways performing initial processing, compression and time-critical inference — real-time response even with limited connectivity.' },
  { num: 'Tier 3', name: 'Cloud Intelligence Layer', body: 'All 34 modules run here, turning perception data into insights, predictions and recommendations.' },
  { num: 'Tier 4', name: 'Knowledge Layer', body: 'BuildMore LM, the IS code database, cost intelligence and structural health history. The layer that makes the platform smarter over time.' },
  { num: 'Tier 5', name: 'Application Layer', body: 'Web dashboards, mobile apps, API endpoints, voice interfaces for site use and AR overlays for field inspection.' },
];

export const archNotes = [
  { name: 'Data architecture', body: 'Three data patterns run side by side: streaming (live sensor feeds, camera frames, GPS tracks), batch (satellite imagery, monthly cost updates, quarterly model retraining) and interactive (engineer queries, design changes, report generation).' },
  { name: 'Security architecture', body: 'End-to-end encryption in transit and at rest, role-based access per module and project, audit logging of every access and inference, an air-gapped deployment option for defence and critical infrastructure, and full Indian data localisation.' },
];

export const flows = [
  { from: '1: AutoCAD AI', to: '2: Structural Analysis', value: 'Auto-analyse generated designs' },
  { from: '2: Structural Analysis', to: '3: Cost Estimation', value: 'Accurate cost from optimised design' },
  { from: '3: Cost Estimation', to: '4: Material Intelligence', value: 'Optimal procurement timing' },
  { from: '5: Site Vision AI', to: '6: Progress Tracking', value: 'Auto-update project schedule' },
  { from: '5: Site Vision AI', to: '8: Worker Safety', value: 'PPE compliance and hazard alerts' },
  { from: '7: Quality AI', to: '9: Concrete Health', value: 'Lifetime health baseline' },
  { from: '9: Concrete Health', to: '12: Crack Detection', value: 'Cause analysis for new cracks' },
  { from: '13: Landslide Prediction', to: '15: Flood Risk', value: 'Combined hazard assessment' },
  { from: 'All sensor modules', to: '24: Digital Twin', value: 'Living 3D model of structure' },
  { from: 'All modules', to: '25: BuildMore LM', value: 'Intelligent Q&A and report generation' },
];

export const roadmapPhases = [
  { phase: 1, name: 'Foundation', months: 'Months 1–6', milestone: 'First working product: CAD to cost estimate', modules: 'Module 3: Cost Estimation, CAD Parser' },
  { phase: 2, name: 'Design Suite', months: 'Months 7–14', milestone: 'Complete design automation: architecture to drawings', modules: 'Modules 1, 2, 4, 22' },
  { phase: 3, name: 'Site Eyes', months: 'Months 15–22', milestone: 'Computer vision monitoring on 10 pilot sites', modules: 'Modules 5, 6, 7, 8' },
  { phase: 4, name: 'Custom Sensors', months: 'Months 18–28', milestone: 'First sensor prototypes deployed on 20 structures', modules: 'Modules 26, 9, 11, 12' },
  { phase: 5, name: 'Disaster Intelligence', months: 'Months 24–36', milestone: 'Landslide warning in 5 districts, flood prediction for 10 cities', modules: 'Modules 13, 14, 15, 16' },
  { phase: 6, name: 'Infrastructure', months: 'Months 30–42', milestone: 'NHAI pilot: 200 bridges. CWC pilot: 50 dams', modules: 'Modules 17, 18, 19, 20' },
  { phase: 7, name: 'Full Platform', months: 'Months 36–48', milestone: 'BuildMore LM launch, complete platform integration', modules: 'Modules 25, 24, 21, 23, 10, 27–34' },
];

export const marketTable = [
  { segment: 'Design & Estimation Software', indiaTam: '₹2,500 Cr', globalTam: '$8B', modules: 'Modules 1–4' },
  { segment: 'Construction Monitoring & Safety', indiaTam: '₹1,800 Cr', globalTam: '$6B', modules: 'Modules 5–8' },
  { segment: 'Structural Health Monitoring', indiaTam: '₹3,000 Cr', globalTam: '$12B', modules: 'Modules 9–12' },
  { segment: 'Disaster Prediction & Geotechnical', indiaTam: '₹2,200 Cr', globalTam: '$7B', modules: 'Modules 13–16' },
  { segment: 'Infrastructure Health', indiaTam: '₹4,000 Cr', globalTam: '$15B', modules: 'Modules 17–20' },
  { segment: 'Smart Construction Operations', indiaTam: '₹1,500 Cr', globalTam: '$5B', modules: 'Modules 21–24' },
  { segment: 'Custom Sensors & Hardware', indiaTam: '₹1,200 Cr', globalTam: '$4B', modules: 'Module 26' },
  { segment: 'Engineering AI / LM', indiaTam: '₹800 Cr', globalTam: '$3B', modules: 'Module 25' },
];

export const revenueChannels = [
  { name: 'SaaS Platform', body: 'Monthly / annual subscription, per module or full platform' },
  { name: 'Sensor Hardware', body: 'Hardware sale plus data subscription' },
  { name: 'API Access', body: 'Per-call pricing' },
  { name: 'Consulting & Reports', body: 'Per-project fee for risk assessment and analysis' },
  { name: 'Insurance Data', body: 'Annual data licence' },
  { name: 'Training & Certification', body: 'Per-course and per-exam' },
];

export const customers = [
  'Construction companies and contractors — 200,000+ firms in India alone',
  'Structural engineering and architectural consultancies',
  'Government infrastructure agencies: NHAI, CWC, Railways, PWD, municipal corporations',
  'Real estate developers, commercial and residential',
  'Insurance companies pricing structural and catastrophe risk',
  'Facility management companies maintaining building portfolios',
  'Disaster management authorities: NDMA, SDMA, district administrations',
];

export const techStack = [
  { layer: 'Languages', tech: 'Python, C++, JavaScript, Rust', purpose: 'Core, performance-critical, frontend, embedded' },
  { layer: 'ML Frameworks', tech: 'PyTorch, TensorFlow, scikit-learn, XGBoost', purpose: 'Deep learning, CV, traditional ML, tabular data' },
  { layer: 'Computer Vision', tech: 'YOLOv8, Detectron2, OpenCV, Open3D', purpose: 'Object detection, segmentation, 3D processing' },
  { layer: 'FEA Solver', tech: 'Custom C++ with Eigen', purpose: 'Structural analysis engine — proprietary' },
  { layer: 'CAD Processing', tech: 'ezdxf, IfcOpenShell, FreeCAD', purpose: 'DXF, IFC and DWG file handling' },
  { layer: 'Cloud', tech: 'AWS / Azure India regions', purpose: 'Compute, storage, networking' },
  { layer: 'Database', tech: 'PostgreSQL, TimescaleDB, Redis, S3', purpose: 'Relational, time series, caching, object storage' },
  { layer: 'Streaming', tech: 'Apache Kafka, MQTT', purpose: 'Real-time sensor data and event processing' },
  { layer: 'Edge Computing', tech: 'NVIDIA Jetson, Raspberry Pi CM4', purpose: 'On-site inference and data preprocessing' },
  { layer: 'Sensor Comms', tech: 'LoRaWAN, NB-IoT, WiFi, Satellite', purpose: 'Sensor-to-cloud data transmission' },
];

export const team = [
  { name: 'Rawahul Islam', role: 'Team Lead — System Design' },
  { name: 'Rayees Ahmad Reshi', role: 'Computational Architect' },
  { name: 'Mudasir Ashiq', role: 'System Design Architect' },
  { name: 'Danish Nazir Najar', role: 'Implementation Architect' },
];
