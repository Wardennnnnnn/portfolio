import type { Metadata } from 'next';
import ProjectCaseStudy, { generateProjectMetadata } from '@/components/project-case-study';
import { projectSlugs } from '@/lib/content';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  // Coin Sorter has an explicit route so development does not depend on a
  // cached generateStaticParams list when this project is added.
  return projectSlugs.filter(slug => slug !== 'coin-sorter').map(slug => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: Props): Promise<Metadata> {
  return generateProjectMetadata(props);
}

export default function ProjectPage(props: Props) {
  return <ProjectCaseStudy {...props} />;
}
