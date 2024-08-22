// import { PaginatedResult, createPaginator } from "prisma-pagination";
// import React from "react";
//
// import ModelTable from "./table";
//
// import prisma from "@/lib/prisma";
// import { Client, Prisma } from "@/lib/db/client";
//
// async function getClients(page: number): Promise<PaginatedResult<Client>> {
//   const paginate = createPaginator({ page: page });
//
//   return paginate<Client, Prisma.ClientFindManyArgs>(prisma.client, {});
// }
//
// const ClientsPage = async () => {
//   const { data, meta } = await getClients(1);
//
//   return (
//     <div>
//       <h1>Clients</h1>
//
//       <ModelTable data={data} meta={meta} />
//     </div>
//   );
// };
//
// export default ClientsPage;
