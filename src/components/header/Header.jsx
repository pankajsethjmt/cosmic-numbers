import Animation from "../ui/Animation";
import Divider from "../ui/Divider";
import SubTitle from "../ui/SubTitle";
import Title from "../ui/Title";
import "./Header.css";

const HEADER_ANIMATION = "\u263D \u2726 \u263E";
const ZODIAC_STRIP =
  "\u2648 \u2649 \u264A \u264B \u264C \u264D \u264E \u264F \u2650 \u2651 \u2652 \u2653";
const STAR_SYMBOL = String.fromCodePoint(0x2726);

export default function Header() {
  return (
    <>
      <header className="header-shell">
        <Animation>{HEADER_ANIMATION}</Animation>
        <Title>Cosmic Numbers</Title>
        <Divider symbol={STAR_SYMBOL} />
        <SubTitle>
          Unveil the numerological destiny encoded in your birth
        </SubTitle>
      </header>

      <div className="header-zodiac-strip">{ZODIAC_STRIP}</div>
    </>
  );
}
