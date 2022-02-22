import React from "react";

const CustomLink = React.forwardRef(({ onClick, href }, ref) => {
  console.log("onClick", onClick);
  return (
    <a href={href} ref={ref} style={{ color: "red" }}>
      函数自组建跳转：/book/one
    </a>
  );
});
CustomLink.displayName = "CustomLink";
export default CustomLink;
