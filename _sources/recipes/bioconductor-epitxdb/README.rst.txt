:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epitxdb'
.. highlight: bash

bioconductor-epitxdb
====================

.. conda:recipe:: bioconductor-epitxdb
   :replaces_section_title:
   :noindex:

   Storing and accessing epitranscriptomic information using the AnnotationDbi interface

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EpiTxDb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epitxdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb/meta.yaml>`_

   EpiTxDb facilitates the storage of epitranscriptomic information. More specifically\, it can keep track of modification identity\, position\, the enzyme for introducing it on the RNA\, a specifier which determines the position on the RNA to be modified and the literature references each modification is associated with.


.. conda:package:: bioconductor-epitxdb

   |downloads_bioconductor-epitxdb| |docker_bioconductor-epitxdb|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-modstrings: ``>=1.22.0,<1.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-trnadbimport: ``>=1.24.0,<1.25.0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-curl: 
   :depends r-dbi: 
   :depends r-httr: 
   :depends r-rex: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-epitxdb

   and update with::

      mamba update bioconductor-epitxdb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epitxdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epitxdb:<tag>

   (see `bioconductor-epitxdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epitxdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epitxdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epitxdb
   :alt:   (downloads)
.. |docker_bioconductor-epitxdb| image:: https://quay.io/repository/biocontainers/bioconductor-epitxdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epitxdb
.. _`bioconductor-epitxdb/tags`: https://quay.io/repository/biocontainers/bioconductor-epitxdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epitxdb";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epitxdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epitxdb/README.html