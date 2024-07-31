-- CreateTable
CREATE TABLE "Client" (
    "clientId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("clientId")
);

-- CreateTable
CREATE TABLE "Device" (
    "deviceId" SERIAL NOT NULL,
    "Sn" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "batteryLevel" INTEGER NOT NULL,
    "dlcElectrode" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("deviceId")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "deviceId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "scheduledDate" DATE NOT NULL,
    "performedDate" DATE NOT NULL,
    "batteryLevel" INTEGER NOT NULL,
    "ElectrodesDate" DATE NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Device_Sn_key" ON "Device"("Sn");

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("clientId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("deviceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("clientId") ON DELETE RESTRICT ON UPDATE CASCADE;
