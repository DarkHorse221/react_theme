import user1 from '../../assets/images/users/1.jpg';
import user2 from '../../assets/images/users/2.jpg';
import user3 from '../../assets/images/users/3.jpg';
import user4 from '../../assets/images/users/4.jpg';
import user5 from '../../assets/images/users/5.jpg';
import user6 from '../../assets/images/users/6.jpg';
import user7 from '../../assets/images/users/7.jpg';
import user8 from '../../assets/images/users/8.jpg';
import user9 from '../../assets/images/users/9.jpg';
import user10 from '../../assets/images/users/10.jpg';
import user11 from '../../assets/images/users/11.jpg';

const emailData = [
	{
		id: 1,
		from: "James Smith",
		thumbnail: user1,
		subject: "It is a long established.",
		time: "3:45 PM",
		emailExcerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
		emailContent:
			"<p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with. </p>",
		unread: true,
		attachment: false,
		starred: true,
		important: false,
		inbox: true,
		sent: false,
		draft: false,
		spam: false,
		trash: false,
		label: "Promotional"
	},
	{
		id: 2,
		from: "Michael Smith",
		thumbnail: user2,
		subject: "fact that a reader will be distracted.",
		time: "6:01 PM",
		emailExcerpt: "It has roots in a piece of classical Latin literature from 45 BC",
		emailContent:
			"<p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. ",
		unread: true,
		attachment: false,
		starred: true,
		important: false,
		inbox: false,
		sent: false,
		draft: true,
		spam: false,
		trash: false,
		label: "Social"
	},
	{
		id: 3,
		from: "Robert Smith",
		thumbnail: user3,
		subject: "The point of using Lorem Ipsum is that it has a more-or-less normal",
		time: "7:10 AM",
		emailExcerpt: "Richard McClintock, a Latin professor at Hampden-Sydney",
		emailContent:
			"<p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. ",
		unread: false,
		attachment: false,
		starred: false,
		important: true,
		inbox: false,
		sent: true,
		draft: false,
		spam: false,
		trash: false,
		label: "Promotional"
	},
	{
		id: 4,
		from: "Maria Garcia",
		thumbnail: user4,
		subject: "Contrary to popular belief, Lorem Ipsum is.",
		time: "8:21 PM",
		emailExcerpt: "Lorem Ipsum passage, and going through",
		emailContent:
			"<p>Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>",
		unread: false,
		attachment: true,
		starred: true,
		important: false,
		inbox: false,
		sent: false,
		draft: true,
		spam: false,
		trash: false,
		label: "Social"
	},
	{
		id: 5,
		from: "David Smith",
		thumbnail: user5,
		subject: "literature from 45 BC, making",
		time: "5:45 PM",
		emailExcerpt: "The standard chunk of Lorem Ipsum used since the 1500s",
		emailContent:
			"<p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>",
		unread: false,
		attachment: false,
		starred: false,
		important: true,
		inbox: true,
		sent: false,
		draft: false,
		spam: false,
		trash: false,
		label: "Social"
	},
	{
		id: 6,
		from: "Maria Rodriguez",
		thumbnail: user6,
		subject: "a Latin professor at Hampden-Sydney College.",
		time: "11:32 AM",
		emailExcerpt: "Cicero are also reproduced in their exact original form",
		emailContent:
			"<p>Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p>",
		unread: false,
		attachment: true,
		starred: false,
		important: true,
		inbox: true,
		sent: false,
		draft: false,
		spam: false,
		trash: false,
		label: "Health"
	},
	{
		id: 7,
		from: "Mary Smith",
		thumbnail: user7,
		subject: "the cites of the word in classical.",
		time: "12:11 PM",
		emailExcerpt: "There are many variations of passages of Lorem Ipsum available",
		emailContent:
			"<p>There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>",
		unread: true,
		attachment: true,
		starred: false,
		important: false,
		inbox: true,
		sent: false,
		draft: false,
		spam: false,
		trash: false,
		label: ""
	},
	{
		id: 8,
		from: "Maria Hernandez",
		thumbnail: user8,
		subject: " This book is a treatise on the theory of ethics.",
		time: "11:55 AM",
		emailExcerpt: "the majority have suffered alteration in some form, by injected ",
		emailContent:
			"<p>According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text.</p>",
		unread: false,
		attachment: true,
		starred: false,
		important: true,
		inbox: false,
		sent: false,
		draft: false,
		spam: true,
		trash: false,
		label: ""
	},
	{
		id: 9,
		from: "Maria Martinez",
		thumbnail: user9,
		subject: "Lorem Ipsum used since the 1500s is reproduced.",
		time: "10:23 AM",
		emailExcerpt: "If you are going to use a passage of Lorem Ipsum",
		emailContent:
			"<p>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters.</p>",
		unread: false,
		attachment: true,
		starred: false,
		important: false,
		inbox: false,
		sent: false,
		draft: false,
		spam: false,
		trash: true,
		label: "Promotional"
	},
	{
		id: 10,
		from: "James Johnson",
		thumbnail: user10,
		subject: "accompanied by English versions from the 1914 translation.",
		time: "6:40 AM",
		emailExcerpt: "you need to be sure there isn't anything",
		emailContent:
			"<p>This might also explain why one can now find slightly different versions. Due to the age of the Lorem Ipsum text there are no copyright issues to contend with.</p>",
		unread: false,
		attachment: true,
		starred: true,
		important: false,
		inbox: false,
		sent: true,
		draft: false,
		spam: false,
		trash: false,
		label: "Health"
	},
	{
		id: 11,
		from: "James Smith",
		thumbnail: user11,
		subject: "All the Lorem Ipsum generators on the Internet.",
		time: "9:44 AM",
		emailExcerpt: "All the Lorem Ipsum generators on the Internet tend to repeat predefined",
		emailContent:
			"<p>The spread of computers and layout programmes thus made dummy text better known. While in earlier times several lines of the Lorem Ipsum text were repeated in the creation of dummy texts.</p>",
		unread: false,
		attachment: false,
		starred: true,
		important: false,
		inbox: true,
		sent: false,
		draft: false,
		spam: false,
		trash: false,
		label: "Promotional"
	},
	{
		id: 12,
		from: "Michael Smith",
		thumbnail: user1,
		subject: "Latin words, combined with a handful.",
		time: "12:10 PM",
		emailExcerpt: "combined with a handful of model sentence structures",
		emailContent:
			"<p>basis for many dummy text or Lorem Ipsum generators. Based on 'De finibus', these generators automatically create longer sections of the Lorem Ipsum text or various other filler texts.</p>",
		unread: false,
		attachment: false,
		starred: false,
		important: false,
		inbox: true,
		sent: false,
		draft: true,
		spam: false,
		trash: true,
		label: "Social"
	},
	{
		id: 13,
		from: "Robert Smith",
		thumbnail: user2,
		subject: "If you are going to use a passage.",
		time: "6:58 PM",
		emailExcerpt: "Lorem Ipsum is therefore always free from repetition, injected humour",
		emailContent:
			"<p>The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence.</p>",
		unread: false,
		attachment: true,
		starred: true,
		important: true,
		inbox: false,
		sent: true,
		draft: false,
		spam: false,
		trash: false,
		label: "Health"
	},
	{
		id: 14,
		from: "Maria Garcia",
		thumbnail: user3,
		subject: "piece of classical Latin literature.",
		time: "3:46 AM",
		emailExcerpt: "Lorem Ipsum passage, and going through the cites",
		emailContent:
			"<p>now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</p>",
		unread: false,
		attachment: false,
		starred: true,
		important: false,
		inbox: false,
		sent: false,
		draft: false,
		spam: false,
		trash: true,
		label: "Social"
	},
	{
		id: 15,
		from: "David Smith",
		thumbnail: user4,
		subject: "first true generator on the Internet.",
		time: "5:47 PM",
		emailExcerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		emailContent:
			"<p>Certain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless.</p>",
		unread: false,
		attachment: true,
		starred: false,
		important: false,
		inbox: false,
		sent: false,
		draft: false,
		spam: false,
		trash: true,
		label: "Promotional"
	},
	{
		id: 16,
		from: "Maria Rodriguez",
		thumbnail: user5,
		subject: "combined with a handful of model sentence structure.",
		time: "1:54 PM",
		emailExcerpt: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		emailContent:
			"<p>Target-generated dummy text mixed with a certain combination of search terms can lead to an increased frequency of visits by search machine users. As a consequence, advertising revenues, which rely on website 'hits', are increased.</p>",
		unread: true,
		attachment: false,
		starred: false,
		important: true,
		inbox: true,
		sent: false,
		draft: false,
		spam: false,
		trash: true,
		label: "Social"
	},
	{
		id: 17,
		from: "Mary Smith",
		thumbnail: user6,
		subject: "randomised words which don't look even.",
		time: "2:30 PM",
		emailExcerpt: "when an unknown printer took a galley of type",
		emailContent:
			"<p>Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Amet nisl suscipit adipiscing bibendum est ultricies integer.</p>",
		unread: true,
		attachment: false,
		starred: false,
		important: false,
		inbox: false,
		sent: false,
		draft: false,
		spam: true,
		trash: false,
		label: "Health"
	},
	{
		id: 18,
		from: "Maria Hernandez",
		thumbnail: user7,
		subject: "Lorem Ipsum generators on the Internet tend.",
		time: "7:03 AM",
		emailExcerpt: "scrambled it to make a type specimen book",
		emailContent:
			"<p>Volutpat diam ut venenatis tellus in metus vulputate eu. Id aliquet lectus proin nibh nisl condimentum id venenatis. Risus quis varius quam quisque id diam vel. Pulvinar pellentesque habitant morbi tristique senectus et netus et.</p>",
		unread: false,
		attachment: false,
		starred: false,
		important: true,
		inbox: false,
		sent: true,
		draft: false,
		spam: false,
		trash: false,
		label: "Promotional"
	},
	{
		id: 19,
		from: "Maria Martinez",
		thumbnail: user8,
		subject: "combined with a handful of model.",
		time: "6:24 PM",
		emailExcerpt: "It has survived not only five centuries",
		emailContent:
			"<p>Scelerisque purus semper eget duis at. Tempus imperdiet nulla malesuada pellentesque elit. Vitae semper quis lectus nulla at volutpat. Ac tortor vitae purus faucibus ornare suspendisse.</p>",
		unread: true,
		attachment: false,
		starred: false,
		important: false,
		inbox: false,
		sent: false,
		draft: true,
		spam: false,
		trash: false,
		label: "Health"
	},
	{
		id: 20,
		from: "James Johnson",
		thumbnail: user9,
		subject: "The Extremes of Good and Evil.",
		time: "9:11 PM",
		emailExcerpt: "the 1960s with the release of Letraset sheets containings",
		emailContent:
			"<p>Ultrices in iaculis nunc sed augue lacus viverra. Tellus cras adipiscing enim eu turpis egestas. Libero enim sed faucibus turpis in eu mi bibendum neque. Consectetur adipiscing elit ut aliquam. Mattis nunc sed blandit libero volutpat sed cras. </p>",
		unread: false,
		attachment: true,
		starred: true,
		important: true,
		inbox: true,
		sent: false,
		draft: false,
		spam: false,
		trash: false,
		label: "Social"
	}
]

export default emailData;
