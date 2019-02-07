.. title:: Package Recipe 'bioconductor-rforproteomics'
.. highlight: bash


bioconductor-rforproteomics
===========================

.. conda:recipe:: bioconductor-rforproteomics
   :replaces_section_title:

   This package contains code to illustrate the \'Using R and Bioconductor for proteomics data analysis\' and \'Visualisation of proteomics data using R and Bioconductor\' manuscripts. The vignettes describe the code and data needed to reproduce the examples and figures described in the paper and functionality for proteomics visualisation. It also contain various function to discover R software for mass spectrometry and proteomics.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/RforProteomics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rforproteomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rforproteomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rforproteomics/meta.yaml>`_

   


.. conda:package:: bioconductor-rforproteomics

   |downloads_bioconductor-rforproteomics| |docker_bioconductor-rforproteomics|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-biocviews` >=1.50.0,<1.51.0 :conda:package:`bioconductor-msnbase` >=2.8.0,<2.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  :conda:package:`r-r.utils`  :conda:package:`r-shiny`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-rforproteomics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rforproteomics

   and update with::

      conda update bioconductor-rforproteomics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rforproteomics


.. |required_by_bioconductor-rforproteomics| conda:required_by:: bioconductor-rforproteomics
.. |downloads_bioconductor-rforproteomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rforproteomics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rforproteomics| image:: https://quay.io/repository/biocontainers/bioconductor-rforproteomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rforproteomics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rforproteomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rforproteomics/README.html

