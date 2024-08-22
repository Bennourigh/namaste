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
import { Client, Prisma } from "@/lib/db/client";
import ModelTable from "@/app/clients/table";

async function getClients(page: number): Promise<PaginatedResult<Client>> {
  const paginate = createPaginator({ page: page });

  return paginate<Client, Prisma.ClientFindManyArgs>(prisma.client, {});
}

const ClientsPage = async () => {
  const { data, meta } = await getClients(1);

  return (
    <div>
      <h1>Clients</h1>
      <Table
        aria-label="Clients Table"
        bottomContent={<ModelTable data={data} meta={meta} />}
        className={"w-100 h-100"}
      >
        <TableHeader>
          <TableColumn>Client ID</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Email</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((client) => (
            <TableRow key={client.clientId}>
              <TableCell>{client.clientId}</TableCell>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ClientsPage;
