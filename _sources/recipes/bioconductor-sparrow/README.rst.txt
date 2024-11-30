:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparrow'
.. highlight: bash

bioconductor-sparrow
====================

.. conda:recipe:: bioconductor-sparrow
   :replaces_section_title:
   :noindex:

   Take command of set enrichment analyses through a unified interface

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/sparrow.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sparrow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparrow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparrow/meta.yaml>`_

   Provides a unified interface to a variety of GSEA techniques from different bioconductor packages. Results are harmonized into a single object and can be interrogated uniformly for quick exploration and interpretation of results. Interactive exploration of GSEA results is enabled through a shiny app provided by a sparrow.shiny sibling package.


.. conda:package:: bioconductor-sparrow

   |downloads_bioconductor-sparrow| |docker_bioconductor-sparrow|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocset: ``>=1.16.0,<1.17.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-babelgene: ``>=21.4``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: 
   :depends r-circlize: 
   :depends r-data.table: ``>=1.10.4``
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-plotly: ``>=4.9.0``
   :depends r-viridis: 
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

      mamba install bioconductor-sparrow

   and update with::

      mamba update bioconductor-sparrow

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sparrow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sparrow:<tag>

   (see `bioconductor-sparrow/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sparrow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparrow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sparrow
   :alt:   (downloads)
.. |docker_bioconductor-sparrow| image:: https://quay.io/repository/biocontainers/bioconductor-sparrow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparrow
.. _`bioconductor-sparrow/tags`: https://quay.io/repository/biocontainers/bioconductor-sparrow?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sparrow";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparrow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparrow/README.html