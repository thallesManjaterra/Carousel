export const Slide = ({ imageUrl, isActive }) => {
  return (
    <div className={isActive ? 'slide active' : 'slide'}>
      <img src={imageUrl} alt="" />
    </div>
  )
}
