import type { Metadata } from 'next';
import ProjectCaseStudy, { generateProjectMetadata } from '@/components/project-case-study';

const projectParams = () => Promise.resolve({ slug: 'coin-sorter' });

export async function generateMetadata(): Promise<Metadata> {
  return generateProjectMetadata({ params: projectParams() });
}

export default function CoinSorterPage() {
  return <ProjectCaseStudy params={projectParams()} />;
}
