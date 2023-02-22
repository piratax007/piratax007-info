const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        customBlueBase: 'rgb(135, 170, 205)',
        customBlueWhite: 'rgb(228, 239, 249)',
        customLightBlue: 'rgb(182, 207, 231)',
        customGrayBlue: 'rgb(91, 132, 172)',
        customDarkBlue: 'rgb(59, 103, 145)',
        customPurpleBase: 'rgb(149, 145, 212)',
        customPurpleWhite: 'rgb(231, 230, 250)',
        customLightPurple: 'rgb(191, 189, 234)',
        customGrayPurple: 'rgb(108, 104, 184)',
        customDarkPurple: 'rgb(75, 70, 156)',
        customYellowBase: 'rgb(255, 233, 161)',
        customYellowWhite: 'rgb(255, 250, 232)',
        customLightYellow: 'rgb(255, 241, 197)',
        customGrayYellow: 'rgb(255, 225, 125)',
        customDarkYellow: 'rgb(224, 190, 81)',
        customOrangeBase: 'rgb(255, 217, 161)',
        customOrangeWhite: 'rgb(255, 246, 232)',
        customLightOrange: 'rgb(255, 231, 197)',
        customGrayOrange: 'rgb(255, 202, 125)',
        customDarkOrange: 'rgb(224, 166, 81)',
        customGreenBase: 'rgb(137, 217, 164)',
        customGreenWhite: 'rgb(228, 250, 235)',
        customLightGreen: 'rgb(183, 237, 201)',
        customGrayGreen: 'rgb(94, 192, 127)',
        customDarkGreen: 'rgb(59, 164, 95)',
        customBlue: 'rgb(0, 165, 223)',
        customDark: 'rgb(14, 21, 29)',
        customRed: 'rgb(147, 0, 0)',
        customGray: 'rgb(251, 253, 255)',
      },
      fontFamily: {
        sans: ['JetBrains Mono', ...defaultTheme.fontFamily.sans],
        mono: [
          'JetBrains Mono',
        ],
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-body': 'rgb(182, 207, 231)',
            '--tw-prose-headings': 'rgb(182, 207, 231)',
            '--tw-prose-lead': theme('colors.pink[700]'),
            '--tw-prose-links': 'rgb(0, 165, 223)',
            '--tw-prose-bold': 'rgb(228, 239, 249)',
            '--tw-prose-counters': theme('colors.pink[600]'),
            '--tw-prose-bullets': theme('colors.pink[400]'),
            '--tw-prose-hr': theme('colors.pink[300]'),
            '--tw-prose-quotes': theme('colors.pink[900]'),
            '--tw-prose-quote-borders': theme('colors.pink[300]'),
            '--tw-prose-captions': theme('colors.pink[700]'),
            '--tw-prose-code': theme('colors.pink[900]'),
            '--tw-prose-pre-code': theme('colors.pink[100]'),
            '--tw-prose-pre-bg': theme('colors.pink[900]'),
            '--tw-prose-th-borders': theme('colors.pink[300]'),
            '--tw-prose-td-borders': theme('colors.pink[200]'),
            '--tw-prose-invert-body': theme('colors.pink[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.pink[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.pink[400]'),
            '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            '--tw-prose-invert-hr': theme('colors.pink[700]'),
            '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            '--tw-prose-invert-captions': theme('colors.pink[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
