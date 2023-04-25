import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Copy, X } from 'react-feather'
import bri from '../assets/reyhan-linta/BRI.png?url'
import dana from '../assets/reyhan-linta/Dana.png?url'
import clsx from 'clsx'

export const Present = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [effect, setEffect] = useState(false)
  const [effect2nd, setEffect2nd] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value)
  }

  return (
    <>
      <section className="z-10">
        <div className="container mx-auto pt-16 pb-16">
          <div className="mx-52 flex flex-row justify-center">
            <div className="relative flex flex-row gap-2 rounded-xl bg-[#F3F1EB] shadow-satin-xl">
              <div className="absolute inset-0 rotate-180 bg-[url('/satin/assets/leaf-3.png')] bg-cover opacity-20 blur-sm" />
              <div className="z-10 flex flex-col items-center py-8 px-12 text-center">
                <p className="satin-secondary mb-1 pt-4 text-center text-5xl font-semibold text-satin-900">Kirim Hadiah</p>
                <p className="mt-8 text-lg">
                  Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda
                  dapat memberi kado secara cashless
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={openModal}
                    type="button"
                    className="mt-16 mr-2 mb-2 inline-flex items-center rounded-lg bg-[#3F3C38] px-7 py-2.5 text-center font-medium text-white hover:bg-[#3F3C38]/90 focus:outline-none focus:ring-4 focus:ring-[#3F3C38]/50">
                    Kirim Hadiah
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Transition appear show={isOpen} as={Fragment}>
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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h6" className="satin-secondary mt-4 text-center text-4xl font-semibold leading-6 text-satin-900">
                    Kirim Hadiah Anda
                  </Dialog.Title>
                  <p className="satin-theme mt-2 text-center">
                    Silahkan kirim hadiah melalui nomor rekening maupun dompet digital berikut :
                  </p>
                  <div className="mt-6 flex flex-row justify-center gap-12">
                    <div className="flex flex-col items-center text-center">
                      <img src={bri} />
                      <button
                        type="button"
                        className={clsx(
                          { 'animate-wiggle': effect },
                          'mt-4 inline-flex justify-center rounded-md border border-transparent bg-[#3F3C38] px-2 py-2 text-sm font-medium text-white hover:bg-[#3F3C38]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F3C38]/50 focus-visible:ring-offset-2'
                        )}
                        onClick={() => {
                          copyToClipboard('002201015126532')
                          setEffect(true)
                        }}
                        onAnimationEnd={() => setEffect(false)}>
                        <Copy className="mr-2" size={15} /> Salin No. Rekening
                      </button>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <img src={dana} />
                      <button
                        type="button"
                        className={clsx(
                          { 'animate-wiggle': effect2nd },
                          'mt-4 inline-flex justify-center rounded-md border border-transparent bg-[#3F3C38] px-2 py-2 text-sm font-medium text-white hover:bg-[#3F3C38]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F3C38]/50 focus-visible:ring-offset-2'
                        )}
                        onClick={() => {
                          copyToClipboard('083154538971')
                          setEffect2nd(true)
                        }}
                        onAnimationEnd={() => setEffect2nd(false)}>
                        <Copy className="mr-2" size={15} /> Salin No. Rekening
                      </button>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#3F3C38] px-2 py-2 text-sm font-medium text-white hover:bg-[#3F3C38]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F3C38]/50 focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      <X size={15} />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
