:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gesper'
.. highlight: bash

bioconductor-gesper
===================

.. conda:recipe:: bioconductor-gesper
   :replaces_section_title:
   :noindex:

   Gene\-Specific Phenotype EstimatoR

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/gespeR.html
   :license: GPL-3
   :recipe: /`bioconductor-gesper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gesper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gesper/meta.yaml>`_

   Estimates gene\-specific phenotypes from off\-target confounded RNAi screens. The phenotype of each siRNA is modeled based on on\-targeted and off\-targeted genes\, using a regularized linear regression model.


.. conda:package:: bioconductor-gesper

   |downloads_bioconductor-gesper| |docker_bioconductor-gesper|

   :versions:
      
      

      ``1.34.0-0``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-cellhts2: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-matrix: 
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

      mamba install bioconductor-gesper

   and update with::

      mamba update bioconductor-gesper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gesper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gesper:<tag>

   (see `bioconductor-gesper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gesper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gesper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gesper
   :alt:   (downloads)
.. |docker_bioconductor-gesper| image:: https://quay.io/repository/biocontainers/bioconductor-gesper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gesper
.. _`bioconductor-gesper/tags`: https://quay.io/repository/biocontainers/bioconductor-gesper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gesper";
        var versions = ["1.34.0","1.31.0","1.30.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gesper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gesper/README.html