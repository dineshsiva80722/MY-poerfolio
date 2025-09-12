import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow,background-color,border-color] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        // Glass defaults
        'backdrop-blur-sm bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10',
        // Hover/Focus subtlety
        'hover:bg-white/15 dark:hover:bg-white/10',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
