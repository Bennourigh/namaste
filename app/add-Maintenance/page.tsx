import React from "react";

import { Client, Device, Maintenace } from "@/lib/db/client";
import OpenModelModalFormButton from "@/components/model-modal.generic";

const ClientsPage = async () => {
  return (
    <div>
      <h1>Add-Client</h1>
      <OpenModelModalFormButton<Maintenace> fieldKeys={["clientId"]} />
      <OpenModelModalFormButton<Maintenace> fieldKeys={["deviceId"]} />
      <OpenModelModalFormButton<Maintenace> fieldKeys={["scheduledDate"]} />
      <OpenModelModalFormButton<Maintenace> fieldKeys={["performedDate"]} />
      <OpenModelModalFormButton<Maintenace> fieldKeys={["batteryLevel"]} />
      <OpenModelModalFormButton<Maintenace> fieldKeys={["ElectrodesDate"]} />
    </div>
  );
};

export default ClientsPage;
