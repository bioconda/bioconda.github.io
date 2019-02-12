:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affyqcreport'
.. highlight: bash

bioconductor-affyqcreport
=========================

.. conda:recipe:: bioconductor-affyqcreport
   :replaces_section_title:

   This package creates a QC report for an AffyBatch object. The report is intended to allow the user to quickly assess the quality of a set of arrays in an AffyBatch object.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/affyQCReport.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-affyqcreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyqcreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyqcreport/meta.yaml>`_

   


.. conda:package:: bioconductor-affyqcreport

   |downloads_bioconductor-affyqcreport| |docker_bioconductor-affyqcreport|

   :versions: 1.60.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   
   :depends bioconductor-affyplm: >=1.58.0,<1.59.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-genefilter: >=1.64.0,<1.65.0
   
   :depends bioconductor-simpleaffy: >=2.58.0,<2.59.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-lattice: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-xtable: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affyqcreport

   and update with::

      conda update bioconductor-affyqcreport

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-affyqcreport:<tag>

   (see `bioconductor-affyqcreport/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affyqcreport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyqcreport.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affyqcreport| image:: https://quay.io/repository/biocontainers/bioconductor-affyqcreport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyqcreport
.. _`bioconductor-affyqcreport/tags`: https://quay.io/repository/biocontainers/bioconductor-affyqcreport?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyqcreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyqcreport/README.html