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
    "colour": "#112411",
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
    "colour": "#112411",
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

export const safetyDocs = [
  {
    "code": "JSA-1",
    "colour": "#112411",
    "icon": "<path d=\"M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z\"/><path d=\"M7.5 10l1.8 1.8L13 8\"/>",
    "name": "JSA · Spillway anchoring works",
    "listBadge": {
      "cls": "active",
      "text": "Active"
    },
    "type": "JSA",
    "status": "Governs all drilling & anchoring",
    "badge": {
      "cls": "active",
      "text": "Active"
    },
    "srcmeta": "Uploaded 12 May 2026 · Tim R. · PDF · 1.4 MB",
    "scope": [
      {
        "sk": "Work types",
        "cls": "k-work",
        "v": "All drilling & anchoring"
      },
      {
        "sk": "Zones",
        "cls": "k-design",
        "v": "All zones"
      }
    ],
    "gate": [
      {
        "state": "on",
        "html": "<b>Active.</b> No one can start drilling until they have signed on and acknowledged this JSA."
      },
      {
        "state": "on",
        "html": "<b>Today:</b> 0 of 6 crew signed on so far."
      }
    ]
  },
  {
    "code": "SWMS-1",
    "colour": "#6e7d5c",
    "icon": "<path d=\"M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z\"/><path d=\"M7.5 10l1.8 1.8L13 8\"/>",
    "name": "SWMS · Rope-access drilling",
    "listBadge": null,
    "type": "SWMS",
    "status": "Governs rope-access drilling",
    "badge": {
      "cls": "active",
      "text": "Active"
    },
    "srcmeta": "Uploaded 12 May 2026 · Tim R. · PDF · 0.9 MB",
    "scope": [
      {
        "sk": "Work types",
        "cls": "k-work",
        "v": "Rope-access drilling"
      },
      {
        "sk": "Zones",
        "cls": "k-design",
        "v": "Spillway Face · Left Abutment"
      }
    ],
    "gate": [
      {
        "state": "on",
        "html": "<b>Active.</b> Acknowledged at sign-on alongside the JSA before rope-access work."
      },
      {
        "state": "on",
        "html": "<b>Today:</b> 0 of 6 crew signed on so far."
      }
    ]
  },
  {
    "code": "SWMS-2",
    "colour": "#b07d2b",
    "icon": "<path d=\"M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z\"/><path d=\"M7.5 10l1.8 1.8L13 8\"/>",
    "name": "SWMS · Crane & lifting",
    "listBadge": null,
    "type": "SWMS",
    "status": "Not yet active",
    "badge": {
      "cls": "draft",
      "text": "Draft"
    },
    "srcmeta": "Uploaded 24 May 2026 · Tim R. · PDF · 0.7 MB",
    "scope": [
      {
        "sk": "Work types",
        "cls": "k-work",
        "v": "Crane & lifting"
      },
      {
        "sk": "Zones",
        "cls": "k-design",
        "v": "Crest Gallery"
      }
    ],
    "gate": [
      {
        "state": "off",
        "html": "<b>Not active.</b> This document is not yet part of the sign-on gate. Set it active to bring it into acknowledgement at sign-on."
      }
    ]
  }
];

export const safetyFoot = "2 safety documents active · scoped · sign-on gate wired";

/* --- Work Plan: proposed anchors, zone/design assignments, plan summary ----
   planPins keys are SVG pin numbers; the map canvas positions them, this pack
   supplies the record each pin resolves to. planZones drives the rail rows. */
