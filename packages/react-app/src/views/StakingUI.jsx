/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState } from "react";
import { Button, Divider, Input } from "antd";
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { Address, Balance } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";

export default function ExampleUI({yourDepositedBalance, address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts }) {

  const [depositValue, setDepositValue] = useState(0);

  return (
    <div>
      <div style={{border:"1px solid #cccccc", padding:16, width:400, margin:"auto",marginTop:64}}>
        <h1>🪂 Exfil Staking 🪂</h1>

        <h4>Total Value Pooled: {yourDepositedBalance}</h4>

        <Divider/>

        <h4>Your Pooled Balance: {yourDepositedBalance}</h4>

        <h4>Your Pool Share: {yourDepositedBalance * 0.10} %</h4>

        <Divider/>

        <div style={{margin:32}}>
          <Input style={{width: 300}} onChange={(e)=>{setDepositValue(e.target.value)}} />
          <div style={{display: "flex", justifyContent:"center"}}>
            <div style={{margin:12}}>
              <Button
              type="primary"
              icon={<DownloadOutlined />}
              onClick={()=>{
                tx( writeContracts.ExfilStaking.deposit({
                  value: parseEther(depositValue)
                }))
              }}>Deposit</Button>
            </div>
            <div style={{margin:12}}>
              <Button
              danger="true"
              icon={<UploadOutlined />}
              onClick={()=>{
                tx( writeContracts.ExfilStaking.withdraw() )
              }}>Withdraw</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
