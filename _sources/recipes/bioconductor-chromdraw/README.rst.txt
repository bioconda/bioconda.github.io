.. title:: Package Recipe 'bioconductor-chromdraw'
.. highlight: bash


bioconductor-chromdraw
======================

.. conda:recipe:: bioconductor-chromdraw
   :replaces_section_title:

   ChromDraw is a R package for drawing the schemes of karyotype\(s\) in the linear and circular fashion. It is possible to visualized cytogenetic marsk on the chromosomes. This tool has own input data format. Input data can be imported from the GenomicRanges data structure. This package can visualized the data in the BED file format. Here is requirement on to the first nine fields of the BED format. Output files format are \*.eps and \*.svg.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/chromDraw.html
   :license: GPL-3
   :recipe: /`bioconductor-chromdraw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromdraw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromdraw/meta.yaml>`_
   :links: biotools: :biotools:`chromdraw`

   


.. conda:package:: bioconductor-chromdraw

   |downloads_bioconductor-chromdraw| |docker_bioconductor-chromdraw|

   :versions: 2.12.0, 2.10.0, 2.8.0, 2.6.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcpp` >=0.11.1 

   :required~by: |required_by_bioconductor-chromdraw|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chromdraw

   and update with::

      conda update bioconductor-chromdraw

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chromdraw


.. |required_by_bioconductor-chromdraw| conda:required_by:: bioconductor-chromdraw
.. |downloads_bioconductor-chromdraw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromdraw.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chromdraw| image:: https://quay.io/repository/biocontainers/bioconductor-chromdraw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromdraw







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromdraw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromdraw/README.html

