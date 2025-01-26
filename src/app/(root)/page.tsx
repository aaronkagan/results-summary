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
      <div className="bg-gradient-to-t from-[#322dea] to-[#6843fe] flex flex-col items-center gap-5 md:rounded-3xl rounded-b-3xl">
        <p className="text-[#c5baff] font-semibold mt-5">Your Result</p>
        <div className="rounded-[50%] bg-gradient-to-t from-[#4734ee] to-[#4c24cd] aspect-square flex justify-center items-center flex-col p-6">
          <p className="text-white text-6xl font-bold">{score}</p>
          <p className="text-slate-400">of 100</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-white font-semibold text-lg">Great</p>
          <p className="max-w-[85%] text-center text-sm text-slate-300 mb-9">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="p-4 bg-[#fffffe]">
        <p className="mb-4 font-bold">Summary</p>
        <div className="flex flex-col gap-2">
          {data.map((tile) => (
            <DataTile key={tile.category} {...tile} color="#d58a8b" />
          ))}
        </div>
        <button className="bg-[#303b59] rounded-full text-white py-2 w-full mt-4">
          Continue
        </button>
      </div>
    </div>
  );
}
