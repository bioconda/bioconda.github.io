:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vsclust'
.. highlight: bash

bioconductor-vsclust
====================

.. conda:recipe:: bioconductor-vsclust
   :replaces_section_title:
   :noindex:

   Feature\-based variance\-sensitive quantitative clustering

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/vsclust.html
   :license: GPL-2
   :recipe: /`bioconductor-vsclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsclust/meta.yaml>`_

   Feature\-based variance\-sensitive clustering of omics data. Optimizes cluster assignment by taking into account individual feature variance. Includes several modules for statistical testing\, clustering and enrichment analysis.


.. conda:package:: bioconductor-vsclust

   |downloads_bioconductor-vsclust| |docker_bioconductor-vsclust|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends bioconductor-clusterprofiler: ``>=4.18.4,<4.19.0a0``
   :depends bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends bioconductor-dose: ``>=4.4.0,<4.5.0a0``
   :depends bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-multiassayexperiment: ``>=1.36.1,<1.37.0a0``
   :depends bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends bioconductor-qvalue: ``>=2.42.0,<2.43.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=19``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-httr: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-shiny: 
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

      mamba install bioconductor-vsclust

   and update with::

      mamba update bioconductor-vsclust

  To create a new environment, run::

      mamba create --name myenvname bioconductor-vsclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vsclust:<tag>

   (see `bioconductor-vsclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vsclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vsclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vsclust
   :alt:   (downloads)
.. |docker_bioconductor-vsclust| image:: https://quay.io/repository/biocontainers/bioconductor-vsclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vsclust
.. _`bioconductor-vsclust/tags`: https://quay.io/repository/biocontainers/bioconductor-vsclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vsclust";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vsclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vsclust/README.html