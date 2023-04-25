export const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <section className="py-8">
      <p className="text-center text-sm font-sans">Copyright Ⓒ Injae Invitation {date} <br /> Made with 💖 by Injae Invitation</p>
    </section>
  )
}
