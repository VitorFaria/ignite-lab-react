import { Link, useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useGetFirstLessonQuery } from "../graphql/generated";

export function Event() {
  const { slug } = useParams<{slug: string}>()
  const { data } = useGetFirstLessonQuery();
  const navigate = useNavigate();
  let defaultSlug: any;
  defaultSlug = data?.lessons[0].slug;
  if (!slug) {
    navigate(`/event/lesson/${defaultSlug}`);
  }
  
  return(
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-1">
        { slug ? <Video lessonSlug={slug}/> : <div className="flex-1"></div> }
        <Sidebar/>
      </main>
    </div>
  )
}