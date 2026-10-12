import { $language, t } from "@/stores/language";
import { useStore } from "@nanostores/solid";
import type { Blog } from "@/content.config";

export function Blog(props: { posts: Blog[] }) {
  const language = useStore($language);
  return (
    <div class="mt-6 p-6 content-center justify-center text-center">
      <h1 class="text-3xl mb-6 text-center text-primary">✍🏻 Blog</h1>
      <a href="/blog" class="btn btn-primary hover:btn-accent">
        {t(language()).blog.visit}
      </a>
      <div class="divider w-3/4 p-4 m-auto"></div>
      <div class="flex flex-1 flex-col md:flex-row gap-5 p-4 m-auto justify-center text-primary-content">
        {props.posts.map((post) => (
          <div class="card card-sm md:w-2/6  shadow-sm bg-secondary hover:bg-primary border-accent border-2">
            <figure class="w-full md:h-96 overflow-hidden">
              <img src={post.data.image} alt="Post cover" loading="lazy" />
            </figure>
            <div class="card-body ">
              <h2 class="card-title text-xl font-bold">{post.data.title}</h2>
              <p class="text-xs text-justify">{post.data.pubDate.toLocaleDateString()}</p>
              <p class="text-base md:text-base text-justify">{post.data.description}</p>
              <div class="card-actions justify-around">
                <a class="btn btn-info" href={`/${post.collection}/${post.id}`}>
                  {t(language()).blog.read}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
