"use client";
import { PaginatedResult, createPaginator } from "prisma-pagination";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import prisma from "@/lib/prisma";
import { Device, Prisma } from "@/lib/db/client";
import ModelTable from "@/app/devices/table";

async function getClients(page: number): Promise<PaginatedResult<Device>> {
  const paginate = createPaginator({ page: page });

  return paginate<Device, Prisma.ClientFindManyArgs>(prisma.device, {});
}

const ClientsPage = async () => {
  const { data, meta } = await getClients(1);

  return (
    <div>
      <h1>Devices</h1>
      <Table
        aria-label="Clients Table"
        bottomContent={
          <>
            <div className="flex w-full justify-center">
              <ModelTable data={data} meta={meta} />
            </div>
          </>
        }
      />
      <TableHeader>
        <TableColumn>Device ID</TableColumn>
        <TableColumn>Device SN</TableColumn>
        <TableColumn>Type</TableColumn>
        <TableColumn>Battery Level</TableColumn>
        <TableColumn>DLC Electrode</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((device) => (
          <TableRow key={device.deviceId}>
            <TableCell>{device.deviceId}</TableCell>
            <TableCell>{device.Sn}</TableCell>
            <TableCell>{device.type}</TableCell>
            <TableCell>{device.batteryLevel}</TableCell>
            <TableCell>{device.dlcElectrode}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </div>
  );
};

export default ClientsPage;
