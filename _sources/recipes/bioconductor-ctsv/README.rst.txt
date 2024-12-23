:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctsv'
.. highlight: bash

bioconductor-ctsv
=================

.. conda:recipe:: bioconductor-ctsv
   :replaces_section_title:
   :noindex:

   Identification of cell\-type\-specific spatially variable genes accounting for excess zeros

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CTSV.html
   :license: GPL-3
   :recipe: /`bioconductor-ctsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctsv/meta.yaml>`_

   The R package CTSV implements the CTSV approach developed by Jinge Yu and Xiangyu Luo that detects cell\-type\-specific spatially variable genes accounting for excess zeros. CTSV directly models sparse raw count data through a zero\-inflated negative binomial regression model\, incorporates cell\-type proportions\, and performs hypothesis testing based on R package pscl. The package outputs p\-values and q\-values for genes in each cell type\, and CTSV is scalable to datasets with tens of thousands of genes measured on hundreds of spots. CTSV can be installed in Windows\, Linux\, and Mac OS.


.. conda:package:: bioconductor-ctsv

   |downloads_bioconductor-ctsv| |docker_bioconductor-ctsv|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-knitr: 
   :depends r-pscl: 
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

      mamba install bioconductor-ctsv

   and update with::

      mamba update bioconductor-ctsv

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ctsv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctsv:<tag>

   (see `bioconductor-ctsv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctsv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctsv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctsv
   :alt:   (downloads)
.. |docker_bioconductor-ctsv| image:: https://quay.io/repository/biocontainers/bioconductor-ctsv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctsv
.. _`bioconductor-ctsv/tags`: https://quay.io/repository/biocontainers/bioconductor-ctsv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctsv";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctsv/README.html