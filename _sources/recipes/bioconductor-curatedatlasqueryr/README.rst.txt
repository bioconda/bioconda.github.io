:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedatlasqueryr'
.. highlight: bash

bioconductor-curatedatlasqueryr
===============================

.. conda:recipe:: bioconductor-curatedatlasqueryr
   :replaces_section_title:
   :noindex:

   Queries the Human Cell Atlas

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CuratedAtlasQueryR.html
   :license: GPL-3
   :recipe: /`bioconductor-curatedatlasqueryr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedatlasqueryr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedatlasqueryr/meta.yaml>`_

   Provides access to a copy of the Human Cell Atlas\, but with harmonised metadata. This allows for uniform querying across numerous datasets within the Atlas using common fields such as cell type\, tissue type\, and patient ethnicity. Usage involves first querying the metadata table for cells of interest\, and then downloading the corresponding cells into a SingleCellExperiment object.


.. conda:package:: bioconductor-curatedatlasqueryr

   |downloads_bioconductor-curatedatlasqueryr| |docker_bioconductor-curatedatlasqueryr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cli: 
   :depends r-dbi: 
   :depends r-dbplyr: ``>=2.3.0``
   :depends r-dplyr: 
   :depends r-duckdb: 
   :depends r-glue: 
   :depends r-httr: 
   :depends r-purrr: ``>=1.0.0``
   :depends r-rlang: 
   :depends r-seurat: 
   :depends r-seuratobject: 
   :depends r-stringr: 
   :depends r-tibble: 
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

      mamba install bioconductor-curatedatlasqueryr

   and update with::

      mamba update bioconductor-curatedatlasqueryr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-curatedatlasqueryr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-curatedatlasqueryr:<tag>

   (see `bioconductor-curatedatlasqueryr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-curatedatlasqueryr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedatlasqueryr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedatlasqueryr
   :alt:   (downloads)
.. |docker_bioconductor-curatedatlasqueryr| image:: https://quay.io/repository/biocontainers/bioconductor-curatedatlasqueryr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedatlasqueryr
.. _`bioconductor-curatedatlasqueryr/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedatlasqueryr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-curatedatlasqueryr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedatlasqueryr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedatlasqueryr/README.html