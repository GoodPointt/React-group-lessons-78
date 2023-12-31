import { Comments, Hero, Loader, Section } from '../components';
import { useGetCommentsQuery } from '../redux/commentApi';
import { Toaster } from 'react-hot-toast';

export const Home = () => {
  const { data: comments } = useGetCommentsQuery();
  return (
    <>
      <Section>
        <Hero
          title="What people are saying."
          subtitle="Feedback from our customers."
        />
        {comments && <Comments />}
      </Section>
      <Toaster />
    </>
  );
};
