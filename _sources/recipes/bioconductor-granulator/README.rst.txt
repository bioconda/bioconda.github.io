:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-granulator'
.. highlight: bash

bioconductor-granulator
=======================

.. conda:recipe:: bioconductor-granulator
   :replaces_section_title:
   :noindex:

   Rapid benchmarking of methods for \*in silico\* deconvolution of bulk RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/granulator.html
   :license: GPL-3
   :recipe: /`bioconductor-granulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-granulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-granulator/meta.yaml>`_

   granulator is an R package for the cell type deconvolution of heterogeneous tissues based on bulk RNA\-seq data or single cell RNA\-seq expression profiles. The package provides a unified testing interface to rapidly run and benchmark multiple state\-of\-the\-art deconvolution methods. Data for the deconvolution of peripheral blood mononuclear cells \(PBMCs\) into individual immune cell types is provided as well.


.. conda:package:: bioconductor-granulator

   |downloads_bioconductor-granulator| |docker_bioconductor-granulator|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-dtangle: 
   :depends r-e1071: 
   :depends r-epir: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-limsolve: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-nnls: 
   :depends r-pheatmap: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-granulator

   and update with::

      mamba update bioconductor-granulator

  To create a new environment, run::

      mamba create --name myenvname bioconductor-granulator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-granulator:<tag>

   (see `bioconductor-granulator/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-granulator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-granulator.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-granulator
   :alt:   (downloads)
.. |docker_bioconductor-granulator| image:: https://quay.io/repository/biocontainers/bioconductor-granulator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-granulator
.. _`bioconductor-granulator/tags`: https://quay.io/repository/biocontainers/bioconductor-granulator?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-granulator";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-granulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-granulator/README.html