import React from 'react';
import Link from "next/link";
import classes from './UserPreview.module.scss'

const UserPreview = ({user}) => {
  return (
    <div className={classes.container}>
      <div className={classes.userInfo}>
        <div><span>Name:</span> {user.name}</div>
        <div><span>Email:</span> {user.email}</div>
        <div><span>Phone:</span> {user.phone}</div>
      </div>
      <Link href={'/repository/[repoId]'} as={`/repository/${user.id}`} key={user.id}>
        <a className="waves-effect waves-light btn">See page</a>
      </Link>
    </div>
  );
};

export default UserPreview;
