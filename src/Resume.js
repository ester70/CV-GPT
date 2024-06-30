import React from 'react';
import './index.css';
import ContactList from './ContactList';
import Section from './Section';
import { faGraduationCap, faBriefcase, faUser, faComments } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  const contactDetails = [
    { type: 'Phone', value: '052-7195370' },
    { type: 'Email', value: 'Ester70706@gmail.com' },
    { type: 'Linkedin', value: 'https://www.linkedin.com/in/estycohenindustrialengineer' },
    { type: 'Github', value: 'https://github.com/ester70?tab=repositories' },
  ];

  return (
    <div className="resume">
      <div className="greenBackground">
        <div id="myName">אסתי כהן
        
        <div className='subTitle'> מנתחת נתונים ומפתחת BI</div></div>
        <div id="contactDetails">
          <ContactList items={contactDetails} />
        </div>
      </div>
      
      <Section title="פרופיל" icon={faUser}>
        <p className='myProfile'>
          בעלת יכולת למידה עצמית גבוהה וכישורי ניתוח מעמיקים,
          <br />
          מצטיינת בחשיבה ביקורתית אנליטית וביכולת הסקת מסקנות תוך מתן פתרונות יצירתיים. כושר הסבר מעולה.
          <br />אוהבת אתגרים ונהנית מעבודת צוות.
          <br/>
          <br /> שולטת בשפות: Python, Java , SQL

        </p>

      </Section>

      <Section title="השכלה" icon={faGraduationCap}>
        <p>
          <strong>בהנדסת תעשיה וניהול התמחות מערכות מידע | המכללה האקדמית להנדסה בירושלים B.s.c</strong>
          <p className='date'><strong>: 2021 - היום</strong></p>
          <p>Cros-river משתתפת בתוכנית מצטיינים של</p>
        </p>
        <h3> :פרויקטים במהלך הלימודים </h3>
        <p> 
    <ul>
        <li>
            <strong>פרויקט במסגרת קורס ניתוח מערכות מידע:</strong>
            <br />
            זיהוי הצורך בשוק עבור מערכת ייעודית לניהול ועד בית עבור מנהלים ללא רקע טכנולוגי, איסוף דרישות והגדרת השימוש- כולל תמיכה בתרחישים שונים ובמקרי קצה. תכנון ופיתוח המערכת בסביבת zoho creator (low code) יצירת ממשק עבור מנהלי הנכסים, דיווחים וקבלות לדיירים, מעקב על חיובים ותזכורות תשלום אוטומטיות. כתיבה וספק מדריך למשתמש. (ציון 95)
        </li>
        <li>
            <strong>פרויקט ב-Python – במסגרת קורס אופטימיזציה הנדסית:</strong>
            <br />
            תוכנה עבור שיבוצים אופטימליים בין חונך לחניך ע"פ העדפות. (ציון 100)
        </li>
        <li>
            <strong>פרויקט ב - SQL במסגרת קורס מסדי נתונים:</strong>
            <br />
            ניתוח של הישויות והקשרים הנדרשים ביניהן באמצעות תרשים ERD. יישום מלא של מסד הנתונים ב SQL server כולל יצירת הטבלאות, מפתחות וקשרים ביניהן, כתיבה וביצוע של שאילתות מורכבות. (ציון 100)
        </li>
        <li>
            <strong>בניית מערכת מידע ב-Access- לשימוש מלונית:</strong>
            (ציון 98)
        </li>
    </ul>
    </p>

                 לימודי חשבונאות וייעוץ מס | רישיון - מועצת יועצי המס
                <p  className='date'><strong>  : 2011 - 2013 </strong> </p>
            </Section>

            <Section title="ניסיון תעסוקתי" icon={faBriefcase}>
                <p>
                <strong>  עיריית ירושלים מחלקת תכנון ואסטרטגיה <div className= "date">: 08.2023 -  היום </div></strong>
                </p>
                <ul>
                    <li>ניסיון בפיתוח דשבורדים המנתחים מגוון היבטים בשכונות כגון עליה, הגירה, חינוך, פשע, ארנונה מצב סוציו-אקונומי ועוד.</li>
                    <li>מיפוי צרכי המשתמשים בדשבורד והתאמתו בהתאם.</li>
                    <li>שימוש בכלי BI ושפות תכנות כגון SQL, DAX ו-HTML להצגת הנתונים ויזואלית והתאמת הדשבורד לשימוש אינטואיטיבי.</li>
                    <li>שיתוף פעולה עם גורמים בעירייה לניתוח נתונים לקבלת החלטות מבוססות נתונים בהתאם.</li>
                </ul>

                <p>
                    <strong> "our place Israel" <p className='date'> : 2019 - 08.23    </p>  </strong>
                </p>
                <ul>
                    <li>מנה"ח יחידה. אחריות עד המאזן כולל דיווחים לרשויות ומשכורות.</li>
                    <li>ניהול כספים ותזרים מזומנים, חישוב והגשת מענקי קורונה.</li>
                </ul>

                <p>
                    <strong>  טריניטי מערכות בקרת שכר בע"מ <p className='date'>: 2018 </p> </strong>
                </p>
                <ul>
                    <li>מנה"ח יחידה בחברה. הכנת דוחות שנתיים, מס הכנסה מע"מ וביטוח לאומי, שליטה במערכת שע"מ.</li>
                </ul>
            </Section>

            <Section title="מיומנויות" icon={faTools}>

                            <ul>
                    <li><strong>שפות תוכנה:</strong>שפות תוכנה: R, java, Python</li>
                    <li><strong>שפות אינטרנט :  </strong>CSS, JavaScript ,React, HTML,</li>
                    <li><strong>מערכות מידע:</strong> Access, SQL</li>
                    <li><strong>תוכנות שונות: </strong>power BI , MS-Project, Excel ,Dax ,Visio</li>
                     <li><strong>כלים ומתודולוגיות:</strong> תרשימי זרימה , אפיון ועיצוב פונקציונאלי – תרשימי DFD, תרשימי ישויות קשרים. אפיון טכני –  
                     <br /> {'\u00A0\u00A0\u00A0'}      .Class Diagram, Activity Diagram, Use Case Diagram     </li>
                    <li>ידע מקצועי במגוון מתודולוגיות ארגוניות וכלים שונים בדגש על Lean startup ושיטת Agile.</li>
                </ul>
            </Section>
            
            <Section title="שפות" icon={faComments}>
            
                <ul>
                    <li>עברית: שפת אם</li>
                    <li>אנגלית : רמה טובה מאוד </li>
                </ul>
            </Section>
        </div>
    );
};

export default Resume;
