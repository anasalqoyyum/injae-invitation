import { Wave } from '../assets/Wave'
import guest from '../assets/guest.png?url'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import john from '../assets/john-mayer.mp3'
import useSound from 'use-sound'

export const Introduction = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [play, { stop }] = useSound(john)
  const search = new URLSearchParams(window.location.search)
  const { to } = Object.fromEntries(search.entries())

  function closeModal() {
    setIsOpen(false)
    play()
  }

  return (
    <>
      <section className="z-10 bg-[#E0DBCE]">
        <div className="absolute h-40 md:h-72 w-full">
          <div className="absolute top-0 left-0 h-full w-full rotate-180 bg-[url('/satin/assets/leaf-1.png')] bg-[length:45%_auto] md:bg-[length:20%_auto] bg-right-top bg-no-repeat" />
        </div>
        <div className="container mx-auto pt-32 md:pt-16 pb-40">
          <p className="text-center font-semibold leading-none tracking-[4px] text-satin-100">
            WE INVITE YOU TO <br /> CELEBRATE OUR WEDDING
          </p>
          <p className="pt-8 text-center font-semibold leading-none tracking-[4px] text-satin-100">The Wedding of</p>
          {/* TODO: Replace-able */}
          <p
            data-aos="zoom-in-up"
            className="satin-secondary pt-4 text-center text-4xl md:text-[50px] font-semibold leading-none tracking-[4px] text-satin-900">
            <i>Reyhan </i> & <i>Linta</i>
          </p>
          {/* TODO: Replace-able */}
          <div className="my-8">
            <p className="mb-2 text-center text-lg md:text-xl font-semibold leading-none tracking-[4px] text-satin-100">Sabtu</p>
            <p className="text-center text-xl md:text-2xl font-semibold leading-none tracking-[4px] text-satin-100">6 | Mei | 2023</p>
          </div>
          <p className="text-center text-base mx-6 md:text-xl italic leading-none tracking-[1px] text-satin-100">
            Maha suci Allah SWT yang telah menciptakan makhluk-NYA berpasang-pasangan. untuk mengikuti Sunnah Rasul-Mu dalam rangka
            membentuk keluarga yang sakinah, mawaddah, warahmah. Maka ijinkanlah kami menikahkannya.
          </p>
        </div>
        <div className="absolute h-72 w-full">
          <div className="absolute bottom-64 right-0 h-full w-full rotate-180 bg-[url('/satin/assets/leaf-2.png')] bg-[length:45%_auto] md:bg-[length:20%_auto] bg-left-top bg-no-repeat" />
        </div>
        <Wave parentClassName="h-[64px] w-full rotate-180" className="w-full fill-[#F3F1EB]" />
      </section>
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-hidden">
            <div className="flex min-h-full justify-center text-center">
              <Transition.Child as={Fragment} leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="satin-theme flex h-screen w-full max-w-full transform flex-col items-center justify-center bg-[#E0DBCE] p-6 text-left align-middle shadow-xl transition-all">
                  <div className="absolute top-0 left-0 h-full w-full rotate-180 bg-[url('/satin/assets/leaf-1.png')] bg-[length:20%_auto] bg-right-bottom bg-no-repeat" />
                  <div className="relative z-20">
                    <p className="pt-8 text-center text-base font-semibold leading-none tracking-[4px] text-satin-100 md:text-lg">
                      The Wedding of
                    </p>
                    {/* TODO: Replace-able */}
                    <p
                      data-aos="zoom-in-up"
                      className="satin-secondary pt-4 text-center text-xl font-semibold leading-none tracking-[4px] text-satin-900 md:text-[50px]">
                      <i>Reyhan </i> & <i>Linta</i>
                    </p>
                    {/* TODO: Replace-able */}
                    <div className="my-4">
                      <p className="text-center text-lg font-semibold leading-none tracking-[4px] text-satin-100 md:text-2xl">
                        6 | Mei | 2023
                      </p>
                    </div>
                    <div className="mt-24 mb-4 flex flex-col items-center justify-center">
                      <img className="mb-4 w-1/4" src={guest} />
                      <p className="text-center text-xl leading-none text-satin-100">Dear, {to || 'Guest'}</p>
                      <p className="text-md mt-2 text-center leading-none text-satin-100">you're invited to our wedding ceremony</p>
                    </div>
                    <div className="mt-8 flex animate-pulse justify-center">
                      <button
                        type="button"
                        className="text-md inline-flex justify-center rounded-md border border-transparent bg-[#3F3C38] px-6 py-2 font-medium text-white hover:bg-[#3F3C38]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F3C38]/50 focus-visible:ring-offset-2"
                        onClick={closeModal}>
                        Let's Begin
                      </button>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 h-full w-full rotate-180 bg-[url('/satin/assets/leaf-2.png')] bg-[length:20%_auto] bg-left-top bg-no-repeat" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
