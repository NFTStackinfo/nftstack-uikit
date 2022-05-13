import { BaseTheme } from '@my-org/my-scope.themes.base-theme';
import { LightTheme } from '@my-org/my-scope.themes.light-theme';
import { DarkTheme } from '@my-org/my-scope.themes.dark-theme';
import { ThemeOption } from './theme-picker-context';

export const DefaultThemeProvider = BaseTheme;
export const LightAndDarkThemes: ThemeOption[] = [LightTheme, DarkTheme];
