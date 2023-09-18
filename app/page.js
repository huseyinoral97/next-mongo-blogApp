import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <div className="md:py-20 max-md:pb-20">
      <Featured />
      <CategoryList withImage={true} />
      <div className="container mx-auto">
        <CardList />
      </div>
    </div>
  );
}
