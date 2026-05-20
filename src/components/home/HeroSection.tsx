export default function HeroSection() {
  return (
    <section 
      style={{ 
        position: 'relative', 
        width: '100%',
        height: 'clamp(400px, 92vh, 100vh)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img
        src="/hero-medical.jpg"
        alt="Medical professionals"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </section>
  );
}
