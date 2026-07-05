/* ============================================================================
   Anchoring sample records (Benmore). The only work type populated with deep
   mock data; other work types are configured but not yet populated.
   ========================================================================== */
export const designs = {
  'GA-17S': {
    tendon: '4 × 15.2 mm strand',
    barSpec: 'Grade 1770',
    hole: '127 mm',
    grout: 'Class G cement · w/c 0.45',
    drill: 'Rotary drill',
    notes: 'Standard anchor for spillway face conditions.'
  },
  'GA-18H': {
    tendon: '5 × 15.2 mm strand',
    barSpec: 'Grade 1770',
    hole: '140 mm',
    grout: 'Class G cement · w/c 0.42',
    drill: 'Rotary drill',
    notes: 'High-load variant for the upper spillway section.'
  },
  'GA-16': {
    tendon: '4 × 15.2 mm strand',
    barSpec: 'Grade 1770',
    hole: '127 mm',
    grout: 'Class G cement · w/c 0.45',
    drill: 'Rotary drill',
    notes: 'Basin floor anchor for uplift restraint.'
  },
  'LA-14': {
    tendon: '3 × 15.2 mm strand',
    barSpec: 'Grade 1770',
    hole: '115 mm',
    grout: 'Class G cement · w/c 0.45',
    drill: 'Rotary drill',
    notes: 'Abutment anchor at steeper inclination.'
  },
  'CP-12': {
    tendon: '32 mm GEWI bar',
    barSpec: 'Grade 670/800',
    hole: '150 mm',
    grout: 'Class G cement · w/c 0.48',
    drill: 'Down-the-hole hammer',
    notes: 'Vertical micropile at the crest gallery.'
  }
};

export const engineerSource = {"name": "WSP testing schedule", "rev": "Rev B · 12 May 2026"};

export const testingStandards = [
  {
    "code": "TS-A",
    "colour": "#6e8b3d",
    "badge": "Active",
    "badgeClass": "inuse",
    "name": "Permanent ground anchor proof test",
    "summary": "Proof 1.25× WL · 3 designs",
    "type": "Proof test",
    "usedBy": "Used by 3 designs",
    "governing": "TS-A2",
    "criteria": [
      {
        "name": "Proof load",
        "val": "1.25 × working load",
        "cond": "Load reached and held"
      },
      {
        "name": "Load hold",
        "val": "10 minutes",
        "cond": "Sustained at proof load"
      },
      {
        "name": "Creep · final log cycle",
        "val": "≤ 1.0 mm",
        "cond": "Measured 1–10 min"
      },
      {
        "name": "Residual movement",
        "val": "≤ 10% of elastic extension"
      },
      {
        "name": "Lock-off load",
        "val": "1.0 × working load"
      }
    ],
    "appliesMeta": "3 designs · 42 planned anchors",
    "appliesTo": [
      {
        "colour": "#6e8b3d",
        "code": "GA-17S",
        "name": "Spillway Standard",
        "zone": "Spillway Face",
        "count": "18 anchors"
      },
      {
        "colour": "#2f9089",
        "code": "GA-16",
        "name": "Stilling Basin",
        "zone": "Stilling Basin",
        "count": "14 anchors"
      },
      {
        "colour": "#cf8e2c",
        "code": "LA-14",
        "name": "Left Abutment",
        "zone": "Left Abutment",
        "count": "10 anchors"
      }
    ]
  },
  {
    "code": "TS-B",
    "colour": "#2f9089",
    "badge": "Draft",
    "badgeClass": "draft",
    "name": "High-load anchor proof test",
    "summary": "Proof 1.5× WL · 1 design",
    "type": "Proof test",
    "usedBy": "Used by 1 design",
    "governing": "TS-B1",
    "criteria": [
      {
        "name": "Proof load",
        "val": "1.5 × working load",
        "cond": "Load reached and held"
      },
      {
        "name": "Load hold",
        "val": "15 minutes",
        "cond": "Sustained at proof load"
      },
      {
        "name": "Creep · final log cycle",
        "val": "≤ 0.8 mm",
        "cond": "Measured 1–15 min"
      },
      {
        "name": "Lock-off load",
        "val": "1.1 × working load"
      }
    ],
    "appliesMeta": "1 design · 2 planned anchors",
    "appliesTo": [
      {
        "colour": "#6e8b3d",
        "code": "GA-18H",
        "name": "Spillway High-load",
        "zone": "Spillway Face",
        "count": "2 anchors"
      }
    ]
  },
  {
    "code": "TS-C",
    "colour": "#cf8e2c",
    "badge": "Active",
    "badgeClass": "inuse",
    "name": "Micropile load test",
    "summary": "Proof 1.5× WL · 1 design",
    "type": "Load test",
    "usedBy": "Used by 1 design",
    "governing": "TS-C1",
    "criteria": [
      {
        "name": "Proof load",
        "val": "1.5 × working load",
        "cond": "Maintained load test"
      },
      {
        "name": "Load hold",
        "val": "10 minutes"
      },
      {
        "name": "Settlement at proof load",
        "val": "≤ 5.0 mm"
      },
      {
        "name": "Residual settlement",
        "val": "≤ 2.0 mm"
      }
    ],
    "appliesMeta": "1 design · 12 planned anchors",
    "appliesTo": [
      {
        "colour": "#46663a",
        "code": "CP-12",
        "name": "Crest Pile",
        "zone": "Crest Gallery",
        "count": "12 anchors"
      }
    ]
  }
];
