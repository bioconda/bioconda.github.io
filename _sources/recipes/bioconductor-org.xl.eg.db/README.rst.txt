:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.xl.eg.db'
.. highlight: bash

bioconductor-org.xl.eg.db
=========================

.. conda:recipe:: bioconductor-org.xl.eg.db
   :replaces_section_title:
   :noindex:

   Genome wide annotation for Xenopus

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/org.Xl.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.xl.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.xl.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.xl.eg.db/meta.yaml>`_

   Genome wide annotation for Xenopus\, primarily based on mapping using Entrez Gene identifiers.


.. conda:package:: bioconductor-org.xl.eg.db

   |downloads_bioconductor-org.xl.eg.db| |docker_bioconductor-org.xl.eg.db|

   :versions:
      
      

      ``3.12.0-0``,  ``3.11.1-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.0-1``,  ``3.7.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.xl.eg.db

   and update with::

      conda update bioconductor-org.xl.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.xl.eg.db:<tag>

   (see `bioconductor-org.xl.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.xl.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.xl.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.xl.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-org.xl.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.xl.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.xl.eg.db
.. _`bioconductor-org.xl.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.xl.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.xl.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.xl.eg.db/README.html