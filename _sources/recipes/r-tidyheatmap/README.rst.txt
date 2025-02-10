:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tidyheatmap'
.. highlight: bash

r-tidyheatmap
=============

.. conda:recipe:: r-tidyheatmap
   :replaces_section_title:
   :noindex:

   This is a tidy implementation for heatmap.  At the moment it is based on the \(great\) package \'ComplexHeatmap\'.  The goal of this package is to interface a tidy data frame with this powerful tool.  Some of the advantages are\: Row and\/or columns colour annotations are easy to integrate just specifying one parameter \(column names\).  Custom grouping of rows is easy to specify providing a grouped tbl. For example\: df \%\>\% group\_by\(...\).  Labels size adjusted by row and column total number.  Default use of Brewer and Viridis palettes.

   :homepage: https://github.com/stemangiola/tidyHeatmap
   :documentation: https://stemangiola.github.io/tidyHeatmap/articles/introduction.html
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-tidyheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tidyheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tidyheatmap/meta.yaml>`_

   


.. conda:package:: r-tidyheatmap

   |downloads_r-tidyheatmap| |docker_r-tidyheatmap|

   :versions:
      
      

      ``1.11.6-0``,  ``1.11.4-0``,  ``1.8.1-3``,  ``1.8.1-2``,  ``1.8.1-1``,  ``1.8.1-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.2.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: ``>=0.4.8``
   :depends r-dendextend: 
   :depends r-dplyr: ``>=0.8.5``
   :depends r-lifecycle: ``>=0.2.0``
   :depends r-magrittr: ``>=1.5``
   :depends r-patchwork: 
   :depends r-purrr: ``>=0.3.3``
   :depends r-rcolorbrewer: ``>=1.1``
   :depends r-rlang: ``>=0.4.5``
   :depends r-tibble: 
   :depends r-tidyr: ``>=1.0.3``
   :depends r-viridis: ``>=0.5.1``
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

      mamba install r-tidyheatmap

   and update with::

      mamba update r-tidyheatmap

  To create a new environment, run::

      mamba create --name myenvname r-tidyheatmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-tidyheatmap:<tag>

   (see `r-tidyheatmap/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tidyheatmap| image:: https://img.shields.io/conda/dn/bioconda/r-tidyheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tidyheatmap
   :alt:   (downloads)
.. |docker_r-tidyheatmap| image:: https://quay.io/repository/biocontainers/r-tidyheatmap/status
   :target: https://quay.io/repository/biocontainers/r-tidyheatmap
.. _`r-tidyheatmap/tags`: https://quay.io/repository/biocontainers/r-tidyheatmap?tab=tags


.. raw:: html

    <script>
        var package = "r-tidyheatmap";
        var versions = ["1.11.6","1.11.4","1.8.1","1.8.1","1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tidyheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tidyheatmap/README.html