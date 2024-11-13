const LinksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-2 p-4">
      {children}
    </div>
  );
};

export default LinksLayout;
