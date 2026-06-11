:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gromacs_mddb'
.. highlight: bash

gromacs_mddb
============

.. conda:recipe:: gromacs_mddb
   :replaces_section_title:
   :noindex:

   GROMACS is a versatile package to perform molecular dynamics.

   :homepage: https://www.gromacs.org/
   :documentation: https://manual.gromacs.org/
   
   :developer docs: https://gitlab.com/gromacs/gromacs/-/tree/pj_mddb_json_proto-2025
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`gromacs_mddb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_mddb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_mddb/meta.yaml>`_

   Development version of GROMACS in colaboration to MDDB to add the
   possibility to export tpr to json.

   GROMACS is a versatile package to perform molecular dynamics\, i.e.
   simulate the Newtonian equations of motion for systems with hundreds
   to millions of particles. It is primarily designed for biochemical
   molecules like proteins\, lipids and nucleic acids that have a lot of
   complicated bonded interactions\, but since GROMACS is extremely fast
   at calculating the nonbonded interactions \(that usually dominate
   simulations\) many groups are also using it for research on
   non\-biological systems\, e.g. polymers.



.. conda:package:: gromacs_mddb

   |downloads_gromacs_mddb| |docker_gromacs_mddb|

   :versions:
      
      

      ``2025.3-4``,  ``2025.3-3``,  ``2025.3-2``,  ``2025.3-1``,  ``2025.3-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on _openmp_mutex: ``>=4.5``
   :depends on fftw: ``>=3.3.11,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on libhwloc: ``<2.12.2``
   :depends on libhwloc: ``>=2.12.1,<2.12.2.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on ocl-icd: ``>=2.3.3,<3.0a0``

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

    pixi global install gromacs_mddb

to add into an existing workspace instead, run::

    pixi add gromacs_mddb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gromacs_mddb

Alternatively, to install into a new environment, run::

    conda create -n envname gromacs_mddb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gromacs_mddb:<tag>

(see `gromacs_mddb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gromacs_mddb| image:: https://img.shields.io/conda/dn/bioconda/gromacs_mddb.svg?style=flat
   :target: https://anaconda.org/bioconda/gromacs_mddb
   :alt:   (downloads)
.. |docker_gromacs_mddb| image:: https://quay.io/repository/biocontainers/gromacs_mddb/status
   :target: https://quay.io/repository/biocontainers/gromacs_mddb
.. _`gromacs_mddb/tags`: https://quay.io/repository/biocontainers/gromacs_mddb?tab=tags


.. raw:: html

   <script>
      var package = "gromacs_mddb";
      var versions = ["2025.3","2025.3","2025.3","2025.3","2025.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_gromacs_mddb"></div>
   <div style="width: 100%" id="platform_plot_gromacs_mddb"></div>
   <div style="width: 100%" id="cdf_plot_gromacs_mddb"></div>



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
         
            // Build cdf plot for gromacs_mddb
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gromacs_mddb/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_gromacs_mddb', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for gromacs_mddb
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gromacs_mddb/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_gromacs_mddb', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for gromacs_mddb
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gromacs_mddb/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_gromacs_mddb', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gromacs_mddb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gromacs_mddb/README.html