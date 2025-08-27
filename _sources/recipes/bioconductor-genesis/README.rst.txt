:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genesis'
.. highlight: bash

bioconductor-genesis
====================

.. conda:recipe:: bioconductor-genesis
   :replaces_section_title:
   :noindex:

   GENetic EStimation and Inference in Structured samples \(GENESIS\)\: Statistical methods for analyzing genetic data from samples with population structure and\/or relatedness

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GENESIS.html
   :license: GPL-3
   :recipe: /`bioconductor-genesis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genesis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genesis/meta.yaml>`_

   The GENESIS package provides methodology for estimating\, inferring\, and accounting for population and pedigree structure in genetic analyses.  The current implementation provides functions to perform PC\-AiR \(Conomos et al.\, 2015\, Gen Epi\) and PC\-Relate \(Conomos et al.\, 2016\, AJHG\). PC\-AiR performs a Principal Components Analysis on genome\-wide SNP data for the detection of population structure in a sample that may contain known or cryptic relatedness. Unlike standard PCA\, PC\-AiR accounts for relatedness in the sample to provide accurate ancestry inference that is not confounded by family structure. PC\-Relate uses ancestry representative principal components to adjust for population structure\/ancestry and accurately estimate measures of recent genetic relatedness such as kinship coefficients\, IBD sharing probabilities\, and inbreeding coefficients. Additionally\, functions are provided to perform efficient variance component estimation and mixed model association testing for both quantitative and binary phenotypes.


.. conda:package:: bioconductor-genesis

   |downloads_bioconductor-genesis| |docker_bioconductor-genesis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-1</code>,  <code>2.28.0-0</code>,  <code>2.24.2-0</code>,  <code>2.24.1-0</code>,  <code>2.24.0-0</code>,  <code>2.22.1-0</code>,  </span></summary>
      

      ``2.36.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.24.2-0``,  ``2.24.1-0``,  ``2.24.0-0``,  ``2.22.1-0``,  ``2.20.1-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.3-0``,  ``2.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-gdsfmt: ``>=1.42.0,<1.43.0``
   :depends bioconductor-gdsfmt: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-gwastools: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gwastools: ``>=1.52.0,<1.53.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-seqarray: ``>=1.46.0,<1.47.0``
   :depends bioconductor-seqarray: ``>=1.46.0,<1.47.0a0``
   :depends bioconductor-seqvartools: ``>=1.44.0,<1.45.0``
   :depends bioconductor-seqvartools: ``>=1.44.0,<1.45.0a0``
   :depends bioconductor-snprelate: ``>=1.40.0,<1.41.0``
   :depends bioconductor-snprelate: ``>=1.40.0,<1.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-reshape2: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-genesis

   and update with::

      mamba update bioconductor-genesis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genesis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genesis:<tag>

   (see `bioconductor-genesis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genesis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genesis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genesis
   :alt:   (downloads)
.. |docker_bioconductor-genesis| image:: https://quay.io/repository/biocontainers/bioconductor-genesis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genesis
.. _`bioconductor-genesis/tags`: https://quay.io/repository/biocontainers/bioconductor-genesis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genesis";
        var versions = ["2.36.0","2.32.0","2.30.0","2.28.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genesis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genesis/README.html