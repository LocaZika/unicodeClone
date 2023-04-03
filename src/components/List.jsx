
export default function List(props) {
  const { className, items, handle } = props;
  const setClassName = () => className ?? '';
  const handleItemClick = (e) => {
    e.stopPropagation();
    handle.apply(this, arguments);
  }
  return (
    <div className={setClassName}>
      {
        items.map(({id, content}) => (
          <div key={id} className="content" onClick={handleItemClick}>{content}</div>
        ))
      }
    </div>
  )
}
