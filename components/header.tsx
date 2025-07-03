import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-7 py-5 backdrop-blur-xl bg-black/50">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Crop Studio" width={62} height={62} className="h-16 w-16" />
          </Link>
        </div>
      </div>
    </header>
  )
}
