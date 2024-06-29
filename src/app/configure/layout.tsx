import MaxWidthWrapper from "@/components/MaxWidthWrapper";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <MaxWidthWrapper className="flex flex-col flex-1">
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
