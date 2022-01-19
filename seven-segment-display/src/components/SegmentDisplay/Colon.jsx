import React from "react";

const Colon = () => {
  const transform = (functions) => {
    return functions.reduce((funcs, func) => {
      var name = Object.keys(func)[0];
      var params = Array.isArray(func[name]) ? func[name] : [func[name]];
      return `${funcs} ${name}(${params.join(" ")})`;
    }, "");
  };

  return (
    <svg viewBox={[-1, -1, 12, 20]}>
      <g
        transform={this.transform([
          { translate: [this.props.x, this.props.y] },
        ])}
        style={{
          fillRule: "evenodd",
          strokeWidth: 0.25,
          strokeOpacity: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
      >
        <circle
          cx={12 / 2}
          cy={20 / 3}
          r={1}
          fill={this.props.color}
          fillOpacity={
            this.props.on ? this.props.onOpacity : this.props.offOpacity
          }
        />
        <circle
          cx={12 - 12 / 2}
          cy={20 - 20 / 3}
          r={1}
          fill={this.props.color}
          fillOpacity={
            this.props.on ? this.props.onOpacity : this.props.offOpacity
          }
        />
      </g>
    </svg>
  );
};

Colon.defaultProps = {
  on: true,
  onOpacity: 1,
  offOpacity: 0.15,
  color: "red",
  x: 0,
  y: 0,
};

export default Colon;
