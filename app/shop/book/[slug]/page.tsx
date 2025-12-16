import DetailSection from "@/components/pages/shop/book/detail-section";
import ImageSection from "@/components/pages/shop/book/image-section";
import MetaSection from "@/components/pages/shop/book/meta-section";
import RatingSection from "@/components/pages/shop/book/rating-section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function BookDetailsPage() {
  return (
    <div className="py-4 space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Genre</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold tracking-tighter">
              Slug
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className="grid grid-cols-12 gap-4">
        <ImageSection />
        <DetailSection />
        <MetaSection />
        <RatingSection />
      </article>
    </div>
  );
}
