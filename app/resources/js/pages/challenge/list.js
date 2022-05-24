import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import ListFrame from '@/layouts/list-frame';
import ListItem from '@/components/list-item';

export default function ChallengeList({ team, group, points, challenges }) {
  
  window.Echo.private(`team.${team.id}`).listenToAll((e, d) => { console.log(e, d) });
  
  return (
    <>
      <Head title="Challenges" />
      <ListFrame team={ team } group={ group } points={ points }>
        { challenges.map(p => (<ListItem key={ p.id } type="challenge" data={ p } />)) }
      </ListFrame>
    </>
  );
}
