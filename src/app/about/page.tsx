import React from "react";

type Props = {};

export default async function about({}: Props) {

  const result = await fetch("www.yyyaaas.com");
  const data = await result.json();

  await delay(3000);   // test delay for show loading

  return <div>
    About
    <span>Debug: {JSON.stringify(data)}</span>
    </div>;
}

// test delay for show loading
function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
