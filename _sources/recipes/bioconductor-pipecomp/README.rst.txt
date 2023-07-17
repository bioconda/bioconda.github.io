:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pipecomp'
.. highlight: bash

bioconductor-pipecomp
=====================

.. conda:recipe:: bioconductor-pipecomp
   :replaces_section_title:
   :noindex:

   pipeComp pipeline benchmarking framework

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/pipeComp.html
   :license: GPL
   :recipe: /`bioconductor-pipecomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pipecomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pipecomp/meta.yaml>`_

   A simple framework to facilitate the comparison of pipelines involving various steps and parameters. The \`pipelineDefinition\` class represents pipelines as\, minimally\, a set of functions consecutively executed on the output of the previous one\, and optionally accompanied by step\-wise evaluation and aggregation functions. Given such an object\, a set of alternative parameters\/methods\, and benchmark datasets\, the \`runPipeline\` function then proceeds through all combinations arguments\, avoiding recomputing the same step twice and compiling evaluations on the fly to avoid storing potentially large intermediate data.


.. conda:package:: bioconductor-pipecomp

   |downloads_bioconductor-pipecomp| |docker_bioconductor-pipecomp|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-scater: ``>=1.28.0,<1.29.0``
   :depends bioconductor-scran: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-aricode: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-clue: 
   :depends r-cluster: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-intrinsicdimension: 
   :depends r-knitr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-randomcolor: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-seurat: 
   :depends r-uwot: 
   :depends r-viridislite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pipecomp

   and update with::

      conda update bioconductor-pipecomp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pipecomp:<tag>

   (see `bioconductor-pipecomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pipecomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pipecomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pipecomp
   :alt:   (downloads)
.. |docker_bioconductor-pipecomp| image:: https://quay.io/repository/biocontainers/bioconductor-pipecomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pipecomp
.. _`bioconductor-pipecomp/tags`: https://quay.io/repository/biocontainers/bioconductor-pipecomp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pipecomp";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pipecomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pipecomp/README.html