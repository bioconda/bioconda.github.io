.. title:: Package Recipe 'bioconductor-chic'
.. highlight: bash


bioconductor-chic
=================

.. conda:recipe:: bioconductor-chic
   :replaces_section_title:

   Quality control \(QC\) pipeline for ChIP\-seq data using a comprehensive set of QC metrics\, including previously proposed metrics as well as novel ones\, based on local characteristics of the enrichment profile. The package provides functions to calculate a set of QC metrics\, a compendium with reference values and machine learning models to score sample quality.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ChIC.html
   :license: GPL-2
   :recipe: /`bioconductor-chic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chic/meta.yaml>`_

   


.. conda:package:: bioconductor-chic

   |downloads_bioconductor-chic| |docker_bioconductor-chic|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-chic.data` >=1.2.0,<1.3.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-caret`  :conda:package:`r-catools`  :conda:package:`r-progress`  :conda:package:`r-spp`  

   :required~by: |required_by_bioconductor-chic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chic

   and update with::

      conda update bioconductor-chic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chic


.. |required_by_bioconductor-chic| conda:required_by:: bioconductor-chic
.. |downloads_bioconductor-chic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chic.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chic| image:: https://quay.io/repository/biocontainers/bioconductor-chic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chic/README.html

