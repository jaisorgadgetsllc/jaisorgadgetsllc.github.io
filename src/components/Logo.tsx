/**
 * The J-hexagon mark, from Logos/Logo-J.svg (geometry unchanged),
 * recolored to the current brand: magenta chevrons, cyan hexagon, gold J.
 * public/favicon.svg is the same drawing in a square viewBox; keep the
 * two in step.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 107.616 60.702"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g fill="var(--color-magenta)">
        <polygon points="9.971 30.351 20.592 11.956 15.762 3.591 0 30.892 15.458 57.667 20.6 48.76 9.971 30.351" />
        <polygon points="92.157 57.667 107.616 30.892 91.853 3.591 87.024 11.956 97.644 30.351 87.015 48.76 92.157 57.667" />
      </g>
      <path
        fill="var(--color-logo)"
        d="M71.36,0h-35.046l-17.523,30.351,17.523,30.351h35.046l17.523-30.351L71.36,0ZM70.483,1.518l-2.628,4.553h-28.037l-2.628-4.553h33.294ZM37.19,59.184l2.628-4.553h28.037l2.628,4.553h-33.294ZM66.103,51.596h-24.532l-12.266-21.246,12.266-21.246h24.532l12.266,21.246-12.266,21.246Z"
      />
      <g fill="var(--color-gold)">
        <polygon points="53.837 16.332 67.855 16.332 67.855 19.837 64.35 23.342 64.35 37.36 67.855 40.865 67.855 44.369 64.35 44.369 60.846 40.865 46.827 40.865 43.323 44.369 39.818 44.369 39.818 30.351 46.827 30.351 46.827 37.36 60.846 37.36 60.846 23.342 53.837 23.342 53.837 16.332" />
        <polygon points="65.227 24.218 65.227 36.484 67.855 39.112 67.855 21.589 65.227 24.218" />
        <polygon points="59.97 41.741 47.261 41.741 44.632 44.369 62.598 44.369 59.97 41.741" />
      </g>
    </svg>
  );
}

/** Mark + two-line wordmark, as in the primary horizontal logo. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-8 w-auto drop-shadow-[0_0_6px_rgb(46_196_241/0.45)]" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-[0.08em] text-logo">
          JAISOR
        </span>
        <span className="font-display text-[0.6rem] font-bold tracking-[0.62em] text-magenta">
          GADGETS
        </span>
      </span>
    </span>
  );
}
