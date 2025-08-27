:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbhmdb'
.. highlight: bash

bioconductor-biodbhmdb
======================

.. conda:recipe:: bioconductor-biodbhmdb
   :replaces_section_title:
   :noindex:

   biodbHmdb\, a library for connecting to the HMDB Database

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biodbHmdb.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbhmdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbhmdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbhmdb/meta.yaml>`_

   The biodbHmdb library is an extension of the biodb framework package that provides access to the HMDB Metabolites database. It allows to download the whole HMDB Metabolites database locally\, access entries and search for entries by name or description. A future version of this package will also include a search by mass and mass spectra annotation.


.. conda:package:: bioconductor-biodbhmdb

   |downloads_bioconductor-biodbhmdb| |docker_bioconductor-biodbhmdb|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biodb: ``>=1.14.0,<1.15.0``
   :depends bioconductor-biodb: ``>=1.14.0,<1.15.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-r6: 
   :depends r-rcpp: 
   :depends r-testthat: 
   :depends r-zip: 
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

      mamba install bioconductor-biodbhmdb

   and update with::

      mamba update bioconductor-biodbhmdb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biodbhmdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodbhmdb:<tag>

   (see `bioconductor-biodbhmdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodbhmdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbhmdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbhmdb
   :alt:   (downloads)
.. |docker_bioconductor-biodbhmdb| image:: https://quay.io/repository/biocontainers/bioconductor-biodbhmdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbhmdb
.. _`bioconductor-biodbhmdb/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbhmdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbhmdb";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbhmdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbhmdb/README.html