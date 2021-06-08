:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drugtargetinteractions'
.. highlight: bash

bioconductor-drugtargetinteractions
===================================

.. conda:recipe:: bioconductor-drugtargetinteractions
   :replaces_section_title:
   :noindex:

   Drug\-Target Interactions

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/drugTargetInteractions.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-drugtargetinteractions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drugtargetinteractions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drugtargetinteractions/meta.yaml>`_

   Provides utilities for identifying drug\-target interactions for sets of small molecule or gene\/protein identifiers. The required drug\-target interaction information is obained from a local SQLite instance of the ChEMBL database. ChEMBL has been chosen for this purpose\, because it provides one of the most comprehensive and best annotatated knowledge resources for drug\-target information available in the public domain.


.. conda:package:: bioconductor-drugtargetinteractions

   |downloads_bioconductor-drugtargetinteractions| |docker_bioconductor-drugtargetinteractions|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationfilter: ``>=1.16.0,<1.17.0``
   :depends bioconductor-biocfilecache: ``>=2.0.0,<2.1.0``
   :depends bioconductor-biomart: ``>=2.48.0,<2.49.0``
   :depends bioconductor-ensembldb: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-uniprot.ws: ``>=2.32.0,<2.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-rappdirs: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-drugtargetinteractions

   and update with::

      conda update bioconductor-drugtargetinteractions

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drugtargetinteractions:<tag>

   (see `bioconductor-drugtargetinteractions/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drugtargetinteractions| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drugtargetinteractions.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drugtargetinteractions
   :alt:   (downloads)
.. |docker_bioconductor-drugtargetinteractions| image:: https://quay.io/repository/biocontainers/bioconductor-drugtargetinteractions/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drugtargetinteractions
.. _`bioconductor-drugtargetinteractions/tags`: https://quay.io/repository/biocontainers/bioconductor-drugtargetinteractions?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drugtargetinteractions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drugtargetinteractions/README.html