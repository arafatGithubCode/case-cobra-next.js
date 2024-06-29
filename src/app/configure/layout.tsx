import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <MaxWidthWrapper className="flex flex-col flex-1">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
