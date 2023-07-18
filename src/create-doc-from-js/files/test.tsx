// import { useTheme } from '../../lib/ContextHooks';

// type Props = {
//   children: React.ReactNode;
//   icon?: any; //idk yet :D
//   onButtonClick?: React.MouseEventHandler;
//   isToggleThemeSwitch?: boolean;
// };

// type ButtonColors = {
//   buttonColor: string;
//   textColor: string;
// };

// export default function AccessibleButton({
//   children,
//   icon,
//   onButtonClick,
//   isToggleThemeSwitch,
// }: Props): JSX.Element {
//   const { theme, setTheme } = useTheme();

//   const ToggleSiteTheme = () => {
//     theme === 'light' ? setTheme('dark') : setTheme('light');
//   };

//   const colors: Record<string, ButtonColors> = {
//     light: {
//       buttonColor: 'bg-black',
//       textColor: 'text-white',
//     },
//     dark: {
//       buttonColor: 'bg-white',
//       textColor: 'text-black',
//     },
//   };

//   return (
//     <button
//       className={`${colors[theme].buttonColor} ${colors[theme].textColor} h-[fit-content] w-[fit-content] font-bold p-2 rounded after:content-['_↗']`}
//       onClick={isToggleThemeSwitch ? ToggleSiteTheme : onButtonClick}
//     >
//       {children}
//     </button>
//   );
// }
