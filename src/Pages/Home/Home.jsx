import React from 'react';

const Home = () => {
    return (
        <div>
            <p className='text-5xl'>this is home</p>
            <button className="btn">Button</button>
<button className="btn btn-primary">Button</button>
<button className="btn btn-secondary">Button</button>
<button className="btn btn-accent">Button</button>
<button className="btn btn-ghost">Button</button>
<button className="btn btn-link">Button</button>

<div class="bg-white dark:bg-red-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
    </span>
  </div>
  <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>

        </div>
    );
};

export default Home;