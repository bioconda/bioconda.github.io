.. title:: Package Recipe 'bioconductor-flowai'
.. highlight: bash


bioconductor-flowai
===================

.. conda:recipe:: bioconductor-flowai
   :replaces_section_title:

   The package is able to perform an automatic or interactive quality control on FCS data acquired using flow cytometry instruments. By evaluating three different properties\: 1\) flow rate\, 2\) signal acquisition\, 3\) dynamic range\, the quality control enables the detection and removal of anomalies.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowAI.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-flowai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowai/meta.yaml>`_
   :links: biotools: :biotools:`flowai`, doi: :doi:`10.1093/bioinformatics/btw191`

   


.. conda:package:: bioconductor-flowai

   |downloads_bioconductor-flowai| |docker_bioconductor-flowai|

   :versions: 1.12.1, 1.10.1, 1.6.2, 1.4.4, 1.2.9, 1.2.8

   :depends: :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-changepoint`  :conda:package:`r-ggplot2`  :conda:package:`r-knitr`  :conda:package:`r-plyr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-rmarkdown`  :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-flowai|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowai

   and update with::

      conda update bioconductor-flowai

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowai


.. |required_by_bioconductor-flowai| conda:required_by:: bioconductor-flowai
.. |downloads_bioconductor-flowai| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowai.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowai| image:: https://quay.io/repository/biocontainers/bioconductor-flowai/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowai







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowai/README.html

