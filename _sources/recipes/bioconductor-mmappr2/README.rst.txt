:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmappr2'
.. highlight: bash

bioconductor-mmappr2
====================

.. conda:recipe:: bioconductor-mmappr2
   :replaces_section_title:
   :noindex:

   Mutation Mapping Analysis Pipeline for Pooled RNA\-Seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MMAPPR2.html
   :license: GPL-3
   :recipe: /`bioconductor-mmappr2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmappr2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmappr2/meta.yaml>`_

   MMAPPR2 maps mutations resulting from pooled RNA\-seq data from the F2 cross of forward genetic screens. Its predecessor is described in a paper published in Genome Research \(Hill et al. 2013\). MMAPPR2 accepts aligned BAM files as well as a reference genome as input\, identifies loci of high sequence disparity between the control and mutant RNA sequences\, predicts variant effects using Ensembl\'s Variant Effect Predictor\, and outputs a ranked list of candidate mutations.


.. conda:package:: bioconductor-mmappr2

   |downloads_bioconductor-mmappr2| |docker_bioconductor-mmappr2|

   :versions:
      
      

      ``1.14.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends on bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends on bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-ensemblvep: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-gmapr: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends on bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-varianttools: ``>=1.42.0,<1.43.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-magrittr: 
   :depends on r-stringr: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-mmappr2

to add into an existing workspace instead, run::

    pixi add bioconductor-mmappr2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mmappr2

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mmappr2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mmappr2:<tag>

(see `bioconductor-mmappr2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mmappr2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmappr2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mmappr2
   :alt:   (downloads)
.. |docker_bioconductor-mmappr2| image:: https://quay.io/repository/biocontainers/bioconductor-mmappr2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmappr2
.. _`bioconductor-mmappr2/tags`: https://quay.io/repository/biocontainers/bioconductor-mmappr2?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-mmappr2";
      var versions = ["1.14.0","1.8.0","1.6.0","1.4.0","1.3.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-mmappr2"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-mmappr2"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-mmappr2"></div>



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
         
            // Build cdf plot for bioconductor-mmappr2
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mmappr2/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-mmappr2', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-mmappr2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mmappr2/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-mmappr2', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-mmappr2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mmappr2/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-mmappr2', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmappr2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmappr2/README.html