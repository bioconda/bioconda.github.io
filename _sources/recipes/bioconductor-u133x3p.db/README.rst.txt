:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-u133x3p.db'
.. highlight: bash

bioconductor-u133x3p.db
=======================

.. conda:recipe:: bioconductor-u133x3p.db
   :replaces_section_title:
   :noindex:

   Affymetrix Human X3P Array annotation data \(chip u133x3p\)

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/u133x3p.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-u133x3p.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-u133x3p.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-u133x3p.db/meta.yaml>`_

   Affymetrix Human X3P Array annotation data \(chip u133x3p\) assembled using data from public repositories


.. conda:package:: bioconductor-u133x3p.db

   |downloads_bioconductor-u133x3p.db| |docker_bioconductor-u133x3p.db|

   :versions:
      
      

      ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-u133x3p.db

   and update with::

      conda update bioconductor-u133x3p.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-u133x3p.db:<tag>

   (see `bioconductor-u133x3p.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-u133x3p.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-u133x3p.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-u133x3p.db
   :alt:   (downloads)
.. |docker_bioconductor-u133x3p.db| image:: https://quay.io/repository/biocontainers/bioconductor-u133x3p.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-u133x3p.db
.. _`bioconductor-u133x3p.db/tags`: https://quay.io/repository/biocontainers/bioconductor-u133x3p.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-u133x3p.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-u133x3p.db/README.html