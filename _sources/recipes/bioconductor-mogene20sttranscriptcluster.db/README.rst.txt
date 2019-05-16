:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mogene20sttranscriptcluster.db'
.. highlight: bash

bioconductor-mogene20sttranscriptcluster.db
===========================================

.. conda:recipe:: bioconductor-mogene20sttranscriptcluster.db
   :replaces_section_title:

   Affymetrix mogene20 annotation data \(chip mogene20sttranscriptcluster\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/mogene20sttranscriptcluster.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mogene20sttranscriptcluster.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogene20sttranscriptcluster.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogene20sttranscriptcluster.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mogene20sttranscriptcluster.db

   |downloads_bioconductor-mogene20sttranscriptcluster.db| |docker_bioconductor-mogene20sttranscriptcluster.db|

   :versions: 8.7.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.mm.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mogene20sttranscriptcluster.db

   and update with::

      conda update bioconductor-mogene20sttranscriptcluster.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mogene20sttranscriptcluster.db:<tag>

   (see `bioconductor-mogene20sttranscriptcluster.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mogene20sttranscriptcluster.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mogene20sttranscriptcluster.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mogene20sttranscriptcluster.db
   :alt:   (downloads)
.. |docker_bioconductor-mogene20sttranscriptcluster.db| image:: https://quay.io/repository/biocontainers/bioconductor-mogene20sttranscriptcluster.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mogene20sttranscriptcluster.db
.. _`bioconductor-mogene20sttranscriptcluster.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mogene20sttranscriptcluster.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mogene20sttranscriptcluster.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mogene20sttranscriptcluster.db/README.html