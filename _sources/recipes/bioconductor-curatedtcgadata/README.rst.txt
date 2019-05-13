:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedtcgadata'
.. highlight: bash

bioconductor-curatedtcgadata
============================

.. conda:recipe:: bioconductor-curatedtcgadata
   :replaces_section_title:

   This package provides publicly available data from The Cancer Genome Atlas \(TCGA\) Bioconductor MultiAssayExperiment class objects. These objects integrate multiple assays \(e.g. RNA\-seq\, copy number\, mutation\, microRNA\, protein\, and others\) with clinical \/ pathological data. The MultiAssayExperiment class links assay barcodes with patient IDs\, enabling harmonized subsetting of rows \(features\) and columns \(patients \/ samples\) across the entire experiment.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/curatedTCGAData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-curatedtcgadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedtcgadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedtcgadata/meta.yaml>`_

   


.. conda:package:: bioconductor-curatedtcgadata

   |downloads_bioconductor-curatedtcgadata| |docker_bioconductor-curatedtcgadata|

   :versions: 1.4.0-0
   
   :depends bioconductor-annotationhub: >=2.14.0,<2.15.0
   :depends bioconductor-experimenthub: >=1.8.0,<1.9.0
   :depends bioconductor-multiassayexperiment: >=1.8.0,<1.9.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-curatedtcgadata

   and update with::

      conda update bioconductor-curatedtcgadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-curatedtcgadata:<tag>

   (see `bioconductor-curatedtcgadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-curatedtcgadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedtcgadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedtcgadata
   :alt:   (downloads)
.. |docker_bioconductor-curatedtcgadata| image:: https://quay.io/repository/biocontainers/bioconductor-curatedtcgadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedtcgadata
.. _`bioconductor-curatedtcgadata/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedtcgadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedtcgadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedtcgadata/README.html