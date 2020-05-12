:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ragene20sttranscriptcluster.db'
.. highlight: bash

bioconductor-ragene20sttranscriptcluster.db
===========================================

.. conda:recipe:: bioconductor-ragene20sttranscriptcluster.db
   :replaces_section_title:

   Affymetrix ragene20 annotation data \(chip ragene20sttranscriptcluster\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/ragene20sttranscriptcluster.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ragene20sttranscriptcluster.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ragene20sttranscriptcluster.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ragene20sttranscriptcluster.db/meta.yaml>`_

   Affymetrix ragene20 annotation data \(chip ragene20sttranscriptcluster\) assembled using data from public repositories


.. conda:package:: bioconductor-ragene20sttranscriptcluster.db

   |downloads_bioconductor-ragene20sttranscriptcluster.db| |docker_bioconductor-ragene20sttranscriptcluster.db|

   :versions: 8.7.0-4, 8.7.0-3, 8.7.0-2, 8.7.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-org.rn.eg.db: >=3.11.0,<3.12.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ragene20sttranscriptcluster.db

   and update with::

      conda update bioconductor-ragene20sttranscriptcluster.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ragene20sttranscriptcluster.db:<tag>

   (see `bioconductor-ragene20sttranscriptcluster.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ragene20sttranscriptcluster.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ragene20sttranscriptcluster.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ragene20sttranscriptcluster.db
   :alt:   (downloads)
.. |docker_bioconductor-ragene20sttranscriptcluster.db| image:: https://quay.io/repository/biocontainers/bioconductor-ragene20sttranscriptcluster.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ragene20sttranscriptcluster.db
.. _`bioconductor-ragene20sttranscriptcluster.db/tags`: https://quay.io/repository/biocontainers/bioconductor-ragene20sttranscriptcluster.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ragene20sttranscriptcluster.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ragene20sttranscriptcluster.db/README.html