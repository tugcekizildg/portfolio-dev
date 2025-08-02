import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Portfolio Dev | Welcome' },
    { name: 'description', content: 'Custom website for The Portfolio Dev' },
  ];
}

export default function Home() {
  return <>HomePage</>;
}
