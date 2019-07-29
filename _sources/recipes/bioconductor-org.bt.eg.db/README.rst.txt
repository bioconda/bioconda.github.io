:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.bt.eg.db'
.. highlight: bash

bioconductor-org.bt.eg.db
=========================

.. conda:recipe:: bioconductor-org.bt.eg.db
   :replaces_section_title:

   Genome wide annotation for Bovine\, primarily based on mapping using Entrez Gene identifiers.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/org.Bt.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.bt.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.bt.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.bt.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-org.bt.eg.db

   |downloads_bioconductor-org.bt.eg.db| |docker_bioconductor-org.bt.eg.db|

   :versions: 3.8.2-1, 3.7.0-0, 3.6.0-0, 3.5.0-1, 3.5.0-0, 3.4.2-0, 3.4.1-1, 3.4.1-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.bt.eg.db

   and update with::

      conda update bioconductor-org.bt.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.bt.eg.db:<tag>

   (see `bioconductor-org.bt.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.bt.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.bt.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.bt.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-org.bt.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.bt.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.bt.eg.db
.. _`bioconductor-org.bt.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.bt.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.bt.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.bt.eg.db/README.html