:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rimmport'
.. highlight: bash

bioconductor-rimmport
=====================

.. conda:recipe:: bioconductor-rimmport
   :replaces_section_title:

   The RImmPort package simplifies access to ImmPort data for analysis in the R environment. It provides a standards\-based interface to the ImmPort study data that is in a proprietary format.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RImmPort.html
   :license: GPL-3
   :recipe: /`bioconductor-rimmport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rimmport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rimmport/meta.yaml>`_
   :links: biotools: :biotools:`rimmport`, doi: :doi:`10.1093/bioinformatics/btw719`

   


.. conda:package:: bioconductor-rimmport

   |downloads_bioconductor-rimmport| |docker_bioconductor-rimmport|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.2-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-data.table: 
   
   :depends r-dbi: 
   
   :depends r-dplyr: 
   
   :depends r-plyr: 
   
   :depends r-reshape2: 
   
   :depends r-rsqlite: 
   
   :depends r-sqldf: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rimmport

   and update with::

      conda update bioconductor-rimmport

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rimmport:<tag>

   (see `bioconductor-rimmport/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rimmport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rimmport.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rimmport| image:: https://quay.io/repository/biocontainers/bioconductor-rimmport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rimmport
.. _`bioconductor-rimmport/tags`: https://quay.io/repository/biocontainers/bioconductor-rimmport?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rimmport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rimmport/README.html