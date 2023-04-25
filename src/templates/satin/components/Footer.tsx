export const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <section className="py-8">
      <p className="text-center font-sans text-[9px] md:text-sm">
        Copyright Ⓒ Injae Invitation {date} <br /> Made with 💖 Injae Invitation
      </p>
    </section>
  )
}
