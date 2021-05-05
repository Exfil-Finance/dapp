import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/Exfil-Finance/staking-dapp" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🪂 Exfil Staking"
        subTitle=""
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
