:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygenometracks'
.. highlight: bash

pygenometracks
==============

.. conda:recipe:: pygenometracks
   :replaces_section_title:
   :noindex:

   Standalone program and library to plot beautiful genome browser tracks.

   :homepage: https://github.com/deeptools/pyGenomeTracks/
   :license: GPL3
   :recipe: /`pygenometracks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenometracks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenometracks/meta.yaml>`_

   


.. conda:package:: pygenometracks

   |downloads_pygenometracks| |docker_pygenometracks|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.9-0</code>,  <code>3.8-0</code>,  <code>3.7-0</code>,  <code>3.6-0</code>,  <code>3.5.1-0</code>,  <code>3.5-1</code>,  <code>3.5-0</code>,  <code>3.4-0</code>,  <code>3.3-1</code>,  </span></summary>
      

      ``3.9-0``,  ``3.8-0``,  ``3.7-0``,  ``3.6-0``,  ``3.5.1-0``,  ``3.5-1``,  ``3.5-0``,  ``3.4-0``,  ``3.3-1``,  ``3.3-0``,  ``3.2.1-0``,  ``3.2-0``,  ``3.1.2-1``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1-0``,  ``3.0-0``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``,  ``1.0-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bx-python: ``>=0.8.13``
   :depends on future: ``>=0.17.0``
   :depends on gffutils: ``>=0.9``
   :depends on hicmatrix: ``>=15``
   :depends on intervaltree: ``>=2.1.0``
   :depends on matplotlib-base: ``>=3.1.1,<3.9``
   :depends on numpy: ``>=1.20``
   :depends on pybedtools: ``>=0.8.1``
   :depends on pybigwig: ``>=0.3.16``
   :depends on pyfaidx: ``>=0.1.3``
   :depends on pysam: ``>=0.14``
   :depends on python: ``>=3.8``
   :depends on tqdm: ``>=4.20``

   :additional platforms:
      


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

    pixi global install pygenometracks

to add into an existing workspace instead, run::

    pixi add pygenometracks

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pygenometracks

Alternatively, to install into a new environment, run::

    conda create -n envname pygenometracks

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pygenometracks:<tag>

(see `pygenometracks/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pygenometracks| image:: https://img.shields.io/conda/dn/bioconda/pygenometracks.svg?style=flat
   :target: https://anaconda.org/bioconda/pygenometracks
   :alt:   (downloads)
.. |docker_pygenometracks| image:: https://quay.io/repository/biocontainers/pygenometracks/status
   :target: https://quay.io/repository/biocontainers/pygenometracks
.. _`pygenometracks/tags`: https://quay.io/repository/biocontainers/pygenometracks?tab=tags


.. raw:: html

   <script>
      var package = "pygenometracks";
      var versions = ["3.9","3.8","3.7","3.6","3.5.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_pygenometracks"></div>
   <div style="width: 100%" id="platform_plot_pygenometracks"></div>
   <div style="width: 100%" id="cdf_plot_pygenometracks"></div>



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
         
            // Build cdf plot for pygenometracks
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pygenometracks/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_pygenometracks', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for pygenometracks
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pygenometracks/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_pygenometracks', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for pygenometracks
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pygenometracks/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_pygenometracks', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygenometracks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygenometracks/README.html