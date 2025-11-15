export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-max py-10 text-xs text-white/50 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>? {new Date().getFullYear()} AccrueFlow?. All rights reserved.</div>
        <div className="flex gap-6">
          <a className="hover:text-white/80" href="#">Privacy</a>
          <a className="hover:text-white/80" href="#">Terms</a>
          <a className="hover:text-white/80" href="#">Security</a>
        </div>
      </div>
    </footer>
  )
}
