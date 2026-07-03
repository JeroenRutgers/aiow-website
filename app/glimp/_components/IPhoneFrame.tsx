import type { ReactNode } from 'react'

type IPhoneFrameProps = {
  children: ReactNode
  dark?: boolean
  className?: string
}

export default function IPhoneFrame({ children, dark = false, className }: IPhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto aspect-[9/19.5] w-full max-w-[300px] rounded-[3rem] border-[10px] border-ink/90 shadow-2xl ${
        dark ? 'bg-[#181310]' : 'bg-cream'
      } ${className ?? ''}`}
    >
      {/* Dynamic Island / notch */}
      <div className="absolute left-1/2 top-2.5 z-10 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-ink/90" />
      {/* Screen area */}
      <div className="h-full w-full overflow-hidden rounded-[2.4rem]">{children}</div>
      {/* Home indicator */}
      <div
        className={`absolute bottom-2 left-1/2 h-[4px] w-[100px] -translate-x-1/2 rounded-full ${
          dark ? 'bg-cream/30' : 'bg-ink/25'
        }`}
      />
    </div>
  )
}
