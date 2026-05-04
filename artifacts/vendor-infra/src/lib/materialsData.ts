export interface Product {
  slug: string;
  name: string;
  image: string;
  variants: string[];
  units: string[];
  description: string;
}

export interface Category {
  slug: string;
  name: string;
  image: string;
  products: Product[];
}

export const categories: Category[] = [
  /* ── STEEL ──────────────────────────────────── */
  {
    slug: "steel",
    name: "Steel",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    products: [
      {
        slug: "tmt-bars",
        name: "TMT Bars / Rebars",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
        variants: ["Fe-415", "Fe-500", "Fe-500D", "Fe-550", "Fe-550D", "Fe-600"],
        units: ["MT", "Bundle", "Piece"],
        description: "Thermo-Mechanically Treated reinforcement bars for RCC construction.",
      },
      {
        slug: "ms-plates",
        name: "MS Plates",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        variants: ["IS 2062 E250", "IS 2062 E350", "Chequered Plate", "HR Plate", "CR Plate"],
        units: ["MT", "Piece", "Sheet"],
        description: "Mild steel plates for fabrication, shipbuilding and structural use.",
      },
      {
        slug: "ms-angles",
        name: "MS Angles",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80",
        variants: ["25x25mm", "40x40mm", "50x50mm", "65x65mm", "75x75mm", "100x100mm"],
        units: ["MT", "Running Meter", "Piece"],
        description: "Equal and unequal angles for fabrication and structural frameworks.",
      },
      {
        slug: "ms-channels",
        name: "MS Channels",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        variants: ["ISMC 75", "ISMC 100", "ISMC 125", "ISMC 150", "ISMC 200", "ISMC 250"],
        units: ["MT", "Running Meter", "Piece"],
        description: "Standard steel channels (C-sections) for structural and fabrication use.",
      },
      {
        slug: "ms-beams",
        name: "MS Beams / Joists",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
        variants: ["ISMB 100", "ISMB 150", "ISMB 200", "ISMB 250", "ISMB 300", "ISMB 400", "ISMB 500"],
        units: ["MT", "Running Meter", "Piece"],
        description: "I-beams and joists for heavy structural applications and industrial buildings.",
      },
      {
        slug: "erw-pipes",
        name: "ERW / GI Pipes",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        variants: ["ERW Pipe", "GI Pipe", "Seamless Pipe", "Black Pipe", "Square Hollow Section"],
        units: ["MT", "Running Meter", "Piece"],
        description: "Electric Resistance Welded and galvanized pipes for water, gas and structural use.",
      },
      {
        slug: "wire-rods",
        name: "Wire Rods & GI Wire",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        variants: ["5.5mm Wire Rod", "6mm Wire Rod", "8mm Wire Rod", "GI Binding Wire", "Barbed Wire"],
        units: ["MT", "Coil", "KG"],
        description: "Wire rods and GI wire for construction binding, fencing and fabrication.",
      },
    ],
  },

  /* ── CEMENT ──────────────────────────────────── */
  {
    slug: "cement",
    name: "Cement",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    products: [
      {
        slug: "opc-43",
        name: "OPC 43 Grade",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        variants: ["UltraTech OPC 43", "ACC OPC 43", "Ambuja OPC 43", "Shree Cement OPC 43"],
        units: ["Bag (50 kg)", "MT"],
        description: "Ordinary Portland Cement 43 grade for plastering, masonry and general construction.",
      },
      {
        slug: "opc-53",
        name: "OPC 53 Grade",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
        variants: ["UltraTech OPC 53", "ACC OPC 53", "Ambuja OPC 53", "Dalmia OPC 53"],
        units: ["Bag (50 kg)", "MT"],
        description: "High-strength OPC for precast, prestressed and high-performance concrete.",
      },
      {
        slug: "ppc",
        name: "PPC – Portland Pozzolana Cement",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
        variants: ["UltraTech PPC", "ACC PPC", "Ambuja PPC", "Dalmia PPC", "Birla PPC"],
        units: ["Bag (50 kg)", "MT"],
        description: "Blended cement with fly ash for durable, crack-resistant structures.",
      },
      {
        slug: "psc",
        name: "PSC – Portland Slag Cement",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        variants: ["UltraTech PSC", "ACC PSC", "JSW PSC"],
        units: ["Bag (50 kg)", "MT"],
        description: "Portland Slag Cement for marine, underground and sulphate-rich environments.",
      },
      {
        slug: "src",
        name: "SRC – Sulphate Resistant Cement",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
        variants: ["Standard SRC", "Premium SRC"],
        units: ["Bag (50 kg)", "MT"],
        description: "Cement for foundations, sewers and structures exposed to sulphate soils.",
      },
      {
        slug: "white-cement",
        name: "White Cement",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
        variants: ["JK White Cement", "Birla White Cement"],
        units: ["Bag (50 kg)", "KG"],
        description: "White cement for architectural finishes, tile grouting and decorative work.",
      },
    ],
  },

  /* ── FLY ASH ─────────────────────────────────── */
  {
    slug: "fly-ash",
    name: "Fly Ash",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    products: [
      {
        slug: "fly-ash-class-c",
        name: "Class C Fly Ash",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        variants: ["NTPC", "BHEL", "DVC", "Adani Power"],
        units: ["MT", "Bag"],
        description: "Self-cementing Class C fly ash for road sub-base and concrete blending.",
      },
      {
        slug: "fly-ash-class-f",
        name: "Class F Fly Ash",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        variants: ["NTPC", "Adani", "Tata Power", "Other TPP"],
        units: ["MT", "Bag"],
        description: "Low-calcium pozzolanic fly ash for concrete, bricks and embankments.",
      },
      {
        slug: "ggbs",
        name: "GGBS – Ground Granulated Blast Furnace Slag",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
        variants: ["Grade 30", "Grade 40", "Grade 60", "Grade 70"],
        units: ["MT", "Bag"],
        description: "GGBS for high-durability concrete with reduced heat of hydration.",
      },
      {
        slug: "micro-silica",
        name: "Micro Silica / Silica Fume",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
        variants: ["Densified Silica Fume", "Undensified Silica Fume"],
        units: ["MT", "Bag", "KG"],
        description: "Silica fume for ultra-high-strength and high-performance concrete mixes.",
      },
      {
        slug: "metakaolin",
        name: "Metakaolin",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        variants: ["Standard Grade", "Premium Grade"],
        units: ["MT", "Bag", "KG"],
        description: "Calcined kaolin for improved concrete durability and ASR mitigation.",
      },
    ],
  },

  /* ── CHEMICAL ────────────────────────────────── */
  {
    slug: "chemical",
    name: "Chemical",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    products: [
      {
        slug: "admixtures",
        name: "Concrete Admixtures",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
        variants: ["Plasticizer", "Superplasticizer (PCE)", "Accelerator", "Retarder", "Air-Entraining Agent"],
        units: ["Litre", "Drum (200 L)", "KG"],
        description: "Chemical admixtures to enhance concrete workability, strength and setting.",
      },
      {
        slug: "waterproofing",
        name: "Waterproofing Chemicals",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&q=80",
        variants: ["Crystalline WP", "Acrylic WP Coating", "Polyurethane WP", "Bituminous WP"],
        units: ["KG", "Litre", "Drum"],
        description: "Waterproofing compounds for basements, terraces, podiums and water tanks.",
      },
      {
        slug: "epoxy",
        name: "Epoxy & Grout",
        image: "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=600&q=80",
        variants: ["Epoxy Resin", "Epoxy Hardener", "Non-Shrink Grout", "Micro Concrete", "Epoxy Grout"],
        units: ["KG", "Set", "Litre"],
        description: "Epoxy systems and grouts for repairs, anchoring and equipment foundations.",
      },
      {
        slug: "sealants",
        name: "Sealants & Adhesives",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
        variants: ["PU Sealant", "Silicone Sealant", "Acrylic Sealant", "MS Polymer Sealant"],
        units: ["Tube", "Cartridge", "KG"],
        description: "Construction sealants for joints, facades, glazing and expansion gaps.",
      },
      {
        slug: "protective-coatings",
        name: "Protective Coatings",
        image: "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=600&q=80",
        variants: ["Anti-Corrosion Coating", "Fire Retardant Paint", "Epoxy Floor Coating", "PU Topcoat"],
        units: ["Litre", "KG", "Set"],
        description: "Protective coatings for steel, concrete and industrial structures.",
      },
    ],
  },

  /* ── PETROLEUM ───────────────────────────────── */
  {
    slug: "petroleum",
    name: "Petroleum",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80",
    products: [
      {
        slug: "bitumen",
        name: "Bitumen / Asphalt",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
        variants: ["VG-10", "VG-20", "VG-30", "VG-40", "PMB (Polymer Modified Bitumen)"],
        units: ["MT", "Drum (200 kg)"],
        description: "Viscosity-graded bitumen and PMB for road construction and waterproofing.",
      },
      {
        slug: "hsd",
        name: "High Speed Diesel (HSD)",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80",
        variants: ["BS VI HSD", "BS IV HSD"],
        units: ["KL", "Litre", "Drum"],
        description: "High-speed diesel fuel for DG sets, construction machinery and vehicles.",
      },
      {
        slug: "furnace-oil",
        name: "Furnace Oil / LSHS",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80",
        variants: ["Low Sulphur Heavy Stock (LSHS)", "Furnace Oil (FO)"],
        units: ["KL", "MT"],
        description: "Furnace oil for boilers, kilns and industrial heating applications.",
      },
      {
        slug: "lubricants",
        name: "Lubricants & Oils",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        variants: ["Engine Oil", "Gear Oil", "Hydraulic Oil", "Compressor Oil", "Grease"],
        units: ["Litre", "Drum", "Can"],
        description: "Industrial lubricants for construction plant and equipment maintenance.",
      },
      {
        slug: "emulsions",
        name: "Bitumen Emulsions",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
        variants: ["SS-1 (Slow Setting)", "MS-2 (Medium Setting)", "RS-1 (Rapid Setting)", "CRS-1"],
        units: ["MT", "Drum", "KL"],
        description: "Cationic and anionic bitumen emulsions for surface dressing and tack coat.",
      },
    ],
  },

  /* ── INTERIOR & ARCHITECTURE ─────────────────── */
  {
    slug: "interior-architecture",
    name: "Interior & Architecture",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    products: [
      {
        slug: "tiles",
        name: "Tiles",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
        variants: ["Vitrified Tiles", "Ceramic Tiles", "Porcelain Tiles", "Anti-Skid Tiles", "Wall Tiles", "Parking Tiles"],
        units: ["Sqft", "Box", "SqM"],
        description: "Floor and wall tiles for residential, commercial and industrial flooring.",
      },
      {
        slug: "paints",
        name: "Paints & Finishes",
        image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80",
        variants: ["Exterior Emulsion", "Interior Emulsion", "Enamel Paint", "Distemper", "Primer", "Textured Paint"],
        units: ["Litre", "Bucket (20 L)"],
        description: "Interior and exterior paints for all surfaces and environmental conditions.",
      },
      {
        slug: "sanitary-ware",
        name: "Sanitary Ware & CP Fittings",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
        variants: ["Water Closet (EWC)", "Wash Basin", "Urinal", "Bath Tub", "Faucets & Mixers", "Shower Systems"],
        units: ["Piece", "Set"],
        description: "Sanitary fixtures and chrome-plated fittings for bathrooms and utilities.",
      },
      {
        slug: "false-ceiling",
        name: "False Ceiling Systems",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
        variants: ["Gypsum Board Ceiling", "Calcium Silicate Board", "Armstrong Grid", "PVC Panel", "Metal Ceiling"],
        units: ["Sqft", "SqM", "Box"],
        description: "Suspended ceiling systems for offices, malls, hospitals and hotels.",
      },
      {
        slug: "cladding",
        name: "Cladding & Facades",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
        variants: ["ACP Panel", "Stone Cladding", "HPL Panel", "Composite Panel", "Glass Curtain Wall"],
        units: ["Sqft", "SqM", "Sheet"],
        description: "External facade and cladding systems for modern commercial buildings.",
      },
    ],
  },

  /* ── SOLAR ───────────────────────────────────── */
  {
    slug: "solar",
    name: "Solar",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    products: [
      {
        slug: "solar-panels",
        name: "Solar PV Modules",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
        variants: ["Mono PERC 400W", "Mono PERC 540W", "Mono PERC 545W", "Bifacial 600W", "Poly 330W", "TOPCon 665W"],
        units: ["Piece", "KWp", "MWp"],
        description: "High-efficiency crystalline silicon solar modules for utility and rooftop projects.",
      },
      {
        slug: "solar-inverters",
        name: "Solar Inverters",
        image: "https://images.unsplash.com/photo-1597100717069-d07a4e12a2b9?w=600&q=80",
        variants: ["String Inverter (3-6 kW)", "String Inverter (10-50 kW)", "Central Inverter (100-2500 kW)", "Hybrid Inverter", "Micro Inverter"],
        units: ["Piece", "KVA"],
        description: "On-grid, off-grid and hybrid inverters for all solar plant configurations.",
      },
      {
        slug: "solar-batteries",
        name: "Solar Batteries",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
        variants: ["Lithium Ion (LFP)", "Lead Acid (Tubular)", "VRLA", "Flow Battery"],
        units: ["Piece", "kWh", "Set"],
        description: "Energy storage batteries for off-grid and hybrid solar systems.",
      },
      {
        slug: "mounting-structures",
        name: "Mounting Structures",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
        variants: ["Ground Mount Fixed Tilt", "Rooftop Fixed", "Rooftop Elevated", "Single Axis Tracker", "Dual Axis Tracker"],
        units: ["Set", "KWp", "MT"],
        description: "Hot-dip galvanized steel and aluminum mounting systems for solar panels.",
      },
      {
        slug: "solar-cables",
        name: "DC Cables & AC Cables",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
        variants: ["DC Solar Cable 4mm²", "DC Solar Cable 6mm²", "AC Cable LT", "AC Cable HT", "Earthing Cable"],
        units: ["Running Meter", "KM", "Drum"],
        description: "UV-resistant DC cables and AC power cables for solar plant wiring.",
      },
    ],
  },

  /* ── CIVIL & INFRASTRUCTURE ──────────────────── */
  {
    slug: "civil-infrastructure",
    name: "Civil and Infrastructure",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    products: [
      {
        slug: "sand",
        name: "Sand",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        variants: ["River Sand (Zone II)", "River Sand (Zone III)", "Manufactured Sand (M-Sand)", "Plaster Sand"],
        units: ["CuM", "Brass", "MT"],
        description: "Natural river sand and M-sand for concrete, masonry and plastering.",
      },
      {
        slug: "aggregates",
        name: "Aggregates / Crushed Stone",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        variants: ["6mm Aggregate", "10mm Aggregate", "12mm Aggregate", "20mm Aggregate", "40mm Aggregate", "GSB Material"],
        units: ["CuM", "Brass", "MT"],
        description: "Crushed stone aggregates for concrete, road base and sub-base applications.",
      },
      {
        slug: "rcc-pipes",
        name: "RCC Pipes / Hume Pipes",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        variants: ["NP2 (300mm–900mm)", "NP3 (300mm–1200mm)", "NP4 (300mm–1200mm)", "Jacking Pipe"],
        units: ["Piece", "Running Meter"],
        description: "Reinforced concrete pipes for drainage, culverts and sewerage systems.",
      },
      {
        slug: "precast",
        name: "Precast Concrete Elements",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
        variants: ["Precast Columns", "Precast Beams", "Precast Slabs", "Precast Wall Panels", "Box Culverts"],
        units: ["Piece", "CuM", "MT"],
        description: "Factory-manufactured precast structural elements for fast construction.",
      },
      {
        slug: "bricks",
        name: "Bricks & Blocks",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        variants: ["Red Clay Brick", "Fly Ash Brick", "AAC Block (600×200×200)", "AAC Block (600×200×100)", "Hollow Block", "Solid Block"],
        units: ["Piece", "Thousand", "CuM"],
        description: "Bricks and blocks for masonry walls in residential and commercial projects.",
      },
      {
        slug: "paver-blocks",
        name: "Kerb Stones & Paver Blocks",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
        variants: ["Straight Kerb Stone", "Drop Kerb Stone", "I-Shape Paver", "Zig-Zag Paver", "Holland Block"],
        units: ["Piece", "SqM", "Running Meter"],
        description: "Precast kerb stones and interlocking paver blocks for roads and pathways.",
      },
    ],
  },

  /* ── ELECTRICAL ACCESSORIES ──────────────────── */
  {
    slug: "electrical-accessories",
    name: "Electrical Accessories",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
    products: [
      {
        slug: "cables",
        name: "Cables & Wires",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
        variants: ["HT Cable (11kV)", "HT Cable (33kV)", "LT Armoured Cable", "Control Cable", "Instrumentation Cable", "House Wire (FR)"],
        units: ["Running Meter", "KM", "Drum"],
        description: "HT/LT power cables and wiring for electrical infrastructure projects.",
      },
      {
        slug: "transformers",
        name: "Transformers",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
        variants: ["Distribution Transformer (25–500 kVA)", "Power Transformer (1–50 MVA)", "Dry Type Transformer", "Step-Up Transformer"],
        units: ["Piece", "KVA", "MVA"],
        description: "Oil-cooled and dry-type transformers for power distribution and substations.",
      },
      {
        slug: "switchgear",
        name: "Switchgear & Panels",
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
        variants: ["LT Panel (MDB)", "SMDB", "MCC Panel", "HT VCB Panel", "ACB", "MCB", "MCCB"],
        units: ["Piece", "Set"],
        description: "Switchgear, circuit breakers and distribution panels for LV/MV systems.",
      },
      {
        slug: "lighting",
        name: "Lighting & Fixtures",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
        variants: ["LED Street Light", "LED High Bay", "LED Flood Light", "LED Panel Light", "Solar Street Light"],
        units: ["Piece", "Set"],
        description: "Energy-efficient LED lighting solutions for streets, sites and facilities.",
      },
      {
        slug: "earthing",
        name: "Earthing & Lightning Protection",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
        variants: ["Earthing Electrode (GI)", "Earthing Electrode (Copper)", "Earthing Plate", "Lightning Arrester", "Earth Pits"],
        units: ["Piece", "Set", "KG"],
        description: "Earthing systems and lightning protection for buildings and substations.",
      },
    ],
  },

  /* ── FIRE PROTECTION ─────────────────────────── */
  {
    slug: "fire-protection",
    name: "Fire Protection",
    image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=600&q=80",
    products: [
      {
        slug: "fire-extinguishers",
        name: "Fire Extinguishers",
        image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=600&q=80",
        variants: ["ABC Powder (2–10 kg)", "CO₂ (2–9 kg)", "Water Mist", "Foam (9 Litre)", "Clean Agent"],
        units: ["Piece", "Set"],
        description: "Portable and wheeled fire extinguishers for all fire risk classes.",
      },
      {
        slug: "sprinkler-systems",
        name: "Sprinkler Systems",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        variants: ["Wet Pipe System", "Dry Pipe System", "Pre-Action System", "Deluge System"],
        units: ["Set", "SqM", "Sprinkler Head"],
        description: "Automatic fire suppression sprinkler systems for commercial buildings.",
      },
      {
        slug: "fire-hydrant",
        name: "Fire Hydrant System",
        image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=600&q=80",
        variants: ["Internal Hydrant", "External Yard Hydrant", "Hose Reel", "Monitor"],
        units: ["Set", "Point", "Piece"],
        description: "Fire hydrant and hose reel systems for large occupancies and industrial plants.",
      },
      {
        slug: "detection-systems",
        name: "Fire Detection & Alarm",
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
        variants: ["Smoke Detector (Optical)", "Heat Detector", "Multi-Sensor Detector", "Manual Call Point", "FACP (Addressable)", "FACP (Conventional)"],
        units: ["Piece", "Set", "Zone"],
        description: "Early warning fire detection and alarm systems for all building types.",
      },
      {
        slug: "gas-suppression",
        name: "Gas Suppression Systems",
        image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=600&q=80",
        variants: ["FM-200 System", "CO₂ Flooding System", "Novec 1230 System", "Inert Gas System"],
        units: ["Set", "CuM"],
        description: "Clean agent and inert gas suppression for data centres and sensitive areas.",
      },
    ],
  },

  /* ── SECURITY ────────────────────────────────── */
  {
    slug: "security",
    name: "Security",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    products: [
      {
        slug: "cctv",
        name: "CCTV & Video Surveillance",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
        variants: ["IP Dome Camera (2MP/4MP/8MP)", "PTZ Camera", "Bullet Camera", "ANPR Camera", "Thermal Camera", "NVR/DVR"],
        units: ["Piece", "Channel", "Set"],
        description: "IP-based CCTV surveillance systems for construction sites and facilities.",
      },
      {
        slug: "access-control",
        name: "Access Control Systems",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
        variants: ["Biometric Fingerprint", "Face Recognition", "Proximity Card Reader", "Turnstile Flap Barrier", "Boom Barrier"],
        units: ["Piece", "Set", "Door"],
        description: "Access control systems to manage and restrict entry at secured locations.",
      },
      {
        slug: "perimeter-security",
        name: "Perimeter Security",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        variants: ["Electric Fence", "Vibration Sensor Cable", "PIR Detector", "Microwave Barrier", "PIDS"],
        units: ["Set", "Running Meter", "Zone"],
        description: "Perimeter intrusion detection systems for construction sites and campuses.",
      },
      {
        slug: "alarm-systems",
        name: "Intruder Alarm Systems",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        variants: ["Burglar Alarm Panel", "PIR Motion Sensor", "Door/Window Sensor", "GSM Alarm", "Panic Button"],
        units: ["Set", "Zone", "Piece"],
        description: "Intrusion detection and alarm systems for site and building security.",
      },
      {
        slug: "bollards-barriers",
        name: "Bollards & Vehicle Barriers",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
        variants: ["Fixed Bollard (SS)", "Removable Bollard", "Hydraulic Bollard", "Crash Rated Barrier", "Road Blocker"],
        units: ["Piece", "Set"],
        description: "Vehicle access control bollards and barriers for high-security perimeters.",
      },
    ],
  },

  /* ── MISCELLANEOUS ───────────────────────────── */
  {
    slug: "miscellaneous",
    name: "Miscellaneous",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
    products: [
      {
        slug: "ppe-safety",
        name: "PPE & Safety Gear",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
        variants: ["Safety Helmet (HDPE)", "Safety Harness", "Safety Shoes (Steel Toe)", "Cut-Resistant Gloves", "Goggles", "Hi-Vis Vest"],
        units: ["Piece", "Pair", "Set"],
        description: "Personal Protective Equipment for construction and industrial site safety.",
      },
      {
        slug: "dg-sets",
        name: "DG Sets / Generators",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
        variants: ["15 kVA", "25 kVA", "62.5 kVA", "125 kVA", "250 kVA", "500 kVA", "1000 kVA"],
        units: ["Piece", "Set"],
        description: "Diesel generator sets for construction site power and backup power supply.",
      },
      {
        slug: "formwork",
        name: "Formwork & Scaffolding",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        variants: ["Modular Formwork (DOKA)", "Table Form", "Cuplock Scaffolding", "Frame Scaffolding", "Prop (Acrow)"],
        units: ["SqM", "Set", "MT", "Piece"],
        description: "Formwork systems and scaffolding for concrete structures and high-rise buildings.",
      },
      {
        slug: "hardware",
        name: "Hardware & Fasteners",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80",
        variants: ["Anchor Bolts", "Hex Bolts & Nuts", "Stainless Steel Screws", "Rivets", "Washers", "Chemical Anchors"],
        units: ["Piece", "Box", "KG", "Bag"],
        description: "Structural fasteners and hardware for all construction assembly requirements.",
      },
      {
        slug: "tools",
        name: "Tools & Small Equipment",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
        variants: ["Angle Grinder", "Electric Drill", "Concrete Vibrator", "Rotary Hammer", "Welding Machine", "Surveying Instruments"],
        units: ["Piece", "Set", "Kit"],
        description: "Power tools and small construction equipment for site operations.",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getProductBySlug(catSlug: string, prodSlug: string): { category: Category; product: Product } | undefined {
  const category = getCategoryBySlug(catSlug);
  if (!category) return undefined;
  const product = category.products.find(p => p.slug === prodSlug);
  if (!product) return undefined;
  return { category, product };
}
