import { useEffect, useRef } from "react";

export const useDisableInputScroll = () => {
  const inputDisabled = useRef(null);

  useEffect(() => {
    let input = inputDisabled.current;
    const showInputFunc = ({ target }) => target.blur();

    if (input) {
      input.addEventListener("wheel", showInputFunc);
    } else {
      console.log("Tiene un valor falsy");
    }

    return () => {
      if (input) input.removeEventListener("wheel", showInputFunc);
    };
  }, [inputDisabled]);

  return [inputDisabled];
};