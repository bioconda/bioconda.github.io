.. title:: Package Recipe 'bioconductor-htqpcr'
.. highlight: bash


bioconductor-htqpcr
===================

.. conda:recipe:: bioconductor-htqpcr
   :replaces_section_title:

   Analysis of Ct values from high throughput quantitative real\-time PCR \(qPCR\) assays across multiple conditions or replicates. The input data can be from spatially\-defined formats such ABI TaqMan Low Density Arrays or OpenArray\; LightCycler from Roche Applied Science\; the CFX plates from Bio\-Rad Laboratories\; conventional 96\- or 384\-well plates\; or microfluidic devices such as the Dynamic Arrays from Fluidigm Corporation. HTqPCR handles data loading\, quality assessment\, normalization\, visualization and parametric or non\-parametric testing for statistical significance in Ct values between features \(e.g. genes\, microRNAs\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/HTqPCR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htqpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htqpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htqpcr/meta.yaml>`_
   :links: biotools: :biotools:`htqpcr`

   


.. conda:package:: bioconductor-htqpcr

   |downloads_bioconductor-htqpcr| |docker_bioconductor-htqpcr|

   :versions: 1.36.0, 1.34.0, 1.32.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-htqpcr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-htqpcr

   and update with::

      conda update bioconductor-htqpcr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-htqpcr


.. |required_by_bioconductor-htqpcr| conda:required_by:: bioconductor-htqpcr
.. |downloads_bioconductor-htqpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htqpcr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-htqpcr| image:: https://quay.io/repository/biocontainers/bioconductor-htqpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htqpcr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htqpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htqpcr/README.html

