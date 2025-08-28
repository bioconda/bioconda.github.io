:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vdjdive'
.. highlight: bash

bioconductor-vdjdive
====================

.. conda:recipe:: bioconductor-vdjdive
   :replaces_section_title:
   :noindex:

   Analysis Tools for 10X V\(D\)J Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VDJdive.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vdjdive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vdjdive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vdjdive/meta.yaml>`_

   This package provides functions for handling and analyzing immune receptor repertoire data\, such as produced by the CellRanger V\(D\)J pipeline. This includes reading the data into R\, merging it with paired single\-cell data\, quantifying clonotype abundances\, calculating diversity metrics\, and producing common plots. It implements the E\-M Algorithm for clonotype assignment\, along with other methods\, which makes use of ambiguous cells for improved quantification.


.. conda:package:: bioconductor-vdjdive

   |downloads_bioconductor-vdjdive| |docker_bioconductor-vdjdive|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
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

      mamba install bioconductor-vdjdive

   and update with::

      mamba update bioconductor-vdjdive

  To create a new environment, run::

      mamba create --name myenvname bioconductor-vdjdive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vdjdive:<tag>

   (see `bioconductor-vdjdive/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vdjdive| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vdjdive.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vdjdive
   :alt:   (downloads)
.. |docker_bioconductor-vdjdive| image:: https://quay.io/repository/biocontainers/bioconductor-vdjdive/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vdjdive
.. _`bioconductor-vdjdive/tags`: https://quay.io/repository/biocontainers/bioconductor-vdjdive?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vdjdive";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vdjdive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vdjdive/README.html