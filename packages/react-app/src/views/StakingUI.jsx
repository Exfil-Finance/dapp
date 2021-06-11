/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState } from "react";
import { Button, Divider, Input } from "antd";
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { Address, Balance } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";

export default function ExampleUI({totalPooledBalance, yourPooledBalance, address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts }) {

  const [depositValue, setDepositValue] = useState(0);

  return (
    <div>
      <div style={{border:"1px solid #cccccc", padding:16, width:400, margin:"auto",marginTop:64}}>
        <h1>🪂 Exfil Staking 🪂</h1>

        <h4>Total Value Pooled:</h4>
        <Balance
          balance={totalPooledBalance}
          fontSize={64}
        />Ξ

        <Divider/>

        <div style={{justifyContent:"center"}}>
          <h4 style={{margin:12}}>Your Balance:</h4>

          <Balance
            balance={yourPooledBalance}
            fontSize={48}
          />Ξ

          <h4 style={{margin:12}}>Your Pool Share: {((yourPooledBalance / totalPooledBalance) * 100).toFixed(2)} %</h4>

          <h4 style={{margin:12}}>Your Accrued Fees: {((yourPooledBalance / totalPooledBalance) * 100).toFixed(2) * 0.05} Ξ</h4>

        </div>

        <Divider/>

        <div style={{margin:32}}>
          <Input style={{width: 300}} onChange={(e)=>{setDepositValue(e.target.value)}} />
          <div style={{display: "flex", justifyContent:"center"}}>
            <div style={{margin:12}}>
              <Button
              type="primary"
              ghost="true"
              icon={<DownloadOutlined />}
              onClick={()=>{
                tx( writeContracts.YourContract.deposit({
                  value: parseEther(depositValue)
                }))
              }}>Deposit</Button>
            </div>
            <div style={{margin:12}}>
              <Button
              danger="true"
              icon={<UploadOutlined />}
              onClick={()=>{
                tx( writeContracts.YourContract.withdraw() )
              }}>Withdraw</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
