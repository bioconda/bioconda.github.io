:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dexma'
.. highlight: bash

bioconductor-dexma
==================

.. conda:recipe:: bioconductor-dexma
   :replaces_section_title:
   :noindex:

   Differential Expression Meta\-Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DExMA.html
   :license: GPL-2
   :recipe: /`bioconductor-dexma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexma/meta.yaml>`_

   performing all the steps of gene expression meta\-analysis considering the possible existence of missing genes. It provides the necessary functions to be able to perform the different methods of gene expression meta\-analysis. In addition\, it contains functions to apply quality controls\, download GEO datasets and show graphical representations of the results.


.. conda:package:: bioconductor-dexma

   |downloads_bioconductor-dexma| |docker_bioconductor-dexma|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-dexmadata: ``>=1.8.0,<1.9.0``
   :depends bioconductor-geoquery: ``>=2.68.0,<2.69.0``
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-snpstats: ``>=1.50.0,<1.51.0``
   :depends bioconductor-sva: ``>=3.48.0,<3.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bnstruct: 
   :depends r-pheatmap: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-swamp: 
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

      mamba install bioconductor-dexma

   and update with::

      mamba update bioconductor-dexma

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dexma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dexma:<tag>

   (see `bioconductor-dexma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dexma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dexma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dexma
   :alt:   (downloads)
.. |docker_bioconductor-dexma| image:: https://quay.io/repository/biocontainers/bioconductor-dexma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dexma
.. _`bioconductor-dexma/tags`: https://quay.io/repository/biocontainers/bioconductor-dexma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dexma";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dexma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dexma/README.html