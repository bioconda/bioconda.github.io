:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anndatar'
.. highlight: bash

bioconductor-anndatar
=====================

.. conda:recipe:: bioconductor-anndatar
   :replaces_section_title:
   :noindex:

   AnnData interoperability in R

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/anndataR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-anndatar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anndatar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anndatar/meta.yaml>`_

   Bring the power and flexibility of AnnData to the R ecosystem\, allowing you to effortlessly manipulate and analyse your single\-cell data. This package lets you work with backed h5ad and zarr files\, directly access various slots \(e.g. X\, obs\, var\)\, or convert the data into SingleCellExperiment and Seurat objects.


.. conda:package:: bioconductor-anndatar

   |downloads_bioconductor-anndatar| |docker_bioconductor-anndatar|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-cli: 
   :depends r-lifecycle: 
   :depends r-matrix: 
   :depends r-purrr: 
   :depends r-r6: ``>=2.4.0``
   :depends r-reticulate: ``>=1.41.1``
   :depends r-rlang: 
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

      mamba install bioconductor-anndatar

   and update with::

      mamba update bioconductor-anndatar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-anndatar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anndatar:<tag>

   (see `bioconductor-anndatar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anndatar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anndatar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anndatar
   :alt:   (downloads)
.. |docker_bioconductor-anndatar| image:: https://quay.io/repository/biocontainers/bioconductor-anndatar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anndatar
.. _`bioconductor-anndatar/tags`: https://quay.io/repository/biocontainers/bioconductor-anndatar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anndatar";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anndatar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anndatar/README.html