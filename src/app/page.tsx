import HeroSection from '@/components/home/HeroSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import CareerSection from '@/components/home/CareerSection';
import AccreditationSection from '@/components/home/AccreditationSection';
import LearningExperience from '@/components/home/LearningExperience';
import UniversityPartners from '@/components/home/UniversityPartners';
import EventsSection from '@/components/home/EventsSection';
import TopTrainers from '@/components/home/TopTrainers';
import GoogleReviews from '@/components/home/GoogleReviews';
import TrainingPartners from '@/components/home/TrainingPartners';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <CareerSection />
      <AccreditationSection />
      <LearningExperience />
      <UniversityPartners />
      <EventsSection />
      <TopTrainers />
      <GoogleReviews />
      <TrainingPartners />
    </>
  );
}
