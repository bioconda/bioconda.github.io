:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scry'
.. highlight: bash

bioconductor-scry
=================

.. conda:recipe:: bioconductor-scry
   :replaces_section_title:
   :noindex:

   Small\-Count Analysis Methods for High\-Dimensional Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scry.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scry/meta.yaml>`_

   Many modern biological datasets consist of small counts that are not well fit by standard linear\-Gaussian methods such as principal component analysis. This package provides implementations of count\-based feature selection and dimension reduction algorithms. These methods can be used to facilitate unsupervised analysis of any high\-dimensional data such as single\-cell RNA\-seq.


.. conda:package:: bioconductor-scry

   |downloads_bioconductor-scry| |docker_bioconductor-scry|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocsingular: ``>=1.16.0,<1.17.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-glmpca: ``>=0.2.0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-scry

   and update with::

      mamba update bioconductor-scry

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scry

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scry:<tag>

   (see `bioconductor-scry/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scry| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scry.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scry
   :alt:   (downloads)
.. |docker_bioconductor-scry| image:: https://quay.io/repository/biocontainers/bioconductor-scry/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scry
.. _`bioconductor-scry/tags`: https://quay.io/repository/biocontainers/bioconductor-scry?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scry";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scry/README.html