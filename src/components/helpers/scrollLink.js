// Dirige a la parte superior de la pagina
const scrollLink = (number) => {
  window.scrollTo({
    top: number,
    behavior: 'smooth'
  })
}

export default scrollLink;
