:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ripseekerdata'
.. highlight: bash

bioconductor-ripseekerdata
==========================

.. conda:recipe:: bioconductor-ripseekerdata
   :replaces_section_title:

   The RIP\-seq data in BAM format are the test data for the package RIPSeeker. The data correspond to two RIP\-seq experiments\, namely PRC2 and CCNT1. Raw data from NCBI Gene Expression Omnibus under accession numbers GSE17064 for PRC2 and in\-house for CCNT1.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/RIPSeekerData.html
   :license: GPL-2
   :recipe: /`bioconductor-ripseekerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ripseekerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ripseekerdata/meta.yaml>`_

   


.. conda:package:: bioconductor-ripseekerdata

   |downloads_bioconductor-ripseekerdata| |docker_bioconductor-ripseekerdata|

   :versions: 1.18.0-0
   
   :depends bioconductor-ripseeker: >=1.22.0,<1.23.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ripseekerdata

   and update with::

      conda update bioconductor-ripseekerdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ripseekerdata:<tag>

   (see `bioconductor-ripseekerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ripseekerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ripseekerdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ripseekerdata| image:: https://quay.io/repository/biocontainers/bioconductor-ripseekerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ripseekerdata
.. _`bioconductor-ripseekerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-ripseekerdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ripseekerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ripseekerdata/README.html