:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicdatahumanimr90'
.. highlight: bash

bioconductor-hicdatahumanimr90
==============================

.. conda:recipe:: bioconductor-hicdatahumanimr90
   :replaces_section_title:

   The HiC data from Human Fibroblast IMR90 cell line \(HindIII restriction\) was retrieved from the GEO website\, accession number GSE35156 \(http\:\/\/www.ncbi.nlm.nih.gov\/geo\/query\/acc.cgi\?acc\=GSE35156\). The raw reads were processed as explained in Dixon et al. \(Nature 2012\).

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/HiCDataHumanIMR90.html
   :license: GPL-3
   :recipe: /`bioconductor-hicdatahumanimr90 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdatahumanimr90>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdatahumanimr90/meta.yaml>`_

   


.. conda:package:: bioconductor-hicdatahumanimr90

   |downloads_bioconductor-hicdatahumanimr90| |docker_bioconductor-hicdatahumanimr90|

   :versions: 1.2.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hicdatahumanimr90

   and update with::

      conda update bioconductor-hicdatahumanimr90

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicdatahumanimr90:<tag>

   (see `bioconductor-hicdatahumanimr90/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicdatahumanimr90| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicdatahumanimr90.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicdatahumanimr90
   :alt:   (downloads)
.. |docker_bioconductor-hicdatahumanimr90| image:: https://quay.io/repository/biocontainers/bioconductor-hicdatahumanimr90/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicdatahumanimr90
.. _`bioconductor-hicdatahumanimr90/tags`: https://quay.io/repository/biocontainers/bioconductor-hicdatahumanimr90?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicdatahumanimr90/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicdatahumanimr90/README.html