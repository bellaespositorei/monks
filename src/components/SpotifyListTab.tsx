import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

type SpotifyListTabProps = {
  defaultTab: string;
  tabsTrigger: { [tabKey: string]: string };
  children: React.ReactNode;
};

export const SpotifyListTab = ({
  defaultTab,
  tabsTrigger,
  ...props
}: SpotifyListTabProps) => (
  <Tabs
    defaultValue={defaultTab}
    className="flex flex-col justify-center items-center space-y-6 md:hidden"
  >
    <TabsList className="flex justify-center">
      {Object.entries(tabsTrigger).map(([key, value]) => (
        <TabsTrigger key={key} value={key}>
          {value}
        </TabsTrigger>
      ))}
    </TabsList>

    {props.children}
  </Tabs>
);
