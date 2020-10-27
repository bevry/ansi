/*
 * Color Codes explained: http://www.termsys.demon.co.uk/vtansi.htm#colors

 * Following caveats:
 * bright    - brightens the color (bold-blue is same as brightBlue)
 * dim       - nothing on Mac or Linux
 * italic    - nothing on Mac or Linux
 * underline - underlines string
 * blink     - nothing on Mac or linux
 * inverse   - background becomes foreground and vice versa
 *
 * In summary, the only styles that work are:
 *  - bright, underline and inverse
 *  - the others are only included for completeness
 */

/** A factory method to generate an ANSI style applier from the open and close codes */
export function style(open: number, close: number) {
	return (str: string) => '\u001b[' + open + 'm' + str + '\u001b[' + close + 'm'
}

/** A factory method to generate an ANSI color applier from the color code */
export function color(open: number) {
	return style(open, 39)
}

/** A factory method to generate an ANSI background color applier from the background color code */
export function backgroundColor(open: number) {
	return style(open, 49)
}

/** Make the text look normal */
export const reset = style(0, 22)

/** Make the text brighter than usual */
export const bright = style(1, 22)

/** Make the text dimmer than usual */
export const dim = style(2, 22)

/** Make the text italicized */
export const italic = style(3, 23)

/** Make the text underlined */
export const underline = style(4, 24)

/** Make the text blink */
export const blink = style(5, 25)

/** Invert the colors of the text */
export const inverse = style(7, 27)

/** Make the text white */
export const white = color(37)

/** Make the text black */
export const black = color(30)

/** Make the text blue */
export const blue = color(34)

/** Make the text cyan */
export const cyan = color(36)

/** Make the text green */
export const green = color(32)

/** Make the text magenta */
export const magenta = color(35)

/** Make the text red */
export const red = color(31)

/** Make the text yellow */
export const yellow = color(33)

/** Make the text bright black */
export const brightBlack = color(90)

/** Make the text bright red */
export const brightRed = color(91)

/** Make the text bright green */
export const brightGreen = color(92)

/** Make the text bright yellow */
export const brightYellow = color(93)

/** Make the text bright blue */
export const brightBlue = color(94)

/** Make the text bright magenta */
export const brightMagenta = color(95)

/** Make the text bright cyan */
export const brightCyan = color(96)

/** Make the text bright white */
export const brightWhite = color(97)

/** Make the text's background black */
export const bgBlack = backgroundColor(40)

/** Make the text's background red */
export const bgRed = backgroundColor(41)

/** Make the text's background green */
export const bgGreen = backgroundColor(42)

/** Make the text's background yellow */
export const bgYellow = backgroundColor(43)

/** Make the text's background blue */
export const bgBlue = backgroundColor(44)

/** Make the text's background magenta */
export const bgMagenta = backgroundColor(45)

/** Make the text's background cyan */
export const bgCyan = backgroundColor(46)

/** Make the text's background white */
export const bgWhite = backgroundColor(47)

/** Make the text's background bright black */
export const bgBrightBlack = backgroundColor(100)

/** Make the text's background bright red */
export const bgBrightRed = backgroundColor(101)

/** Make the text's background bright green */
export const bgBrightGreen = backgroundColor(102)

/** Make the text's background bright yellow */
export const bgBrightYellow = backgroundColor(103)

/** Make the text's background bright blue */
export const bgBrightBlue = backgroundColor(104)

/** Make the text's background bright magenta */
export const bgBrightMagenta = backgroundColor(105)

/** Make the text's background bright cyan */
export const bgBrightCyan = backgroundColor(106)

/** Make the text's background bright white */
export const bgBrightWhite = backgroundColor(107)
