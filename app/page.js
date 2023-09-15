import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div>
        <CardList />
      </div>
    </div>
  );
}
