import React, { useEffect } from 'react';
import './Holi.css';

function Holi1() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const [blogcard] = React.useState([
        {
          id: 1,
          imgsrc:"https://img.freepik.com/free-vector/colorful-gulaal-powder-color-indian-festival-happy-holi-card-with-gold-patterned-crystals-paper-color_38689-1052.jpg?size=626&ext=jpg",
        },
        {
          id: 2,
          imgsrc:"https://img.freepik.com/free-vector/holi-festival-background_1302-15839.jpg?size=626&ext=jpg",
        },
        {
          id: 3,
          imgsrc:"https://img.freepik.com/free-vector/colorful-holi-greeting_1035-70.jpg?size=338&ext=jpg",
        },
        {
          id: 4,
          imgsrc:"https://img.freepik.com/free-vector/holi-festival-calligraphy-design-with-exploding-powder-effect_317396-578.jpg?size=626&ext=jpg",
        },
        {
          id: 5,
          imgsrc:"https://img.freepik.com/free-vector/beautiful-holi-background_1035-1882.jpg?size=338&ext=jpg",
        },
        {
          id: 6,
          imgsrc:"https://img.freepik.com/free-vector/happy-holi-greeting-festival-colors_156779-224.jpg?size=626&ext=jpg",
        },
        {
          id: 7,
          imgsrc:"https://img.freepik.com/free-vector/realistic-colorful-holi-gulal_23-2148850113.jpg?size=626&ext=jpg",
        },
        {
          id: 8,
          imgsrc:"https://image.freepik.com/free-vector/holi-festival-background_1302-15828.jpg",
        },
        {
          id: 9,
          imgsrc:"https://img.freepik.com/free-vector/indian-god-krishna-radha-celebrating-holi-festival_1302-25015.jpg?size=626&ext=jpg",
        },
        {
          id: 10,
          imgsrc:"https://image.freepik.com/free-vector/flat-detailed-happy-holi-festival-illustration_52683-57010.jpg",
        },
        {
          id: 11,
          imgsrc:"https://img.freepik.com/free-vector/covid-19-happy-holi-celebrate-holi-with-safety-banner-design_262129-1141.jpg?size=626&ext=jpg",
        },
        {
          id: 12,
          imgsrc:"https://img.freepik.com/free-vector/colorful-gulaal-powder-color-indian-festival-happy-holi-card-with-gold-patterned-crystals-paper-color_38689-1053.jpg?size=626&ext=jpg",
        },
        {
          id: 13,
          imgsrc:"https://img.freepik.com/free-vector/hindu-mythology-lord-krishna-radha-performing-dance-blurred-gradient-background_1302-25261.jpg?size=626&ext=jpg",
        },
        {
          id: 14,
          imgsrc:"https://img.freepik.com/free-vector/flat-design-holi-festival-concept_23-2148827377.jpg?size=338&ext=jpg",
        },
        {
          id: 15,
          imgsrc:"https://img.freepik.com/free-vector/flat-holi-festival-illustration_23-2148858105.jpg?size=338&ext=jpg",
        },
        {
          id: 16,
          imgsrc:"https://img.freepik.com/free-vector/holi-festival-calligraphy-design-with-exploding-powder-effect_317396-579.jpg?size=626&ext=jpg",
        },
        {
          id: 17,
          imgsrc:"https://img.freepik.com/free-vector/indian-festival-colors-holi-text-with-traditional-sweets-colorful-background_1302-21856.jpg?size=626&ext=jpg",
        },
        {
          id: 18,
          imgsrc:"https://img.freepik.com/free-vector/happy-holi-vector-elements-card-design_1085-1914.jpg?size=626&ext=jpg",
        },
        {
          id: 19,
          imgsrc:"https://img.freepik.com/free-vector/decorative-happy-holi-festival-greeting-background_1017-17518.jpg?size=626&ext=jpg",
        },
        {
          id: 20,
          imgsrc:"https://img.freepik.com/free-vector/happy-holi-festival-with-drums-gulal_23-2148413699.jpg?size=338&ext=jpg",
        },
        {
          id: 21,
          imgsrc:"https://img.freepik.com/free-vector/hindu-traditional-happy-holi-festival-banner_1017-23576.jpg?size=626&ext=jpg",
        },
        {
          id: 22,
          imgsrc:"https://img.freepik.com/free-vector/happy-holi-indian-spring-festival-colors-greeting-card_1035-18483.jpg?size=338&ext=jpg",
        },
        {
          id: 23,
          imgsrc:"https://img.freepik.com/free-vector/colorful-holi-greeting-festival-colors_156779-216.jpg?size=626&ext=jpg",
        },
        {
          id: 24,
          imgsrc:"https://img.freepik.com/free-vector/happy-holi-font-with-color-splash-mud-pots-bowls-full-powder-gulal-white_1302-21268.jpg?size=626&ext=jpg",
        },
        {
          id: 25,
          imgsrc:"https://img.freepik.com/free-vector/holi-greeting-with-circular-shape_1035-69.jpg?size=338&ext=jpg",
        },
        {
          id: 26,
          imgsrc:"https://img.freepik.com/free-vector/drawn-colorful-holi-festival-lettering_23-2148833624.jpg?size=626&ext=jpg",
        },
        {
          id: 27,
          imgsrc:"https://img.freepik.com/free-vector/happy-holi-festival-colors-celebration-card_1035-18491.jpg?size=338&ext=jpg",
        },
        {
          id: 28,
          imgsrc:"https://img.freepik.com/free-vector/happy-holi-colorful-lettering_23-2148427372.jpg?size=338&ext=jpg",
        },
        {
          id: 29,
          imgsrc:"https://img.freepik.com/free-vector/happy-holi-traditional-indian-festival-wishes-background_1017-23849.jpg?size=338&ext=jpg",
        },
        {
          id: 30,
          imgsrc:"https://img.freepik.com/free-vector/holika-dehan-concept_30996-2750.jpg?size=338&ext=jpg",
        },
        {
          id: 31,
          imgsrc:"https://img.freepik.com/free-vector/flat-design-holi-festival-concept_52683-33287.jpg?size=338&ext=jpg",
        },
        {
          id: 32,
          imgsrc:"https://img.freepik.com/free-vector/happy-holi-celebration-design_1302-8955.jpg?size=338&ext=jpg",
        },
        {
          id: 33,
          imgsrc:"https://img.freepik.com/free-vector/holi-greetings-with-joyful-indian-dancers-drummer_2614-172.jpg?size=626&ext=jpg",
        },
        {
          id: 34,
          imgsrc:"https://img.freepik.com/free-vector/holi-festival-background_23-2148855145.jpg?size=338&ext=jpg",
        },
        {
          id: 35,
          imgsrc:"https://img.freepik.com/free-vector/happy-holi-celebration-gradient-background-with-glossy-dhol-water-gun-bowls-bucket-full-colors_1302-25532.jpg?size=338&ext=jpg",
        },
      ]);

    return (
        <div className="container">
            <div className="holibanner"></div>
            <h4>Celebrate This Holi With Workforwin Templates</h4><hr />
            <div id="gallery" class="container-fluid">  
             {blogcard.map((info) => (
             <img src={info.imgsrc} key={info.id} className="card1 img-responsive" alt="" />
             ))}

</div>

<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content">
      <div class="modal-body">
      </div>
    </div>

  </div>
</div>
        </div>
    )
}

export default Holi1;
