import { IButton } from '@/interface/intrerface';
import Link from 'next/link';

function PrimaryButton({ buttonName, navigateTo }: IButton) {
  return (
    <Link href={navigateTo}>
      <div className="bg-primary text-white font-medium py-2 px-4 text-sm rounded-md hover:scale-110 transition duration-300 ease-in-out">
        {buttonName}
      </div>
    </Link>
  );
}

function SecondaryButton({ buttonName, navigateTo }: IButton) {
  return (
    <Link href={navigateTo}>
      <div className="bg-secondary text-white font-medium py-2 px-4 text-sm rounded-md hover:scale-110 transition duration-300 ease-in-out">
        {buttonName}
      </div>
    </Link>
  );
}

function PrimaryOutlinedButton({ buttonName, navigateTo }: IButton) {
  return (
    <Link href={navigateTo}>
      <div className="border-primary text-primary border font-medium py-2 px-4 text-sm rounded-md hover:bg-primary hover:text-white hover:scale-110 transition duration-300 ease-in-out">
        {buttonName}
      </div>
    </Link>
  );
}

function SecondaryOutlinedButton({ buttonName, navigateTo }: IButton) {
  return (
    <Link href={navigateTo}>
      <div className="border-secondary text-secondary border font-medium py-2 px-4 text-sm rounded-md hover:bg-secondary hover:text-white hover:scale-110 transition duration-300 ease-in-out">
        {buttonName}
      </div>
    </Link>
  );
}

export { PrimaryButton, SecondaryButton, PrimaryOutlinedButton, SecondaryOutlinedButton };
