:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95b.db'
.. highlight: bash

bioconductor-hgu95b.db
======================

.. conda:recipe:: bioconductor-hgu95b.db
   :replaces_section_title:
   :noindex:

   Affymetrix Human Genome U95 Set annotation data \(chip hgu95b\)

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/hgu95b.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu95b.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95b.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95b.db/meta.yaml>`_

   Affymetrix Human Genome U95 Set annotation data \(chip hgu95b\) assembled using data from public repositories


.. conda:package:: bioconductor-hgu95b.db

   |downloads_bioconductor-hgu95b.db| |docker_bioconductor-hgu95b.db|

   :versions:
      
      

      ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95b.db

   and update with::

      conda update bioconductor-hgu95b.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu95b.db:<tag>

   (see `bioconductor-hgu95b.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95b.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95b.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu95b.db
   :alt:   (downloads)
.. |docker_bioconductor-hgu95b.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95b.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95b.db
.. _`bioconductor-hgu95b.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95b.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95b.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95b.db/README.html