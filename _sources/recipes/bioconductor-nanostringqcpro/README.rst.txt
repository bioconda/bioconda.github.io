.. title:: Package Recipe 'bioconductor-nanostringqcpro'
.. highlight: bash


bioconductor-nanostringqcpro
============================

.. conda:recipe:: bioconductor-nanostringqcpro
   :replaces_section_title:

   NanoStringQCPro provides a set of quality metrics that can be used to assess the quality of NanoString mRNA gene expression data \-\- i.e. to identify outlier probes and outlier samples. It also provides different background subtraction and normalization approaches for this data. It outputs suggestions for flagging samples\/probes and an easily sharable html quality control output.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/NanoStringQCPro.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-nanostringqcpro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringqcpro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringqcpro/meta.yaml>`_

   


.. conda:package:: bioconductor-nanostringqcpro

   |downloads_bioconductor-nanostringqcpro| |docker_bioconductor-nanostringqcpro|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-knitr` >=1.12 :conda:package:`r-nmf` >=0.20.5 :conda:package:`r-png` >=0.1-7 :conda:package:`r-rcolorbrewer` >=1.0-5 

   :required~by: |required_by_bioconductor-nanostringqcpro|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nanostringqcpro

   and update with::

      conda update bioconductor-nanostringqcpro

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-nanostringqcpro


.. |required_by_bioconductor-nanostringqcpro| conda:required_by:: bioconductor-nanostringqcpro
.. |downloads_bioconductor-nanostringqcpro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanostringqcpro.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-nanostringqcpro| image:: https://quay.io/repository/biocontainers/bioconductor-nanostringqcpro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanostringqcpro







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanostringqcpro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanostringqcpro/README.html

