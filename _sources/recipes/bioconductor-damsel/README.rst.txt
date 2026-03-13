:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-damsel'
.. highlight: bash

bioconductor-damsel
===================

.. conda:recipe:: bioconductor-damsel
   :replaces_section_title:
   :noindex:

   Damsel\: an end to end analysis of DamID

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Damsel.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-damsel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-damsel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-damsel/meta.yaml>`_

   Damsel provides an end to end analysis of DamID data. Damsel takes bam files from Dam\-only control and fusion samples and counts the reads matching to each GATC region. edgeR is utilised to identify regions of enrichment in the fusion relative to the control. Enriched regions are combined into peaks\, and are associated with nearby genes. Damsel allows for IGV style plots to be built as the results build\, inspired by ggcoverage\, and using the functionality and layering ability of ggplot2. Damsel also conducts gene ontology testing with bias correction through goseq\, and future versions of Damsel will also incorporate motif enrichment analysis. Overall\, Damsel is the first package allowing for an end to end analysis with visual capabilities. The goal of Damsel was to bring all the analysis into one place\, and allow for exploratory analysis within R.


.. conda:package:: bioconductor-damsel

   |downloads_bioconductor-damsel| |docker_bioconductor-damsel|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-ggbio: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-goseq: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-plyranges: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rsubread: ``>=2.24.0,<2.25.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-patchwork: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
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

    pixi global install bioconductor-damsel

to add into an existing workspace instead, run::

    pixi add bioconductor-damsel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-damsel

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-damsel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-damsel:<tag>

(see `bioconductor-damsel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-damsel| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-damsel.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-damsel
   :alt:   (downloads)
.. |docker_bioconductor-damsel| image:: https://quay.io/repository/biocontainers/bioconductor-damsel/status
   :target: https://quay.io/repository/biocontainers/bioconductor-damsel
.. _`bioconductor-damsel/tags`: https://quay.io/repository/biocontainers/bioconductor-damsel?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-damsel";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-damsel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-damsel/README.html