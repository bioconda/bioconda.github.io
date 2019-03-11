:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.dr.eg.db'
.. highlight: bash

bioconductor-org.dr.eg.db
=========================

.. conda:recipe:: bioconductor-org.dr.eg.db
   :replaces_section_title:

   Genome wide annotation for Zebrafish\, primarily based on mapping using Entrez Gene identifiers.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/org.Dr.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.dr.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.dr.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.dr.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-org.dr.eg.db

   |downloads_bioconductor-org.dr.eg.db| |docker_bioconductor-org.dr.eg.db|

   :versions: 3.7.0-1, 3.7.0-0, 3.6.0-0, 3.5.0-1, 3.5.0-0, 3.4.2-0, 3.4.1-1, 3.4.1-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.dr.eg.db

   and update with::

      conda update bioconductor-org.dr.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.dr.eg.db:<tag>

   (see `bioconductor-org.dr.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.dr.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.dr.eg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-org.dr.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.dr.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.dr.eg.db
.. _`bioconductor-org.dr.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.dr.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.dr.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.dr.eg.db/README.html