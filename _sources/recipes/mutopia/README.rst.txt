:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mutopia'
.. highlight: bash

mutopia
=======

.. conda:recipe:: mutopia
   :replaces_section_title:
   :noindex:

   Topographic modeling of mutational signatures across the cancer genome

   :homepage: https://github.com/sigscape/MuTopia
   :documentation: https://sigscape.github.io/MuTopia/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`mutopia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutopia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutopia/meta.yaml>`_

   MuTopia learns topographic models of somatic mutation — it simultaneously
   decomposes a cancer cohort\'s mutations into signatures and explains how
   local genomic context \(chromatin state\, replication timing\, transcription
   level\, DNA sequence composition\) shapes each signature\'s activity across
   10 kb windows genome\-wide. Provides G\-Tensor data structures\, SHAP\-based
   feature interpretability\, and per\-mutation VCF annotation.



.. conda:package:: mutopia

   |downloads_mutopia| |docker_mutopia|

   :versions:
      
      

      ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.4-0``

      

   
   :depends on bcftools: 
   :depends on bedtools: 
   :depends on click: 
   :depends on colorlog: ``>=6.0.0``
   :depends on htslib: 
   :depends on luigi: ``>=3.3.0``
   :depends on matplotlib-base: ``>=3.5,<4``
   :depends on netcdf4: ``>=1.7.1.post2,<2``
   :depends on numba: ``>=0.60.0,<1``
   :depends on numpy: ``>=1.21``
   :depends on optuna: ``>=3.4.0,<5``
   :depends on pandas: ``>=2.1.0``
   :depends on pydantic: ``>=2.0.0``
   :depends on pyfaidx: 
   :depends on python: ``>=3.11,<3.12``
   :depends on pyyaml: ``>=6.0.0``
   :depends on scikit-learn: ``1.4.2``
   :depends on scipy: ``>=1.7,<2``
   :depends on sparse: ``>=0.15.4``
   :depends on tabulate: 
   :depends on tqdm: 
   :depends on ucsc-bigwigaverageoverbed: 
   :depends on xarray: ``2024.9.0``

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

    pixi global install mutopia

to add into an existing workspace instead, run::

    pixi add mutopia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mutopia

Alternatively, to install into a new environment, run::

    conda create -n envname mutopia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mutopia:<tag>

(see `mutopia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mutopia| image:: https://img.shields.io/conda/dn/bioconda/mutopia.svg?style=flat
   :target: https://anaconda.org/bioconda/mutopia
   :alt:   (downloads)
.. |docker_mutopia| image:: https://quay.io/repository/biocontainers/mutopia/status
   :target: https://quay.io/repository/biocontainers/mutopia
.. _`mutopia/tags`: https://quay.io/repository/biocontainers/mutopia?tab=tags


.. raw:: html

   <script>
      var package = "mutopia";
      var versions = ["1.0.8","1.0.7","1.0.6","1.0.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_mutopia"></div>
   <div style="width: 100%" id="platform_plot_mutopia"></div>
   <div style="width: 100%" id="cdf_plot_mutopia"></div>



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
         
            // Build cdf plot for mutopia
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mutopia/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_mutopia', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for mutopia
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mutopia/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_mutopia', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for mutopia
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mutopia/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_mutopia', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mutopia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mutopia/README.html