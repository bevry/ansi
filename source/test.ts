import { equal } from 'assert-helpers'
import kava from 'kava'
import * as ansi from './index.js'

kava.suite('ansi', function (suite, test) {
	test('styles', function () {
		equal(ansi.reset('reset'), '\u001b[0mreset\u001b[22m', 'reset')
		equal(
			ansi.underline('underlined'),
			'\u001b[4munderlined\u001b[24m',
			'underline',
		)
		equal(ansi.bright('bright'), '\u001b[1mbright\u001b[22m', 'bright')
		equal(ansi.inverse('inversed'), '\u001b[7minversed\u001b[27m', 'inverse')
	})
	test('colors', function () {
		equal(
			ansi.white('printed in white'),
			'\u001b[37mprinted in white\u001b[39m',
		)

		equal(
			ansi.black('printed in black'),
			'\u001b[30mprinted in black\u001b[39m',
		)
		equal(
			ansi.brightBlack('printed in bright black'),
			'\u001b[90mprinted in bright black\u001b[39m',
		)

		equal(
			ansi.green('printed in green'),
			'\u001b[32mprinted in green\u001b[39m',
		)
		equal(
			ansi.brightGreen('printed in bright green'),
			'\u001b[92mprinted in bright green\u001b[39m',
		)

		equal(ansi.red('printed in red'), '\u001b[31mprinted in red\u001b[39m')
		equal(
			ansi.brightRed('printed in bright red'),
			'\u001b[91mprinted in bright red\u001b[39m',
		)
	})
	test('background', function () {
		equal(
			ansi.bgBlack('printed with black background'),
			'\u001b[40mprinted with black background\u001b[49m',
		)

		equal(
			ansi.bgYellow('printed with yellow background'),
			'\u001b[43mprinted with yellow background\u001b[49m',
		)
		equal(
			ansi.bgBrightYellow('printed with bright yellow background'),
			'\u001b[103mprinted with bright yellow background\u001b[49m',
		)

		equal(
			ansi.bgWhite('printed with white background'),
			'\u001b[47mprinted with white background\u001b[49m',
		)
	})
	test('mixing', function () {
		equal(
			ansi.blue(ansi.bgYellow('printed in blue with yellow background')),
			'\u001b[34m\u001b[43mprinted in blue with yellow background\u001b[49m\u001b[39m',
		)
		equal(
			ansi.bgYellow(ansi.blue('printed in blue with yellow background again')),
			'\u001b[43m\u001b[34mprinted in blue with yellow background again\u001b[39m\u001b[49m',
		)
	})
})
