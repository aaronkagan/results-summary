import Image from 'next/image';

export default function DataTile({
  category,
  score,
  icon,
}: {
  category: string;
  score: number;
  icon: string;
}) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Image src={icon} alt={category} width={20} height={20} />
        <p>{category}</p>
      </div>
      <p>
        <span>{score} / 100</span>
      </p>
    </div>
  );
}
