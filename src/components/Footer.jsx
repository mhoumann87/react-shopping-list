const Footer = ({ length }) => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className='container flex'>
        <p>
          You have {length} {length === 1 ? 'item' : 'items'} on your shopping
          list
        </p>
        <p>
          Copyright &copy;{year}{' '}
          <a href='https://www.michael-h.dk' target='_blank' rel='noreferrer'>
            Michael Houmann
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
