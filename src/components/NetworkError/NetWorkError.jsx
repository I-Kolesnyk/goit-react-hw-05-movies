import pageNotFound from 'images/404.jpg';

function NetworkError() {
  return (
    <main>
      <p>There are some problems! Try again later.</p>
      <img src={pageNotFound} alt="page not found" />
    </main>
  );
}

export default NetworkError;
