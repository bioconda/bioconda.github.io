:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-canine.db'
.. highlight: bash

bioconductor-canine.db
======================

.. conda:recipe:: bioconductor-canine.db
   :replaces_section_title:

   Affymetrix canine annotation data \(chip canine\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/canine.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-canine.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-canine.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-canine.db/meta.yaml>`_

   Affymetrix canine annotation data \(chip canine\) assembled using data from public repositories


.. conda:package:: bioconductor-canine.db

   |downloads_bioconductor-canine.db| |docker_bioconductor-canine.db|

   :versions: 3.2.3-3, 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.cf.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-canine.db

   and update with::

      conda update bioconductor-canine.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-canine.db:<tag>

   (see `bioconductor-canine.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-canine.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-canine.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-canine.db
   :alt:   (downloads)
.. |docker_bioconductor-canine.db| image:: https://quay.io/repository/biocontainers/bioconductor-canine.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-canine.db
.. _`bioconductor-canine.db/tags`: https://quay.io/repository/biocontainers/bioconductor-canine.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-canine.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-canine.db/README.html