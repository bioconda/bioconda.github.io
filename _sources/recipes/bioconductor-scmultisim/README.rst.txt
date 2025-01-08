:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmultisim'
.. highlight: bash

bioconductor-scmultisim
=======================

.. conda:recipe:: bioconductor-scmultisim
   :replaces_section_title:
   :noindex:

   Simulation of Multi\-Modality Single Cell Data Guided By Gene Regulatory Networks and Cell\-Cell Interactions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scMultiSim.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scmultisim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmultisim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmultisim/meta.yaml>`_

   scMultiSim simulates paired single cell RNA\-seq\, single cell ATAC\-seq and RNA velocity data\, while incorporating mechanisms of gene regulatory networks\, chromatin accessibility and cell\-cell interactions. It allows users to tune various parameters controlling the amount of each biological factor\, variation of gene\-expression levels\, the influence of chromatin accessibility on RNA sequence data\, and so on. It can be used to benchmark various computational methods for single cell multi\-omics data\, and to assist in experimental design of wet\-lab experiments.


.. conda:package:: bioconductor-scmultisim

   |downloads_bioconductor-scmultisim| |docker_bioconductor-scmultisim|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-ape: 
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-kernelknn: 
   :depends r-markdown: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-phytools: 
   :depends r-rlang: 
   :depends r-rtsne: 
   :depends r-zeallot: 
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

      mamba install bioconductor-scmultisim

   and update with::

      mamba update bioconductor-scmultisim

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scmultisim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scmultisim:<tag>

   (see `bioconductor-scmultisim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scmultisim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmultisim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmultisim
   :alt:   (downloads)
.. |docker_bioconductor-scmultisim| image:: https://quay.io/repository/biocontainers/bioconductor-scmultisim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmultisim
.. _`bioconductor-scmultisim/tags`: https://quay.io/repository/biocontainers/bioconductor-scmultisim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmultisim";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmultisim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmultisim/README.html