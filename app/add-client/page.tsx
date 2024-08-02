import React from "react";

import { Client } from "@/lib/db/client";
import OpenModelModalFormButton from "@/components/model-modal.generic";



const ClientsPage = async () => {

  return (
    <div>
      <h1>Add-Client</h1>
      <OpenModelModalFormButton<Client> fieldKeys={["name"]} />
        <OpenModelModalFormButton<Client> fieldKeys={["email"]} />

    </div>
  );
};

export default ClientsPage;
