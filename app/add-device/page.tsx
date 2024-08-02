import React from "react";

import { Client, Device } from "@/lib/db/client";
import OpenModelModalFormButton from "@/components/model-modal.generic";

const ClientsPage = async () => {
  return (
    <div>
      <h1>Add-Client</h1>
      <OpenModelModalFormButton<Device> fieldKeys={["Sn"]} />
      <OpenModelModalFormButton<Device> fieldKeys={["type"]} />
      <OpenModelModalFormButton<Device> fieldKeys={["batteryLevel"]} />
      <OpenModelModalFormButton<Device> fieldKeys={["dlcElectrode"]} />
      <OpenModelModalFormButton<Device> fieldKeys={["clientId"]} />
    </div>
  );
};

export default ClientsPage;
