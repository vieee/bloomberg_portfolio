import Dashboard from '@/components/Dashboard';
import { fetchAllData } from '@/utils/dataFetcher';

export default async function Home() {
  const data = await fetchAllData();
  
  return (
    <main className="w-screen h-screen">
      <Dashboard data={data} />
    </main>
  );
}
