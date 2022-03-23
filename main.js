var img=[
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
    "https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-260nw-1960131820.jpg",
    "https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz233wCa6YyXkhXlvVdymPHSnArEouMgvbwQ&usqp=CAU"
]
var i = 0;

function rndmImg(){
    document.getElementById("img").src=img[i];
i++;
if (i > 3){
    i=0;
}

}