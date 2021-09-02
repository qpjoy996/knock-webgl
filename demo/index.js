const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext('webgl');
console.log(gl);
const program = gl.createProgram();

const VSHADER_SOURCE, FSHADER_SOURCE;

const vertexShader, fragmentShader;


function createShader(gl, sourceCode, type) {
    // create shader
    var shader = gl.createShader(type);
    gl.sourceCode(shader, sourceCode);
    gl.compileShader(shader);
    return shader;
}
// define vertex shader
vertexShader = createShader(gl, VSHADER_SOURCE, gl.VERTEX_SHADER);
// define fragment shader
fragmentShader = createShader(gl, FSHADER_SOURCE, gl.FRAGMENT_SHADER);

// attach shader to program

// link program to context

gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
gl.useProgram(program);