import Image from 'next/image';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export default function EventCard({ title, image, date, time, location, description }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2 text-gray-600">
          <p className="flex items-center gap-2">
            <Calendar size={16} />
            {date}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={16} />
            {time}
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={16} />
            {location}
          </p>
        </div>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
} 