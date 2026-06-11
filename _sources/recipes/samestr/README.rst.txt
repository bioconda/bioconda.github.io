:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samestr'
.. highlight: bash

samestr
=======

.. conda:recipe:: samestr
   :replaces_section_title:
   :noindex:

   SameStr identifies shared strains between pairs of metagenomic samples based on the similarity of SNV profiles.

   :homepage: https://github.com/danielpodlesny/samestr/
   :developer docs: https://github.com/danielpodlesny/samestr
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`samestr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samestr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samestr/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-022-01251-w`

   


.. conda:package:: samestr

   |downloads_samestr| |docker_samestr|

   :versions:
      
      

      ``1.2025.111-0``,  ``1.2024.8-0``,  ``1.2024.2.post1-0``,  ``1.2023.4-0``,  ``1.2023.3-0``

      

   
   :depends on biopython: ``1.81``
   :depends on blast: ``>=2.6.0``
   :depends on mafft: ``7.525``
   :depends on muscle: ``3.8.1551``
   :depends on numpy: ``1.24.2``
   :depends on pandas: ``1.5.3``
   :depends on pysam: ``0.20.0``
   :depends on python: ``>=3.9``
   :depends on samtools: ``0.1.19``
   :depends on scipy: ``1.10.0``

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

    pixi global install samestr

to add into an existing workspace instead, run::

    pixi add samestr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install samestr

Alternatively, to install into a new environment, run::

    conda create -n envname samestr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/samestr:<tag>

(see `samestr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_samestr| image:: https://img.shields.io/conda/dn/bioconda/samestr.svg?style=flat
   :target: https://anaconda.org/bioconda/samestr
   :alt:   (downloads)
.. |docker_samestr| image:: https://quay.io/repository/biocontainers/samestr/status
   :target: https://quay.io/repository/biocontainers/samestr
.. _`samestr/tags`: https://quay.io/repository/biocontainers/samestr?tab=tags


.. raw:: html

   <script>
      var package = "samestr";
      var versions = ["1.2025.111","1.2024.8","1.2024.2.post1","1.2023.4","1.2023.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_samestr"></div>
   <div style="width: 100%" id="platform_plot_samestr"></div>
   <div style="width: 100%" id="cdf_plot_samestr"></div>



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
         
            // Build cdf plot for samestr
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/samestr/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_samestr', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for samestr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/samestr/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_samestr', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for samestr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/samestr/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_samestr', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samestr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samestr/README.html