'use client';

type Faculty = {
  id: number;
  name: string;
  specialization: string;
  image: string;
};

const FACULTY: Faculty[] = [
  {
    id: 1,
    name: 'Dr. Mysara',
    specialization: 'Internal Medicine',
    image: '/Faculty_images/Dr.%20Mysara.png',
  },
  {
    id: 2,
    name: 'Dr. Bhuvaneshwari',
    specialization: 'Cosmetologist / Dermatologist',
    image: '/Faculty_images/Dr%20Bhuvaneshwari.png',
  },
  {
    id: 3,
    name: 'Dr. Kartikeya',
    specialization: 'Endocrinologist',
    image: '/Faculty_images/Dr.%20kartikeya.png',
  },
  {
    id: 4,
    name: 'Dr. Nirvana Ibrahim',
    specialization: 'Ophthalmologist',
    image: '/Faculty_images/Dr%20Nirvana%20Ibrahim.png',
  },
  {
    id: 5,
    name: 'Dr. Prabhdeep Kaur',
    specialization: 'Obs & Gynea Specialist',
    image: '/Faculty_images/Dr.%20Prabhdeep%20Kaur.png',
  },
  {
    id: 6,
    name: 'Dr. Pranesh Jain',
    specialization: 'Nephrologist',
    image: '/Faculty_images/Dr%20Pranesh%20Jain.png',
  },
  {
    id: 7,
    name: 'Dr. Rajeev Gupta',
    specialization: 'Clinical Oncologist',
    image: '/Faculty_images/Dr%20Rajeev%20Gupta.png',
  },
];

export default function TopTrainers() {
  return (
    <section
      style={{
        backgroundColor: '#EEF3F7',
        padding: 'clamp(36px, 5vw, 64px) clamp(16px, 4vw, 24px)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#6FB1A0',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '10px',
            }}
          >
            Faculty
          </p>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              color: '#1A2A33',
              fontWeight: 700,
            }}
          >
            Learn from India&rsquo;s Leading Clinicians
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#5F6F7A',
              fontFamily: 'Inter, sans-serif',
              marginTop: '12px',
              maxWidth: '520px',
              margin: '12px auto 0',
            }}
          >
            Our faculty are actively practising specialists who bring real clinical experience into every teaching session.
          </p>
        </div>

        <div
          className="faculty-marquee"
          style={{
            overflow: 'hidden',
            position: 'relative',
            maskImage:
              'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
          }}
        >
          <div
            className="faculty-marquee-track"
            style={{
              display: 'flex',
              gap: '22px',
              width: 'max-content',
              animation: 'facultyScroll 38s linear infinite',
              paddingBlock: '6px',
            }}
          >
            {[...FACULTY, ...FACULTY].map((member, i) => (
              <div
                key={`${member.id}-${i}`}
                style={{
                  flex: '0 0 240px',
                  backgroundColor: '#fff',
                  borderRadius: '18px',
                  padding: '28px 18px 26px',
                  border: '1px solid #E4EDF3',
                  boxShadow: '0 2px 12px rgba(42,111,151,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '18px',
                    border: '3px solid #EEF3F7',
                    boxShadow: '0 4px 14px rgba(42,111,151,0.12)',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#1A2A33',
                    marginBottom: '6px',
                    lineHeight: 1.3,
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#2A6F97',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {member.specialization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes facultyScroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 11px)); }
        }
        .faculty-marquee:hover .faculty-marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
