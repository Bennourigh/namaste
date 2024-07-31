"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { PaginatedResult, createPaginator } from "prisma-pagination";
import { Pagination } from "@nextui-org/pagination";
import { useState } from "react";

import prisma from "@/lib/prisma";
import { Client, Prisma } from "@/lib/db/client";

async function getClients(page: number): Promise<PaginatedResult<Client>> {
  const paginate = createPaginator({ page: page });

  return paginate<Client, Prisma.ClientFindManyArgs>(prisma.client, {});
}

const ClientsPage = async () => {
  const [page, setPage] = useState(1);
  const { data, meta } = await getClients(page);

  return (
    <div>
      <h1>Clients</h1>
      <Table
        aria-label="Clients Table"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={meta.lastPage}
              onChange={(newPage) => setPage(newPage)}
            />
          </div>
        }
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
