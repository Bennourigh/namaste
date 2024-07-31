"use client";

import { Pagination } from "@nextui-org/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useState } from "react";

export default function ModelTable({ data, meta }: { data: any[]; meta: any }) {
  const [page, setPage] = useState(1);

  return (
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
  );
}
