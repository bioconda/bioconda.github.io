:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ygs98.db'
.. highlight: bash

bioconductor-ygs98.db
=====================

.. conda:recipe:: bioconductor-ygs98.db
   :replaces_section_title:

   Affymetrix Yeast Genome S98 Array annotation data \(chip ygs98\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/ygs98.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ygs98.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ygs98.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ygs98.db/meta.yaml>`_

   Affymetrix Yeast Genome S98 Array annotation data \(chip ygs98\) assembled using data from public repositories


.. conda:package:: bioconductor-ygs98.db

   |downloads_bioconductor-ygs98.db| |docker_bioconductor-ygs98.db|

   :versions: 3.2.3-3, 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.sc.sgd.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ygs98.db

   and update with::

      conda update bioconductor-ygs98.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ygs98.db:<tag>

   (see `bioconductor-ygs98.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ygs98.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ygs98.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ygs98.db
   :alt:   (downloads)
.. |docker_bioconductor-ygs98.db| image:: https://quay.io/repository/biocontainers/bioconductor-ygs98.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ygs98.db
.. _`bioconductor-ygs98.db/tags`: https://quay.io/repository/biocontainers/bioconductor-ygs98.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ygs98.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ygs98.db/README.html