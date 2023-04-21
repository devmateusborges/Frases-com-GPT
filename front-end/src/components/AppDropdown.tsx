"use client";

export function AppDropdown() {
  return (
    <div className="flex gap-x-2">
      <select className="p-1 rounded text-stone-600 bg-white/40 font-semibold outline-none hover:scale-110 cursor-pointer duration-150 delay-75">
        <option selected value="qualquer">
          poema
        </option>
        <option value="alegria">Alegria</option>
        <option value="amor">Amor</option>
        <option value="prosperidade">Prosperidade</option>
      </select>
      <button className="ml-2 p-1 bg-white/30 rounded " type="submit">
        Search
      </button>
    </div>
  );
}
