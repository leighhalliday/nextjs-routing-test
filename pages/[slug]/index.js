const Slug = ({ slug }) => {
  return <div>[{slug}]/index</div>;
};

Slug.getInitialProps = ({ query }) => {
  return { slug: query.slug };
};

export default Slug;
