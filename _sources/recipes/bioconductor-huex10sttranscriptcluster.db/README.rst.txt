:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-huex10sttranscriptcluster.db'
.. highlight: bash

bioconductor-huex10sttranscriptcluster.db
=========================================

.. conda:recipe:: bioconductor-huex10sttranscriptcluster.db
   :replaces_section_title:

   Affymetrix huex10 annotation data \(chip huex10sttranscriptcluster\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/huex10sttranscriptcluster.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-huex10sttranscriptcluster.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huex10sttranscriptcluster.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huex10sttranscriptcluster.db/meta.yaml>`_

   


.. conda:package:: bioconductor-huex10sttranscriptcluster.db

   |downloads_bioconductor-huex10sttranscriptcluster.db| |docker_bioconductor-huex10sttranscriptcluster.db|

   :versions: 8.7.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-huex10sttranscriptcluster.db

   and update with::

      conda update bioconductor-huex10sttranscriptcluster.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-huex10sttranscriptcluster.db:<tag>

   (see `bioconductor-huex10sttranscriptcluster.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-huex10sttranscriptcluster.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-huex10sttranscriptcluster.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-huex10sttranscriptcluster.db| image:: https://quay.io/repository/biocontainers/bioconductor-huex10sttranscriptcluster.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-huex10sttranscriptcluster.db
.. _`bioconductor-huex10sttranscriptcluster.db/tags`: https://quay.io/repository/biocontainers/bioconductor-huex10sttranscriptcluster.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-huex10sttranscriptcluster.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-huex10sttranscriptcluster.db/README.html