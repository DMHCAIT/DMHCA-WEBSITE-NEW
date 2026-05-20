with open('src/lib/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {}

# ── 1. fellowship-in-maxillofacial-and-oral-surgery ──────────────────────────
replacements['fellowship-in-maxillofacial-and-oral-surgery'] = {
    'next': 'fellowship-in-pediatrics-neurology',
    'new': '''    id: "fellowship-in-maxillofacial-and-oral-surgery",
    slug: "fellowship-in-maxillofacial-and-oral-surgery",
    title: "Fellowship In Maxillofacial & Oral Surgery",
    category: "Fellowship",
    duration: "50 week",
    lessons: 46,
    fee: "\u20b91,10,000",
    level: "Expert",
    eligibility: "MDS in DCI recognized institutions",
    overview: "The Fellowship in Maxillofacial and Oral Surgery is a specialized program designed for dental and medical professionals to gain expertise in diagnosing and managing complex oral and facial conditions. This comprehensive course covers trauma surgery, orthognathic procedures, implantology, TMJ disorders, and oral cancer management. Participants will receive hands-on training in surgical techniques, anesthesia, and postoperative care. Ideal for dentists, oral surgeons, and healthcare practitioners, this fellowship provides in-depth knowledge and practical skills to excel in maxillofacial and oral surgery.",
    whatYouLearn: [
      "Basics of maxillofacial and oral surgery",
      "Management of facial trauma & fractures",
      "Orthognathic surgery techniques",
      "Dental implantology & bone grafting",
      "TMJ disorders diagnosis & treatment",
      "Oral cancer detection & management",
      "Surgical anesthesia & pain management",
      "Hands-on training in advanced procedures",
    ],
    eligibilityPoints: [
      "MDS in DCI recognized institutions",
    ],
    modules: [
      { title: "Medicine, Surgery, and Anesthesia", lessons: ["Wound Healing", "Medical Management and Preoperative Patient Assessment", "Pharmacology of Outpatient Anesthesia Medications", "Outpatient Anesthesia"] },
      { title: "Dentoalveolar and Implant Surgery", lessons: ["Impacted Teeth", "Maxillofacial Surgical Applications", "Implant Prosthodontics", "Comprehensive Implant Site Preparation", "Soft Tissue Management in Implant Therapy", "Craniofacial Implant Surgery"] },
      { title: "Maxillofacial Trauma", lessons: ["Initial Management of the Trauma Patient", "Soft Tissue Injuries", "Management of Alveolar and Dental Fractures", "Contemporary Management of Mandibular Fractures", "Fractures of the Mandibular Condyle", "Management of Maxillary Fractures", "Management of Zygomatic Complex Fractures", "Orbital and Ocular Trauma", "Management of Frontal Sinus and Nasal Fractures"] },
      { title: "Maxillofacial Pathology/Infections", lessons: ["Principles of Management of Maxillofacial Infections", "Differential Diagnosis of Oral Disease", "Odontogenic Cysts and Tumors", "Benign Nonodontogenic Lesions of the Jaws", "Oral Cancer", "Head and Neck Skin Cancer", "Salivary Gland Disease", "Mucosal and Related Dermatologic Diseases"] },
      { title: "Maxillofacial Reconstruction", lessons: ["Local and Regional Flaps", "Vascularized and Neovascularized Hard", "Micro neurosurgery", "Cleft Lip and Palate", "Reconstruction of the Alveolar Cleft", "No syndromic Craniosynostosis", "Craniofacial Dysostosis Syndromes", "Craniofacial Growth and Development"] },
      { title: "Orthognathic Surgery", lessons: ["Orthodontics for Orthognathic Surgery", "Model Surgery and Virtual Planning", "Mandibular Orthognathic Surgery", "Principles of Maxillary Orthognathic Surgery", "Complications of Orthognathic Surgery"] },
      { title: "Facial Aesthetic Surgery", lessons: ["Blepharoplasty", "Basic Principles of Rhinoplasty", "Rhytidectomy", "Forehead and Brow Procedures", "Otoplastic Surgery for the Protruding Ear", "Adjunctive Facial Aesthetic Procedures"] },
    ],
    enrolled: 25,
    quizzes: 0,
    maxStudents: 30,
    language: "English",
    curriculum: [
      "Dentoalveolar Surgery & Extractions",
      "Maxillofacial Trauma Management",
      "Orthognathic Surgery",
      "TMJ Disorders & Facial Pain",
      "Head & Neck Oncology & Reconstruction",
    ],
    description: "Advanced fellowship for dental/medical professionals in maxillofacial trauma, orthognathic surgery, implantology, TMJ, and oral cancer.",
    image: "/dmhca_images/Fellowship/Fellowship in Maxillofacial and Oral Surgery.jfif",
    tag: "",
    externalUrl: "https://dmhca.in/courses/fellowship-in-maxillofacial-and-oral-surgery/",
    faqs: [
      { q: "Who is eligible for a Fellowship in maxillofacial and oral surgery?", a: "Designed for oral surgeons, dental graduates (BDS), and practitioners aiming to gain specialized surgical expertise beyond basic dental training." },
      { q: "What advanced surgical expertise does this fellowship provide?", a: "This fellowship focuses on comprehensive training in facial trauma, corrective jaw surgery, dentoalveolar surgery, and complex oral surgical procedures, enhancing advanced clinical skills." },
      { q: "How long is the training period for this oral surgery fellowship?", a: "The program includes extensive clinical exposure and hands-on surgical practice over a structured period , see the course page for the exact duration." },
      { q: "What career paths open up after completing this fellowship?", a: "Candidates can work as oral and maxillofacial surgeons, clinical consultants, surgical specialists, or lead surgical teams in hospitals and specialty centers." },
      { q: "What is the fee for the Fellowship in maxillofacial and oral surgery?", a: "Fee details vary based on training and clinical exposure; complete pricing is available upon inquiry or enrollment request." },
      { q: "Can this echocardiography certification boost my earning potential?", a: "Yes \u2014 specialized training enhances your professional credibility and job prospects, often leading to better roles and higher compensation in cardiac imaging." },
    ],
  },''',
}

# ── 2. fellowship-in-pediatrics-neurology ────────────────────────────────────
replacements['fellowship-in-pediatrics-neurology'] = {
    'next': 'fellowship-in-intensive-care-medicine',
    'new': '''    id: "fellowship-in-pediatrics-neurology",
    slug: "fellowship-in-pediatrics-neurology",
    title: "Fellowship In Pediatric Neurology",
    category: "Fellowship",
    duration: "50 week",
    lessons: 44,
    fee: "\u20b91,70,000",
    level: "Expert",
    eligibility: "MD / DCH / DNB Pediatrics",
    overview: "The Fellowship in Pediatric Neurology is a specialized program designed for healthcare professionals to gain expertise in diagnosing and managing neurological disorders in children. This comprehensive course covers neurodevelopmental disorders, epilepsy, neuromuscular diseases, neurogenetics, and pediatric stroke. Participants will receive hands-on training in clinical evaluation, neuroimaging, and electrophysiology. Ideal for pediatricians, neurologists, and healthcare practitioners, this fellowship provides in-depth knowledge and practical skills to excel in the field of pediatric neurology.",
    whatYouLearn: [
      "Basics of pediatric neurology",
      "Diagnosis & management of epilepsy",
      "Neurodevelopmental disorder assessment",
      "Neuromuscular diseases & treatments",
      "Pediatric stroke & neurovascular conditions",
      "Neurogenetics & metabolic disorders",
      "Interpretation of neuroimaging & EEG",
      "Hands-on clinical training & case studies",
    ],
    eligibilityPoints: [
      "MD / DCH / DNB Pediatrics",
    ],
    modules: [
      { title: "Module 1: Basics of Pediatric Neurology & Clinical Approach", lessons: ["Developmental neuroanatomy and neurophysiology", "Pediatric neurological history & examination", "Developmental milestones and assessment tools", "Approach to hypotonia (floppy infant)", "Approach to developmental delay & regression", "Neuroimaging basics (MRI/CT in children)", "Pediatric neurological localization", "Basics of neurogenetics & counseling"] },
      { title: "Module 2: Pediatric Epilepsy & EEG", lessons: ["Classification of seizures in children", "Neonatal seizures", "Epileptic encephalopathies", "Status epilepticus protocols", "Anti-seizure medications (indications & dosing)", "EEG basics and interpretation", "Video EEG monitoring (overview)", "Drug-resistant epilepsy (overview)"] },
      { title: "Module 3: Neurodevelopmental & Behavioral Neurology", lessons: ["Autism spectrum disorder", "ADHD and learning disorders", "Intellectual disability", "Global developmental delay", "Early intervention & rehabilitation strategies", "Cerebral palsy (types, evaluation & management)", "Behavioral assessment tools in pediatrics"] },
      { title: "Module 4: Neuromuscular & Neurogenetic Disorders", lessons: ["Muscular dystrophies (Duchenne, Becker)", "Spinal muscular atrophy", "Congenital myopathies", "Peripheral neuropathies in children", "Neuromuscular junction disorders (Myasthenia gravis)", "Inborn errors of metabolism (neurological presentation)", "Leukodystrophies & mitochondrial disorders"] },
      { title: "Module 5: Neuroinfections, Movement Disorders & Neurocritical Care", lessons: ["Meningitis, encephalitis & CNS tuberculosis", "Autoimmune encephalitis & ADEM", "Pediatric movement disorders (dystonia, chorea, ataxia, tics)", "Acute flaccid paralysis", "Guillain\u2013Bar\u00e9 syndrome", "Raised intracranial pressure management", "Pediatric stroke & neurovascular disorders", "Neurological emergencies in PICU"] },
      { title: "Module 6: Neonatal Neurology, & Clinical Integration", lessons: ["Hypoxic ischemic encephalopathy (HIE)", "Neonatal tone abnormalities", "Intraventricular hemorrhage", "Neonatal metabolic encephalopathy", "Pediatric headache & migraine", "Sleep disorders in children"] },
    ],
    enrolled: 25,
    quizzes: 0,
    maxStudents: 30,
    language: "English",
    curriculum: [
      "Pediatric Neurological Examination & Assessment",
      "Epilepsy & Seizure Disorders in Children",
      "Neurodevelopmental Disorders",
      "Pediatric Neuromuscular Diseases",
      "Neuroimaging & EEG Interpretation",
    ],
    description: "Specialized fellowship covering pediatric epilepsy, neurodevelopmental disorders, neuromuscular diseases, and neuroimaging in children.",
    image: "/dmhca_images/Fellowship/Fellowship in Pediatric Neurology.jfif",
    tag: "",
    externalUrl: "https://dmhca.in/courses/fellowship-in-pediatrics-neurology/",
    faqs: [
      { q: "Who can enroll in this Fellowship in Pediatrics Neurology?", a: "This online program is suitable for MD, DCH, or DNB Pediatrics qualified professionals seeking to enhance their expertise in pediatric neurology." },
      { q: "What specialized topics are covered in the Pediatrics Neurology fellowship at DMHCA?", a: "This fellowship from DMHCA covers neurological assessment in children, seizure management, developmental disorders, pediatric neurodiagnostics, and evidence-based clinical approaches." },
      { q: "How do learners access the Pediatrics Neurology fellowship program at DMHCA?", a: "The course is delivered via online lectures, expert-led discussions, pediatric case reviews, and comprehensive digital study materials, allowing flexible learning from anywhere." },
      { q: "What improvements can this fellowship bring to my pediatric practice?", a: "Completing this fellowship helps strengthen pediatric neurological assessment skills, boost diagnostic confidence, and enhance professional credibility in child neurology care." },
      { q: "How much does the fellowship in Pediatrics Neurology at DMHCA cost?", a: "Fees depend on course structure and included learning resources; complete pricing information is shared upon inquiry or enrollment request." },
      { q: "Can this fellowship from DMHCA increase my career opportunities and earning potential?", a: "Yes, This advanced online training in pediatric neurology can boost your professional profile, expand clinical roles, and support better income opportunities in child health and neurological care." },
    ],
  },''',
}

# ── 3. fellowship-in-intensive-care-medicine ─────────────────────────────────
replacements['fellowship-in-intensive-care-medicine'] = {
    'next': 'fellowship-in-pediatric-surgery',
    'new': '''    id: "fellowship-in-intensive-care-medicine",
    slug: "fellowship-in-intensive-care-medicine",
    title: "Fellowship In Intensive Care Medicine",
    category: "Fellowship",
    duration: "52 week",
    lessons: 77,
    fee: "\u20b91,95,000",
    level: "Expert",
    eligibility: "MBBS and Above Qualification",
    overview: "The Fellowship in Intensive Care Medicine is designed for medical professionals seeking advanced training in critical care. This program equips participants with essential skills in managing critically ill patients, ventilatory support, hemodynamic monitoring, and emergency procedures. With hands-on clinical experience and expert mentorship, fellows develop expertise in ICU protocols, patient stabilization, and multidisciplinary teamwork. Ideal for doctors aiming to specialize in intensive care, this fellowship enhances career prospects in hospitals, trauma centers, and critical care units.",
    whatYouLearn: [
      "ICU protocols & patient monitoring",
      "Advanced life support (ACLS, BLS)",
      "Mechanical ventilation management",
      "Hemodynamic monitoring techniques",
      "Infection control in critical care",
      "Multidisciplinary patient management",
      "Key ICU procedures (intubation, central lines)",
      "Rapid decision-making in emergencies",
      "Ethical considerations & communication",
      "Latest advancements in intensive care",
    ],
    eligibilityPoints: [
      "MBBS and Above Qualification",
    ],
    modules: [
      { title: "Module 1: Foundations of Critical Care", lessons: ["Organization of ICU and levels of care", "ICU ethics and medico-legal aspects", "Infection control and ICU protocols", "Severity scoring systems (APACHE, SOFA)", "Monitoring systems in ICU", "Evidence-based critical care practice"] },
      { title: "Module 2: Respiratory Critical Care", lessons: ["Acute respiratory failure", "ARDS (Berlin criteria)", "Oxygen delivery systems", "Non-invasive ventilation (NIV)", "Invasive mechanical ventilation (modes & settings)", "Ventilator waveforms interpretation", "Weaning and extubation protocols", "Airway management and difficult airway"] },
      { title: "Module 3: Cardiovascular Critical Care", lessons: ["Shock (septic, cardiogenic, hypovolemic, obstructive)", "Hemodynamic monitoring (invasive & non-invasive)", "Vasopressors and inotropes", "Acute coronary syndromes", "Cardiac arrhythmias in ICU", "Cardiac tamponade", "Post-cardiac arrest care", "Basics of echocardiography in ICU"] },
      { title: "Module 4: Sepsis & Infectious Diseases in ICU", lessons: ["Sepsis and septic shock (current guidelines)", "Antimicrobial stewardship", "ICU-acquired infections", "Multidrug-resistant organisms", "Source control strategies", "Fungal and viral infections in ICU"] },
      { title: "Module 5: Neurological Critical Care", lessons: ["Coma assessment and brain death criteria", "Raised intracranial pressure management", "Status epilepticus", "Stroke management in ICU", "Traumatic brain injury", "Neuromuscular respiratory failure"] },
      { title: "Module 6: Renal & Electrolyte Disorders", lessons: ["Acute kidney injury (AKI)", "Indications for renal replacement therapy (RRT)", "CRRT principles", "Electrolyte disturbances", "Acid-base disorders", "Fluid balance and resuscitation strategies"] },
      { title: "Module 7: Gastrointestinal & Hepatic Critical Care", lessons: ["Acute liver failure", "GI bleeding in ICU", "Pancreatitis", "Intra-abdominal hypertension", "Nutrition in critically ill patients (enteral & parenteral)"] },
      { title: "Module 8: Endocrine & Metabolic Emergencies", lessons: ["Diabetic ketoacidosis (DKA)", "Hyperosmolar hyperglycemic state", "Thyroid storm & myxedema coma", "Adrenal crisis", "Glycemic control in ICU", "Nutrition & metabolic support"] },
      { title: "Module 9: Trauma & Emergency Critical Care", lessons: ["Polytrauma management", "ATLS principles overview", "Massive transfusion protocols", "Burn management basics", "Poisoning and toxicology", "Disaster management principles"] },
      { title: "Module 10: Obstetric & Pediatric Critical Care (Overview)", lessons: ["Obstetric emergencies in ICU", "Preeclampsia & eclampsia", "Pediatric resuscitation basics", "Neonatal stabilization (overview)", "Special considerations in vulnerable populations"] },
      { title: "Module 11: Procedures & Point-of-Care Skills", lessons: ["Endotracheal intubation", "Central venous catheterization", "Arterial line placement", "Chest tube insertion", "Lumbar puncture (when indicated)", "Point-of-care ultrasound (POCUS)", "Basic echocardiography in ICU", "Pericardiocentesis (observation/assist)"] },
      { title: "Module 12: ICU Quality, Research & Leadership", lessons: ["ICU quality indicators", "Clinical audit and morbidity meetings", "Research methodology & biostatistics", "Journal club presentations", "Communication with families", "End-of-life care & breaking bad news", "Team leadership and burnout prevention"] },
    ],
    enrolled: 28,
    quizzes: 0,
    maxStudents: 30,
    language: "English",
    curriculum: [
      "Critical Care Fundamentals & ICU Protocols",
      "Mechanical Ventilation & Respiratory Support",
      "Hemodynamic Monitoring & Shock Management",
      "Sepsis, Infections & Antimicrobial Stewardship",
      "Neurological, Renal & Metabolic Critical Care",
    ],
    description: "Advanced ICU fellowship covering mechanical ventilation, hemodynamic monitoring, sepsis, multi-organ support, and critical care procedures.",
    image: "/dmhca_images/Fellowship/Fellowship in Critical Care.jfif",
    tag: "",
    externalUrl: "https://dmhca.in/courses/fellowship-in-intensive-care-medicine/",
    faqs: [
      { q: "Who is eligible to enroll in the Intensive Care Medicine fellowship?", a: "The fellowship is ideal for physicians, critical care practitioners, anesthesiologists, emergency medicine doctors, and healthcare professionals seeking advanced theoretical expertise in intensive care." },
      { q: "What core topics are included in the Fellowship in Intensive Care Medicine?", a: "This course covers critical care principles, ventilator management, shock & sepsis protocols, organ support strategies, and acute critical care decision-making through structured online learning." },
      { q: "How is the Fellowship in Intensive Care Medicine delivered?", a: "The program is conducted through online lectures, expert-led webinars, evidence-based modules, and interactive case discussions, enabling flexible learning from anywhere." },
      { q: "What career benefits can I gain after completing the intensive care fellowship?", a: "Completing this fellowship can help professionals strengthen clinical decision-making skills, enhance critical care knowledge, and improve career prospects in ICU and acute care settings." },
      { q: "What is the fee for the Fellowship in Intensive Care Medicine?", a: "Fees vary based on the course design and learning resources available; exact pricing is provided during enrollment inquiry." },
      { q: "Can this intensive care fellowship enhance my professional income?", a: "Yes , This advanced expertise in intensive care medicine can improve professional credibility, expand clinical roles, and potentially boost earning opportunities in acute care specializations." },
    ],
  },''',
}

# ── 4. fellowship-in-pediatric-surgery ───────────────────────────────────────
replacements['fellowship-in-pediatric-surgery'] = {
    'next': 'fellowship-in-endocrinology',
    'new': '''    id: "fellowship-in-pediatric-surgery",
    slug: "fellowship-in-pediatric-surgery",
    title: "Fellowship In Pediatric Surgery",
    category: "Fellowship",
    duration: "52 week",
    lessons: 36,
    fee: "\u20b91,90,000",
    level: "Expert",
    eligibility: "MBBS /MD/ DNB",
    overview: "The Fellowship in Pediatric Surgery is designed for medical professionals who aspire to specialize in the surgical care of infants, children, and adolescents. This program provides advanced training in diagnosing, managing, and performing surgical procedures for a wide range of congenital and acquired conditions in young patients. Participants will gain hands-on experience in pediatric surgical techniques, pre-operative and post-operative care, and the use of state-of-the-art technologies. With a focus on compassionate care and precision, the fellowship ensures that trainees are well-equipped to handle complex surgical cases in a multidisciplinary setting.",
    whatYouLearn: [
      "Advanced surgical techniques for managing congenital and acquired conditions in neonates, infants, and children.",
      "Comprehensive preoperative, intraoperative, and postoperative care tailored to pediatric patients.",
      "Hands-on experience in minimally invasive and laparoscopic procedures specific to pediatric surgery.",
      "Effective management of pediatric trauma, oncological conditions, and critical surgical emergencies.",
      "Collaboration within multidisciplinary teams to ensure holistic and compassionate care for young patients.",
    ],
    eligibilityPoints: [
      "MBBS /MD/ DNB",
    ],
    modules: [
      { title: "Foundations of Pediatric Surgery", lessons: ["Pediatric Anatomy and Physiology", "Differences in anatomy between children and adults", "Physiological changes during growth", "Age-specific responses to injury and surgery", "Growth and Development", "Stages of physical growth", "Developmental milestones", "Impact of surgical interventions on growth and development", "Congenital Anomalies", "Common congenital malformations", "Surgical correction of congenital defects", "Multidisciplinary approach to congenital anomalies"] },
      { title: "Pediatric Surgical Conditions", lessons: ["Pediatric Oncology", "Types of pediatric cancers", "Surgical management of pediatric tumors"] },
      { title: "Advanced Pediatric Surgical Techniques", lessons: ["Minimally Invasive Surgery", "Principles of minimally invasive techniques", "Advantages of laparoscopic and thoracoscopic surgery", "Instrumentation and technology in minimally invasive surgery", "Robotic Surgery", "Introduction to robotic surgery in pediatrics"] },
      { title: "Preoperative and Postoperative Care Anesthesia in Pediatric Surgery", lessons: ["Pediatric anesthetic agents and techniques", "Preoperative assessment and preparation", "Intraoperative monitoring and management", "Pain Management", "Pain assessment in children", "Pharmacological and non-pharmacological pain management", "Postoperative pain control strategies"] },
      { title: "Research and Academic Development Research Methodology", lessons: ["Basics of clinical and laboratory research", "Study design and data collection", "Statistical analysis and interpretation", "Clinical Trials"] },
      { title: "Professional Development and Ethics Leadership and Management Skills", lessons: ["Leadership styles and theories", "Team management and collaboration", "Conflict resolution and negotiation", "Communication and Interpersonal Skills"] },
    ],
    enrolled: 25,
    quizzes: 0,
    maxStudents: 30,
    language: "English",
    curriculum: [
      "Pediatric Surgical Anatomy & Physiology",
      "Congenital Anomalies & Surgical Correction",
      "Minimally Invasive Pediatric Surgery",
      "Perioperative Care in Children",
      "Pediatric Oncology Surgery",
    ],
    description: "Advanced pediatric surgery fellowship covering congenital anomalies, laparoscopic surgery, trauma, oncology, and perioperative care in children.",
    image: "/dmhca_images/Fellowship/Fellowship in Pediatric Surgery.jfif",
    tag: "",
    externalUrl: "https://dmhca.in/courses/fellowship-in-pediatric-surgery/",
    faqs: [
      { q: "Who will benefit from this pediatric surgery fellowship?", a: "This online program is suitable for MBBS, MD, or DNB-qualified professionals seeking to strengthen their understanding of pediatric surgery." },
      { q: "What key areas are covered in the Pediatric Surgery fellowship?", a: "This fellowship explores surgical principles in children, congenital anomalies, trauma management, perioperative care, and pediatric surgical decision-making through structured expert modules." },
      { q: "What is the course fees to enroll in this fellowship?", a: "Fees vary based on course structure and learning resources included; detailed pricing is provided upon inquiry or enrollment request." },
      { q: "Who will benefit most from enrolling in this pediatric surgery fellowship?", a: "The program is ideal for pediatric surgeons, general surgeons, surgical residents, and healthcare professionals aiming to deepen their understanding of pediatric surgical care through online study." },
      { q: "Can this fellowship help expand career and earning potential?", a: "Yes, This advanced online training in pediatric surgery can boost professional credibility, expand clinical roles, and support higher income opportunities in pediatric surgical and hospital settings." },
    ],
  },''',
}

# ── 5. fellowship-in-endocrinology ───────────────────────────────────────────
replacements['fellowship-in-endocrinology'] = {
    'next': 'fellowship-in-urology',
    'new': '''    id: "fellowship-in-endocrinology",
    slug: "fellowship-in-endocrinology",
    title: "Fellowship In Endocrinology",
    category: "Fellowship",
    duration: "52 week",
    lessons: 16,
    fee: "\u20b91,30,000",
    level: "Expert",
    eligibility: "MBBS and Above Qualification",
    overview: "The Fellowship in Endocrinology at DMHCA is a specialized program designed to equip healthcare professionals with advanced expertise in diagnosing, treating, and managing endocrine disorders. This comprehensive fellowship provides in-depth knowledge of hormonal systems, metabolic pathways, and cutting-edge approaches to patient care. Combining theoretical learning with practical training, the program ensures a balanced understanding of endocrine health and its critical role in overall well-being.",
    whatYouLearn: [
      "In-depth knowledge of endocrine physiology and pathophysiology.",
      "Advanced diagnostic techniques for endocrine and metabolic disorders.",
      "Management of common and complex endocrine diseases such as diabetes, thyroid disorders, and adrenal and pituitary diseases.",
      "Practical skills for hormone therapies and personalized patient care.",
      "Research methodologies to advance clinical practices in endocrinology.",
    ],
    eligibilityPoints: [
      "MBBS and Above Qualification",
    ],
    modules: [
      { title: "Disorders affecting the pituitary, thyroid, and adrenal glands", lessons: ["Investigating Pheochromocytoma", "Exploring disorders of the thyroid gland", "Grasping disorders of the adrenal cortex", "Uncovering disorders of the neurohypophysis"] },
      { title: "Investigating Reproductive Endocrinology", lessons: ["Exploring Disorders of the Testes and Male Reproductive System", "Managing Gynecologic Malignancies", "Grasping Disorders Related to Sex Development", "Comprehending the Female Reproductive System", "Navigating the Menopause Transition and Postmenopausal Hormone Therapy", "Addressing Sexual Dysfunction"] },
      { title: "Exploring Diabetes Mellitus, Obesity, and Lipoprotein Metabolism", lessons: ["Grasping Disorders Related to Lipoprotein Metabolism", "Investigating Diabetes Mellitus"] },
      { title: "Exploring Disorders Affecting Multiple Endocrine Systems", lessons: ["Exploring Endocrine Paraneoplastic Syndromes", "Investigating Endocrine Tumors in the Gastrointestinal Tract and Pancreas"] },
      { title: "Exploring Bone and Calcium Metabolism Disorders", lessons: ["Addressing Hypercalcemia and Hypocalcemia", "Investigating Disorders of the Parathyroid Gland"] },
    ],
    enrolled: 25,
    quizzes: 0,
    maxStudents: 30,
    language: "English",
    curriculum: [
      "Pituitary, Thyroid & Adrenal Disorders",
      "Diabetes Mellitus & Metabolic Syndrome",
      "Reproductive Endocrinology",
      "Bone & Calcium Metabolism Disorders",
      "Endocrine Tumors & Multiple Endocrine Neoplasia",
    ],
    description: "Advanced endocrinology fellowship covering pituitary, thyroid, adrenal, reproductive, and metabolic hormone disorders.",
    image: "/dmhca_images/Fellowship/Fellowship in Endocrinology.jfif",
    tag: "",
    externalUrl: "https://dmhca.in/courses/fellowship-in-endocrinology/",
    faqs: [
      { q: "Who should enroll in the Fellowship in Endocrinology?", a: "This Program is designed for MBBS and higher degree holders, the course offers advanced expertise in the endocrine system for physicians, endocrinologists, and related healthcare professionals online." },
      { q: "What subjects are covered in the Fellowship in Endocrinology?", a: "This fellowship explores hormonal disorders, diabetes management, thyroid and metabolic conditions, adrenal and pituitary disorders, and endocrine system fundamentals through expert modules." },
      { q: "How is the Fellowship in Endocrinology delivered?", a: "The course is conducted via online lectures, expert-led discussions, evidence-based content, and case studies, enabling flexible access to learning from anywhere." },
      { q: "Is the Fellowship in Endocrinology recognized in India?", a: "Yes \u2014 it\u2019s offered by DMHCA, a reputable medical academy focused on quality online education aligned with current endocrinology practice standards." },
      { q: "What career benefits can I expect after this fellowship?", a: "Completing this fellowship helps enhance clinical knowledge, improve endocrine decision-making, and strengthen professional credentials in endocrinology and metabolic care." },
      { q: "What is the fee for the Fellowship in Endocrinology?", a: "Fees vary based on course structure and academic resources provided; complete pricing details are shared during the inquiry or enrollment process." },
    ],
  },''',
}

# ── 6. fellowship-in-urology ─────────────────────────────────────────────────
replacements['fellowship-in-urology'] = {
    'next': 'fellowship-in-psychiatric-medicine',
    'new': '''    id: "fellowship-in-urology",
    slug: "fellowship-in-urology",
    title: "Fellowship In Urology",
    category: "Fellowship",
    duration: "50 week",
    lessons: 35,
    fee: "\u20b91,70,000",
    level: "Expert",
    eligibility: "MD/MS/DNB / Equivalent",
    overview: "The Fellowship in Urology is an intensive, hands-on program designed to equip healthcare professionals with specialized expertise in diagnosing, treating, and managing urological conditions. This 12-month program provides advanced clinical training and research opportunities, focusing on the latest advancements and best practices in urology. With a strong emphasis on patient care and surgical skills, this fellowship prepares participants to become leaders in the field, capable of handling complex urological cases with confidence and precision.",
    whatYouLearn: [
      "Advanced diagnostic techniques for urological conditions",
      "Surgical skills and minimally invasive procedures in urology",
      "Management of urological cancers, including prostate, kidney, and bladder cancer",
      "Comprehensive care for kidney stones, incontinence, and other common urological issues",
      "Principles of pediatric and geriatric urology.",
      "Evidence-based practices and advancements in urological treatments",
    ],
    eligibilityPoints: [
      "MD/MS/DNB / Equivalent",
    ],
    modules: [
      { title: "Clinical anatomy and physiology of the urinary and male  reproductive systems", lessons: ["Anatomical structure of the urinary system", "Physiology of the urinary system", "Anatomical structure of the male reproductive system", "Physiology of the male reproductive system"] },
      { title: "Symptoms of the urological diseases", lessons: ["Pain", "Urination disorders", "Quantitative changes in urine", "Qualitative changes in urine", "Pathological changes of sperm and discharge from the urethra"] },
      { title: "Examination methods of urological patients", lessons: ["Physical examination methods", "Laboratory Diagnostics", "Radiologic examination", "Hardware and instrumental methods of examination"] },
      { title: "Anomalies of the urinary and male reproductive systems", lessons: ["Anomalies of kidneys", "Abnormal development of ureter", "Abnormal development of urinary bladder", "Abnormal development of urethra", "Abnormal development of penis", "Abnormal development of scrotum"] },
      { title: "Inflammatory and infectious diseases", lessons: ["Nonspecific inflammatory diseases", "Tuberculosis of urinary and male reproductive systems", "Parasitic diseases of the urinary and male", "Reproductive systems"] },
      { title: "Urolithiasis", lessons: ["Renal and ureteral concrements", "Stones of the urinary bladder", "Urethral concrements", "Concrements of the prostate gland"] },
      { title: "Traumatic injuries of the urinary and male reproductive systems", lessons: ["Injury of the kidney", "Ureteral injury", "Urinary bladder injury", "Injury of the urethra", "Injury of the scrotum", "Injury of the penis"] },
      { title: "Neoplasm's of urinary and male reproductive systems", lessons: ["The renal parenchyma cancer", "Wilms\u2019 tumor"] },
    ],
    enrolled: 25,
    quizzes: 0,
    maxStudents: 30,
    language: "English",
    curriculum: [
      "Urological Anatomy & Diagnostic Techniques",
      "Urological Oncology (Prostate, Kidney, Bladder)",
      "Endourology & Minimally Invasive Surgery",
      "Urolithiasis & Stone Management",
      "Pediatric & Reconstructive Urology",
    ],
    description: "Advanced urology fellowship covering urological cancers, stone management, endourology, reconstructive procedures, and minimally invasive surgery.",
    image: "/dmhca_images/Fellowship/Fellowship in Urology.jfif",
    tag: "",
    externalUrl: "https://dmhca.in/courses/fellowship-in-urology/",
    faqs: [
      { q: "Who should consider enrolling in the DMHCA Fellowship in Urology?", a: "The course welcomes MD/MS/DNB or equivalent professionals aiming to enhance their theoretical understanding of urological care through flexible online learning." },
      { q: "What advanced urology topics are included in the fellowship curriculum at DMHCA?", a: "This fellowship from DMHCA covers medical and surgical urology principles, urinary tract disorders, prostate and kidney disease management, and evidence-based clinical decision-making." },
      { q: "How will I access the Urology fellowship training delivered by DMHCA?", a: "The course is provided through online lectures, expert-led discussions, clinical scenarios, and digital study materials that learners can access flexibly from anywhere." },
      { q: "What improvements can this fellowship bring to my clinical practice?", a: "Completing this fellowship helps enhance your understanding of urologic conditions, strengthen clinical reasoning, and improve management confidence for both medical and surgical urology cases." },
      { q: "What is the fee for the Fellowship in Urology at DMHCA?", a: "Fees vary depending on course structure and learning resources included; detailed pricing information is shared upon inquiry or enrollment request." },
      { q: "Can completing this online urology fellowship from DMHCA enhance my career and earnings?", a: "Yes, This advanced online training in urology can boost your professional credibility, open up senior clinical roles, and support higher earning potential in urology and surgical practice." },
    ],
  },''',
}

# ── 7. fellowship-in-psychiatric-medicine ────────────────────────────────────
replacements['fellowship-in-psychiatric-medicine'] = {
    'next': 'fellowship-in-diabetology',
    'new': '''    id: "fellowship-in-psychiatric-medicine",
    slug: "fellowship-in-psychiatric-medicine",
    title: "Fellowship In Psychiatric Medicine",
    category: "Fellowship",
    duration: "52 week",
    lessons: 72,
    fee: "\u20b91,20,000",
    level: "Expert",
    eligibility: "MBBS and Above Qualification",
    overview: "Psychiatric medicine is a specialized field focused on diagnosing, treating, and managing mental health disorders. With the rising prevalence of conditions like depression, anxiety, bipolar disorder, and schizophrenia, there is a growing need for skilled professionals in this domain. A Fellowship in Psychiatric Medicine prepares healthcare professionals to provide comprehensive mental health care, combining medical expertise with empathetic patient interactions.",
    whatYouLearn: [
      "Learn to assess and diagnose various mental health conditions through clinical interviews, psychological testing, and medical evaluations.",
      "Handling acute psychiatric emergencies like suicidal tendencies, severe anxiety episodes, and psychosis.",
      "Developing the communication skills and empathy needed to build trust with patients and provide personalized care.",
      "Understanding the neurobiological basis of mental illnesses and the use of medications to manage symptoms.",
      "Navigating the complex ethical and legal issues in psychiatric practice with a focus on patient rights and professional integrity.",
    ],
    eligibilityPoints: [
      "MBBS and Above Qualification",
    ],
    modules: [
      { title: "Module 1: Foundations of Psychiatry", lessons: ["History and evolution of psychiatry", "Classification systems (DSM & ICD overview)", "Mental health laws and ethics", "Biopsychosocial model", "Psychiatric interview techniques"] },
      { title: "Module 2: Psychopathology & Diagnostic Assessment", lessons: ["Mental Status Examination (MSE)", "Descriptive psychopathology", "Symptomatology of major psychiatric disorders", "Diagnostic formulation", "Use of psychiatric rating scales", "Differential diagnosis in psychiatry", "Cultural aspects of psychiatric assessment"] },
      { title: "Module 3: Neurobiology & Psychopharmacology", lessons: ["Neuroanatomy and neurochemistry in psychiatry", "Mechanism of action of psychotropic drugs", "Antidepressants, antipsychotics, mood stabilizers", "Anxiolytics and sedative-hypnotics", "Drug interactions and side effect management", "Personalized psychopharmacology"] },
      { title: "Module 4: Mood Disorders", lessons: ["Major depressive disorder", "Bipolar affective disorder", "Dysthymia and cyclothymia", "Suicide risk assessment and management", "Treatment-resistant depression", "Somatic therapies (ECT basics)"] },
      { title: "Module 5: Schizophrenia & Psychotic Disorders", lessons: ["Schizophrenia spectrum disorders", "Acute and chronic psychosis", "Delusional disorders", "First-episode psychosis management", "Negative symptoms and cognitive deficits", "Long-acting injectable antipsychotics"] },
      { title: "Module 6: Anxiety, Stress & Trauma-Related Disorders", lessons: ["Generalized anxiety disorder", "Panic disorder and phobias", "Obsessive-compulsive disorder", "Post-traumatic stress disorder (PTSD)", "Adjustment disorders", "Stress management techniques"] },
      { title: "\U0001f539 Module 7: Child & Adolescent Psychiatry", lessons: ["Neurodevelopmental disorders (ADHD, autism spectrum disorder)", "Childhood behavioral disorders", "Adolescent mental health issues", "Learning disorders", "School refusal and conduct disorders", "Family-based interventions"] },
      { title: "Module 8: Substance Use & Addiction Psychiatry", lessons: ["Alcohol use disorders", "Opioid and cannabis use disorders", "Tobacco dependence", "Dual diagnosis (substance use + psychiatric illness)", "Detoxification protocols", "Rehabilitation and relapse prevention"] },
      { title: "Module 9: Consultation-Liaison Psychiatry", lessons: ["Psychiatric disorders in medically ill patients", "Delirium and dementia in general hospital settings", "Somatic symptom and related disorders", "Psychosomatic medicine", "Psychological aspects of chronic illness"] },
      { title: "Module 10: Psychotherapy & Counseling Techniques", lessons: ["Cognitive Behavioral Therapy (CBT) basics", "Supportive psychotherapy", "Brief psychotherapy models", "Crisis intervention", "Motivational interviewing", "Family and group therapy overview"] },
      { title: "Module 11: Geriatric & Community Psychiatry", lessons: ["Dementia and late-life depression", "Psychiatric issues in elderly", "Community mental health programs", "Rehabilitation psychiatry", "Social psychiatry and public mental health", "Preventive psychiatry"] },
      { title: "Module 12: Emergency Psychiatry, Research & Clinical Integration", lessons: ["Psychiatric emergencies (suicidality, aggression, delirium)", "Risk assessment and crisis management", "Legal aspects (involuntary admission, capacity assessment)", "Research methodology & biostatistics", "Case documentation and audit", "Ethics, communication, and breaking bad news", "Multidisciplinary team coordination"] },
    ],
    enrolled: 25,
    quizzes: 0,
    maxStudents: 30,
    language: "English",
    curriculum: [
      "Foundations of Psychiatry & Psychopathology",
      "Mood, Psychotic & Anxiety Disorders",
      "Psychopharmacology & Somatic Therapies",
      "Child, Adolescent & Geriatric Psychiatry",
      "Psychotherapy & Psychiatric Emergencies",
    ],
    description: "Advanced psychiatry fellowship covering mood disorders, psychosis, psychopharmacology, psychotherapy, and psychiatric emergencies.",
    image: "/dmhca_images/Fellowship/Fellowship in Psychiatric Medicine.jfif",
    tag: "",
    externalUrl: "https://dmhca.in/courses/fellowship-in-psychiatric-medicine/",
    faqs: [
      { q: "Who should enroll in the Fellowship in Psychiatric Medicine?", a: "The course welcomes MBBS and above-qualified psychiatrists, physicians, and mental health professionals aiming to deepen their understanding of psychiatric medicine online." },
      { q: "What topics are covered in this Fellowship in Psychiatric Medicine at DMHCA?", a: "This fellowship from DMHCA coveres mental health disorders, psychiatric assessment, evidence-based treatment approaches, psychopharmacology, and therapeutic strategies through structured expert modules." },
      { q: "How will I access the training materials and lectures for this psychiatry fellowship?", a: "The course is delivered via online lectures, expert-led discussions, case-focused content, and comprehensive digital study resources that can be accessed flexibly from anywhere." },
      { q: "How can this fellowship help improve my mental health practice?", a: "Completing this fellowship helps enhance clinical understanding, strengthen psychiatric assessment skills, and elevate your professional confidence in mental health care." },
      { q: "What is the fee for the Psychiatric Medicine fellowship at DMHCA?", a: "Fees vary based on course structure and included learning resources; detailed pricing information is provided upon inquiry or enrollment request." },
      { q: "Can advanced online training in psychiatric medicine from DMHCA enhance my career and income potential?", a: "Yes, This program is focused online training in psychiatric medicine can boost your professional credibility, expand clinical roles, and support higher earning opportunities in mental health specialties." },
    ],
  },''',
}

# ── 8. fellowship-in-diabetology ─────────────────────────────────────────────
replacements['fellowship-in-diabetology'] = {
    'next': 'fellowship-in-family-medicine',
    'new': '''    id: "fellowship-in-diabetology",
    slug: "fellowship-in-diabetology",
    title: "Fellowship In Diabetology",
    category: "Fellowship",
    duration: "52 week",
    lessons: 36,
    fee: "\u20b999,000",
    level: "Expert",
    eligibility: "MBBS and Above Qualification",
    overview: "This advanced fellowship is tailored for healthcare professionals who aim to deepen their expertise in the diagnosis, treatment, and long-term management of diabetes. Through a combination of rigorous academic modules, hands-on clinical experience, and the latest in research and innovation, the program provides a holistic approach to diabetology. Fellows will engage in real-world case studies, participate in collaborative problem-solving, and gain practical insights into the complexities of diabetes care. With a focus on personalized patient care, lifestyle interventions, and cutting-edge treatment protocols, this fellowship equips participants with the skills and confidence to excel as leaders in diabetes management across diverse healthcare settings.",
    whatYouLearn: [
      "Advanced diagnostic techniques and tools in diabetology.",
      "Effective treatment plans for type 1 and type 2 diabetes.",
      "Strategies for managing complications of diabetes, including cardiovascular risks.",
      "Patient-centered care approaches for improved outcomes.",
      "Insights into the latest research and emerging trends in diabetes care.",
      "Practical skills through hands-on clinical training and case management.",
    ],
    eligibilityPoints: [
      "MBBS and Above Qualification",
    ],
    modules: [
      { title: "Basic Science Related to Diabetes", lessons: ["History of Diabetes", "Anatomy & Development of Pancreas", "Insulin Biosynthesis & Secretion", "Mechanism of Insulin action and regulation of glucose and Lipid Metabolism", "Gluca gon like Peptide and Insulin like growth factors", "Animal models for the study of Diabetes"] },
      { title: "Diabetology", lessons: ["Definition, Diagnosis and classification of Diabetes", "Epidemiology of Diabetes", "Genetics of Type 1 and Type 2 Diabetes", "Insulin resistance & beta-cell dysfunction in Type 2 Diabetes", "Secondary forms of diabetes", "Maturity Onset Diabetes in Young (MODY)"] },
      { title: "Management of Diabetes", lessons: ["Obesity assessment and Management", "Metabolic Syndrome", "Patient Education", "Medical Nutrition therapy", "Exercise in Patients with Diabetes", "Laboratory investigations in Diabetes", "Oral anti-Diabetic Drugs s", "Principles of Insulin therapy", "Princples of Insulin therapy", "Insulin analogues", "Insulin delivery devices", "Hypoglycemia and its management", "Self-Monitoring of Blood Glucose", "Acute metabolic complications"] },
      { title: "Complications of Diabetes:", lessons: ["Chronic complications", "Epidemiology, Treatment and preventive aspects of vascular Complication", "Hypertension in diabetes", "Foot problems in Diabetes", " Diabetes and Pregnancy", "Sexual dysfunction in Diabetes", "Infection in Diabetes", "Skin and connective tissue disorders in Diabetes", "Bone and Joint problems in Diabetes"] },
      { title: "Prevention of Diabetes", lessons: ["Prevention of Type 1 and 2 Diabetes \u2013 current Strategies and Recent Trials"] },
    ],
    enrolled: 25,
    quizzes: 0,
    maxStudents: 30,
    language: "English",
    curriculum: [
      "Diabetes Pathophysiology & Classification",
      "Insulin Therapy & Oral Antidiabetic Agents",
      "Diabetic Complications Management",
      "Metabolic Syndrome & Obesity",
      "Diabetes Prevention & Patient Education",
    ],
    description: "Advanced diabetology fellowship covering diagnosis, insulin therapy, complications management, and evidence-based diabetes care strategies.",
    image: "/dmhca_images/Fellowship/Fellowship in Diabetology.jfif",
    tag: "",
    externalUrl: "https://dmhca.in/courses/fellowship-in-diabetology/",
    faqs: [
      { q: "Who should enroll in the Fellowship in Diabetology?", a: "This online program is suitable for MBBS and above qualified physicians and healthcare professionals seeking to enhance their skills in diabetes management." },
      { q: "What topics are covered in the Fellowship in Diabetology?", a: "This fellowship includes diabetes pathophysiology, glucose management, complications prevention, therapeutic strategies, and lifestyle intervention protocols for comprehensive diabetes care knowledge." },
      { q: "How is the Fellowship in Diabetology delivered?", a: "The course is conducted via online lectures, expert-led discussions, evidence-based modules, and case studies, enabling flexible study from anywhere you choose." },
      { q: "What career benefits can I expect from this diabetology fellowship?", a: "Completing this fellowship helps improve clinical decision-making, diabetes care expertise, and professional credentials, enhancing your ability to manage complex diabetic cases." },
      { q: "What is the fee for the Fellowship in Diabetology?", a: "Fees vary based on course structure and academic resources provided; complete pricing details are shared upon inquiry or enrollment request." },
      { q: "Can this fellowship improve professional credibility and earning potential?", a: "Yes, This advanced online training in diabetology can boost your professional profile, expand clinical roles, and support higher income opportunities in diabetes care and endocrinology practice." },
    ],
  },''',
}

# ── 9. fellowship-in-family-medicine ─────────────────────────────────────────
replacements['fellowship-in-family-medicine'] = {
    'next': None,  # We'll search for next differently
    'new': '''    id: "fellowship-in-family-medicine",
    slug: "fellowship-in-family-medicine",
    title: "Fellowship In Family Medicine",
    category: "Fellowship",
    duration: "52 week",
    lessons: 73,
    fee: "\u20b91,10,000",
    level: "Expert",
    eligibility: "MBBS and Above Qualification",
    overview: "The Fellowship in Family Medicine is designed to equip physicians with advanced knowledge and skills to provide holistic, patient-centered care across all stages of life. This program integrates medical science with compassionate care, emphasizing preventive medicine, chronic disease management, and interdisciplinary collaboration. Participants will gain hands-on experience and mentorship in various medical settings, preparing them to serve diverse communities and address complex healthcare needs.",
    whatYouLearn: [
      "Advanced clinical skills in diagnosis and treatment for all age groups",
      "Best practices in preventive care and chronic disease management",
      "How to apply evidence-based medicine in everyday practice",
      "Effective patient communication and family-centered care approaches",
      "Leadership and team collaboration in multidisciplinary healthcare environments",
      "Strategies for addressing healthcare disparities in underserved populations",
    ],
    eligibilityPoints: [
      "MBBS and Above Qualification",
    ],
    modules: [
      { title: "Module 1: Principles of Family Medicine", lessons: ["Concept and scope of Family Medicine", "Continuity of care & comprehensive care model", "Patient-centered approach", "Doctor\u2013patient relationship", "Biopsychosocial model", "Ethics and professionalism"] },
      { title: "Module 2: Preventive & Community Medicine in Practice", lessons: ["Health promotion and disease prevention", "National health programs", "Vaccination schedules (adult & pediatric)", "Screening protocols (NCDs, cancers)", "Occupational and environmental health", "Geriatric preventive care"] },
      { title: "Module 3: Acute Care & Common Emergencies", lessons: ["Management of fever and acute infections", "Respiratory emergencies (asthma, COPD exacerbation)", "Acute coronary syndrome recognition", "Shock management (initial stabilization)", "Anaphylaxis", "Trauma basics and first aid", "Basic life support (BLS) & ACLS overview"] },
      { title: "Module 4: Chronic Disease Management", lessons: ["Hypertension", "Diabetes mellitus", "Dyslipidemia", "Thyroid disorders", "Chronic kidney disease", "COPD and asthma", "Long-term follow-up planning"] },
      { title: "Module 5: Maternal & Child Health", lessons: ["Antenatal care", "Postnatal care", "Normal labor (overview)", "Pediatric growth & development monitoring", "Common childhood illnesses", "Family planning and contraception"] },
      { title: "Module 6: Geriatric Medicine", lessons: ["Comprehensive geriatric assessment", "Dementia and depression in elderly", "Falls and osteoporosis", "Polypharmacy management", "End-of-life care principles"] },
      { title: "Module 7: Mental Health in Primary Care", lessons: ["Depression and anxiety disorders", "Substance use disorders", "Somatization disorders", "Stress management", "Basic counseling skills", "Suicide risk screening"] },
      { title: "Module 8: Dermatology & Minor Procedures", lessons: ["Common skin infections", "Eczema and psoriasis", "Acne management", "Wound care and suturing", "Abscess drainage", "Cryotherapy basics"] },
      { title: "Module 9: Orthopedics & Musculoskeletal Disorders", lessons: ["Low back pain", "Osteoarthritis", "Soft tissue injuries", "Fracture first aid", "Joint injections (overview)"] },
      { title: "Module 10: ENT & Ophthalmology in Primary Care", lessons: ["URTI and sinusitis", "Otitis media", "Vertigo", "Red eye evaluation", "Refractive errors", "Screening for glaucoma"] },
      { title: "Module 11: Practice Management & Family Practice Setup", lessons: ["Clinic setup and infrastructure", "Electronic medical records", "Medical documentation", "Billing and coding basics", "Telemedicine", "Medico-legal aspects in primary care"] },
      { title: "Module 12: Research, Communication & Clinical Integration", lessons: ["Evidence-based medicine", "Clinical audit", "Research methodology", "Family conference skills", "Breaking bad news", "Community outreach programs", "Final case presentations"] },
    ],
    enrolled: 25,
    quizzes: 0,
    maxStudents: 30,
    language: "English",
    curriculum: [
      "Principles of Family & Community Medicine",
      "Chronic Disease Management (Diabetes, HTN, COPD)",
      "Preventive Care & Vaccination Protocols",
      "Maternal, Child & Geriatric Health",
      "Mental Health & Minor Procedures in Primary Care",
    ],
    description: "Comprehensive family medicine fellowship covering primary care, chronic disease management, preventive medicine, and community health.",
    image: "/dmhca_images/Fellowship/Fellowship in Family Medicine.jfif",
    tag: "",
    externalUrl: "https://dmhca.in/courses/fellowship-in-family-medicine/",
    faqs: [
      { q: "Who is eligible for a Fellowship in the Family Medicine?", a: "This online program is suitable for MBBS and above qualified physicians and healthcare professionals seeking to enhance holistic patient care skills." },
      { q: "What topics are included in the Fellowship in Family Medicine at DMHCA?", a: "This fellowship from DMHCA explores comprehensive primary care, chronic disease management, preventive medicine, community health, and evidence-based patient care strategies." },
      { q: "How will the Family Medicine fellowship be delivered to learners?", a: "The course is provided via online lectures, expert-led discussions, case studies, and digital resources, allowing flexible learning from anywhere." },
      { q: "How can this fellowship enhance my clinical practice?", a: "Completing this fellowship helps strengthen your primary care skills, improve clinical decision-making, and enhance confidence in managing a wide range of health conditions." },
      { q: "What is the fee for the DMHCA Fellowship in Family Medicine?", a: "Fees vary depending on course structure and included learning materials; detailed pricing information is shared upon inquiry or enrollment request." },
      { q: "Can this fellowship from DMHCA boost my career and income potential?", a: "Yes, This course provide online training in family medicine can boost your professional credibility, expand clinical roles, and support higher earning opportunities in primary care and health system roles." },
    ],
  },''',
}

# Apply all replacements
for slug, data in replacements.items():
    start_marker = f'    id: "{slug}",'
    start = content.find(start_marker)
    if start == -1:
        print(f"ERROR: could not find start for {slug}")
        continue
    
    next_slug = data['next']
    if next_slug:
        end_marker = f'\n  {{\n    id: "{next_slug}"'
        end = content.find(end_marker, start)
    else:
        # fellowship-in-family-medicine - find next entry after it
        # Look for the next top-level entry that's NOT family-medicine
        end_marker = '\n  {\n    id: "fellowship-in-clinical-hematology"'
        end = content.find(end_marker, start)
        if end == -1:
            # Try to find any next entry
            end_marker2 = '\n  {\n    id: "'
            idx = content.find(end_marker2, start + 100)
            end = idx
    
    if end == -1:
        print(f"ERROR: could not find end for {slug}")
        continue
    
    content = content[:start] + data['new'] + content[end:]
    print(f"Updated: {slug}")

with open('src/lib/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("\nDone - all 9 entries updated")
