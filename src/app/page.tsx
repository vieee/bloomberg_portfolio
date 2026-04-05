import Dashboard from '@/components/Dashboard';
import { portfolioData } from '@/data/portfolioData';

export default function Home() {
  const data = portfolioData;
  
  return (
    <main className="w-screen h-screen">
      <Dashboard data={data} />
    </main>
  );
}
