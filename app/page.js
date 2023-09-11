import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <div className="container">
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Pagination />
        <Menu />
      </div>
    </div>
  );
}
