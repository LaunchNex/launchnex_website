import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero/Hero';
import Problem from '../components/sections/Problem/Problem';
import Services from '../components/sections/Services/Services';
import TrustCompliance from '../components/sections/TrustCompliance/TrustCompliance';
import WhyUs from '../components/sections/WhyUs/WhyUs';
import CtaBanner from '../components/sections/CtaBanner/CtaBanner';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LaunchNex — AI built for production. Not presentations.</title>
        <meta
          name="description"
          content="LaunchNex is a boutique AI engineering agency. We assess AI feasibility before building, guarantee senior delivery, and monitor your AI for 90 days post-launch."
        />
        <meta property="og:title" content="LaunchNex — AI built for production. Not presentations." />
        <meta
          property="og:description"
          content="LaunchNex is a boutique AI engineering agency. We assess AI feasibility before building, guarantee senior delivery, and monitor your AI for 90 days post-launch."
        />
        <meta property="og:url" content="https://launchnex.dev" />
        <link rel="canonical" href="https://launchnex.dev" />
      </Helmet>

      <Hero />
      <Problem />
      <Services />
      <WhyUs />
      <TrustCompliance />
      <CtaBanner />
    </>
  );
}


//{/* <Process /> */}