export const planPins = {
  "1": {"id":"B01","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,561.13","n":"6,024,802.05"},
  "2": {"id":"B02","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,562.26","n":"6,024,803.09"},
  "3": {"id":"B03","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,563.39","n":"6,024,804.14"},
  "4": {"id":"B04","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,564.52","n":"6,024,805.18"},
  "5": {"id":"B05","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,565.65","n":"6,024,806.23"},
  "6": {"id":"B06","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,566.78","n":"6,024,807.28"},
  "7": {"id":"B07","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,567.91","n":"6,024,808.32"},
  "8": {"id":"B08","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,569.04","n":"6,024,809.37"},
  "9": {"id":"B09","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,570.17","n":"6,024,810.41"},
  "10": {"id":"B10","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,571.30","n":"6,024,811.46"},
  "11": {"id":"B11","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,572.43","n":"6,024,812.51"},
  "12": {"id":"B12","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,573.56","n":"6,024,813.55"},
  "13": {"id":"B13","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,574.69","n":"6,024,814.60"},
  "14": {"id":"B14","zone":"Stilling Basin","zcol":"#2f9089","design":"GA-16","dname":"Stilling Basin","test":"Proof 1.25× WL · 3 cycles","e":"241,575.82","n":"6,024,815.64"},
  "15": {"id":"B15","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,576.95","n":"6,024,816.69"},
  "16": {"id":"B16","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,578.08","n":"6,024,817.74"},
  "17": {"id":"B17","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,579.21","n":"6,024,818.78"},
  "18": {"id":"B18","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,580.34","n":"6,024,819.83"},
  "19": {"id":"B19","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,581.47","n":"6,024,820.87"},
  "20": {"id":"B20","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,582.60","n":"6,024,821.92"},
  "21": {"id":"B21","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,583.73","n":"6,024,822.97"},
  "22": {"id":"B22","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,584.86","n":"6,024,824.01"},
  "23": {"id":"B23","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,585.99","n":"6,024,825.06"},
  "24": {"id":"B24","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,587.12","n":"6,024,826.10"},
  "25": {"id":"B25","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,588.25","n":"6,024,827.15"},
  "26": {"id":"B26","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,589.38","n":"6,024,828.20"},
  "27": {"id":"B27","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,590.51","n":"6,024,829.24"},
  "28": {"id":"B28","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,591.64","n":"6,024,830.29"},
  "29": {"id":"B29","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,592.77","n":"6,024,831.33"},
  "30": {"id":"B30","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,593.90","n":"6,024,832.38"},
  "31": {"id":"B31","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,595.03","n":"6,024,833.43"},
  "32": {"id":"B32","zone":"Spillway Face","zcol":"#6e8b3d","design":"GA-17S","dname":"Spillway Standard","test":"Proof 1.25× WL · 3 cycles","e":"241,596.16","n":"6,024,834.47"},
  "33": {"id":"B33","zone":"Left Abutment","zcol":"#cf8e2c","design":"LA-14","dname":"Left Abutment","test":"Proof 1.25× WL · 2 cycles","e":"241,597.29","n":"6,024,835.52"},
  "34": {"id":"B34","zone":"Left Abutment","zcol":"#cf8e2c","design":"LA-14","dname":"Left Abutment","test":"Proof 1.25× WL · 2 cycles","e":"241,598.42","n":"6,024,836.56"},
  "35": {"id":"B35","zone":"Left Abutment","zcol":"#cf8e2c","design":"LA-14","dname":"Left Abutment","test":"Proof 1.25× WL · 2 cycles","e":"241,599.55","n":"6,024,837.61"},
  "36": {"id":"B36","zone":"Left Abutment","zcol":"#cf8e2c","design":"LA-14","dname":"Left Abutment","test":"Proof 1.25× WL · 2 cycles","e":"241,600.68","n":"6,024,838.66"},
  "37": {"id":"B37","zone":"Left Abutment","zcol":"#cf8e2c","design":"LA-14","dname":"Left Abutment","test":"Proof 1.25× WL · 2 cycles","e":"241,601.81","n":"6,024,839.70"},
  "38": {"id":"B38","zone":"Left Abutment","zcol":"#cf8e2c","design":"LA-14","dname":"Left Abutment","test":"Proof 1.25× WL · 2 cycles","e":"241,602.94","n":"6,024,840.75"},
  "39": {"id":"B39","zone":"Left Abutment","zcol":"#cf8e2c","design":"LA-14","dname":"Left Abutment","test":"Proof 1.25× WL · 2 cycles","e":"241,604.07","n":"6,024,841.79"},
  "40": {"id":"B40","zone":"Left Abutment","zcol":"#cf8e2c","design":"LA-14","dname":"Left Abutment","test":"Proof 1.25× WL · 2 cycles","e":"241,605.20","n":"6,024,842.84"},
  "41": {"id":"B41","zone":"Left Abutment","zcol":"#cf8e2c","design":"LA-14","dname":"Left Abutment","test":"Proof 1.25× WL · 2 cycles","e":"241,606.33","n":"6,024,843.89"},
  "42": {"id":"B42","zone":"Left Abutment","zcol":"#cf8e2c","design":"LA-14","dname":"Left Abutment","test":"Proof 1.25× WL · 2 cycles","e":"241,607.46","n":"6,024,844.93"},
  "43": {"id":"P43","zone":"Crest Gallery","zcol":"#46663a","design":"CP-12","dname":"Crest Pile","test":"Proof 1.5× WL · single cycle","e":"241,608.59","n":"6,024,845.98"},
  "44": {"id":"P44","zone":"Crest Gallery","zcol":"#46663a","design":"CP-12","dname":"Crest Pile","test":"Proof 1.5× WL · single cycle","e":"241,609.72","n":"6,024,847.02"},
  "45": {"id":"P45","zone":"Crest Gallery","zcol":"#46663a","design":"CP-12","dname":"Crest Pile","test":"Proof 1.5× WL · single cycle","e":"241,610.85","n":"6,024,848.07"},
  "46": {"id":"P46","zone":"Crest Gallery","zcol":"#46663a","design":"CP-12","dname":"Crest Pile","test":"Proof 1.5× WL · single cycle","e":"241,611.98","n":"6,024,849.12"},
  "47": {"id":"P47","zone":"Crest Gallery","zcol":"#46663a","design":"CP-12","dname":"Crest Pile","test":"Proof 1.5× WL · single cycle","e":"241,613.11","n":"6,024,850.16"},
  "48": {"id":"P48","zone":"Crest Gallery","zcol":"#46663a","design":"CP-12","dname":"Crest Pile","test":"Proof 1.5× WL · single cycle","e":"241,614.24","n":"6,024,851.21"},
  "49": {"id":"P49","zone":"Crest Gallery","zcol":"#46663a","design":"CP-12","dname":"Crest Pile","test":"Proof 1.5× WL · single cycle","e":"241,615.37","n":"6,024,852.25"},
  "50": {"id":"P50","zone":"Crest Gallery","zcol":"#46663a","design":"CP-12","dname":"Crest Pile","test":"Proof 1.5× WL · single cycle","e":"241,616.50","n":"6,024,853.30"},
  "51": {"id":"P51","zone":"Crest Gallery","zcol":"#46663a","design":"CP-12","dname":"Crest Pile","test":"Proof 1.5× WL · single cycle","e":"241,617.63","n":"6,024,854.35"},
  "52": {"id":"P52","zone":"Crest Gallery","zcol":"#46663a","design":"CP-12","dname":"Crest Pile","test":"Proof 1.5× WL · single cycle","e":"241,618.76","n":"6,024,855.39"},
  "53": {"id":"P53","zone":"Crest Gallery","zcol":"#46663a","design":"CP-12","dname":"Crest Pile","test":"Proof 1.5× WL · single cycle","e":"241,619.89","n":"6,024,856.44"},
  "54": {"id":"P54","zone":"Crest Gallery","zcol":"#46663a","design":"CP-12","dname":"Crest Pile","test":"Proof 1.5× WL · single cycle","e":"241,621.02","n":"6,024,857.48"}
};

