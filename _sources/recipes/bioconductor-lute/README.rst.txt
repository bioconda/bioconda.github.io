:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lute'
.. highlight: bash

bioconductor-lute
=================

.. conda:recipe:: bioconductor-lute
   :replaces_section_title:
   :noindex:

   Framework for cell size scale factor normalized bulk transcriptomics deconvolution experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lute.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lute/meta.yaml>`_

   Provides a framework for adjustment on cell type size when performing bulk transcripomics deconvolution. The main framework function provides a means of reference normalization using cell size scale factors. It allows for marker selection and deconvolution using non\-negative least squares \(NNLS\) by default. The framework is extensible for other marker selection and deconvolution algorithms\, and users may reuse the generics\, methods\, and classes for these when developing new algorithms.


.. conda:package:: bioconductor-lute

   |downloads_bioconductor-lute| |docker_bioconductor-lute|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
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

      mamba install bioconductor-lute

   and update with::

      mamba update bioconductor-lute

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lute

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lute:<tag>

   (see `bioconductor-lute/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lute
   :alt:   (downloads)
.. |docker_bioconductor-lute| image:: https://quay.io/repository/biocontainers/bioconductor-lute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lute
.. _`bioconductor-lute/tags`: https://quay.io/repository/biocontainers/bioconductor-lute?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lute";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lute/README.html