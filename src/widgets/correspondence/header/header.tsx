import { Button, ButtonStyleType } from "gram/shared";
import { SearchIcon } from "public/svgs";
import { type FC } from "react";
import { useTranslation } from "react-i18next";
type HeaderProps = {
  chanel?: string;
  subs?: number | "bot";
};

export const Header: FC<HeaderProps> = ({ chanel, subs }) => {
  const { t } = useTranslation("translation");
  return (
    <header className="flex h-fit w-full items-end justify-between bg-black-400 pl-4">
      <div className="flex w-fit flex-col justify-between pt-1">
        <span>Wоrk.ua Нові вакансії</span>
        <span className="text-black-200">bot</span>
      </div>
      <div className="flex h-full w-fit items-center justify-center pr-4">
        <Button className="p-2">
          <SearchIcon />
        </Button>
        <Button className="rounded-lg p-2">{t("buttons.leaveChannel")}</Button>
      </div>
    </header>
  );
};
