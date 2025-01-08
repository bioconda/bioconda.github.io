:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cageminer'
.. highlight: bash

bioconductor-cageminer
======================

.. conda:recipe:: bioconductor-cageminer
   :replaces_section_title:
   :noindex:

   Candidate Gene Miner

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cageminer.html
   :license: GPL-3
   :recipe: /`bioconductor-cageminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cageminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cageminer/meta.yaml>`_

   This package aims to integrate GWAS\-derived SNPs and coexpression networks to mine candidate genes associated with a particular phenotype. For that\, users must define a set of guide genes\, which are known genes involved in the studied phenotype. Additionally\, the mined candidates can be given a score that favor candidates that are hubs and\/or transcription factors. The scores can then be used to rank and select the top n most promising genes for downstream experiments.


.. conda:package:: bioconductor-cageminer

   |downloads_bioconductor-cageminer| |docker_bioconductor-cageminer|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-bionero: ``>=1.14.0,<1.15.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-ggbio: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-ggtext: 
   :depends r-reshape2: 
   :depends r-rlang: 
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

      mamba install bioconductor-cageminer

   and update with::

      mamba update bioconductor-cageminer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cageminer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cageminer:<tag>

   (see `bioconductor-cageminer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cageminer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cageminer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cageminer
   :alt:   (downloads)
.. |docker_bioconductor-cageminer| image:: https://quay.io/repository/biocontainers/bioconductor-cageminer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cageminer
.. _`bioconductor-cageminer/tags`: https://quay.io/repository/biocontainers/bioconductor-cageminer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cageminer";
        var versions = ["1.12.0","1.8.0","1.6.1","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cageminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cageminer/README.html