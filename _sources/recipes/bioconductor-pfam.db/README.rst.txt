:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pfam.db'
.. highlight: bash

bioconductor-pfam.db
====================

.. conda:recipe:: bioconductor-pfam.db
   :replaces_section_title:

   A set of protein ID mappings for PFAM assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/PFAM.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pfam.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pfam.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pfam.db/meta.yaml>`_

   


.. conda:package:: bioconductor-pfam.db

   |downloads_bioconductor-pfam.db| |docker_bioconductor-pfam.db|

   :versions: 3.8.2-1, 3.7.0-0, 3.6.0-0, 3.5.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pfam.db

   and update with::

      conda update bioconductor-pfam.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pfam.db:<tag>

   (see `bioconductor-pfam.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pfam.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pfam.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pfam.db
   :alt:   (downloads)
.. |docker_bioconductor-pfam.db| image:: https://quay.io/repository/biocontainers/bioconductor-pfam.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pfam.db
.. _`bioconductor-pfam.db/tags`: https://quay.io/repository/biocontainers/bioconductor-pfam.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pfam.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pfam.db/README.html