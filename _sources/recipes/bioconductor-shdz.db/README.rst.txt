:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-shdz.db'
.. highlight: bash

bioconductor-shdz.db
====================

.. conda:recipe:: bioconductor-shdz.db
   :replaces_section_title:
   :noindex:

   SHDZ http\:\/\/genome\-www5.stanford.edu\/ Annotation Data \(SHDZ\)

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/SHDZ.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-shdz.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shdz.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shdz.db/meta.yaml>`_

   SHDZ http\:\/\/genome\-www5.stanford.edu\/ Annotation Data \(SHDZ\) assembled using data from public repositories


.. conda:package:: bioconductor-shdz.db

   |downloads_bioconductor-shdz.db| |docker_bioconductor-shdz.db|

   :versions:
      
      

      ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-shdz.db

   and update with::

      conda update bioconductor-shdz.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-shdz.db:<tag>

   (see `bioconductor-shdz.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-shdz.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shdz.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-shdz.db
   :alt:   (downloads)
.. |docker_bioconductor-shdz.db| image:: https://quay.io/repository/biocontainers/bioconductor-shdz.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shdz.db
.. _`bioconductor-shdz.db/tags`: https://quay.io/repository/biocontainers/bioconductor-shdz.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shdz.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shdz.db/README.html