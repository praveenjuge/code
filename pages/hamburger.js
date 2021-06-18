import { Popover } from "@headlessui/react";

export default function Home() {
  return (
    <>
      <header className="p-4 fixed inset-x-0 top-0 bg-white/50 font-medium text-sm text-blue-800">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <span>Click on the burger &rarr;</span>

          <Popover>
            <Popover.Button>🍔</Popover.Button>

            <Popover.Panel className="fixed z-10 bg-white/90 backdrop-blur p-8 inset-x-5 top-5 rounded flex flex-col space-y-5">
              <a href="/">Product</a>
              <a href="/">Services</a>
              <a href="/">Consulting</a>
              <a href="/">About</a>
            </Popover.Panel>
          </Popover>
        </div>
      </header>
      <div className="h-72 bg-gradient-to-r from-green-500 to-blue-500"></div>
    </>
  );
}
