import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <>
      <header className="p-4 fixed inset-x-0 top-0 bg-white/50 font-medium text-sm text-blue-800">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <span>Click on the burger &rarr;</span>

          <Popover>
            {({ open }) => (
              <>
                <Popover.Button className="rounded-md p-2 transition inline-flex items-center justify-center text-gray-900 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>

                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                  className="fixed z-10 bg-white/90 backdrop-blur p-5 inset-x-3 top-3 rounded origin-top-right"
                >
                  <Popover.Panel static className="flex flex-col space-y-5">
                    <div className="flex justify-between items-center">
                      <span>Click the X to close &rarr;</span>
                      <Popover.Button className="rounded-md p-1 transition inline-flex items-center justify-center text-gray-900 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-green-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                    <a href="/">Product</a>
                    <a href="/">Services</a>
                    <a href="/">Consulting</a>
                    <a href="/">About</a>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </header>
      <div className="h-72 bg-gradient-to-r from-green-500 to-blue-500"></div>
    </>
  );
}
