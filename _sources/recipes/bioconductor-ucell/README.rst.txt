:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ucell'
.. highlight: bash

bioconductor-ucell
==================

.. conda:recipe:: bioconductor-ucell
   :replaces_section_title:
   :noindex:

   Rank\-based signature enrichment analysis for single\-cell data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/UCell.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-ucell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ucell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ucell/meta.yaml>`_

   UCell is a package for evaluating gene signatures in single\-cell datasets. UCell signature scores\, based on the Mann\-Whitney U statistic\, are robust to dataset size and heterogeneity\, and their calculation demands less computing time and memory than other available methods\, enabling the processing of large datasets in a few minutes even on machines with limited computing power. UCell can be applied to any single\-cell data matrix\, and includes functions to directly interact with SingleCellExperiment and Seurat objects.


.. conda:package:: bioconductor-ucell

   |downloads_bioconductor-ucell| |docker_bioconductor-ucell|

   :versions:
      
      

      ``2.6.2-0``,  ``2.4.0-0``,  ``2.2.0-0``

      

   
   :depends bioconductor-biocneighbors: ``>=1.20.0,<1.21.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.13.6``
   :depends r-matrix: 
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

      mamba install bioconductor-ucell

   and update with::

      mamba update bioconductor-ucell

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ucell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ucell:<tag>

   (see `bioconductor-ucell/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ucell| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ucell.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ucell
   :alt:   (downloads)
.. |docker_bioconductor-ucell| image:: https://quay.io/repository/biocontainers/bioconductor-ucell/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ucell
.. _`bioconductor-ucell/tags`: https://quay.io/repository/biocontainers/bioconductor-ucell?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ucell";
        var versions = ["2.6.2","2.4.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ucell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ucell/README.html