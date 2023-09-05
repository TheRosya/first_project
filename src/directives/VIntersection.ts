export default {
  mounted(el, binding) {
    console.log(el, binding);

  const options = {
    rootMargin: "0px",
    threshold: 1.0,
  };

  const onScroll = (entries: any) => {
    console.log(entries);
    if (entries[0].isIntersecting) {
      try { 
        console.log("loading...");
        binding.value();
      } catch (e) {
        alert(e);
      }
    }
  };
  const myObserver = new IntersectionObserver(onScroll, options);
  myObserver.observe(el); 
  },
  name: 'intersection',
} 
