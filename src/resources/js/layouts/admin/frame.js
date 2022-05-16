import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
import { HomeIcon, ChevronLeftIcon } from '@heroicons/react/solid'

export default function Frame({ title, children, back=true }) {

  const goBack = (e) => {
    e.preventDefault();
    history.back();
  }

  return (
    <>
      <Head title={ title } />
      <div className="min-h-screen bg-neutral-100">
        <div className="flex items-center px-5 py-4 bg-blue-900 shadow-sm">
          { back !== "false" &&
          <div className="flex-none">
            <Link onClick={ goBack }><ChevronLeftIcon className="w-8 text-neutral-50" /></Link>
          </div>
          }
          <div className="flex-grow pr-5">
            <p className="font-medium text-3xl font-serif text-neutral-50">{ title }</p>
          </div>
          <div className="flex-none">
            <Link href={ route('dashboard') }><HomeIcon className="w-8 text-neutral-50" /></Link>
          </div>
        </div>

        <div>
          { children }
        </div>
      </div>
    </>
  );
}
