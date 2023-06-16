type Zero = 'Zero';
type Suc<N extends Nat> = `Suc<${N}>`;
type Nat = Zero | Suc<any>;

type Add<X extends Nat, Y extends Nat> = Y extends Zero
  ? X
  : Y extends Suc<infer YP>
  ? Add<Suc<X>, YP>
  : Zero;

type a1 = Add<Suc<Zero>, Suc<Zero>>;
//   ^? type a1 = "Suc<Suc<Zero>>" -> 3

type Sub<X extends Nat, Y extends Nat> = X extends Suc<infer XP>
  ? Y extends Suc<infer YP>
    ? Sub<XP, YP>
    : X
  : Zero;

type s1 = Sub<Suc<Suc<Zero>>, Suc<Zero>>;
//   ^? type s1 = "Suc<Zero>" -> 1

type Mult<X extends Nat, Y extends Nat> = Y extends Suc<infer YP>
  ? Add<X, Mult<X, YP>>
  : Zero;

type m1 = Mult<Suc<Suc<Zero>>, Suc<Suc<Zero>>>;
//   ^? type m1 = "Suc<Suc<Suc<Suc<Zero>>>>" -> 4

type _Div<
  X extends Nat,
  Y extends Nat,
  Q extends Nat,
  R extends Nat
> = X extends Suc<infer XP>
  ? R extends Suc<infer RP>
    ? _Div<XP, Y, Q, RP>
    : _Div<XP, Y, Suc<Q>, Y>
  : Q;

type Div<X extends Nat, Y extends Nat> = Y extends Suc<infer YP>
  ? _Div<X, YP, Zero, YP>
  : Zero;

type d1 = Div<Suc<Suc<Suc<Suc<Suc<Suc<Zero>>>>>>, Suc<Suc<Zero>>>;
//   ^? type d1 = "Suc<Suc<Suc<Zero>>>" -> 3
