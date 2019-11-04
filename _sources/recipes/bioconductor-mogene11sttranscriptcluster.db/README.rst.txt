:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mogene11sttranscriptcluster.db'
.. highlight: bash

bioconductor-mogene11sttranscriptcluster.db
===========================================

.. conda:recipe:: bioconductor-mogene11sttranscriptcluster.db
   :replaces_section_title:

   Affymetrix mogene11 annotation data \(chip mogene11sttranscriptcluster\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/mogene11sttranscriptcluster.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mogene11sttranscriptcluster.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogene11sttranscriptcluster.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogene11sttranscriptcluster.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mogene11sttranscriptcluster.db

   |downloads_bioconductor-mogene11sttranscriptcluster.db| |docker_bioconductor-mogene11sttranscriptcluster.db|

   :versions: 8.7.0-3, 8.7.0-2, 8.7.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.mm.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mogene11sttranscriptcluster.db

   and update with::

      conda update bioconductor-mogene11sttranscriptcluster.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mogene11sttranscriptcluster.db:<tag>

   (see `bioconductor-mogene11sttranscriptcluster.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mogene11sttranscriptcluster.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mogene11sttranscriptcluster.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mogene11sttranscriptcluster.db
   :alt:   (downloads)
.. |docker_bioconductor-mogene11sttranscriptcluster.db| image:: https://quay.io/repository/biocontainers/bioconductor-mogene11sttranscriptcluster.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mogene11sttranscriptcluster.db
.. _`bioconductor-mogene11sttranscriptcluster.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mogene11sttranscriptcluster.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mogene11sttranscriptcluster.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mogene11sttranscriptcluster.db/README.html