import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="mr-5 p-10 bg-slate-400">SideBar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
