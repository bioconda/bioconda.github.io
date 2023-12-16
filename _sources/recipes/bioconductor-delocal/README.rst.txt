:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-delocal'
.. highlight: bash

bioconductor-delocal
====================

.. conda:recipe:: bioconductor-delocal
   :replaces_section_title:
   :noindex:

   Identifies differentially expressed genes with respect to other local genes

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DELocal.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-delocal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delocal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delocal/meta.yaml>`_

   The goal of DELocal is to identify DE genes compared to their neighboring genes from the same chromosomal location. It has been shown that genes of related functions are generally very far from each other in the chromosome. DELocal utilzes this information to identify DE genes comparing with their neighbouring genes.


.. conda:package:: bioconductor-delocal

   |downloads_bioconductor-delocal| |docker_bioconductor-delocal|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-reshape2: 
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

      mamba install bioconductor-delocal

   and update with::

      mamba update bioconductor-delocal

  To create a new environment, run::

      mamba create --name myenvname bioconductor-delocal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-delocal:<tag>

   (see `bioconductor-delocal/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-delocal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-delocal.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-delocal
   :alt:   (downloads)
.. |docker_bioconductor-delocal| image:: https://quay.io/repository/biocontainers/bioconductor-delocal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-delocal
.. _`bioconductor-delocal/tags`: https://quay.io/repository/biocontainers/bioconductor-delocal?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-delocal";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-delocal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-delocal/README.html