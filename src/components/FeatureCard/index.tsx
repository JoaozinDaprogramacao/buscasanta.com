import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  linkText,
  href,
}: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl h-[300px] flex flex-col">
      <div className="flex mb-6">
        <Icon className="w-16 h-16 text-blue-600" />
      </div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link
        href={href}
        className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2"
      >
        {linkText} →
      </Link>
    </div>
  );
} 