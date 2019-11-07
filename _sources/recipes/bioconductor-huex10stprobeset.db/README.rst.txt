:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-huex10stprobeset.db'
.. highlight: bash

bioconductor-huex10stprobeset.db
================================

.. conda:recipe:: bioconductor-huex10stprobeset.db
   :replaces_section_title:

   Affymetrix huex10 annotation data \(chip huex10stprobeset\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/huex10stprobeset.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-huex10stprobeset.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huex10stprobeset.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huex10stprobeset.db/meta.yaml>`_

   Affymetrix huex10 annotation data \(chip huex10stprobeset\) assembled using data from public repositories


.. conda:package:: bioconductor-huex10stprobeset.db

   |downloads_bioconductor-huex10stprobeset.db| |docker_bioconductor-huex10stprobeset.db|

   :versions: 8.7.0-4, 8.7.0-3, 8.7.0-1, 8.7.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.hs.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-huex10stprobeset.db

   and update with::

      conda update bioconductor-huex10stprobeset.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-huex10stprobeset.db:<tag>

   (see `bioconductor-huex10stprobeset.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-huex10stprobeset.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-huex10stprobeset.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-huex10stprobeset.db
   :alt:   (downloads)
.. |docker_bioconductor-huex10stprobeset.db| image:: https://quay.io/repository/biocontainers/bioconductor-huex10stprobeset.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-huex10stprobeset.db
.. _`bioconductor-huex10stprobeset.db/tags`: https://quay.io/repository/biocontainers/bioconductor-huex10stprobeset.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-huex10stprobeset.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-huex10stprobeset.db/README.html