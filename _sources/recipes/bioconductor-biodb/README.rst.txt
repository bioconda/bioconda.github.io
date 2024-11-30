:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodb'
.. highlight: bash

bioconductor-biodb
==================

.. conda:recipe:: bioconductor-biodb
   :replaces_section_title:
   :noindex:

   biodb\, a library and a development framework for connecting to chemical and biological databases

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/biodb.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodb/meta.yaml>`_

   The biodb package provides access to standard remote chemical and biological databases \(ChEBI\, KEGG\, HMDB\, ...\)\, as well as to in\-house local database files \(CSV\, SQLite\)\, with easy retrieval of entries\, access to web services\, search of compounds by mass and\/or name\, and mass spectra matching for LCMS and MSMS. Its architecture as a development framework facilitates the development of new database connectors for local projects or inside separate published packages.


.. conda:package:: bioconductor-biodb

   |downloads_bioconductor-biodb| |docker_bioconductor-biodb|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.3-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocfilecache: ``>=2.10.1,<2.11.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-chk: 
   :depends r-git2r: 
   :depends r-jsonlite: 
   :depends r-lgr: 
   :depends r-lifecycle: 
   :depends r-openssl: 
   :depends r-plyr: 
   :depends r-progress: 
   :depends r-r6: 
   :depends r-rappdirs: 
   :depends r-rcpp: 
   :depends r-rcurl: 
   :depends r-rsqlite: 
   :depends r-stringr: 
   :depends r-testthat: 
   :depends r-withr: 
   :depends r-xml: 
   :depends r-yaml: 
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

      mamba install bioconductor-biodb

   and update with::

      mamba update bioconductor-biodb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biodb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodb:<tag>

   (see `bioconductor-biodb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodb
   :alt:   (downloads)
.. |docker_bioconductor-biodb| image:: https://quay.io/repository/biocontainers/bioconductor-biodb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodb
.. _`bioconductor-biodb/tags`: https://quay.io/repository/biocontainers/bioconductor-biodb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodb";
        var versions = ["1.10.0","1.8.0","1.6.0","1.6.0","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodb/README.html