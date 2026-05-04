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
    image: "https://vendorinfra.com/storage/2022/04/Cat-Steel-1.jpg",
    products: [
      {
        slug: "pipes",
        name: "Pipes",
        image: "https://vendorinfra.com/storage/2022/04/Steel-pipes.jpg",
        variants: [
          "Anti-Siphonage Pipe", "Cast Iron Pipes", "Copper Pipes", "DI fitting",
          "DI pipe", "Drain Pipes or Waste Disposal Pipes", "Drainage Pipes",
          "Galvanized Iron Pipes", "GI flat", "GI pipe", "GI Rectangular tube",
          "GI square tube", "MS flat", "MS pipe", "MS Rectangular tube",
          "MS square tube", "Polythene Pipes", "PVC Pipes", "Rainwater Pipe",
          "Seamless pipe", "Soil Pipe", "Stoneware Pipes", "Vent Pipe",
        ],
        units: ["MT", "Mtrs"],
        description: "A wide range of pipes for water supply, drainage, gas, and structural applications.",
      },
      {
        slug: "tmt",
        name: "TMT",
        image: "https://vendorinfra.com/storage/2022/04/TMT-Bars.jpg",
        variants: [
          "Binding Wire", "CRS", "Epoxy Coated", "TMT Bar", "TMT Coil", "Without Ribs",
        ],
        units: ["KG", "MT"],
        description: "Thermo-Mechanically Treated bars, binding wire and reinforcement products for RCC construction.",
      },
      {
        slug: "structural-steel",
        name: "Structural Steel",
        image: "https://vendorinfra.com/storage/2022/04/Structural-steel.jpg",
        variants: [
          "Angles", "Beams", "Billet", "Channels", "Coils", "Column", "Flats",
          "Hexagonal Bars", "Rectangular Bar", "Rounds Bar", "Sheet / Plates",
          "Square Bar", "Strips", "Wire Rods",
        ],
        units: ["KG", "MT"],
        description: "Full range of structural steel sections including angles, beams, channels, and plates for construction.",
      },
    ],
  },

  /* ── CEMENT ──────────────────────────────────── */
  {
    slug: "cement",
    name: "Cement",
    image: "https://vendorinfra.com/storage/2022/04/cement.jpg",
    products: [
      {
        slug: "bag",
        name: "Bag",
        image: "https://vendorinfra.com/storage/2022/04/Cement-bag.jpg",
        variants: [
          "Coloured Cement", "Hydrophobic Portland Cement",
          "Ordinary Portland Cement 33 Grade", "Ordinary Portland Cement 43 Grade",
          "Ordinary Portland Cement 53 Grade", "Portland Pozzolana Cement (PPC)",
          "Portland Slag Cement (PSC)",
        ],
        units: ["MT", "No. of Bags"],
        description: "All grades of bagged cement including OPC, PPC and PSC for general and specialised construction.",
      },
      {
        slug: "bricks",
        name: "Bricks",
        image: "https://vendorinfra.com/storage/2022/04/Bricks.jpg",
        variants: [
          "Burnt Clay Bricks", "Calcium Silicate Bricks", "Concrete Bricks",
          "Engineering Bricks", "Fly Ash Bricks", "Porotherm Smart Bricks Or Eco Bricks",
          "Sun-Dried Bricks",
        ],
        units: ["Nos."],
        description: "Wide variety of bricks including clay, fly ash and eco bricks for all masonry applications.",
      },
      {
        slug: "fiber-reinforced-concrete",
        name: "Fiber Reinforced Concrete",
        image: "https://vendorinfra.com/storage/2022/04/Fiber-Reinforced-Concrete.jpg",
        variants: [
          "Asbestos Fibers", "Carbon Fibers", "GFRC Glass Fiber Reinforced Concrete",
          "Organic Fibers", "Polypropylene Fiber Reinforced (PFR) cement mortar & concrete",
          "Steel Fiber Reinforced Concrete",
        ],
        units: ["KG", "M3"],
        description: "Fiber reinforced concrete and mortar for enhanced strength and durability in structural applications.",
      },
      {
        slug: "concrete-ready-mix-concrete",
        name: "Concrete/ Ready Mix Concrete",
        image: "https://vendorinfra.com/storage/2022/04/Concrete-_-Ready-Mix-Concrete-bag.jpg",
        variants: [
          "Air-Entrained Concrete", "High-Density Concrete", "Lightweight Concrete",
          "Normal Strength Concrete", "Plain or Ordinary Concrete", "Polymer Concrete",
          "Precast Concrete", "Prestressed Concrete", "Ready Mix Concrete",
          "Reinforced Concrete",
        ],
        units: ["CuM", "Nos."],
        description: "All types of concrete including ready mix, precast, reinforced and specialty concrete for every project need.",
      },
      {
        slug: "concrete-blocks",
        name: "Concrete Blocks",
        image: "https://vendorinfra.com/storage/2022/04/Concrete-blocks.jpeg",
        variants: [
          "Bullnose Concrete Blocks", "Concrete Pillar Blocks", "Concrete Stretcher Blocks",
          "Expanded Clay Aggregate Solid Construction Blocks", "Hollow Concrete Blocks",
          "Jamb Concrete Blocks", "Lintel Blocks", "Partition Concrete Blocks", "Paving Blocks",
        ],
        units: ["CuM", "Nos."],
        description: "Comprehensive range of concrete blocks for structural walls, partitions and paving.",
      },
      {
        slug: "ready-mix-plaster",
        name: "Ready Mix Plaster",
        image: "https://vendorinfra.com/storage/2022/04/ready-mix-plaster-.jpg",
        variants: [
          "Cement Plaster", "Clay plaster", "Gypsum Plaster",
          "Heat-Resistant Plaster", "Lime Plaster", "POP",
        ],
        units: ["MT", "Nos."],
        description: "Factory-made plaster mixes for interior and exterior surfaces, reducing site wastage and labour.",
      },
      {
        slug: "block-jointing-mortar",
        name: "Block Jointing Mortar",
        image: "https://vendorinfra.com/storage/2022/04/Block-Jointing-Mortar.jpg",
        variants: [
          "Type K Mortar Mix", "Type M Mortar Mix", "Type N Mortar Mix",
          "Type O Mortar Mix", "Type S Mortar Mix",
        ],
        units: ["Qtl"],
        description: "Pre-mixed mortar for jointing concrete blocks and bricks, ensuring consistent bond strength.",
      },
    ],
  },

  /* ── FLY ASH / SAND & AGGREGATE ─────────────── */
  {
    slug: "sand-aggregate-fly-ash",
    name: "Fly Ash​",
    image: "https://vendorinfra.com/storage/2022/05/Cat-Sand-Aggregate.jpg",
    products: [
      {
        slug: "sand",
        name: "Sand",
        image: "https://vendorinfra.com/storage/2022/04/Sand-300x300.jpg",
        variants: [
          "Coarse Sand", "Concrete Sand", "Fill Sand", "Fine Sand",
          "M-Sand", "Pit Sand", "River Sand", "Utility Sand",
        ],
        units: ["Cu. Ft.", "CuM"],
        description: "All grades of natural and manufactured sand for concrete, plaster, masonry and fill applications.",
      },
      {
        slug: "sand-aggregate",
        name: "Sand Aggregate",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
        variants: ["Aggregate 10 mm", "Aggregate 20 mm", "Aggregate 40 mm"],
        units: ["CuM", "MT"],
        description: "Crushed stone aggregates of standard sizes for concrete mix design and road base construction.",
      },
      {
        slug: "fly-ash",
        name: "Fly Ash",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
        variants: ["Fly Ash"],
        units: ["MT"],
        description: "Coal combustion by-product used as a supplementary cementitious material to improve concrete durability.",
      },
    ],
  },

  /* ── CHEMICAL ──────────────────────────────── */
  {
    slug: "chemical",
    name: "Chemical",
    image: "https://vendorinfra.com/storage/2022/04/Cat-Chemicals-1.jpg",
    products: [
      {
        slug: "construction-chemicals",
        name: "Construction Chemicals",
        image: "https://vendorinfra.com/storage/2022/04/Chemicals.jpg",
        variants: [
          "Adhesives", "Admixture High PC Based", "Admixture Low PC Based",
          "Admixture Mid PC Based", "Admixture Naptha Based", "Concrete Admixtures",
          "Concrete Curing Compound", "Epoxy Grouts", "Polymer Bonding Agents",
          "Protective and Decorative Agents", "Sealants and Caulks", "Water Repellents",
        ],
        units: ["KG", "Ltr."],
        description: "Full range of construction chemicals including admixtures, curing compounds, grouts and sealants.",
      },
      {
        slug: "micro-silica",
        name: "Micro Silica",
        image: "https://vendorinfra.com/storage/2022/04/micro-silica.jpg",
        variants: ["Condensed Microsilica", "Powdered Microsilica", "Slurry Microsilica"],
        units: ["KG", "MT"],
        description: "Ultra-fine silicon dioxide used to improve concrete strength, durability and impermeability.",
      },
      {
        slug: "waterproofing-chemicals",
        name: "Waterproofing Chemicals",
        image: "https://vendorinfra.com/storage/2022/04/waterproofing-chemicals-.jpg",
        variants: [
          "Bituminous Membrane", "Cementitious Coating", "EPDM Rubber",
          "Polyurethane", "PVC Waterproofing Membrane", "Rubberized Asphalt", "Thermoplastic",
        ],
        units: ["KG", "Ltr."],
        description: "Chemical waterproofing solutions for roofs, basements, tanks and below-grade structures.",
      },
      {
        slug: "cleaning-chemicals",
        name: "Cleaning Chemicals",
        image: "https://vendorinfra.com/storage/2022/04/cleaning-chemicals-1.jpg",
        variants: ["Acids", "Alkalies", "Bleaches", "Detergents", "Sanitizers", "Spirit Solvents"],
        units: ["KG", "Ltr."],
        description: "Industrial cleaning chemicals for construction sites, plant maintenance and surface preparation.",
      },
    ],
  },

  /* ── CIVIL AND INFRASTRUCTURE ─────────────── */
  {
    slug: "civil-and-infrastructure",
    name: "Civil and Infrastructure",
    image: "https://vendorinfra.com/storage/2022/04/Cat-Civil-and-Infrastructure-1.jpg",
    products: [
      {
        slug: "gardening-landscaping",
        name: "Gardening & Landscaping",
        image: "https://vendorinfra.com/storage/2022/04/Gardening-tools.jpg",
        variants: [
          "Cutting & Pruning Tools", "Garden Tool Set", "Garden Utilities",
          "Gardening Products", "Mowers & Trimmers", "Sprayers",
        ],
        units: ["Sq.Ft.", "Sqm"],
        description: "Gardening and landscaping tools and products for green infrastructure, parks and commercial spaces.",
      },
      {
        slug: "waterproofing",
        name: "Waterproofing",
        image: "https://vendorinfra.com/storage/2022/04/Waterproofing.jpg",
        variants: [
          "Bituminous Coating Waterproofing", "Bituminous Membrane Waterproofing",
          "Cementitious Waterproofing", "Liquid Waterproofing Membrane",
          "Membrane waterproofing", "Polyurethane Liquid Membrane Waterproofing",
        ],
        units: ["Sq.Ft.", "Sqm"],
        description: "Waterproofing systems for rooftops, basements, water tanks and underground structures.",
      },
      {
        slug: "wall-cladding",
        name: "Wall Cladding",
        image: "https://vendorinfra.com/storage/2022/04/wall-cladding-.jpg",
        variants: [
          "Aluminum cladding", "Brick cladding", "Ceramic cladding",
          "External foam cladding", "Fiber Cement Cladding", "Glass cladding",
          "Natural stone cladding", "Stainless Steel cladding", "Vinyl cladding",
          "Weatherboard cladding", "Wood cladding",
        ],
        units: ["Sq.Ft.", "Sqm"],
        description: "Decorative and protective cladding solutions for external and internal walls.",
      },
      {
        slug: "masonry",
        name: "Masonry",
        image: "https://vendorinfra.com/storage/2022/04/masonry.jpg",
        variants: [
          "Bagged Concrete Masonry", "Block Masonry", "Brick Masonry",
          "Composite Masonry", "Gabion Masonry", "Reinforced Masonry",
          "Stone Masonry", "Veneer Masonry",
        ],
        units: ["Sq.Ft.", "Sqm"],
        description: "Masonry products and systems for structural walls, retaining walls and decorative finishes.",
      },
      {
        slug: "sheets",
        name: "Sheets",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        variants: ["GI sheets", "MS sheets", "Perforated"],
        units: ["KG", "Nos."],
        description: "Galvanized, mild steel and perforated sheets for roofing, cladding and fabrication.",
      },
      {
        slug: "pre-engineered-buildings",
        name: "Pre-Engineered Buildings",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
        variants: [
          "Clear Span with Top running Crane", "Flat Roof", "Lean-to",
          "Mezzanine Floor", "Mono slope clear span", "Muti-Gable", "Roof System",
        ],
        units: ["Nos.", "Sq.Ft."],
        description: "Factory-fabricated steel building systems for warehouses, factories and commercial structures.",
      },
      {
        slug: "flooring",
        name: "Flooring",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        variants: [
          "Bamboo", "Brick", "Concrete", "Granite", "Hardwood", "Laminate",
          "Linoleum", "Marble", "Red Oxide", "Terrazzo", "Vinyl", "Vitrified Tile",
        ],
        units: ["Sq.Ft.", "Sqm"],
        description: "All types of flooring materials from natural stone and marble to vitrified tiles and vinyl.",
      },
      {
        slug: "scaffolding-formwork",
        name: "Scaffolding / Formwork",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
        variants: [
          "Cantilever scaffolding", "Double scaffolding", "Kwikstage scaffolding",
          "Patented scaffolding", "Purlin", "Shuttering ply", "Single scaffolding",
          "Steel scaffolding", "Suspended scaffolding", "Trestle scaffolding",
          "Tube and clip scaffolding", "Walkway Jali", "Wooden and bamboo scaffolding",
          "Wooden runner",
        ],
        units: ["KG", "Nos."],
        description: "Scaffolding and formwork systems for safe access and concrete casting on construction projects.",
      },
      {
        slug: "hvac",
        name: "HVAC",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
        variants: [
          "Duct free (Mini-split)", "Heating and cooling split systems",
          "Hybrid split system", "Packaged heating and air conditioning system",
        ],
        units: ["Package", "Sq.Ft."],
        description: "Heating, ventilation and air conditioning systems for commercial and industrial buildings.",
      },
    ],
  },

  /* ── PETROLEUM ──────────────────────────────── */
  {
    slug: "petroleum",
    name: "Petroleum​",
    image: "https://vendorinfra.com/storage/2022/04/Cat-Petroleum-1.jpg",
    products: [
      {
        slug: "bitumen",
        name: "Bitumen",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
        variants: [
          "Bitumen Emulsion", "Cut Back Bitumen", "Oxidized Bitumen Grades",
          "Penetration Grade Bitumen", "Polymer Modified Bitumen",
        ],
        units: ["KG", "Ltr."],
        description: "All grades of bitumen for road construction, waterproofing and industrial applications.",
      },
    ],
  },

  /* ── INTERIOR & ARCHITECTURE ─────────────────── */
  {
    slug: "interior-architecture",
    name: "Interior & Architecture",
    image: "https://vendorinfra.com/storage/2022/04/Cat-Interior-Architecture-1.jpg",
    products: [
      {
        slug: "glass",
        name: "Glass",
        image: "https://vendorinfra.com/storage/2022/04/Glass.jpg",
        variants: [
          "Chromatic Glass", "Extra Clean Glass", "Float Glass", "Glass Blocks",
          "Glass Wool", "Insulated Glazed Units", "Laminated Glass",
          "Shatterproof Glass", "Tinted Glass", "Toughened Glass",
        ],
        units: ["Nos.", "Sq.Ft."],
        description: "All types of architectural glass including toughened, laminated, tinted and specialty glass.",
      },
      {
        slug: "door",
        name: "Door",
        image: "https://vendorinfra.com/storage/2022/04/Door.jpg",
        variants: [
          "Aluminium Doors", "Battened & Ledged Doors", "Fiber Reinforced Plastic Doors",
          "Fiberglass Doors", "Flush Doors", "Framed & Paneled Doors",
          "Glass Doors", "PVC Doors", "Steel Doors", "Timber Wood",
        ],
        units: ["Nos.", "Sq.Ft."],
        description: "Comprehensive range of doors in wood, steel, aluminium, PVC and glass for all applications.",
      },
      {
        slug: "stone",
        name: "Stone",
        image: "https://vendorinfra.com/storage/2022/04/Stone.jpg",
        variants: [
          "Basalt", "Gneiss", "Granite", "Laterite", "Limestone",
          "Marble", "Quartzite", "Sandstone", "Slate", "Travertine",
        ],
        units: ["Nos.", "Sq.Ft."],
        description: "Natural stone in all varieties for flooring, cladding, countertops and decorative finishes.",
      },
      {
        slug: "plastics",
        name: "Plastics",
        image: "https://vendorinfra.com/storage/2022/04/Plastics.jpg",
        variants: [
          "Acrylic", "Composites", "Polycarbonate", "Polypropylene", "Polyvinyl Chloride",
        ],
        units: ["KG", "Sq.Ft."],
        description: "Engineering plastics and composites for construction applications including cladding, glazing and fittings.",
      },
      {
        slug: "facades",
        name: "Facades",
        image: "https://vendorinfra.com/storage/2022/04/facades.jpg",
        variants: [
          "Aluminum Composite facade", "Clay facade", "Curtain Walling facade",
          "Double-skin facade", "Glazing facade", "Homeostatic facade",
          "Insulated wall facade", "Panel frame facade", "Precast Concrete facade",
          "Self-cleaning facade", "Solar shading facade", "Steel and glass facade", "Steel facade",
        ],
        units: ["Sq.Ft.", "Sqm"],
        description: "Modern facade systems in glass, aluminium, steel and composite panels for commercial buildings.",
      },
      {
        slug: "window",
        name: "Window",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80",
        variants: [
          "Arched Windows", "Awning Windows", "Bay Windows", "Bow Windows",
          "Casement Windows", "Double Hung Windows", "Egress Windows",
          "Garden Windows", "Glass Block Windows", "Hopper Windows",
          "Jalousie Windows", "Other Window", "Picture Windows",
          "Round Circle Windows", "Single Hung Windows",
        ],
        units: ["Nos.", "Sq.Ft."],
        description: "All window types in aluminium, UPVC and wood frames for residential and commercial buildings.",
      },
      {
        slug: "architecture",
        name: "Architecture",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
        variants: [
          "Commercial Architect", "Conservation Architect", "Industrial Architect",
          "Interior Architect", "Landscape Architect", "Residential Architect",
          "Sustainable / Green Design Architect", "Urban Designer",
        ],
        units: ["Sq.Ft.", "Sqm"],
        description: "Architectural design services for residential, commercial, industrial and landscape projects.",
      },
    ],
  },

  /* ── SOLAR ──────────────────────────────────── */
  {
    slug: "solar",
    name: "Solar",
    image: "https://vendorinfra.com/storage/2022/04/Cat-Solar.jpg",
    products: [
      {
        slug: "solar-module",
        name: "Solar Module",
        image: "https://vendorinfra.com/storage/2022/04/solar-module-300x300.jpg",
        variants: [
          "Mono-crystalline Solar Modules", "Polycrystalline Solar Modules",
          "Thin-film Solar Modules",
        ],
        units: ["Qtl"],
        description: "High-efficiency solar modules for rooftop, ground-mounted and utility-scale solar projects.",
      },
      {
        slug: "solar-cell",
        name: "Solar Cell",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
        variants: [
          "Amorphous Silicon solar cell", "Biohybrid solar cell",
          "Cadmium telluride solar cell", "Concentrated PV cell",
          "Copper indium gallium selenide solar cells", "Crystalline silicon solar cell",
          "Dye-sensitized solar cell", "Float-zone silicon",
          "Gallium arsenide germanium solar cell", "Hybrid solar cell",
          "Luminescent solar concentrator", "Micromorph",
          "Monocrystalline solar cell", "Multi-junction solar cell", "Other Cell",
        ],
        units: ["Nos.", "W"],
        description: "All types of photovoltaic solar cells for research, prototyping and large-scale solar installations.",
      },
      {
        slug: "solar-panel",
        name: "Solar Panel",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
        variants: [
          "ACDB & DCDB for solar plant", "Earthing material", "Lightning arrestor",
          "Monocrystalline solar panels", "Passivated Emitter and Rear Cell (PERC) panels",
          "Polycrystalline solar panels", "Solar modules Mono crystline",
          "Solar modules Polycrystline", "Solar On grid inverters",
          "Solar Structure made from GI", "Thin-film solar panels",
        ],
        units: ["Nos.", "W"],
        description: "Complete solar panel solutions including panels, inverters, structures and balance of system components.",
      },
    ],
  },

  /* ── ELECTRICAL ACCESSORIES ──────────────────── */
  {
    slug: "electrical-accessories",
    name: "Electrical Accessories​",
    image: "https://vendorinfra.com/storage/2022/04/Cat-Electrical-Accessories.jpg",
    products: [],
  },

  /* ── FIRE PROTECTION ──────────────────────────── */
  {
    slug: "fire-protection",
    name: "Fire Protection​​",
    image: "https://vendorinfra.com/storage/2022/04/Cat-Fire-Protection.jpg",
    products: [],
  },

  /* ── SECURITY ──────────────────────────────────── */
  {
    slug: "security",
    name: "Security​",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
    products: [],
  },

  /* ── MISCELLANEOUS ──────────────────────────────── */
  {
    slug: "miscellaneous",
    name: "Miscellaneous​",
    image: "https://vendorinfra.com/storage/2022/04/Cat-Others-Miscellaneous-1.jpg",
    products: [],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getProductBySlug(
  catSlug: string,
  prodSlug: string,
): { category: Category; product: Product } | undefined {
  const category = getCategoryBySlug(catSlug);
  if (!category) return undefined;
  const product = category.products.find(p => p.slug === prodSlug);
  if (!product) return undefined;
  return { category, product };
}
