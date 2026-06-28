:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openstructure'
.. highlight: bash

openstructure
=============

.. conda:recipe:: openstructure
   :replaces_section_title:
   :noindex:

   Open\-Source Computational Structural Biology Framework.

   :homepage: https://openstructure.org
   :documentation: https://openstructure.org/docs
   
   :developer docs: https://git.scicore.unibas.ch/schwede/openstructure
   :license: LGPL / LGPL-3.0-or-later
   :recipe: /`openstructure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openstructure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openstructure/meta.yaml>`_
   :links: biotools: :biotools:`openstructure`, doi: :doi:`10.1107/S0907444913007051`

   This project aims to provide an open\-source\, modular\, flexible\, molecular modelling and visualization environment.
   It is targeted at interested method developers in the field of structural bioinformatics.



.. conda:package:: openstructure

   |downloads_openstructure| |docker_openstructure|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.11.1-3</code>,  <code>2.11.1-2</code>,  <code>2.11.1-1</code>,  <code>2.11.1-0</code>,  <code>2.11.0-1</code>,  <code>2.11.0-0</code>,  <code>2.10.0-3</code>,  <code>2.10.0-2</code>,  <code>2.10.0-1</code>,  </span></summary>
      

      ``2.11.1-3``,  ``2.11.1-2``,  ``2.11.1-1``,  ``2.11.1-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.0-3``,  ``2.10.0-2``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.9.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on fftw: ``>=3.3.11,<4.0a0``
   :depends on glew: ``>=2.3.0,<2.4.0a0``
   :depends on glfw: ``>=3.4,<4.0a0``
   :depends on libboost: ``>=1.86.0,<1.87.0a0``
   :depends on libboost-python: ``>=1.86.0,<1.87.0a0``
   :depends on libegl: ``>=1.7.0,<2.0a0``
   :depends on libgcc: ``>=14``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=14.3.0``
   :depends on libgl: ``>=1.7.0,<2.0a0``
   :depends on libgles: ``>=1.7.0,<2.0a0``
   :depends on libglvnd: ``>=1.7.0,<2.0a0``
   :depends on libglx: ``>=1.7.0,<2.0a0``
   :depends on libopengl: ``>=1.7.0,<2.0a0``
   :depends on libpng: ``>=1.6.58,<1.7.0a0``
   :depends on libsqlite: ``>=3.53.1,<4.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libtiff: ``>=4.7.1,<4.8.0a0``
   :depends on libxcb: ``>=1.17.0,<2.0a0``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on mesalib: ``>=26.0.3,<26.1.0a0``
   :depends on networkx: ``>=3.4.2,<4.0a0``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=2.2.6,<3.0a0``
   :depends on ocl-icd: ``>=2.3.3,<3.0a0``
   :depends on ocl-icd-system: 
   :depends on openmm: ``>=8.5.1,<9.0a0``
   :depends on pandas: ``>=2.3.3,<3.0a0``
   :depends on parasail: ``>=2.6.2,<3.0a0``
   :depends on pyqt: ``>=5.15.11,<5.16.0a0``
   :depends on python: ``>=3.10,<3.11.0a0 *_cpython``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on qt: ``>=5.15.15,<5.16.0a0``
   :depends on scipy: ``>=1.13.1,<2.0a0``
   :depends on voronota: ``>=1.29.4781,<2.0a0``

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

    pixi global install openstructure

to add into an existing workspace instead, run::

    pixi add openstructure

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install openstructure

Alternatively, to install into a new environment, run::

    conda create -n envname openstructure

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/openstructure:<tag>

(see `openstructure/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_openstructure| image:: https://img.shields.io/conda/dn/bioconda/openstructure.svg?style=flat
   :target: https://anaconda.org/bioconda/openstructure
   :alt:   (downloads)
.. |docker_openstructure| image:: https://quay.io/repository/biocontainers/openstructure/status
   :target: https://quay.io/repository/biocontainers/openstructure
.. _`openstructure/tags`: https://quay.io/repository/biocontainers/openstructure?tab=tags


.. raw:: html

   <script>
      var package = "openstructure";
      var versions = ["2.11.1","2.11.1","2.11.1","2.11.1","2.11.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_openstructure"></div>
   <div style="width: 100%" id="platform_plot_openstructure"></div>
   <div style="width: 100%" id="cdf_plot_openstructure"></div>



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
         
            // Build cdf plot for openstructure
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/openstructure/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_openstructure', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for openstructure
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/openstructure/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_openstructure', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for openstructure
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/openstructure/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_openstructure', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openstructure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openstructure/README.html