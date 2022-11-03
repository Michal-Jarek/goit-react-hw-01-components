


const Statistics = (title, stat) => (
    <section class="statistics">
    <h2 class="title">Upload stat</h2>
    {stat.map( x => console.log(x))}
    <ul class="stat-list">
      <li class="item">
        <span class="label"></span>
        <span class="percentage">4%</span>
      </li>
      <li class="item">
        <span class="label">.mp3</span>
        <span class="percentage">14%</span>
      </li>
      <li class="item">
        <span class="label">.pdf</span>
        <span class="percentage">41%</span>
      </li>
      <li class="item">
        <span class="label">.mp4</span>
        <span class="percentage">12%</span>
      </li>
    </ul>
  </section>
);

export {Statistics};