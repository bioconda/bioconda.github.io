:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-norway981.db'
.. highlight: bash

bioconductor-norway981.db
=========================

.. conda:recipe:: bioconductor-norway981.db
   :replaces_section_title:

   Norway981 http\:\/\/genome\-www5.stanford.edu\/ Annotation Data \(Norway981\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/Norway981.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-norway981.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-norway981.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-norway981.db/meta.yaml>`_

   


.. conda:package:: bioconductor-norway981.db

   |downloads_bioconductor-norway981.db| |docker_bioconductor-norway981.db|

   :versions: 3.2.3-3, 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.hs.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-norway981.db

   and update with::

      conda update bioconductor-norway981.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-norway981.db:<tag>

   (see `bioconductor-norway981.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-norway981.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-norway981.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-norway981.db
   :alt:   (downloads)
.. |docker_bioconductor-norway981.db| image:: https://quay.io/repository/biocontainers/bioconductor-norway981.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-norway981.db
.. _`bioconductor-norway981.db/tags`: https://quay.io/repository/biocontainers/bioconductor-norway981.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-norway981.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-norway981.db/README.html