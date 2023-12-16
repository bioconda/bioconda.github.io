:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatzie'
.. highlight: bash

bioconductor-spatzie
====================

.. conda:recipe:: bioconductor-spatzie
   :replaces_section_title:
   :noindex:

   Identification of enriched motif pairs from chromatin interaction data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/spatzie.html
   :license: GPL-3
   :recipe: /`bioconductor-spatzie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatzie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatzie/meta.yaml>`_

   Identifies motifs that are significantly co\-enriched from enhancer\-promoter interaction data. While enhancer\-promoter annotation is commonly used to define groups of interaction anchors\, spatzie also supports co\-enrichment analysis between preprocessed interaction anchors.  Supports BEDPE interaction data derived from genome\-wide assays such as HiC\, ChIA\-PET\, and HiChIP. Can also be used to look for differentially enriched motif pairs between two interaction experiments.


.. conda:package:: bioconductor-spatzie

   |downloads_bioconductor-spatzie| |docker_bioconductor-spatzie|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicinteractions: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0``
   :depends bioconductor-motifmatchr: ``>=1.24.0,<1.25.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-tfbstools: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-spatzie

   and update with::

      mamba update bioconductor-spatzie

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spatzie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatzie:<tag>

   (see `bioconductor-spatzie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatzie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatzie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatzie
   :alt:   (downloads)
.. |docker_bioconductor-spatzie| image:: https://quay.io/repository/biocontainers/bioconductor-spatzie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatzie
.. _`bioconductor-spatzie/tags`: https://quay.io/repository/biocontainers/bioconductor-spatzie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatzie";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatzie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatzie/README.html