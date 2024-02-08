import EMailIcon from 'assets/emailIcon.svg?react';
import PhoneIcon from 'assets/phoneIcon.svg?react';
import { IUser } from 'types';
import styles from './UserDetails.module.css';

interface UserDetailsProps {
  user: IUser | null;
}

const UserDetails = ({ user }: UserDetailsProps) => {
  return (
    <section className={styles.content}>
      <div className={styles.about}>
        <p className={styles.text}>
          Клиенты видят в нем эксперта по вопросам разработки комплексных
          решений финансовых продуктов, включая такие аспекты, как
          организационная структура, процессы, аналитика и ИТ-компоненты. Он
          помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
          процессы за счет применения новейших технологий и увеличивать продажи,
          используя самые современные аналитические инструменты.
          <br />
          <br />
          В работе с клиентами недостаточно просто решить конкретную проблему
          или помочь справиться с трудностями. Не менее важно уделять внимание
          обмену знаниями: "Один из самых позитивных моментов — это осознание
          того, что ты помог клиенту перейти на совершенно новый уровень
          компетентности, уверенность в том, что после окончания проекта у
          клиента есть все необходимое, чтобы дальше развиваться
          самостоятельно".
          <br />
          <br />
          Помимо разнообразных проектов для клиентов финансового сектора, Сорин
          ведет активную предпринимательскую деятельность. Он является
          совладельцем сети клиник эстетической медицины в Швейцарии,
          предлагающей инновационный подход к красоте, а также инвестором других
          бизнес-проектов.
        </p>
      </div>
      <ul className={styles.contacts}>
        <li className={styles.contactItem}>
          <PhoneIcon />
          <a className={styles.contactItemLink} href='tel:+79543334455'>
            +7 (954) 333-44-55
          </a>
        </li>
        <li className={styles.contactItem}>
          <EMailIcon />
          <a className={styles.contactItemLink} href={`mailto:${user?.email}`}>
            {user?.email}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default UserDetails;
