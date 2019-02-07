.. title:: Package Recipe 'bioconductor-mergeomics'
.. highlight: bash


bioconductor-mergeomics
=======================

.. conda:recipe:: bioconductor-mergeomics
   :replaces_section_title:

   The Mergeomics pipeline serves as a flexible framework for integrating multidimensional omics\-disease associations\, functional genomics\, canonical pathways and gene\-gene interaction networks to generate mechanistic hypotheses. It includes two main parts\, 1\) Marker set enrichment analysis \(MSEA\)\; 2\) Weighted Key Driver Analysis \(wKDA\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Mergeomics.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mergeomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mergeomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mergeomics/meta.yaml>`_
   :links: biotools: :biotools:`mergeomics`, doi: :doi:`10.1101/036012`

   


.. conda:package:: bioconductor-mergeomics

   |downloads_bioconductor-mergeomics| |docker_bioconductor-mergeomics|

   :versions: 1.10.0, 1.8.0, 1.6.0, 1.4.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-mergeomics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mergeomics

   and update with::

      conda update bioconductor-mergeomics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mergeomics


.. |required_by_bioconductor-mergeomics| conda:required_by:: bioconductor-mergeomics
.. |downloads_bioconductor-mergeomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mergeomics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mergeomics| image:: https://quay.io/repository/biocontainers/bioconductor-mergeomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mergeomics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mergeomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mergeomics/README.html

