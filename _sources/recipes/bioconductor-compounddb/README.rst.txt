:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compounddb'
.. highlight: bash

bioconductor-compounddb
=======================

.. conda:recipe:: bioconductor-compounddb
   :replaces_section_title:
   :noindex:

   Creating and Using \(Chemical\) Compound Annotation Databases

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CompoundDb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-compounddb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compounddb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compounddb/meta.yaml>`_

   CompoundDb provides functionality to create and use \(chemical\) compound annotation databases from a variety of different sources such as LipidMaps\, HMDB\, ChEBI or MassBank. The database format allows to store in addition MS\/MS spectra along with compound information. The package provides also a backend for Bioconductor\'s Spectra package and allows thus to match experimetal MS\/MS spectra against MS\/MS spectra in the database. Databases can be stored in SQLite format and are thus portable.


.. conda:package:: bioconductor-compounddb

   |downloads_bioconductor-compounddb| |docker_bioconductor-compounddb|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationfilter: ``>=1.30.0,<1.31.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-chemminer: ``>=3.58.0,<3.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-metabocoreutils: ``>=1.14.0,<1.15.0``
   :depends bioconductor-mscoreutils: ``>=1.18.0,<1.19.0``
   :depends bioconductor-protgenerics: ``>=1.38.0,<1.39.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-spectra: ``>=1.16.0,<1.17.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-dbplyr: 
   :depends r-dplyr: 
   :depends r-jsonlite: 
   :depends r-rsqlite: 
   :depends r-tibble: 
   :depends r-xml2: 
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

      mamba install bioconductor-compounddb

   and update with::

      mamba update bioconductor-compounddb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-compounddb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-compounddb:<tag>

   (see `bioconductor-compounddb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-compounddb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compounddb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-compounddb
   :alt:   (downloads)
.. |docker_bioconductor-compounddb| image:: https://quay.io/repository/biocontainers/bioconductor-compounddb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compounddb
.. _`bioconductor-compounddb/tags`: https://quay.io/repository/biocontainers/bioconductor-compounddb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-compounddb";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compounddb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compounddb/README.html