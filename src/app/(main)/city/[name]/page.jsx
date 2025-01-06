import CitySearch from "@/components/City/CitySearch";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const page = ({ params }) => {
  return (
    <div>
      <div className="sticky top-0">
        <CitySearch />
      </div>
      <div className="container-main">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{params?.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className="text-3xl font-bold">{params?.name}</h2>
        <div className="grid gird-cols-1 md:grid-cols-3 gap-4">
          <div className="grid md:col-span-2 grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="w-full h-[300px] bg-gray-300"> property</div>
            ))}
          </div>
          <div className="col-span-1 bg-white rounded"></div>
        </div>
      </div>
    </div>
  );
};
export default page;
