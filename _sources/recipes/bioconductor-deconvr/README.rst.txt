:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deconvr'
.. highlight: bash

bioconductor-deconvr
====================

.. conda:recipe:: bioconductor-deconvr
   :replaces_section_title:
   :noindex:

   Simulation and Deconvolution of Omic Profiles

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/deconvR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-deconvr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deconvr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deconvr/meta.yaml>`_

   This package provides a collection of functions designed for analyzing deconvolution of the bulk sample\(s\) using an atlas of reference omic signature profiles and a user\-selected model. Users are given the option to create or extend a reference atlas and\,also simulate the desired size of the bulk signature profile of the reference cell types.The package includes the cell\-type\-specific methylation atlas and\, Illumina Epic B5 probe ids that can be used in deconvolution. Additionally\,we included BSmeth2Probe\, to make mapping WGBS data to their probe IDs easier.


.. conda:package:: bioconductor-deconvr

   |downloads_bioconductor-deconvr| |docker_bioconductor-deconvr|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-methylkit: ``>=1.32.0,<1.33.0``
   :depends bioconductor-minfi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: ``>=1.14.0``
   :depends r-dplyr: ``>=1.0.7``
   :depends r-e1071: ``>=1.7.9``
   :depends r-foreach: ``>=1.5.1``
   :depends r-magrittr: ``>=2.0.1``
   :depends r-mass: 
   :depends r-matrixstats: ``>=0.61.0``
   :depends r-nnls: ``>=1.4``
   :depends r-quadprog: ``>=1.5.8``
   :depends r-rsq: ``>=2.2``
   :depends r-tidyr: ``>=1.1.3``
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

      mamba install bioconductor-deconvr

   and update with::

      mamba update bioconductor-deconvr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-deconvr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deconvr:<tag>

   (see `bioconductor-deconvr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deconvr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deconvr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deconvr
   :alt:   (downloads)
.. |docker_bioconductor-deconvr| image:: https://quay.io/repository/biocontainers/bioconductor-deconvr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deconvr
.. _`bioconductor-deconvr/tags`: https://quay.io/repository/biocontainers/bioconductor-deconvr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deconvr";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deconvr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deconvr/README.html