import { Disclosure } from "@headlessui/react";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-center text-lg text-gray-700 mt-6">
              I don't know, but the flag is a big plus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quas cupiditate laboriosam
              fugiat.
            </p>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              <Disclosure as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">
                        What's the best thing about Switzerland?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={
                            "rotate-0 h-6 w-6 transform " +
                            `${open ? "rotate-180" : ""}`
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        I don't know, but the flag is a big plus. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Quas
                        cupiditate laboriosam fugiat.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">
                        How do you make holy water?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={
                            "rotate-0 h-6 w-6 transform " +
                            `${open ? "rotate-180" : ""}`
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        You boil the hell out of it. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Magnam aut tempora vitae
                        odio inventore fuga aliquam nostrum quod porro. Delectus
                        quia facere id sequi expedita natus.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">
                        What do you call someone with no body and no nose?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={
                            "rotate-0 h-6 w-6 transform " +
                            `${open ? "rotate-180" : ""}`
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        Nobody knows. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Culpa, voluptas ipsa quia excepturi,
                        quibusdam natus exercitationem sapiente tempore labore
                        voluptatem.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">
                        Why do you never see elephants hiding in trees?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={
                            "rotate-0 h-6 w-6 transform " +
                            `${open ? "rotate-180" : ""}`
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        Because they're so good at it. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quas cupiditate
                        laboriosam fugiat.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">
                        Why can't you hear a pterodactyl go to the bathroom?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={
                            "rotate-0 h-6 w-6 transform " +
                            `${open ? "rotate-180" : ""}`
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        Because the pee is silent. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Ipsam, quas voluptatibus
                        ex culpa ipsum, aspernatur blanditiis fugiat ullam
                        magnam suscipit deserunt illum natus facilis atque vero
                        consequatur! Quisquam, debitis error.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">
                        Why did the invisible man turn down the job offer?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={
                            "rotate-0 h-6 w-6 transform " +
                            `${open ? "rotate-180" : ""}`
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        He couldn't see himself doing it. Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Eveniet perspiciatis
                        officiis corrupti tenetur. Temporibus ut voluptatibus,
                        perferendis sed unde rerum deserunt eius.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
