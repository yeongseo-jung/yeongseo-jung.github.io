import fashion from '../assets/pdf/fashion cast.pdf'
import shelfer from '../assets/pdf/Shelf-er.pdf'
import fashioncast from '../assets/png/패션캐스트.png'
import bookcase from '../assets/png/스부케.png'



export const projectsData = [
    {
        id: 1,
        projectName: 'Fashion Cast',
        projectDesc: '패션 이라는 하나의 공통된 주제로 하여금 모인 사람들이 디자인과 의견을 나누고 새로운 영감을 받을 수 있는 웹 사이트. 쇼핑몰 기능도 들어가있다.',
        tags: ['Java(JSP)','html','css','Javascript', 'MySQL'],
        code: '',
        demo:fashion,
        image: fashioncast
    },
    {
        id: 2,
        projectName: 'Shelf-er / Smart-Book-Case',
        projectDesc: '도서관에서 사서의 불필요한 노동을 줄이기 위한 서가 스캔 로봇(SHELF-ER)과 무인 도서 대출 반납, 도서 분류를 해주는 Smart-Book-Case',
        tags: ['Java(JPA, spring)', 'Arduino', 'Python','MySQL', 'AWS', 'React','Node.js'],
        code: '',
        demo: shelfer,
        image: bookcase
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/