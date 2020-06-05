:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcellminerdata'
.. highlight: bash

bioconductor-rcellminerdata
===========================

.. conda:recipe:: bioconductor-rcellminerdata
   :replaces_section_title:
   :noindex:

   rcellminerData\: Molecular Profiles and Drug Response for the NCI\-60 Cell Lines

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/rcellminerData.html
   :license: LGPL-3 + file LICENSE
   :recipe: /`bioconductor-rcellminerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcellminerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcellminerdata/meta.yaml>`_

   The NCI\-60 cancer cell line panel has been used over the course of several decades as an anti\-cancer drug screen. This panel was developed as part of the Developmental Therapeutics Program \(DTP\, http\:\/\/dtp.nci.nih.gov\/\) of the U.S. National Cancer Institute \(NCI\). Thousands of compounds have been tested on the NCI\-60\, which have been extensively characterized by many platforms for gene and protein expression\, copy number\, mutation\, and others \(Reinhold\, et al.\, 2012\). The purpose of the CellMiner project \(http\:\/\/discover.nci.nih.gov\/ cellminer\) has been to integrate data from multiple platforms used to analyze the NCI\-60 and to provide a powerful suite of tools for exploration of NCI\-60 data.


.. conda:package:: bioconductor-rcellminerdata

   |downloads_bioconductor-rcellminerdata| |docker_bioconductor-rcellminerdata|

   :versions:
      
      

      ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcellminerdata

   and update with::

      conda update bioconductor-rcellminerdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcellminerdata:<tag>

   (see `bioconductor-rcellminerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcellminerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcellminerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcellminerdata
   :alt:   (downloads)
.. |docker_bioconductor-rcellminerdata| image:: https://quay.io/repository/biocontainers/bioconductor-rcellminerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcellminerdata
.. _`bioconductor-rcellminerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-rcellminerdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcellminerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcellminerdata/README.html