import { useTheme } from '../../lib/ContextHooks';
import AccessibleButton from '../AccesibleButton/AccessibleButton';

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col w-screen px-[10%]`}>
      <nav className="h-[150px] w-full flex justify-between items-center">
        <header className="col-start-1">willy-photo</header>
        <div className="col-start-9">
          <a>About</a>
          <AccessibleButton isToggleThemeSwitch>Dark</AccessibleButton>
        </div>
      </nav>
      <section>{children}</section>
    </div>
  );
}