export const planZones = [
  { key: "spillway", label: "Spillway Face", colour: "#6e8b3d", design: "GA-17S", count: 18 },
  { key: "stilling", label: "Stilling Basin", colour: "#2f9089", design: "GA-16", count: 14 },
  { key: "left", label: "Left Abutment", colour: "#cf8e2c", design: "LA-14", count: 10 },
  { key: "crest", label: "Crest Gallery", colour: "#46663a", design: "CP-12", count: 12 }
];

export const planSummary = {
  source: "benmore_plan.pdf",
  total: 54,
  zones: 4,
  unresolved: 0,
  bannerTitle: "AI proposal from benmore_plan.pdf",
  bannerSub: "54 anchors · 4 zones · 0 unresolved",
  summaryTotal: "/ 54",
  summarySub: "4 zones · all designs assigned",
  footText: "54 anchors proposed · all designs assigned · 0 unresolved",
  commitText: "54 of 54 anchors committed",
  defaultPin: 15,
  usesStaticPlanCanvas: true
};

/* --- Overview dashboard: metrics, attention lists, setup cards -----------
   The project rollup the Overview renders. metrics are the header counters,
   alerts + qaChips feed 'Needs your attention', setupCards list the setup
   steps with their per-project meta. */
export const overview = {
  metrics: {
    pct: 26, done: 14, total: 54,
    confirmedLine: "14 of 54 anchors confirmed",
    active: 13, awaitingQA: 8, issues: 2,
    statusPill: "In delivery", targetDate: "14 Aug 2026"
  },
  alerts: [
    {"id":"B07","title":"Test failure","zone":"Spillway Face","tagCls":"high","tagText":"High","href":"qa-queue.html"},
    {"id":"B23","title":"Redrill required","zone":"Stilling Basin","tagCls":"action","tagText":"Action required","href":"status-board.html"},
    {"id":"B31","title":"Incident submitted","zone":"Stilling Basin","tagCls":"new","tagText":"New","href":"incident.html"}
  ],
  qaChips: ["B11","B13","B17","B21","B28","B31","B40","P05"],
  qaFoot: "8 anchors submitted, ready to confirm or reopen.",
  setupCards: [
    { href: "layout.html", nm: "Layout", mt: "4 zones", icon: "<svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M4 10h16M10 4v16\"/></svg>" },
    { href: "work-item-design.html", nm: "Work item design", mt: "5 designs", icon: "<svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3 20 7.5v9L12 21 4 16.5v-9z\"/><path d=\"M4 7.5 12 12l8-4.5\"/><path d=\"M12 12v9\"/></svg>" },
    { href: "work-plan.html", nm: "Work plan", mt: "54 placed", icon: "<svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"5\" width=\"16\" height=\"15\" rx=\"2\"/><path d=\"M4 9.5h16\"/><path d=\"M8 3v4M16 3v4\"/></svg>" },
    { href: "testing-standards.html", nm: "Testing standards", mt: "Configured", icon: "<svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3 19 6v5c0 5-3 7.6-7 9-4-1.4-7-4-7-9V6z\"/><path d=\"M9 12l2 2 4-4\"/></svg>" },
    { href: "evidence-qa.html", nm: "Evidence & QA", mt: "Configured", icon: "<svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 8a2 2 0 0 1 2-2h3.4l1.6 1.8H18a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><circle cx=\"13\" cy=\"13\" r=\"2.3\"/></svg>" },
    { href: "safety-risk-controls.html", nm: "Safety & risk", mt: "2 active", icon: "<svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3 19 6v5c0 5-3 7.6-7 9-4-1.4-7-4-7-9V6z\"/><path d=\"M12 8.4v4\"/><path d=\"M12 15.2v.01\"/></svg>" },
    { href: "reference-documents.html", nm: "Reference documents", mt: "42 documents", icon: "<svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 3h7l4 4v14H7z\"/><path d=\"M14 3v4h4\"/><path d=\"M10 12h6M10 15.5h6\"/></svg>" }
  ]
};

