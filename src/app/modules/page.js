import { moduleStacks, pricingTiers } from '@/data/modules';
import ModulesClient from './ModulesClient';

export const metadata = {
  title: 'All 34 Modules',
  description: 'Every BuildMore AI module — design and engineering intelligence, site monitoring, structural health, disaster prediction, infrastructure health, smart operations, the core intelligence layer and eight extended modules.',
};

export default function ModulesPage() {
  return <ModulesClient stacks={moduleStacks} pricing={pricingTiers} />;
}
