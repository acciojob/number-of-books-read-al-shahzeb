const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	let cnt=0;
	for(let i=0; i<library.length; i++){
		for(let x in library[i]){
			if(library[i].x==='readingStatus' && library[i][x]===true)
				cnt++;
		}
	}
	return cnt;
};

// Do not change the code below

alert(numberOfBooksRead());
