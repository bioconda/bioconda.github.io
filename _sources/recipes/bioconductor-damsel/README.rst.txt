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
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-ggbio: ``>=1.54.0,<1.55.0``
   :depends bioconductor-goseq: ``>=1.58.0,<1.59.0``
   :depends bioconductor-plyranges: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsubread: ``>=2.20.0,<2.21.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-damsel

   and update with::

      mamba update bioconductor-damsel

  To create a new environment, run::

      mamba create --name myenvname bioconductor-damsel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-damsel:<tag>

   (see `bioconductor-damsel/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-damsel| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-damsel.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-damsel
   :alt:   (downloads)
.. |docker_bioconductor-damsel| image:: https://quay.io/repository/biocontainers/bioconductor-damsel/status
   :target: https://quay.io/repository/biocontainers/bioconductor-damsel
.. _`bioconductor-damsel/tags`: https://quay.io/repository/biocontainers/bioconductor-damsel?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-damsel";
        var versions = ["1.2.0"];
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