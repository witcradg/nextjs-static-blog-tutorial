import PostPreview from '@/components/PostPreview';
import '../styles/globals.css';
import getPostMetadata from '@/components/getPostMetaData';

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
    /*Use spread operator instea of
     <PostPreview key={post.slug} 
      title={post.title} 
      subtitle={post.subtitle} 
      date={post.date} 
      slug={post.slug} /> */
  ))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
}

export default HomePage;
