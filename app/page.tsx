import React from "react";
import { ProjectInterface } from "@/common.types";
import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";
import ProjectCard from "@/components/ProjectCard";

const page = () => {
  return (
    <section className="flexStart flex-col paddings mb-16">
      <Categories></Categories>
      Categories posts LoadMore
    </section>
  );
};

export default page;
