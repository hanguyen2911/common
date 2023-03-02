import React from "react";
interface IBreadcrumbProps {
  breadcrumb?: Array<IBreadcrumb>;
  className: string;
}

interface IBreadcrumb {
  href: string;
  name: string;
}

const Breadcrumb = (props: IBreadcrumbProps) => {
  return (
    <>
      <div className={props.className}>{props.breadcrumb && props.breadcrumb.length > 0 && props.breadcrumb.map((item: IBreadcrumb, index: number)=>{
        return(
            <div key={index}>
              <a href={item?.href} >{item?.name}</a>
            </div>
        )
      })}</div>
    </>
  );
};
