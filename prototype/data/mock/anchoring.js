/* ============================================================================
   Anchoring sample records (Benmore). The only work type populated with deep
   mock data; other work types are configured but not yet populated.
   ========================================================================== */

export const designSheets = [
  {
    "code": "GA-17S",
    "colour": "#6e8b3d",
    "name": "Spillway Standard",
    "summary": "17.5 m · 600 kN",
    "badgeClass": "inuse",
    "badge": "In use",
    "type": "Permanent ground anchor",
    "inUse": "In use by 16 anchors",
    "engineerSource": "WSP anchor schedule · Rev B · 12 May 2026",
    "params": [
      {
        "k": "Design depth",
        "v": "17.5 m"
      },
      {
        "k": "Bond length",
        "v": "6.0 m"
      },
      {
        "k": "Working load",
        "v": "600 kN"
      },
      {
        "k": "Inclination",
        "v": "15° declination"
      }
    ],
    "construction": {
      "tendon": "4 × 15.2 mm strand",
      "barSpec": "Grade 1770",
      "hole": "127 mm",
      "grout": "Class G cement · w/c 0.45",
      "drill": "Rotary drill",
      "notes": "Standard anchor for spillway face conditions."
    },
    "testRegime": "Proof 1.25× WL · 3 cycles",
    "material": [
      {
        "k": "Material",
        "v": "25 kg bags · Class G cement"
      },
      {
        "k": "Theoretical usage",
        "v": "38 L per anchor"
      },
      {
        "k": "Wastage allowance",
        "v": "×1.35"
      },
      {
        "k": "Over-allowance result",
        "v": "> ×1.35 flagged for QA"
      }
    ],
    "usedInPlan": [
      {
        "colour": "#6e8b3d",
        "zone": "Spillway Face",
        "rng": "B01–B16 · ",
        "count": "16 anchors"
      }
    ]
  },
  {
    "code": "GA-18H",
    "colour": "#2f9089",
    "name": "Spillway High-load",
    "summary": "18.5 m · 750 kN",
    "badgeClass": "draft",
    "badge": "Draft",
    "type": "Permanent ground anchor",
    "inUse": "Draft · not yet assigned to anchors",
    "engineerSource": "WSP anchor schedule · Rev B · 12 May 2026",
    "params": [
      {
        "k": "Design depth",
        "v": "18.5 m"
      },
      {
        "k": "Bond length",
        "v": "7.0 m"
      },
      {
        "k": "Working load",
        "v": "750 kN"
      },
      {
        "k": "Inclination",
        "v": "15° declination"
      }
    ],
    "construction": {
      "tendon": "5 × 15.2 mm strand",
      "barSpec": "Grade 1770",
      "hole": "140 mm",
      "grout": "Class G cement · w/c 0.42",
      "drill": "Rotary drill",
      "notes": "High-load variant for the upper spillway section."
    },
    "testRegime": "Proof 1.5× WL · lock-off 1.1×",
    "material": [],
    "usedInPlan": [
      {
        "colour": "#2f9089",
        "zone": "Spillway Face",
        "rng": "B17–B18 · ",
        "count": "2 anchors"
      }
    ]
  },
  {
    "code": "GA-16",
    "colour": "#2f9089",
    "name": "Stilling Basin",
    "summary": "16.0 m · 550 kN",
    "badgeClass": "inuse",
    "badge": "In use",
    "type": "Permanent ground anchor",
    "inUse": "In use by 14 anchors",
    "engineerSource": "WSP anchor schedule · Rev B · 12 May 2026",
    "params": [
      {
        "k": "Design depth",
        "v": "16.0 m"
      },
      {
        "k": "Bond length",
        "v": "5.5 m"
      },
      {
        "k": "Working load",
        "v": "550 kN"
      },
      {
        "k": "Inclination",
        "v": "10° declination"
      }
    ],
    "construction": {
      "tendon": "4 × 15.2 mm strand",
      "barSpec": "Grade 1770",
      "hole": "127 mm",
      "grout": "Class G cement · w/c 0.45",
      "drill": "Rotary drill",
      "notes": "Basin floor anchor for uplift restraint."
    },
    "testRegime": "Proof 1.25× WL · 3 cycles",
    "material": [],
    "usedInPlan": [
      {
        "colour": "#2f9089",
        "zone": "Stilling Basin",
        "rng": "S01–S14 · ",
        "count": "14 anchors"
      }
    ]
  },
  {
    "code": "LA-14",
    "colour": "#cf8e2c",
    "name": "Left Abutment",
    "summary": "14.5 m · 500 kN",
    "badgeClass": "inuse",
    "badge": "In use",
    "type": "Permanent ground anchor",
    "inUse": "In use by 10 anchors",
    "engineerSource": "WSP anchor schedule · Rev B · 12 May 2026",
    "params": [
      {
        "k": "Design depth",
        "v": "14.5 m"
      },
      {
        "k": "Bond length",
        "v": "5.0 m"
      },
      {
        "k": "Working load",
        "v": "500 kN"
      },
      {
        "k": "Inclination",
        "v": "20° declination"
      }
    ],
    "construction": {
      "tendon": "3 × 15.2 mm strand",
      "barSpec": "Grade 1770",
      "hole": "115 mm",
      "grout": "Class G cement · w/c 0.45",
      "drill": "Rotary drill",
      "notes": "Abutment anchor at steeper inclination."
    },
    "testRegime": "Proof 1.25× WL · 2 cycles",
    "material": [],
    "usedInPlan": [
      {
        "colour": "#cf8e2c",
        "zone": "Left Abutment",
        "rng": "L01–L10 · ",
        "count": "10 anchors"
      }
    ]
  },
  {
    "code": "CP-12",
    "colour": "#46663a",
    "name": "Crest Pile",
    "summary": "12.0 m · 450 kN",
    "badgeClass": "inuse",
    "badge": "In use",
    "type": "Micropile",
    "inUse": "In use by 12 anchors",
    "engineerSource": "WSP anchor schedule · Rev B · 12 May 2026",
    "params": [
      {
        "k": "Design depth",
        "v": "12.0 m"
      },
      {
        "k": "Bond length",
        "v": "4.0 m"
      },
      {
        "k": "Working load",
        "v": "450 kN"
      },
      {
        "k": "Inclination",
        "v": "Vertical"
      }
    ],
    "construction": {
      "tendon": "32 mm GEWI bar",
      "barSpec": "Grade 670/800",
      "hole": "150 mm",
      "grout": "Class G cement · w/c 0.48",
      "drill": "Down-the-hole hammer",
      "notes": "Vertical micropile at the crest gallery."
    },
    "testRegime": "Proof 1.5× WL · single cycle",
    "material": [],
    "usedInPlan": [
      {
        "colour": "#46663a",
        "zone": "Crest Gallery",
        "rng": "C01–C12 · ",
        "count": "12 anchors"
      }
    ]
  }
];

