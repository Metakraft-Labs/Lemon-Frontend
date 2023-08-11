import { useEffect } from "react";

export default function Head({ children }) {
  useEffect(() => {
    document.head.append(children);
  }, [children]);
  return <></>;
}
