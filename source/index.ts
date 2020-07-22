import * as ansi from './all.js'
export * from './all.js'

/** A type for all the applier generator methods */
export type ANSIFactory = 'style' | 'color' | 'backgroundColor'

/** A type for all the available styles, colours, and background colors */
export type ANSIApplier = Exclude<keyof typeof ansi, ANSIFactory>
