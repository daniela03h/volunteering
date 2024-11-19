"use client";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import IconButton from "../atoms/IconButon";
import { IProjectsGetResponse } from "@/app/core/application/dto/projects/projects-get-response";

interface IProps {
  data: IProjectsGetResponse;
}

export default function Pagination({ data }: IProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onPageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  const currentPage = data.metadata.currentPage;

  return (
    <div className="flex gap-1 justify-center items-center">
      <IconButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-black text-white rounded-full p-1"
      >
        <IoChevronBack />
      </IconButton>
      <p>Pagina </p>
      <p>{currentPage}</p>
      <p> de </p>
      <p>{data.metadata.totalPages}</p>
      <IconButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === data.metadata.totalPages}
        className="bg-black text-white rounded-full p-1"
      >
        <IoChevronForward />
      </IconButton>
    </div>
  );
}
