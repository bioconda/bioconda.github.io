:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mpac'
.. highlight: bash

bioconductor-mpac
=================

.. conda:recipe:: bioconductor-mpac
   :replaces_section_title:
   :noindex:

   Multi\-omic Pathway Analysis of Cancer

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MPAC.html
   :license: GPL-3
   :recipe: /`bioconductor-mpac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpac/meta.yaml>`_

   Multi\-omic Pathway Analysis of Cancer \(MPAC\)\, integrates multi\-omic data for understanding cancer mechanisms. It predicts novel patient groups with distinct pathway profiles as well as identifying key pathway proteins with potential clinical associations. From CNA and RNA\-seq data\, it determines genes’ DNA and RNA states \(i.e.\, repressed\, normal\, or activated\)\, which serve as the input for PARADIGM to calculate Inferred Pathway Levels \(IPLs\). It also permutes DNA and RNA states to create a background distribution to filter IPLs as a way to remove events observed by chance. It provides multiple methods for downstream analysis and visualization.


.. conda:package:: bioconductor-mpac

   |downloads_bioconductor-mpac| |docker_bioconductor-mpac|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends bioconductor-biocsingular: ``>=1.26.0,<1.27.0``
   :depends bioconductor-bluster: ``>=1.20.0,<1.21.0``
   :depends bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends bioconductor-fgsea: ``>=1.36.0,<1.37.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-circlize: ``>=0.4.16``
   :depends r-data.table: ``>=1.14.2``
   :depends r-fitdistrplus: ``>=1.1``
   :depends r-ggplot2: ``>=3.5.1``
   :depends r-ggraph: ``>=2.2.1``
   :depends r-igraph: ``>=1.4.3``
   :depends r-scales: ``>=1.3.0``
   :depends r-stringr: ``>=1.5.1``
   :depends r-survival: ``>=3.7``
   :depends r-survminer: ``>=0.4.9``
   :depends r-viridis: ``>=0.6.5``
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

      mamba install bioconductor-mpac

   and update with::

      mamba update bioconductor-mpac

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mpac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mpac:<tag>

   (see `bioconductor-mpac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mpac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mpac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mpac
   :alt:   (downloads)
.. |docker_bioconductor-mpac| image:: https://quay.io/repository/biocontainers/bioconductor-mpac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mpac
.. _`bioconductor-mpac/tags`: https://quay.io/repository/biocontainers/bioconductor-mpac?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mpac";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mpac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mpac/README.html