/* --- Status Board: per-anchor status dataset, zones, rollup ---------------
   boardAnchors is the 54-record status dataset the Selected Anchor panel
   renders from; boardZones groups tiles per zone (ids in gidx order) with the
   zone rollup; boardStatus/boardAttention feed the header line and alerts.
   A tile shows the incident marker when it carries a reason but is not itself
   in the issue phase. */
export const boardAnchors = {
  "B01": {"id":"B01","zone":"Spillway Face","phase":"complete","phaseName":"Tested","work":"Tested","design":"15.7 m","actual":"15.8 m","variance":"+0.1 m","varBad":false,"updated":"3 hrs ago","by":"R. Patel","crew":"Team 2","review":"Confirmed","reason":"","findings":"","gidx":1},
  "B02": {"id":"B02","zone":"Spillway Face","phase":"complete","phaseName":"Tested","work":"Tested","design":"16.4 m","actual":"16.3 m","variance":"-0.1 m","varBad":false,"updated":"5 hrs ago","by":"M. Tane","crew":"Team 3","review":"Confirmed","reason":"","findings":"","gidx":2},
  "B03": {"id":"B03","zone":"Spillway Face","phase":"complete","phaseName":"Tested","work":"Tested","design":"17.1 m","actual":"17.3 m","variance":"+0.2 m","varBad":false,"updated":"2 hrs ago","by":"K. Olsen","crew":"Team 1","review":"Confirmed","reason":"","findings":"","gidx":3},
  "B04": {"id":"B04","zone":"Spillway Face","phase":"complete","phaseName":"Tested","work":"Tested","design":"17.8 m","actual":"17.8 m","variance":"0.0 m","varBad":false,"updated":"1 day ago","by":"D. Brown","crew":"Team 2","review":"Confirmed","reason":"","findings":"","gidx":4},
  "B05": {"id":"B05","zone":"Spillway Face","phase":"complete","phaseName":"Tested","work":"Tested","design":"18.5 m","actual":"18.3 m","variance":"-0.2 m","varBad":false,"updated":"5 hrs ago","by":"A. Ngata","crew":"Team 3","review":"Confirmed","reason":"","findings":"","gidx":5},
  "B06": {"id":"B06","zone":"Spillway Face","phase":"complete","phaseName":"Tested","work":"Tested","design":"19.2 m","actual":"19.3 m","variance":"+0.1 m","varBad":false,"updated":"2 hrs ago","by":"J. Smith","crew":"Team 1","review":"Confirmed","reason":"","findings":"","gidx":6},
  "B07": {"id":"B07","zone":"Spillway Face","phase":"issue","phaseName":"Requires-Redrill","work":"Drilling","design":"19.9 m","actual":"20.5 m","variance":"+0.6 m","varBad":true,"updated":"5 days ago","by":"R. Patel","crew":"Team 2","review":"Reopened","reason":"Test Failure","findings":"Proof test below target|Re-test scheduled","gidx":7},
  "B08": {"id":"B08","zone":"Spillway Face","phase":"complete","phaseName":"Tested","work":"Tested","design":"15.6 m","actual":"15.8 m","variance":"+0.2 m","varBad":false,"updated":"5 hrs ago","by":"M. Tane","crew":"Team 3","review":"Confirmed","reason":"","findings":"","gidx":8},
  "B09": {"id":"B09","zone":"Spillway Face","phase":"active","phaseName":"Drilled","work":"Drilling","design":"16.3 m","actual":"16.3 m","variance":"0.0 m","varBad":false,"updated":"2 hrs ago","by":"K. Olsen","crew":"Team 1","review":"In progress","reason":"","findings":"","gidx":9},
  "B10": {"id":"B10","zone":"Spillway Face","phase":"active","phaseName":"Drilled","work":"Drilling","design":"17.0 m","actual":"16.8 m","variance":"-0.2 m","varBad":false,"updated":"3 hrs ago","by":"D. Brown","crew":"Team 2","review":"In progress","reason":"","findings":"","gidx":10},
  "B11": {"id":"B11","zone":"Spillway Face","phase":"active","phaseName":"Drilled","work":"Drilling","design":"17.7 m","actual":"17.8 m","variance":"+0.1 m","varBad":false,"updated":"5 hrs ago","by":"A. Ngata","crew":"Team 3","review":"Submitted for QA","reason":"","findings":"","gidx":11},
  "B12": {"id":"B12","zone":"Spillway Face","phase":"active","phaseName":"Drilled","work":"Drilling","design":"18.4 m","actual":"18.3 m","variance":"-0.1 m","varBad":false,"updated":"2 hrs ago","by":"J. Smith","crew":"Team 1","review":"In progress","reason":"","findings":"","gidx":12},
  "B13": {"id":"B13","zone":"Spillway Face","phase":"onhold","phaseName":"For Testing","work":"For testing","design":"19.1 m","actual":"19.3 m","variance":"+0.2 m","varBad":false,"updated":"2 days ago","by":"R. Patel","crew":"Team 2","review":"Submitted for QA","reason":"","findings":"","gidx":13},
  "B14": {"id":"B14","zone":"Spillway Face","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"19.8 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 3","review":"Not started","reason":"","findings":"","gidx":14},
  "B15": {"id":"B15","zone":"Spillway Face","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"15.5 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":15},
  "B16": {"id":"B16","zone":"Spillway Face","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"16.2 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 2","review":"Not started","reason":"","findings":"","gidx":16},
  "B17": {"id":"B17","zone":"Spillway Face","phase":"complete","phaseName":"Tested","work":"Tested","design":"16.9 m","actual":"16.8 m","variance":"-0.1 m","varBad":false,"updated":"2 days ago","by":"A. Ngata","crew":"Team 3","review":"Submitted for QA","reason":"","findings":"","gidx":17},
  "B18": {"id":"B18","zone":"Spillway Face","phase":"active","phaseName":"Drilled","work":"Drilling","design":"17.6 m","actual":"17.8 m","variance":"+0.2 m","varBad":false,"updated":"2 hrs ago","by":"J. Smith","crew":"Team 1","review":"In progress","reason":"","findings":"","gidx":18},
  "B19": {"id":"B19","zone":"Stilling Basin","phase":"complete","phaseName":"Tested","work":"Tested","design":"18.3 m","actual":"18.3 m","variance":"0.0 m","varBad":false,"updated":"3 hrs ago","by":"R. Patel","crew":"Team 2","review":"Confirmed","reason":"","findings":"","gidx":19},
  "B20": {"id":"B20","zone":"Stilling Basin","phase":"complete","phaseName":"Tested","work":"Tested","design":"19.0 m","actual":"18.8 m","variance":"-0.2 m","varBad":false,"updated":"5 hrs ago","by":"M. Tane","crew":"Team 3","review":"Confirmed","reason":"","findings":"","gidx":20},
  "B21": {"id":"B21","zone":"Stilling Basin","phase":"active","phaseName":"Drilled","work":"Drilling","design":"19.7 m","actual":"19.8 m","variance":"+0.1 m","varBad":false,"updated":"2 hrs ago","by":"K. Olsen","crew":"Team 1","review":"Submitted for QA","reason":"","findings":"","gidx":21},
  "B22": {"id":"B22","zone":"Stilling Basin","phase":"active","phaseName":"Drilled","work":"Drilling","design":"15.4 m","actual":"15.3 m","variance":"-0.1 m","varBad":false,"updated":"3 hrs ago","by":"D. Brown","crew":"Team 2","review":"In progress","reason":"","findings":"","gidx":22},
  "B23": {"id":"B23","zone":"Stilling Basin","phase":"issue","phaseName":"Requires-Redrill","work":"Drilling","design":"18.0 m","actual":"19.2 m","variance":"+1.2 m","varBad":true,"updated":"2 hrs ago","by":"J. Smith","crew":"Team 2","review":"Submitted for QA","reason":"Redrill Required","findings":"Depth variance|Requires redrill","gidx":23},
  "B24": {"id":"B24","zone":"Stilling Basin","phase":"onhold","phaseName":"For Testing","work":"For testing","design":"16.8 m","actual":"16.8 m","variance":"0.0 m","varBad":false,"updated":"1 day ago","by":"J. Smith","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":24},
  "B25": {"id":"B25","zone":"Stilling Basin","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"17.5 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 2","review":"Not started","reason":"","findings":"","gidx":25},
  "B26": {"id":"B26","zone":"Stilling Basin","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"18.2 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 3","review":"Not started","reason":"","findings":"","gidx":26},
  "B27": {"id":"B27","zone":"Stilling Basin","phase":"active","phaseName":"Drilled","work":"Drilling","design":"18.9 m","actual":"18.8 m","variance":"-0.1 m","varBad":false,"updated":"2 hrs ago","by":"K. Olsen","crew":"Team 1","review":"In progress","reason":"","findings":"","gidx":27},
  "B28": {"id":"B28","zone":"Stilling Basin","phase":"complete","phaseName":"Tested","work":"Tested","design":"19.6 m","actual":"19.8 m","variance":"+0.2 m","varBad":false,"updated":"1 day ago","by":"D. Brown","crew":"Team 2","review":"Submitted for QA","reason":"","findings":"","gidx":28},
  "B29": {"id":"B29","zone":"Stilling Basin","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"15.3 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 3","review":"Not started","reason":"","findings":"","gidx":29},
  "B30": {"id":"B30","zone":"Stilling Basin","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"16.0 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":30},
  "B31": {"id":"B31","zone":"Stilling Basin","phase":"active","phaseName":"Drilled","work":"Drilling","design":"16.7 m","actual":"16.8 m","variance":"+0.1 m","varBad":false,"updated":"3 hrs ago","by":"R. Patel","crew":"Team 2","review":"Submitted for QA","reason":"Incident Submitted","findings":"Incident logged|Awaiting PM review","gidx":31},
  "B32": {"id":"B32","zone":"Stilling Basin","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"17.4 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 3","review":"Not started","reason":"","findings":"","gidx":32},
  "B33": {"id":"B33","zone":"Left Abutment","phase":"active","phaseName":"Drilled","work":"Drilling","design":"18.1 m","actual":"18.3 m","variance":"+0.2 m","varBad":false,"updated":"2 hrs ago","by":"K. Olsen","crew":"Team 1","review":"In progress","reason":"","findings":"","gidx":33},
  "B34": {"id":"B34","zone":"Left Abutment","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"18.8 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 2","review":"Not started","reason":"","findings":"","gidx":34},
  "B35": {"id":"B35","zone":"Left Abutment","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"19.5 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 3","review":"Not started","reason":"","findings":"","gidx":35},
  "B36": {"id":"B36","zone":"Left Abutment","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"15.2 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":36},
  "B37": {"id":"B37","zone":"Left Abutment","phase":"onhold","phaseName":"For Testing","work":"For testing","design":"15.9 m","actual":"15.8 m","variance":"-0.1 m","varBad":false,"updated":"2 days ago","by":"R. Patel","crew":"Team 2","review":"Not started","reason":"","findings":"","gidx":37},
  "B38": {"id":"B38","zone":"Left Abutment","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"16.6 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 3","review":"Not started","reason":"","findings":"","gidx":38},
  "B39": {"id":"B39","zone":"Left Abutment","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"17.3 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":39},
  "B40": {"id":"B40","zone":"Left Abutment","phase":"active","phaseName":"Drilled","work":"Drilling","design":"18.0 m","actual":"17.8 m","variance":"-0.2 m","varBad":false,"updated":"3 hrs ago","by":"D. Brown","crew":"Team 2","review":"Submitted for QA","reason":"","findings":"","gidx":40},
  "B41": {"id":"B41","zone":"Left Abutment","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"18.7 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 3","review":"Not started","reason":"","findings":"","gidx":41},
  "B42": {"id":"B42","zone":"Left Abutment","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"19.4 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":42},
  "P01": {"id":"P01","zone":"Crest Gallery","phase":"complete","phaseName":"Tested","work":"Tested","design":"15.7 m","actual":"15.8 m","variance":"+0.1 m","varBad":false,"updated":"3 hrs ago","by":"R. Patel","crew":"Team 2","review":"Confirmed","reason":"","findings":"","gidx":43},
  "P02": {"id":"P02","zone":"Crest Gallery","phase":"complete","phaseName":"Tested","work":"Tested","design":"16.4 m","actual":"16.3 m","variance":"-0.1 m","varBad":false,"updated":"5 hrs ago","by":"M. Tane","crew":"Team 3","review":"Confirmed","reason":"","findings":"","gidx":44},
  "P03": {"id":"P03","zone":"Crest Gallery","phase":"complete","phaseName":"Tested","work":"Tested","design":"17.1 m","actual":"17.3 m","variance":"+0.2 m","varBad":false,"updated":"2 days ago","by":"K. Olsen","crew":"Team 1","review":"Confirmed","reason":"","findings":"","gidx":45},
  "P04": {"id":"P04","zone":"Crest Gallery","phase":"active","phaseName":"Drilled","work":"Drilling","design":"17.8 m","actual":"17.8 m","variance":"0.0 m","varBad":false,"updated":"3 hrs ago","by":"D. Brown","crew":"Team 2","review":"In progress","reason":"","findings":"","gidx":46},
  "P05": {"id":"P05","zone":"Crest Gallery","phase":"active","phaseName":"Drilled","work":"Drilling","design":"18.5 m","actual":"18.3 m","variance":"-0.2 m","varBad":false,"updated":"5 hrs ago","by":"A. Ngata","crew":"Team 3","review":"Submitted for QA","reason":"","findings":"","gidx":47},
  "P06": {"id":"P06","zone":"Crest Gallery","phase":"onhold","phaseName":"For Testing","work":"For testing","design":"19.2 m","actual":"19.3 m","variance":"+0.1 m","varBad":false,"updated":"1 day ago","by":"J. Smith","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":48},
  "P07": {"id":"P07","zone":"Crest Gallery","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"19.9 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 2","review":"Not started","reason":"","findings":"","gidx":49},
  "P08": {"id":"P08","zone":"Crest Gallery","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"15.6 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 3","review":"Not started","reason":"","findings":"","gidx":50},
  "P09": {"id":"P09","zone":"Crest Gallery","phase":"complete","phaseName":"Tested","work":"Tested","design":"16.3 m","actual":"—","variance":"—","varBad":false,"updated":"2 hrs ago","by":"K. Olsen","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":51},
  "P10": {"id":"P10","zone":"Crest Gallery","phase":"complete","phaseName":"Tested","work":"Tested","design":"17.0 m","actual":"—","variance":"—","varBad":false,"updated":"3 hrs ago","by":"D. Brown","crew":"Team 2","review":"Not started","reason":"","findings":"","gidx":52},
  "P11": {"id":"P11","zone":"Crest Gallery","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"17.7 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 3","review":"Not started","reason":"","findings":"","gidx":53},
  "P12": {"id":"P12","zone":"Crest Gallery","phase":"planned","phaseName":"Planned","work":"Scheduled","design":"18.4 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":54}
};

export const boardZones = [
  { name: "Spillway Face", pct: 44, count: "18 items · 8 tested", ids: ["B01","B02","B03","B04","B05","B06","B07","B08","B09","B10","B11","B12","B13","B14","B15","B16","B17","B18"] },
  { name: "Stilling Basin", pct: 21, count: "14 items · 3 tested", ids: ["B19","B20","B21","B22","B23","B24","B25","B26","B27","B28","B29","B30","B31","B32"] },
  { name: "Left Abutment", pct: 0, count: "10 items · 0 tested", ids: ["B33","B34","B35","B36","B37","B38","B39","B40","B41","B42"] },
  { name: "Crest Gallery · Piles", pct: 42, count: "12 items · 5 tested", ids: ["P01","P02","P03","P04","P05","P06","P07","P08","P09","P10","P11","P12"] }
];

export const boardStatus = { pct: 26, confirmed: 14, total: 54, drilled: 13, qa: 8, issues: 2 };

export const boardAttention = [
  { id: "B07", text: "Test failure", zone: "Spillway Face" },
  { id: "B23", text: "Redrill required", zone: "Stilling Basin" },
  { id: "B31", text: "Incident submitted", zone: "Stilling Basin" }
];
