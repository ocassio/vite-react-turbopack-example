import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { ONE_THEME } from "../themes/one/one.theme";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { TWO_THEME } from "../themes/two/two.theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        one: ONE_THEME,
        two: TWO_THEME
      },
      defaultTheme: "one",
      Provider: ThemeProvider
    })
  ]
};

export default preview;
