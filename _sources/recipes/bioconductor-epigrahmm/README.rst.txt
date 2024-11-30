:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epigrahmm'
.. highlight: bash

bioconductor-epigrahmm
======================

.. conda:recipe:: bioconductor-epigrahmm
   :replaces_section_title:
   :noindex:

   Epigenomic R\-based analysis with hidden Markov models

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/epigraHMM.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epigrahmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epigrahmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epigrahmm/meta.yaml>`_

   epigraHMM provides a set of tools for the analysis of epigenomic data based on hidden Markov Models. It contains two separate peak callers\, one for consensus peaks from biological or technical replicates\, and one for differential peaks from multi\-replicate multi\-condition experiments. In differential peak calling\, epigraHMM provides window\-specific posterior probabilities associated with every possible combinatorial pattern of read enrichment across conditions.


.. conda:package:: bioconductor-epigrahmm

   |downloads_bioconductor-epigrahmm| |docker_bioconductor-epigrahmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.0-0</code>,  <code>1.8.2-0</code>,  <code>1.6.4-1</code>,  <code>1.6.4-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.10.0-0``,  ``1.8.2-0``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bamsignals: ``>=1.34.0,<1.35.0``
   :depends bioconductor-bamsignals: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-csaw: ``>=1.36.0,<1.37.0``
   :depends bioconductor-csaw: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-greylistchip: ``>=1.34.0,<1.35.0``
   :depends bioconductor-greylistchip: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
   :depends bioconductor-rhdf5lib: ``>=1.24.0,<1.25.0``
   :depends bioconductor-rhdf5lib: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-pheatmap: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-scales: 
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

      mamba install bioconductor-epigrahmm

   and update with::

      mamba update bioconductor-epigrahmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epigrahmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epigrahmm:<tag>

   (see `bioconductor-epigrahmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epigrahmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epigrahmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epigrahmm
   :alt:   (downloads)
.. |docker_bioconductor-epigrahmm| image:: https://quay.io/repository/biocontainers/bioconductor-epigrahmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epigrahmm
.. _`bioconductor-epigrahmm/tags`: https://quay.io/repository/biocontainers/bioconductor-epigrahmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epigrahmm";
        var versions = ["1.10.0","1.8.2","1.6.4","1.6.4","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epigrahmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epigrahmm/README.html