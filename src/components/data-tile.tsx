import Image from 'next/image';

export default function DataTile({
  category,
  score,
  icon,
  color,
}: {
  category: string;
  score: number;
  icon: string;
  color: string;
}) {
  return (
    <div
      className={`flex justify-between bg-red-50  text-[#d58a8b] p-3 rounded-lg`}
    >
      <div className="flex gap-2">
        <Image src={icon} alt={category} width={20} height={20} />
        <p className="font-bold">{category}</p>
      </div>
      <p className="text-slate-400">
        <span className="font-bold text-[#484a59]">{score}</span> / 100
      </p>
    </div>
  );
}
