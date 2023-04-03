


export default function Form(props) {
  const { component, handle } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    handle.apply(this, arguments);
  }
  return (
    <form onSubmit={handleSubmit}>
      {component}
    </form>
  )
}
