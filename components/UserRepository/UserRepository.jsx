import React from 'react';
import classes from './UserRepository.module.scss'
import Image from "next/image";
import GoogleMapReact from 'google-map-react';

const UserRepository = ({user}) => {

  const {street, suite, city, zipcode, geo} = user.address
  const {name: nameCompany, catchPhrase, bs} = user.company
  const lat = +geo.lat
  const lng = +geo.lng

  return (
    <div className={classes.allUserInfo}>
      <div className={classes.userImgGeo}>
        <Image
          src={'/user.png'}
          width={200}
          height={200}
          alt={'User image'}/>
        <div className={classes.map}>
          <div className={classes.sectionHeader}>Google Map</div>
          <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyBLkgvLx9b6ez8NrQ2_Zv6haPxYvOX0Lok'}}
            defaultCenter={{lat, lng}}
            defaultZoom={11}
          />
          P.S Map works, but I disconnected billing
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.infoSection}>
          <div className={classes.sectionHeader}>Private Info</div>
          <div><span>Name:</span> {user.name}</div>
          <div><span>User name in system :</span> {user.username}</div>
          <div><span>Phone :</span> {user.phone}</div>
          <div><span>Website :</span> <a href={user.website}>{user.website}</a></div>
        </div>
        <div className={classes.infoSection}>
          <div className={classes.sectionHeader}>Address</div>
          <div><span>Name:</span> {street}</div>
          <div><span>User name in system :</span> {suite}</div>
          <div><span>Phone :</span> {city}</div>
          <div><span>Website :</span> {zipcode}</div>
        </div>
        <div className={classes.infoSection}>
          <div className={classes.sectionHeader}>Company Info</div>
          <div><span>Name Company: </span> {nameCompany}</div>
          <div><span>Spec. : </span>{catchPhrase}</div>
          <div><span>BS. : </span> {bs}</div>
        </div>
        <a className="waves-effect waves-light btn" href={'https://github.com/Algoritm211'} target={'_blank'}>Go to
          Git</a>
      </div>
    </div>
  );
};

export default UserRepository;
