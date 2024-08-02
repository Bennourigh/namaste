// import { PaginatedResult, createPaginator } from "prisma-pagination";
// import React from "react";
//
// import prisma from "@/lib/prisma";
// import { Client, Prisma } from "@/lib/db/client";
// import ModelTable from "@/app/client/table";
// import OpenModelModalFormButton from "@/components/model-modal.generic";
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
//       <OpenModelModalFormButton<Client> fieldKeys={["name"]} />
//       {/*<ModelTable data={data} meta={meta} />*/}
//     </div>
//   );
// };
//
// export default ClientsPage;
