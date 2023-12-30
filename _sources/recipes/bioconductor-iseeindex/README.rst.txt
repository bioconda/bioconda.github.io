:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseeindex'
.. highlight: bash

bioconductor-iseeindex
======================

.. conda:recipe:: bioconductor-iseeindex
   :replaces_section_title:
   :noindex:

   iSEE extension for a landing page to a custom collection of data sets

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/iSEEindex.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iseeindex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseeindex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseeindex/meta.yaml>`_

   This package provides an interface to any collection of data sets within a single iSEE web\-application. The main functionality of this package is to define a custom landing page allowing app maintainers to list a custom collection of data sets that users can selected from and directly load objects into an iSEE web\-application.


.. conda:package:: bioconductor-iseeindex

   |downloads_bioconductor-iseeindex| |docker_bioconductor-iseeindex|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-isee: ``>=2.14.0,<2.15.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: 
   :depends r-paws.storage: 
   :depends r-rintrojs: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
   :depends r-stringr: 
   :depends r-urltools: 
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

      mamba install bioconductor-iseeindex

   and update with::

      mamba update bioconductor-iseeindex

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iseeindex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iseeindex:<tag>

   (see `bioconductor-iseeindex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iseeindex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseeindex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseeindex
   :alt:   (downloads)
.. |docker_bioconductor-iseeindex| image:: https://quay.io/repository/biocontainers/bioconductor-iseeindex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseeindex
.. _`bioconductor-iseeindex/tags`: https://quay.io/repository/biocontainers/bioconductor-iseeindex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseeindex";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseeindex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseeindex/README.html