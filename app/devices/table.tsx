"use client";

import { Pagination } from "@nextui-org/pagination";
import { useState } from "react";

export default function ModelTable({ data, meta }: { data: any[]; meta: any }) {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      isCompact
      showControls
      showShadow
      color="primary"
      page={page}
      total={meta.lastPage}
      onChange={(newPage) => setPage(newPage)}
    />
  );
}
