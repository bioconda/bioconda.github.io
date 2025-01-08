:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicsmlrepor'
.. highlight: bash

bioconductor-omicsmlrepor
=========================

.. conda:recipe:: bioconductor-omicsmlrepor
   :replaces_section_title:
   :noindex:

   Search harmonized metadata created under the OmicsMLRepo project

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/OmicsMLRepoR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-omicsmlrepor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicsmlrepor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicsmlrepor/meta.yaml>`_

   This package provides functions to browse the harmonized metadata for large omics databases. This package also supports data navigation if the metadata incorporates ontology.


.. conda:package:: bioconductor-omicsmlrepor

   |downloads_bioconductor-omicsmlrepor| |docker_bioconductor-omicsmlrepor|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-rols: ``>=3.2.0,<3.3.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.tree: 
   :depends r-diagrammer: 
   :depends r-dplyr: 
   :depends r-jsonlite: 
   :depends r-lubridate: 
   :depends r-plyr: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-stringr: 
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

      mamba install bioconductor-omicsmlrepor

   and update with::

      mamba update bioconductor-omicsmlrepor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-omicsmlrepor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicsmlrepor:<tag>

   (see `bioconductor-omicsmlrepor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicsmlrepor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicsmlrepor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicsmlrepor
   :alt:   (downloads)
.. |docker_bioconductor-omicsmlrepor| image:: https://quay.io/repository/biocontainers/bioconductor-omicsmlrepor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicsmlrepor
.. _`bioconductor-omicsmlrepor/tags`: https://quay.io/repository/biocontainers/bioconductor-omicsmlrepor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omicsmlrepor";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicsmlrepor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicsmlrepor/README.html