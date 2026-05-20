-- Sample data for DMHCA admin panel
-- Run this to populate your database with demo content

-- Sample Course
INSERT INTO public.programs (id, slug, title, category, published, data) VALUES
(
  'fellowship-in-cardiology',
  'fellowship-in-cardiology',
  'Fellowship in Clinical Cardiology',
  'Fellowship',
  true,
  '{
    "duration": "12 months",
    "lessons": 50,
    "fee": "₹2,50,000",
    "level": "Advanced",
    "eligibility": "MBBS/MD",
    "overview": "Comprehensive fellowship program in clinical cardiology covering all aspects of cardiovascular medicine, diagnostics, and interventional procedures.",
    "whatYouLearn": [
      "Advanced ECG interpretation and cardiac imaging",
      "Interventional cardiology procedures",
      "Management of acute coronary syndromes",
      "Heart failure and cardiomyopathy management",
      "Electrophysiology and arrhythmia treatment"
    ],
    "modules": [
      {
        "title": "Cardiac Imaging",
        "topics": ["Echocardiography", "Cardiac MRI", "CT Angiography"]
      },
      {
        "title": "Interventional Procedures",
        "topics": ["PCI techniques", "Structural interventions", "Device implantation"]
      }
    ],
    "curriculum": [],
    "description": "This fellowship program provides intensive training in all aspects of clinical cardiology, preparing you for independent practice in cardiovascular medicine.",
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    "faqs": [
      {
        "question": "What is the program duration?",
        "answer": "The fellowship is 12 months full-time with clinical rotations and hands-on training."
      },
      {
        "question": "Is accommodation provided?",
        "answer": "Yes, hostel accommodation is available at nominal charges."
      }
    ]
  }'::jsonb
)
ON CONFLICT (id) DO NOTHING;

-- Sample Faculty Members
INSERT INTO public.faculty (name, role, qualification, bio, image_url, display_order, published) VALUES
(
  'Dr. Rajesh Kumar',
  'Director of Cardiology',
  'MD, DM (Cardiology), FACC',
  'Dr. Rajesh Kumar has over 20 years of experience in interventional cardiology. He has performed more than 5,000 cardiac procedures and is a leading expert in complex coronary interventions.',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
  1,
  true
),
(
  'Dr. Priya Sharma',
  'Professor of Medicine',
  'MD, DNB, MRCP',
  'Dr. Priya Sharma specializes in non-invasive cardiology and cardiac imaging. She has published over 50 research papers and is renowned for her teaching excellence.',
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
  2,
  true
),
(
  'Dr. Amit Patel',
  'Senior Consultant',
  'MBBS, MD (Medicine)',
  'Dr. Amit Patel brings 15 years of clinical experience in general medicine and cardiology. He is passionate about medical education and mentoring young doctors.',
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
  3,
  true
)
ON CONFLICT DO NOTHING;

-- Sample Reviews
INSERT INTO public.reviews (name, course, rating, text, image_url, display_order, published) VALUES
(
  'Dr. Suresh Reddy',
  'Fellowship in Clinical Cardiology',
  5,
  'Excellent program with hands-on training. The faculty is highly experienced and supportive. I gained invaluable practical skills that have helped me tremendously in my career.',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
  1,
  true
),
(
  'Dr. Anita Desai',
  'PG Diploma in Diabetology',
  5,
  'Outstanding curriculum and well-structured program. The online modules were comprehensive and the clinical exposure was exceptional. Highly recommend DMHCA.',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
  2,
  true
),
(
  'Dr. Mohammed Ali',
  'Fellowship in Emergency Medicine',
  4,
  'Great learning experience with practical case studies. The certification is well-recognized and has opened many career opportunities for me.',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
  3,
  true
)
ON CONFLICT DO NOTHING;

-- Sample Pages
INSERT INTO public.pages (id, title, content) VALUES
(
  'about',
  'About DMHCA',
  '{
    "sections": [
      {
        "type": "heading",
        "content": "Welcome to Dr. MGR Hospital Courses Academy"
      },
      {
        "type": "paragraph",
        "content": "DMHCA is a premier institution dedicated to providing world-class medical education and training to healthcare professionals across India."
      },
      {
        "type": "paragraph",
        "content": "Our mission is to advance medical knowledge and skills through innovative programs, experienced faculty, and state-of-the-art facilities."
      }
    ]
  }'::jsonb
),
(
  'privacy-policy',
  'Privacy Policy',
  '{
    "sections": [
      {
        "type": "heading",
        "content": "Privacy Policy"
      },
      {
        "type": "paragraph",
        "content": "At DMHCA, we are committed to protecting your privacy and personal information."
      },
      {
        "type": "paragraph",
        "content": "This policy outlines how we collect, use, and safeguard your data when you use our services."
      }
    ]
  }'::jsonb
),
(
  'terms-and-conditions',
  'Terms and Conditions',
  '{
    "sections": [
      {
        "type": "heading",
        "content": "Terms and Conditions"
      },
      {
        "type": "paragraph",
        "content": "By accessing and using DMHCA services, you agree to comply with these terms and conditions."
      }
    ]
  }'::jsonb
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  content = EXCLUDED.content,
  updated_at = now();
