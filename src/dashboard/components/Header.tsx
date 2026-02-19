import { LogIn, SearchIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="sticky top-0 z-10 h-10 w-full border-b border-zinc-700 px-2 flex items-center justify-between">
      {/* left side */}
      <div className="flex flex-col">
        <h2 className="shrink-0">Dashboard</h2>
        <span className="text-xs text-zinc-600">Overview</span>
      </div>
      {/* center area / search bar*/}
      <div className="flex p-1 gap-1 border-2 border-zinc-600 rounded-sm">
        <SearchIcon className="h-4 w-4" />
        <input type="text" placeholder="search..." className="text-xs"></input>
      </div>
      {/* right side / button login and user profile*/}
      <div className="flex">
        <button className="flex border-2 border-zinc-600 bg-yellow-200 rounded-2xl p-1">
          <LogIn className="shrink-0 h-4 w-4" />
          <div className="text-sm">Login</div>
        </button>
        <div className="flex rounded-full h-8 w-8">
          <img src="/images/Smiley.png" alt="User" />
        </div>
      </div>
    </div>
  );
};
