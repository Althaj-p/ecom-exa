// import React from 'react';

// export default function Category() {
//     return (
//         <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: 20 }}>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Category"></img>
//                     <p>Shoe1s</p>
//                 </a>
//             </div>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Shoes"></img>
//                     <p>Shoes</p>
//                 </a>
//             </div>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Shoes"></img>
//                     <p>Shoes</p>
//                 </a>
//             </div>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Shoes"></img>
//                     <p>Shoes</p>
//                 </a>
//             </div>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Shoes"></img>
//                     <p>Shoes</p>
//                 </a>
//             </div>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Category"></img>
//                     <p>Shoes</p>
//                 </a>
//             </div>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Category"></img>
//                 </a>
//             </div>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Category"></img>
//                 </a>
//             </div>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Category"></img>
//                 </a>
//             </div>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Category"></img>
//                 </a>
//             </div>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Category"></img>
//                 </a>
//             </div>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Category"></img>
//                 </a>
//             </div>
//             <div style={{ display: 'inline-block', marginRight: 50, textAlign: 'center' }}>
//                 <a href="#">
//                     <img src="https://via.placeholder.com/300x200" style={{ width: 100, height: 100 }} alt="Category"></img>
//                     <p>Shoes</p>
//                 </a>
//             </div>
//         </div>
//     )
// }



import { Container, Box, Typography } from '@mui/material';

const categories = [
  { src: "https://via.placeholder.com/300x200", label: "Shoes1" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes2" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoes" },
  { src: "https://via.placeholder.com/300x200", label: "Shoeslast" },
];

export default function Category() {
  return (
    <Container style={{
      overflowX: 'auto', whiteSpace: 'nowrap', padding: '20px', scrollbarWidth: 'none' /* For Firefox */,
      msOverflowStyle: 'none' /* For Internet Explorer and Edge */
    }}>
      <style>
        {`
          /* For Chrome, Safari, and Opera */
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      {categories.map((category, index) => (
        <Box
          key={index}
          component="a"
          href="#"
          textAlign="center"
          display="inline-block"
          style={{ marginRight: '20px' }}
        >
          <img
            src={category.src}
            alt={category.label || "Category Image"}
            style={{ width: 100, height: 100 }}
          />
          {category.label && (
            <Typography variant="body1">{category.label}</Typography>
          )}
        </Box>
      ))}
    </Container>
  );
}
