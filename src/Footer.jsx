function Footer() {
  const year = new Date().getFullYear()
  
  return (
     <footer id="footer">
    <p>&copy; {year} Gbenga</p>
    </footer>
  )
}


export default Footer