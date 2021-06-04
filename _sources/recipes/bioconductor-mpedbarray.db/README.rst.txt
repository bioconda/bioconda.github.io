:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mpedbarray.db'
.. highlight: bash

bioconductor-mpedbarray.db
==========================

.. conda:recipe:: bioconductor-mpedbarray.db
   :replaces_section_title:
   :noindex:

   FHCRC Nelson Lab mpedbarray Annotation Data \(mpedbarray\)

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/mpedbarray.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mpedbarray.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpedbarray.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpedbarray.db/meta.yaml>`_

   FHCRC Nelson Lab mpedbarray Annotation Data \(mpedbarray\) assembled using data from public repositories


.. conda:package:: bioconductor-mpedbarray.db

   |downloads_bioconductor-mpedbarray.db| |docker_bioconductor-mpedbarray.db|

   :versions:
      
      

      ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-1``,  ``3.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.13.0,<3.14.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mpedbarray.db

   and update with::

      conda update bioconductor-mpedbarray.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mpedbarray.db:<tag>

   (see `bioconductor-mpedbarray.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mpedbarray.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mpedbarray.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mpedbarray.db
   :alt:   (downloads)
.. |docker_bioconductor-mpedbarray.db| image:: https://quay.io/repository/biocontainers/bioconductor-mpedbarray.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mpedbarray.db
.. _`bioconductor-mpedbarray.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mpedbarray.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mpedbarray.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mpedbarray.db/README.html