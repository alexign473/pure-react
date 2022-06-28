export const ErrorBox = ({ children }) => {
  return (
    <div className='alert alert-danger d-flex align-items-center'>
      <i className='fa fa-exclamation-triangle fa-2x me-2' />
      {children}
    </div>
  );
};
