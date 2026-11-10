// Freeze-frame puzzles for /play.
//
// Coordinates use the half-court diagram system (see CourtDiagram.astro):
// viewBox 340x320, basket at the top, 20px per metre.
//
// A puzzle is a frozen court plus one question. The player taps a target —
// either a floor spot or a teammate — and gets one sentence of why.
// More than one answer can be right: 'best' and 'good' both solve the puzzle,
// 'no' explains what was missed and lets them look again.

export type Verdict = 'best' | 'good' | 'no';

export interface Target {
  verdict: Verdict;
  why: string;
}

export interface PuzzlePlayer {
  x: number;
  y: number;
  label?: string;
  team?: 'offence' | 'defence' | 'highlight';
  target?: Target; // tap this player ("who's open?")
}

export interface PuzzleSpot extends Target {
  x: number;
  y: number;
}

export interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  curve?: number;
}

export interface Puzzle {
  id: string;
  type: 'find-the-spot' | 'whos-open';
  title: string;
  concept: string;
  setup: string;    // one line of scene-setting
  question: string; // the coaching question
  players: PuzzlePlayer[];
  ball: { x: number; y: number };
  spots?: PuzzleSpot[];
  // what the best answer opens up — drawn once the puzzle is solved
  reveal: { lanes?: Line[]; passes?: Line[]; moves?: Line[] };
  takeaway: string;
  post?: { href: string; label: string };
}

export const typeLabel: Record<Puzzle['type'], string> = {
  'find-the-spot': 'Find the spot',
  'whos-open': "Who's open?",
};

