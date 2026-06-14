:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coot-headless'
.. highlight: bash

coot-headless
=============

.. conda:recipe:: coot-headless
   :replaces_section_title:
   :noindex:

   Coot Headless API \- Software for macromolecular model building.

   :homepage: https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/coot
   :documentation: https://www.mrc-lmb.cam.ac.uk/lucrezia/libcootapi-documentation/index.html
   
   :developer docs: https://github.com/pemsley/coot
   :license: GPL3 / GPL-3.0-or-later AND LGPL-3.0-or-later
   :recipe: /`coot-headless <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coot-headless>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coot-headless/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444910007493`

   Coot is a macromolecular model building\, model completion and validation
   application. This package provides the headless APIs \(Chapi python bindings and libcootapi C\+\+ library\)
   without GUI dependencies\, suitable for automated workflows.



.. conda:package:: coot-headless

   |downloads_coot-headless| |docker_coot-headless|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-0</code>,  <code>1.2-2</code>,  <code>1.2-1</code>,  <code>1.2-0</code>,  <code>1.1.20-1</code>,  <code>1.1.20-0</code>,  <code>1.1.19-0</code>,  <code>1.1.18-3</code>,  <code>1.1.18-2</code>,  </span></summary>
      

      ``1.3.1-0``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1.20-1``,  ``1.1.20-0``,  ``1.1.19-0``,  ``1.1.18-3``,  ``1.1.18-2``,  ``1.1.18-1``,  ``1.1.18-0``,  ``1.1.17-3``,  ``1.1.17-2``,  ``1.1.17-1``,  ``1.1.17-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on acedrg: 
   :depends on cairo: ``>=1.18.4,<2.0a0``
   :depends on clipper: ``>=2.1.20180802,<3.0a0``
   :depends on elfutils: ``>=0.194,<0.195.0a0``
   :depends on fontconfig: ``>=2.17.1,<3.0a0``
   :depends on fonts-conda-ecosystem: 
   :depends on gemmi: ``>=0.7.4,<0.7.5.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libboost: ``>=1.88.0,<1.89.0a0``
   :depends on libccp4: ``>=8.0.0,<9.0a0``
   :depends on libffi: ``>=3.5.2,<3.6.0a0``
   :depends on libfreetype: ``>=2.14.3``
   :depends on libfreetype6: ``>=2.14.3``
   :depends on libgcc: ``>=14``
   :depends on libpng: ``>=1.6.58,<1.7.0a0``
   :depends on libsqlite: ``>=3.53.1,<4.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libxml2: 
   :depends on libxml2-16: ``>=2.15.3``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on mmdb2: ``>=2.0.22,<3.0a0``
   :depends on numpy: ``*``
   :depends on ospray: ``>=3.2.0,<3.3.0a0``
   :depends on pixman: ``>=0.46.4,<1.0a0``
   :depends on python: ``>=3.11,<3.12.0a0 *_cpython``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on rdkit: ``2026.03.1``
   :depends on servalcat: ``>=0.4.128``
   :depends on ssm: ``>=1.4,<2.0a0``
   :depends on tbb: ``>=2022.3.0``

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

    pixi global install coot-headless

to add into an existing workspace instead, run::

    pixi add coot-headless

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coot-headless

Alternatively, to install into a new environment, run::

    conda create -n envname coot-headless

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coot-headless:<tag>

(see `coot-headless/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coot-headless| image:: https://img.shields.io/conda/dn/bioconda/coot-headless.svg?style=flat
   :target: https://anaconda.org/bioconda/coot-headless
   :alt:   (downloads)
.. |docker_coot-headless| image:: https://quay.io/repository/biocontainers/coot-headless/status
   :target: https://quay.io/repository/biocontainers/coot-headless
.. _`coot-headless/tags`: https://quay.io/repository/biocontainers/coot-headless?tab=tags


.. raw:: html

   <script>
      var package = "coot-headless";
      var versions = ["1.3.1","1.2","1.2","1.2","1.1.20"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_coot-headless"></div>
   <div style="width: 100%" id="platform_plot_coot-headless"></div>
   <div style="width: 100%" id="cdf_plot_coot-headless"></div>



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
         
            // Build cdf plot for coot-headless
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/coot-headless/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_coot-headless', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for coot-headless
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/coot-headless/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_coot-headless', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for coot-headless
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/coot-headless/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_coot-headless', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coot-headless/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coot-headless/README.html