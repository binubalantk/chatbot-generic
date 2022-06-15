import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  viewport: {
    viewports: {
      iphone12: {
        name: 'iPhone 12 pro max',
        styles: {
          height: '926px',
          width: '428px',
        },
        type: 'mobile',
      }
  },
    defaultViewport: 'iphone12',
  }
}