:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tttrlib'
.. highlight: bash

tttrlib
=======

.. conda:recipe:: tttrlib
   :replaces_section_title:
   :noindex:

   A file format agnostic library for time\-resolved imaging and spectroscopic data.

   :homepage: https://github.com/fluorescence-tools/tttrlib
   :documentation: https://tttrlib.readthedocs.io
   
   :license: BSD / BSD-3-Clause
   :recipe: /`tttrlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tttrlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tttrlib/meta.yaml>`_

   tttrlib is a simple\, fast\, libray to read\, write and process
   time\-resolved imaging and spectroscopic data. For speed\, it 
   is written in C\+\+ and wrapped for Python via SWIG.



.. conda:package:: tttrlib

   |downloads_tttrlib| |docker_tttrlib|

   :versions:
      
      

      ``0.26.2-0``,  ``0.25.1-1``,  ``0.25.1-0``,  ``0.25.0-0``

      

   
   :depends on boost-cpp: 
   :depends on click: 
   :depends on click-didyoumean: 
   :depends on hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends on libcxx: ``>=19``
   :depends on llvm-openmp: ``>=19.1.7``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.21,<3``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-image: 
   :depends on tqdm: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install tttrlib

to add into an existing workspace instead, run::

    pixi add tttrlib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tttrlib

Alternatively, to install into a new environment, run::

    conda create -n envname tttrlib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tttrlib:<tag>

(see `tttrlib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tttrlib| image:: https://img.shields.io/conda/dn/bioconda/tttrlib.svg?style=flat
   :target: https://anaconda.org/bioconda/tttrlib
   :alt:   (downloads)
.. |docker_tttrlib| image:: https://quay.io/repository/biocontainers/tttrlib/status
   :target: https://quay.io/repository/biocontainers/tttrlib
.. _`tttrlib/tags`: https://quay.io/repository/biocontainers/tttrlib?tab=tags


.. raw:: html

   <script>
      var package = "tttrlib";
      var versions = ["0.26.2","0.25.1","0.25.1","0.25.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_tttrlib"></div>
   <div style="width: 100%" id="platform_plot_tttrlib"></div>
   <div style="width: 100%" id="cdf_plot_tttrlib"></div>



   ..
      Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for tttrlib
            try {
               const cdf_spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/cdf.vl.json")
               if (!cdf_spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_spec_resp.status}.`);
               }
               const cdf_spec = await cdf_spec_resp.json();
               const cdf_data_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cdf.json")
               if (!cdf_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_data_resp.status}.`);
               }
               const cdf_plot_data = await cdf_data_resp.json();
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/tttrlib/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_tttrlib', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for tttrlib
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/tttrlib/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_tttrlib', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for tttrlib
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/tttrlib/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_tttrlib', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tttrlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tttrlib/README.html