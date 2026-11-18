:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'abacus-str'
.. highlight: bash

abacus-str
==========

.. conda:recipe:: abacus-str
   :replaces_section_title:
   :noindex:

   A tool for analyzing Short Tandem Repeats \(STRs\) from Long\-Read Sequencing data

   :homepage: https://github.com/MOMA-AUH/abacus
   :license: MIT
   :recipe: /`abacus-str <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abacus-str>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abacus-str/meta.yaml>`_

   


.. conda:package:: abacus-str

   |downloads_abacus-str| |docker_abacus-str|

   :versions:
      
      

      ``3.0.0-0``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends on biopython: ``>=1.88``
   :depends on levenshtein: ``>=0.27.5``
   :depends on minigraph: ``>=0.21``
   :depends on networkx: ``>=3.6.1``
   :depends on numpy: ``>=2.4.6``
   :depends on pandas: ``>=3.1.1``
   :depends on pandoc: ``>=3.14``
   :depends on pyfaidx: ``>=0.9.2.2``
   :depends on pysam: ``>=0.24.1``
   :depends on pyspoa: ``>=0.3.2``
   :depends on python: ``>=3.11``
   :depends on r-base: ``>=4.5.3``
   :depends on r-dplyr: ``>=1.2.1``
   :depends on r-ggh4x: ``>=0.3.1``
   :depends on r-ggplot2: ``>=4.0.4``
   :depends on r-htmltools: ``>=0.5.9``
   :depends on r-kableextra: ``>=1.4.1``
   :depends on r-knitr: ``>=1.52``
   :depends on r-rcolorbrewer: ``>=1.1_3``
   :depends on r-readr: ``>=2.2.0``
   :depends on r-rmarkdown: ``>=2.32``
   :depends on r-stringr: ``>=1.6.0``
   :depends on r-tibble: ``>=3.3.1``
   :depends on r-tidyr: ``>=1.3.2``
   :depends on rapidfuzz: ``>=3.14.6``
   :depends on rich: ``>=15.0.0``
   :depends on scipy: ``>=1.17.1``
   :depends on typer: ``>=0.29.1``

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

    pixi global install abacus-str

to add into an existing workspace instead, run::

    pixi add abacus-str

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install abacus-str

Alternatively, to install into a new environment, run::

    conda create -n envname abacus-str

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/abacus-str:<tag>

(see `abacus-str/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_abacus-str| image:: https://img.shields.io/conda/dn/bioconda/abacus-str.svg?style=flat
   :target: https://anaconda.org/bioconda/abacus-str
   :alt:   (downloads)
.. |docker_abacus-str| image:: https://quay.io/repository/biocontainers/abacus-str/status
   :target: https://quay.io/repository/biocontainers/abacus-str
.. _`abacus-str/tags`: https://quay.io/repository/biocontainers/abacus-str?tab=tags


.. raw:: html

   <script>
      var package = "abacus-str";
      var versions = ["3.0.0","2.0.0","2.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_abacus-str"></div>
   <div style="width: 100%" id="platform_plot_abacus-str"></div>
   <div style="width: 100%" id="cdf_plot_abacus-str"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for abacus-str
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/abacus-str/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_abacus-str', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for abacus-str
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/abacus-str/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_abacus-str', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for abacus-str
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/abacus-str/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_abacus-str', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abacus-str/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abacus-str/README.html