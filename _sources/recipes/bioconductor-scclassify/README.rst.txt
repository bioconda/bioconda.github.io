:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scclassify'
.. highlight: bash

bioconductor-scclassify
=======================

.. conda:recipe:: bioconductor-scclassify
   :replaces_section_title:
   :noindex:

   scClassify\: single\-cell Hierarchical Classification

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scClassify.html
   :license: GPL-3
   :recipe: /`bioconductor-scclassify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scclassify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scclassify/meta.yaml>`_

   scClassify is a multiscale classification framework for single\-cell RNA\-seq data based on ensemble learning and cell type hierarchies\, enabling sample size estimation required for accurate cell type classification and joint classification of cells using multiple references.


.. conda:package:: bioconductor-scclassify

   |downloads_bioconductor-scclassify| |docker_bioconductor-scclassify|

   :versions:
      
      

      ``1.18.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-cepo: ``>=1.12.0,<1.13.0``
   :depends bioconductor-hopach: ``>=2.66.0,<2.67.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-diptest: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-mgcv: 
   :depends r-minpack.lm: 
   :depends r-mixtools: 
   :depends r-proxy: 
   :depends r-proxyc: 
   :depends r-statmod: 
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

      mamba install bioconductor-scclassify

   and update with::

      mamba update bioconductor-scclassify

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scclassify

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scclassify:<tag>

   (see `bioconductor-scclassify/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scclassify| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scclassify.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scclassify
   :alt:   (downloads)
.. |docker_bioconductor-scclassify| image:: https://quay.io/repository/biocontainers/bioconductor-scclassify/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scclassify
.. _`bioconductor-scclassify/tags`: https://quay.io/repository/biocontainers/bioconductor-scclassify?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scclassify";
        var versions = ["1.18.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scclassify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scclassify/README.html