import Header from '@/components/Header';
import Hero from '@/components/Hero';
import JobCategories from '@/components/JobCategories';
import FeaturedJobs from '@/components/FeaturedJobs';
import CompanySpotlight from '@/components/CompanySpotlight';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <JobCategories />
      <FeaturedJobs />
      <CompanySpotlight />
      <Footer />
    </main>
  );
}