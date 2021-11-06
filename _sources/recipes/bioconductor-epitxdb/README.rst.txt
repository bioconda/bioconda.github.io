:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epitxdb'
.. highlight: bash

bioconductor-epitxdb
====================

.. conda:recipe:: bioconductor-epitxdb
   :replaces_section_title:
   :noindex:

   Storing and accessing epitranscriptomic information using the AnnotationDbi interface

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/EpiTxDb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epitxdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb/meta.yaml>`_

   EpiTxDb facilitates the storage of epitranscriptomic information. More specifically\, it can keep track of modification identity\, position\, the enzyme for introducing it on the RNA\, a specifier which determines the position on the RNA to be modified and the literature references each modification is associated with.


.. conda:package:: bioconductor-epitxdb

   |downloads_bioconductor-epitxdb| |docker_bioconductor-epitxdb|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biocfilecache: ``>=2.2.0,<2.3.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-modstrings: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-trnadbimport: ``>=1.12.0,<1.13.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-curl: 
   :depends r-dbi: 
   :depends r-httr: 
   :depends r-rsqlite: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epitxdb

   and update with::

      conda update bioconductor-epitxdb

   or use the docker container::

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
        var versions = ["1.6.0","1.4.0","1.2.1","1.2.0","1.0.0"];
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