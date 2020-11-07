:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bovine.db'
.. highlight: bash

bioconductor-bovine.db
======================

.. conda:recipe:: bioconductor-bovine.db
   :replaces_section_title:
   :noindex:

   Affymetrix bovine annotation data \(chip bovine\)

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/bovine.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bovine.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bovine.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bovine.db/meta.yaml>`_

   Affymetrix bovine annotation data \(chip bovine\) assembled using data from public repositories


.. conda:package:: bioconductor-bovine.db

   |downloads_bioconductor-bovine.db| |docker_bioconductor-bovine.db|

   :versions:
      
      

      ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-org.bt.eg.db: ``>=3.12.0,<3.13.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bovine.db

   and update with::

      conda update bioconductor-bovine.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bovine.db:<tag>

   (see `bioconductor-bovine.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bovine.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bovine.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bovine.db
   :alt:   (downloads)
.. |docker_bioconductor-bovine.db| image:: https://quay.io/repository/biocontainers/bioconductor-bovine.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bovine.db
.. _`bioconductor-bovine.db/tags`: https://quay.io/repository/biocontainers/bioconductor-bovine.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bovine.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bovine.db/README.html