:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chap_mddb'
.. highlight: bash

chap_mddb
=========

.. conda:recipe:: chap_mddb
   :replaces_section_title:
   :noindex:

   CHAP is a tool for the functional annotation of ion channel structures.

   :homepage: https://github.com/RubenChM/chap
   :license: MIT
   :recipe: /`chap_mddb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chap_mddb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chap_mddb/meta.yaml>`_

   CHAP is a tool for the functional annotation of ion channel structures.
   This a fork of the original CHAP code\, which is no longer maintained\, with the aim of
   providing compatibility with new GROMACS versions. The original code can be found at\:
   https\:\/\/github.com\/channotation\/chap


.. conda:package:: chap_mddb

   |downloads_chap_mddb| |docker_chap_mddb|

   :versions:
      
      

      ``0.10.0-1``,  ``0.10.0-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on boost-cpp: 
   :depends on gromacs: ``2025.*``
   :depends on intel-compute-runtime: ``>=24.52.32224.14,<25.0a0``
   :depends on libcblas: ``>=3.11.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapacke: ``>=3.11.0,<4.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libtmglib: ``>=3.11.0,<4.0a0``
   :depends on rapidjson: 

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

    pixi global install chap_mddb

to add into an existing workspace instead, run::

    pixi add chap_mddb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chap_mddb

Alternatively, to install into a new environment, run::

    conda create -n envname chap_mddb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chap_mddb:<tag>

(see `chap_mddb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chap_mddb| image:: https://img.shields.io/conda/dn/bioconda/chap_mddb.svg?style=flat
   :target: https://anaconda.org/bioconda/chap_mddb
   :alt:   (downloads)
.. |docker_chap_mddb| image:: https://quay.io/repository/biocontainers/chap_mddb/status
   :target: https://quay.io/repository/biocontainers/chap_mddb
.. _`chap_mddb/tags`: https://quay.io/repository/biocontainers/chap_mddb?tab=tags


.. raw:: html

   <script>
      var package = "chap_mddb";
      var versions = ["0.10.0","0.10.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_chap_mddb"></div>
   <div style="width: 100%" id="platform_plot_chap_mddb"></div>
   <div style="width: 100%" id="cdf_plot_chap_mddb"></div>



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
         
            // Build cdf plot for chap_mddb
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/chap_mddb/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_chap_mddb', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for chap_mddb
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/chap_mddb/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_chap_mddb', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for chap_mddb
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/chap_mddb/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_chap_mddb', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chap_mddb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chap_mddb/README.html