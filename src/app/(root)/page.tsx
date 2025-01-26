import { Metadata } from 'next';
import { data } from '@/data/data';
import DataTile from '@/components/data-tile';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  const score = Math.round(
    data
      .map((item) => item.score)
      .reduce((acc, currVal) => (acc += currVal), 0) / data.length
  );

  return (
    <div className="flex md:flex-row flex-col">
      <div className="bg-blue-500 flex flex-col items-center gap-5 rounded-3xl">
        <p>Your Result</p>
        <div className="rounded-[50%] bg-purple-500 aspect-square flex justify-center items-center flex-col">
          <p className="text-white text-7xl font-bold">{score}</p>
          <p className="text-slate-400">of 100</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p>Great</p>
          <p className="max-w-[50%] text-center">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="p-4">
        <p>Summary</p>
        <div className="flex flex-col">
          {data.map((tile) => (
            <DataTile key={tile.category} {...tile} />
          ))}
        </div>
        <button className="bg-slate-800 rounded-full text-white py-2 w-full">
          Continue
        </button>
      </div>
    </div>
  );
}
