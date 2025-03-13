import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Phone } from 'lucide-react';

interface ChurchCardProps {
  name: string;
  image: string;
  address: string;
  schedule: string;
  phone: string;
  slug: string;
}

export default function ChurchCard({ name, image, address, schedule, phone, slug }: ChurchCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">{name}</h3>
        <div className="space-y-3 text-gray-600">
          <p className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-600" />
            {address}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={16} className="text-blue-600" />
            {schedule}
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} className="text-blue-600" />
            {phone}
          </p>
        </div>
        <Link 
          href={`/igrejas/${slug}`}
          className="mt-6 block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
} 