export const puzzles: Puzzle[] = [
  {
    id: 'leave-the-lane-open',
    type: 'find-the-spot',
    title: 'Leave the lane open',
    concept: 'Spacing',
    setup: 'Your teammate has the ball at the top. You are standing in the middle of the key.',
    question: 'Where should you go?',
    players: [
      { x: 170, y: 234, label: '1' },
      { x: 272, y: 180, label: '2' },
      { x: 306, y: 66, label: '3' },
      { x: 68, y: 182, label: '4' },
      { x: 170, y: 122, label: 'me', team: 'highlight' },
      { x: 148, y: 214, label: 'x', team: 'defence' },
      { x: 146, y: 110, label: 'x', team: 'defence' },
    ],
    ball: { x: 186, y: 224 },
    spots: [
      { x: 34, y: 66, verdict: 'best', why: 'The corner was empty. Now the middle is open, and your defender has to choose: follow you or guard the lane.' },
      { x: 204, y: 190, verdict: 'no', why: 'Too close to the ball. One defender can now guard you and your teammate at the same time.' },
      { x: 170, y: 82, verdict: 'no', why: 'You are still in the lane. If you stand there, nobody can drive through it.' },
    ],
    reveal: {
      moves: [{ x1: 158, y1: 114, x2: 48, y2: 70, curve: 12 }],
      lanes: [{ x1: 170, y1: 218, x2: 170, y2: 80 }],
    },
    takeaway: 'Moving away from the ball can be the most helpful thing you do. An empty lane is a gift to your teammate.',
    post: { href: '/blog/why-spacing-is-undertaught', label: 'Why Spacing Is the Most Undertaught Fundamental' },
  },
  {
    id: 'can-the-ball-see-you',
    type: 'find-the-spot',
    title: 'Can the ball see you?',
    concept: 'Passing angles',
    setup: 'Your teammate has the ball on the wing. A defender is standing between you and the ball.',
    question: 'Where can the ball see you?',
    players: [
      { x: 272, y: 150, label: '1' },
      { x: 185, y: 131, label: 'x', team: 'defence' },
      { x: 120, y: 118, label: 'me', team: 'highlight' },
    ],
    ball: { x: 288, y: 140 },
    spots: [
      { x: 70, y: 182, verdict: 'best', why: 'A clean line from the ball to you, with nobody in the way. A few steps was all it took.' },
      { x: 170, y: 236, verdict: 'good', why: 'The ball can see you here too. The wing is a little better because it keeps the floor spread.' },
      { x: 100, y: 96, verdict: 'no', why: 'The defender is still on the line between you and the ball. The ball cannot see you.' },
    ],
    reveal: {
      moves: [{ x1: 112, y1: 126, x2: 78, y2: 172, curve: 8 }],
      lanes: [{ x1: 270, y1: 152, x2: 80, y2: 180 }],
      passes: [{ x1: 262, y1: 154, x2: 84, y2: 180 }],
    },
    takeaway: 'Open is a straight line from the ball to you with no defender on it. If there is one, move until there is not.',
    post: { href: '/blog/get-off-the-straight-line', label: 'Get Off the Straight Line' },
  },
  {
    id: 'fill-the-weak-side',
    type: 'find-the-spot',
    title: 'Fill the weak side',
    concept: 'Switching sides',
    setup: 'Everyone has drifted to the ball side, and the defence has followed.',
    question: 'Where is the space?',
    players: [
      { x: 272, y: 180, label: '1' },
      { x: 306, y: 66, label: '2' },
      { x: 180, y: 234, label: '3' },
      { x: 222, y: 150, label: 'me', team: 'highlight' },
      { x: 250, y: 158, label: 'x', team: 'defence' },
      { x: 282, y: 92, label: 'x', team: 'defence' },
      { x: 206, y: 224, label: 'x', team: 'defence' },
      { x: 228, y: 102, label: 'x', team: 'defence' },
    ],
    ball: { x: 288, y: 170 },
    spots: [
      { x: 34, y: 66, verdict: 'best', why: 'Nobody is there, and no defender is near it. That is the most open place on the floor.' },
      { x: 68, y: 184, verdict: 'good', why: 'Open, and an easier pass to reach. The corner is even further from the help.' },
      { x: 254, y: 128, verdict: 'no', why: 'That is the crowd. Four defenders are already here.' },
    ],
    reveal: {
      moves: [{ x1: 208, y1: 144, x2: 50, y2: 74, curve: -10 }],
      lanes: [{ x1: 268, y1: 196, x2: 40, y2: 84, curve: -46 }],
      passes: [{ x1: 268, y1: 196, x2: 42, y2: 84, curve: -46 }],
    },
    takeaway: 'When the defence leans toward the ball, the far side is the least guarded place on the court.',
    post: { href: '/blog/the-ball-moves-faster-than-the-defence', label: 'The Ball Moves Faster Than the Defence' },
  },
  {
    id: 'find-the-outlet-box',
    type: 'find-the-spot',
    title: 'Find the outlet box',
    concept: 'Transition',
    setup: 'Your teammate has just grabbed the rebound, and there is a crowd around the basket.',
    question: 'Where do you go to start the break?',
    players: [
      { x: 196, y: 82, label: '5' },
      { x: 170, y: 156, label: 'me', team: 'highlight' },
      { x: 174, y: 96, label: 'x', team: 'defence' },
      { x: 204, y: 118, label: 'x', team: 'defence' },
      { x: 150, y: 76, label: 'x', team: 'defence' },
    ],
    ball: { x: 210, y: 70 },
    spots: [
      { x: 298, y: 136, verdict: 'best', why: 'The outlet box: out by the sideline on the ball side. An easy pass, away from the crowd.' },
      { x: 42, y: 136, verdict: 'good', why: 'Also an outlet box, but the pass has to cross the crowd to reach you.' },
      { x: 228, y: 146, verdict: 'no', why: 'Too close to the crowd. A defender can reach that pass.' },
    ],
    reveal: {
      moves: [{ x1: 184, y1: 154, x2: 284, y2: 138, curve: 8 }],
      lanes: [{ x1: 212, y1: 82, x2: 288, y2: 126 }],
      passes: [{ x1: 214, y1: 84, x2: 286, y2: 126 }],
    },
    takeaway: 'A rebound is the start of our attack. The outlet box gets the ball out of the crowd fast.',
    post: { href: '/blog/passing-ahead-in-transition', label: 'Passing Ahead in Transition' },
  },
  {
    id: 'basket-side',
    type: 'find-the-spot',
    title: 'Basket side',
    concept: 'Defence',
    setup: 'Your team is defending. You are guarding number 2 on the wing.',
    question: 'Where should you stand?',
    players: [
      { x: 170, y: 234, label: '1' },
      { x: 272, y: 180, label: '2' },
      { x: 68, y: 182, label: '3' },
      { x: 172, y: 206, label: 'x', team: 'defence' },
      { x: 92, y: 158, label: 'x', team: 'defence' },
    ],
    ball: { x: 186, y: 224 },
    spots: [
      { x: 244, y: 146, verdict: 'best', why: 'Basket side. If she gets past you, the basket is still behind you, not an open lane.' },
      { x: 204, y: 232, verdict: 'no', why: 'You went to the ball and left your player. All the space behind you is now hers.' },
      { x: 300, y: 204, verdict: 'no', why: 'She is between you and the basket. One step and she has a clear run.' },
    ],
    reveal: {
      lanes: [{ x1: 266, y1: 170, x2: 182, y2: 64 }],
    },
    takeaway: 'Defend the basket, not the ball. Stay between your player and the hoop, and let the attack come to you.',
    post: { href: '/blog/game-5-basket-side', label: 'Game 5: Basket Side' },
  },
  {
    id: 'who-can-the-ball-see',
    type: 'whos-open',
    title: 'Who can the ball see?',
    concept: 'Passing angles',
    setup: 'You have the ball at the top.',
    question: 'Who is open?',
    players: [
      { x: 170, y: 234, label: 'me', team: 'highlight' },
      { x: 272, y: 180, label: '2', target: { verdict: 'no', why: 'A defender is standing right on the line between you. She can pick that pass off.' } },
      { x: 68, y: 182, label: '3', target: { verdict: 'best', why: 'A clean line, and her defender has sagged into the key. An easy catch.' } },
      { x: 170, y: 108, label: '4', target: { verdict: 'no', why: 'Two defenders are between you and her. That pass goes into traffic.' } },
      { x: 228, y: 204, label: 'x', team: 'defence' },
      { x: 112, y: 148, label: 'x', team: 'defence' },
      { x: 170, y: 152, label: 'x', team: 'defence' },
      { x: 148, y: 132, label: 'x', team: 'defence' },
    ],
    ball: { x: 186, y: 224 },
    reveal: {
      lanes: [{ x1: 156, y1: 228, x2: 80, y2: 188 }],
      passes: [{ x1: 156, y1: 228, x2: 82, y2: 190 }],
    },
    takeaway: 'Before you pass, check the line. A teammate is only open if nobody is standing on it.',
    post: { href: '/blog/get-off-the-straight-line', label: 'Get Off the Straight Line' },
  },
  {
    id: 'look-to-the-far-side',
    type: 'whos-open',
    title: 'Look to the far side',
    concept: 'Switching sides',
    setup: 'You have the ball on the wing, and the defence has crowded your side.',
    question: 'Who is open?',
    players: [
      { x: 272, y: 180, label: 'me', team: 'highlight' },
      { x: 306, y: 66, label: '2', target: { verdict: 'no', why: 'Her defender is sitting in the passing lane.' } },
      { x: 170, y: 234, label: '3', target: { verdict: 'no', why: 'A defender is on the line. That pass gets tipped.' } },
      { x: 34, y: 66, label: '4', target: { verdict: 'best', why: 'Nobody is near her. Throw it high, over the top of the crowd.' } },
      { x: 250, y: 160, label: 'x', team: 'defence' },
      { x: 294, y: 104, label: 'x', team: 'defence' },
      { x: 204, y: 216, label: 'x', team: 'defence' },
      { x: 224, y: 118, label: 'x', team: 'defence' },
    ],
    ball: { x: 288, y: 170 },
    reveal: {
      lanes: [{ x1: 268, y1: 196, x2: 40, y2: 84, curve: -46 }],
      passes: [{ x1: 268, y1: 196, x2: 42, y2: 84, curve: -46 }],
    },
    takeaway: 'When everyone is near you, look far. The crowd on your side means space on the other.',
    post: { href: '/blog/the-ball-moves-faster-than-the-defence', label: 'The Ball Moves Faster Than the Defence' },
  },
  {
    id: 'find-the-cutter',
    type: 'whos-open',
    title: 'Find the cutter',
    concept: 'Timing',
    setup: 'You have the ball at the top. Number 2 is cutting to the basket.',
    question: 'Who is the best pass?',
    players: [
      { x: 170, y: 234, label: 'me', team: 'highlight' },
      { x: 206, y: 120, label: '2', target: { verdict: 'best', why: 'She has beaten her defender and she is close to the basket. Pass it now, before the gap closes.' } },
      { x: 68, y: 182, label: '3', target: { verdict: 'no', why: 'Her defender is on the line between you.' } },
      { x: 34, y: 66, label: '4', target: { verdict: 'good', why: 'She is open. But number 2 is open and right at the basket.' } },
      { x: 242, y: 162, label: 'x', team: 'defence' },
      { x: 112, y: 204, label: 'x', team: 'defence' },
      { x: 150, y: 214, label: 'x', team: 'defence' },
    ],
    ball: { x: 186, y: 224 },
    reveal: {
      lanes: [{ x1: 178, y1: 220, x2: 200, y2: 136 }],
      passes: [{ x1: 178, y1: 220, x2: 200, y2: 136 }],
    },
    takeaway: 'Some space only lasts a second. When a teammate beats her defender, the pass has to leave straight away.',
    post: { href: '/blog/the-run-starts-before-the-pass', label: 'The Run Starts Before the Pass' },
  },
  {
    id: 'swing-it',
    type: 'whos-open',
    title: 'Swing it',
    concept: 'Patience',
    setup: 'The ball has just come to you at the top from the right side. The defence is still over there.',
    question: 'Where does the ball go next?',
    players: [
      { x: 170, y: 234, label: 'me', team: 'highlight' },
      { x: 272, y: 180, label: '2', target: { verdict: 'no', why: 'That is where the ball just came from. The defence is already there.' } },
      { x: 306, y: 66, label: '3', target: { verdict: 'no', why: 'Her defender is in the lane, and it is a long pass back into the crowd.' } },
      { x: 68, y: 182, label: '4', target: { verdict: 'best', why: 'Her defender is late, still in the key. Keep the ball moving and the defence has to chase.' } },
      { x: 236, y: 198, label: 'x', team: 'defence' },
      { x: 286, y: 92, label: 'x', team: 'defence' },
      { x: 152, y: 148, label: 'x', team: 'defence' },
      { x: 180, y: 206, label: 'x', team: 'defence' },
    ],
    ball: { x: 186, y: 224 },
    reveal: {
      lanes: [{ x1: 156, y1: 228, x2: 80, y2: 188 }],
      passes: [{ x1: 156, y1: 228, x2: 82, y2: 190 }],
    },
    takeaway: 'Every pass makes the defence move. Keep it going side to side and somebody arrives late.',
    post: { href: '/blog/patience-is-an-attacking-skill', label: 'Patience Is an Attacking Skill' },
  },
  {
    id: 'the-easy-way-out',
    type: 'whos-open',
    title: 'The easy way out',
    concept: 'Under pressure',
    setup: 'You have the ball on the wing and your defender is right on you.',
    question: 'Who gets you out of trouble?',
    players: [
      { x: 272, y: 180, label: 'me', team: 'highlight' },
      { x: 292, y: 226, label: '2', target: { verdict: 'no', why: 'Too close to you. One defender can guard you both.' } },
      { x: 160, y: 240, label: '3', target: { verdict: 'best', why: 'A clear line and room to catch. The simple pass is the right one.' } },
      { x: 68, y: 182, label: '4', target: { verdict: 'no', why: 'A long pass through the middle, with a defender waiting in the lane.' } },
      { x: 254, y: 162, label: 'x', team: 'defence' },
      { x: 288, y: 202, label: 'x', team: 'defence' },
      { x: 150, y: 180, label: 'x', team: 'defence' },
    ],
    ball: { x: 288, y: 170 },
    reveal: {
      lanes: [{ x1: 262, y1: 192, x2: 174, y2: 236 }],
      passes: [{ x1: 262, y1: 192, x2: 176, y2: 234 }],
    },
    takeaway: 'Under pressure, look for the teammate with room around her. Space makes the catch easy.',
    post: { href: '/blog/session-2-protect-the-ball', label: 'Session 2: Protect the Ball' },
  },
];
