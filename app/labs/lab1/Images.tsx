export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.png"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Apollo 11 astronaut on the Moon"
        src="https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~medium.jpg"
      />
      <br />
      <img
        id="wd-your-image"
        src="/images/boston-fall.jpg"
        height="300px"
        alt="Beautiful Fall Scene in Boston"
      />
    </div>
  );
}
