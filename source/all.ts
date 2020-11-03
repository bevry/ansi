// Styles
// https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_parameters

// Colors
// https://en.wikipedia.org/wiki/ANSI_escape_code#3/4_bit
export enum Color {
	Black = 0,
	Red = 1,
	Green = 2,
	Yellow = 3,
	Blue = 4,
	Magenta = 5,
	Cyan = 6,
	White = 7,
}

/** A factory method to generate an ANSI style applier from the open and close codes */
export function style(open: number, close: number) {
	return (str: string) => '\u001b[' + open + 'm' + str + '\u001b[' + close + 'm'
}

/** A factory method to generate an ANSI foreground color applier from the foreground color code */
export function foregroundColor(color: Color, bright = false) {
	// 30-37, 38
	return style((bright ? 90 : 30) + color, 39)
}

/** A factory method to generate an ANSI background color applier from the background color code */
export function backgroundColor(color: Color, bright = false) {
	// 40-47, 48
	return style((bright ? 100 : 40) + color, 49)
}

// /** A factory method to generate an ANSI underline color applier from the underline color code */
// export function underlineColor(open: number) {
// 	// 58, 59
// 	// requires a different style to set the colour though, which needs to be figured out
// 	return style(open, 59)
// }

/** Make the text look normal */
export const reset = style(0, 22)

/** Make the text bold, or with increased intensity */
export const bold = style(1, 22)

/** Make the text faint, or with decreased intensity	 */
export const faint = style(2, 22)

/** Make the text bold, or with increased intensity  */
export const bright = bold

/** Make the text faint, or with decreased intensity	 */
export const dim = faint

/** Make the text italicized */
export const italic = style(3, 23)

/** Make the text underlined */
export const underline = style(4, 24)

/** Make the text slow blink */
export const slowBlink = style(5, 25)

/** Make the text slow blink */
export const blink = slowBlink

/** Make the text rapid blink */
export const rapidBlink = style(6, 25)

/** Invert the colors of the text */
export const inverse = style(7, 27)

/** Make the text concealed */
export const conceal = style(8, 28)

/** Make the text crossed-out */
export const crossout = style(9, 29)

/** Make the text crossed-out */
export const strikethrough = crossout

/** Make the text framed */
export const frame = style(51, 54)

/** Make the text encircled */
export const encircle = style(52, 54)

/** Make the text overlined */
export const overline = style(53, 55)

/** Make the text black */
export const black = foregroundColor(Color.Black)

/** Make the text red */
export const red = foregroundColor(Color.Red)

/** Make the text green */
export const green = foregroundColor(Color.Green)

/** Make the text yellow */
export const yellow = foregroundColor(Color.Yellow)

/** Make the text blue */
export const blue = foregroundColor(Color.Blue)

/** Make the text magenta */
export const magenta = foregroundColor(Color.Magenta)

/** Make the text cyan */
export const cyan = foregroundColor(Color.Cyan)

/** Make the text white */
export const white = foregroundColor(Color.White)

/** Make the text bright black */
export const brightBlack = foregroundColor(Color.Black, true)

/** Make the text bright red */
export const brightRed = foregroundColor(Color.Red, true)

/** Make the text bright green */
export const brightGreen = foregroundColor(Color.Green, true)

/** Make the text bright yellow */
export const brightYellow = foregroundColor(Color.Yellow, true)

/** Make the text bright blue */
export const brightBlue = foregroundColor(Color.Blue, true)

/** Make the text bright magenta */
export const brightMagenta = foregroundColor(Color.Magenta, true)

/** Make the text bright cyan */
export const brightCyan = foregroundColor(Color.Cyan, true)

/** Make the text bright white */
export const brightWhite = foregroundColor(Color.White, true)

/** Make the text's background black */
export const bgBlack = backgroundColor(Color.Black)

/** Make the text's background red */
export const bgRed = backgroundColor(Color.Red)

/** Make the text's background green */
export const bgGreen = backgroundColor(Color.Green)

/** Make the text's background yellow */
export const bgYellow = backgroundColor(Color.Yellow)

/** Make the text's background blue */
export const bgBlue = backgroundColor(Color.Blue)

/** Make the text's background magenta */
export const bgMagenta = backgroundColor(Color.Magenta)

/** Make the text's background cyan */
export const bgCyan = backgroundColor(Color.Cyan)

/** Make the text's background white */
export const bgWhite = backgroundColor(Color.White)

/** Make the text's background bright black */
export const bgBrightBlack = backgroundColor(Color.Black, true)

/** Make the text's background bright red */
export const bgBrightRed = backgroundColor(Color.Red, true)

/** Make the text's background bright green */
export const bgBrightGreen = backgroundColor(Color.Green, true)

/** Make the text's background bright yellow */
export const bgBrightYellow = backgroundColor(Color.Yellow, true)

/** Make the text's background bright blue */
export const bgBrightBlue = backgroundColor(Color.Blue, true)

/** Make the text's background bright magenta */
export const bgBrightMagenta = backgroundColor(Color.Magenta, true)

/** Make the text's background bright cyan */
export const bgBrightCyan = backgroundColor(Color.Cyan, true)

/** Make the text's background bright white */
export const bgBrightWhite = backgroundColor(Color.White, true)