export const materialPresets = [
  {
    "value": "1.35",
    "label": "Bagged grout, rotary-drilled (×1.35)",
    "sel": true
  },
  {
    "value": "1.5",
    "label": "Pumped grout, cased hole (×1.50)",
    "sel": false
  },
  {
    "value": "3.0",
    "label": "Self-drilling anchor (200–400%)",
    "sel": false
  },
  {
    "value": "custom",
    "label": "Custom…",
    "sel": false
  }
];

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

export const evidenceRequirements = [
  {
    "code": "EV-1",
    "colour": "#6e7d5c",
    "icon": "<rect x=\"3\" y=\"6\" width=\"14\" height=\"10\" rx=\"2\"/><circle cx=\"10\" cy=\"11\" r=\"2.6\"/><path d=\"M7 6l1.1-2h3.8L13 6\"/>",
    "name": "Drill-complete photo",
    "badge": "Required",
    "badgeClass": "req",
    "summary": "Photo · Blocks confirmation",
    "type": "Photo",
    "status": "Blocks confirmation",
    "spec": "At least one clear photo of the completed drill hole and collar, captured before grouting.",
    "criteria": [
      {
        "k": "Minimum",
        "v": "1 photo"
      },
      {
        "k": "Subject",
        "v": "Drilled collar, in frame and in focus"
      },
      {
        "k": "Capture",
        "v": "Geotagged on operator device"
      },
      {
        "k": "When",
        "v": "Before grouting commences"
      }
    ],
    "appliesTo": [
      {
        "k": "Designs",
        "cls": "k-design",
        "v": "All anchor designs"
      },
      {
        "k": "Operations",
        "cls": "k-work",
        "v": "Drilling & anchoring"
      },
      {
        "k": "Zones (optional)",
        "cls": "k-design",
        "v": "All zones"
      }
    ],
    "reason": "Client/WSP require a photographic record before grouting hides the evidence."
  },
  {
    "code": "EV-2",
    "colour": "#6e8b3d",
    "icon": "<path d=\"M2.5 11h3.2l2-5.5 3 9.5 2.2-6 1.3 2H17.5\"/>",
    "name": "Anchor test result",
    "badge": "Required",
    "badgeClass": "req",
    "summary": "Test result · Blocks confirmation",
    "type": "Test result",
    "status": "Blocks confirmation",
    "spec": "A proof / load test result, evaluated automatically against the assigned Testing Standard.",
    "criteria": [
      {
        "k": "Source",
        "v": "Paper test sheet, photo-captured"
      },
      {
        "k": "Evaluation",
        "v": "Pass / fail vs Testing Standard"
      },
      {
        "k": "On fail",
        "v": "Raises a test-fail exception"
      }
    ],
    "appliesTo": [
      {
        "k": "Designs",
        "cls": "k-design",
        "v": "All tested designs"
      },
      {
        "k": "Operations",
        "cls": "k-work",
        "v": "Proof & load testing"
      },
      {
        "k": "Zones (optional)",
        "cls": "k-design",
        "v": "All zones"
      }
    ],
    "reason": "Load capacity against the engineer-issued spec is the core deliverable; a record without a test result is not releasable."
  },
  {
    "code": "EV-3",
    "colour": "#6e7d5c",
    "icon": "<rect x=\"3\" y=\"6\" width=\"14\" height=\"10\" rx=\"2\"/><circle cx=\"10\" cy=\"11\" r=\"2.6\"/><path d=\"M7 6l1.1-2h3.8L13 6\"/>",
    "name": "Grout record photo",
    "badge": "Required",
    "badgeClass": "req",
    "summary": "Photo · Blocks confirmation",
    "type": "Photo",
    "status": "Blocks confirmation",
    "spec": "A photo or batch record of the grouting operation for the anchor.",
    "criteria": [
      {
        "k": "Minimum",
        "v": "1 photo or batch docket"
      },
      {
        "k": "Captures",
        "v": "Grout batch and volume against spec"
      },
      {
        "k": "When",
        "v": "At grouting"
      }
    ],
    "appliesTo": [
      {
        "k": "Designs",
        "cls": "k-design",
        "v": "All grouted designs"
      },
      {
        "k": "Operations",
        "cls": "k-work",
        "v": "Grouting"
      },
      {
        "k": "Zones (optional)",
        "cls": "k-design",
        "v": "All zones"
      }
    ],
    "reason": "Grout traceability to the design specification is a standing client requirement on dam works."
  },
  {
    "code": "EV-4",
    "colour": "#2b4721",
    "icon": "<path d=\"M3 16.5s1.8-1 3.5-1 2.8 1 4.5 1 3.5-1.5 3.5-1.5\"/><path d=\"M5.5 13l6.5-6.5 2 2L7.5 15l-3 1z\"/>",
    "name": "Operator sign-off",
    "badge": "Required",
    "badgeClass": "req",
    "summary": "Sign-off · Blocks confirmation",
    "type": "Sign-off",
    "status": "Blocks confirmation",
    "spec": "The operator confirms the capture is complete and accurate before submission to the QA queue.",
    "criteria": [
      {
        "k": "Who",
        "v": "Drilling operator on shift"
      },
      {
        "k": "When",
        "v": "At submission to the QA queue"
      }
    ],
    "appliesTo": [
      {
        "k": "Designs",
        "cls": "k-design",
        "v": "All anchor designs"
      },
      {
        "k": "Operations",
        "cls": "k-work",
        "v": "All work types"
      },
      {
        "k": "Zones (optional)",
        "cls": "k-design",
        "v": "All zones"
      }
    ],
    "reason": "Accountability for the field record sits with the operator who did the work."
  },
  {
    "code": "EV-5",
    "colour": "#2b4721",
    "icon": "<path d=\"M3 16.5s1.8-1 3.5-1 2.8 1 4.5 1 3.5-1.5 3.5-1.5\"/><path d=\"M5.5 13l6.5-6.5 2 2L7.5 15l-3 1z\"/>",
    "name": "Engineer witness / sign-off",
    "badge": "Conditional",
    "badgeClass": "cond",
    "summary": "Sign-off · Conditional check",
    "type": "Sign-off",
    "status": "Conditional check",
    "spec": "Engineer confirmation, required only on records flagged for ground condition or a resolved exception.",
    "criteria": [
      {
        "k": "Who",
        "v": "WSP engineer · N. Hayes"
      },
      {
        "k": "When",
        "v": "Before release of flagged records"
      },
      {
        "k": "Trigger",
        "v": "Ground-condition or performance flag"
      }
    ],
    "appliesTo": [
      {
        "k": "Designs",
        "cls": "k-design",
        "v": "Ground anchors"
      },
      {
        "k": "Operations",
        "cls": "k-work",
        "v": "Flagged records"
      },
      {
        "k": "Zones (optional)",
        "cls": "k-design",
        "v": "All zones"
      }
    ],
    "reason": "Independent engineering verification is expected before exception records go outward to the client."
  }
];

export const evidenceFoot = "5 requirements defined · 4 block confirmation · ready for Safety & Risk";
