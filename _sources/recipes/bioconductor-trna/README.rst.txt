.. title:: Package Recipe 'bioconductor-trna'
.. highlight: bash


bioconductor-trna
=================

.. conda:recipe:: bioconductor-trna
   :replaces_section_title:

   The tRNA package allows tRNA sequences and structures to be accessed and used for subsetting. In addition\, it provides visualization tools to compare feature parameters of multiple tRNA sets and correlate them to additional data. The tRNA package uses GRanges objects as inputs requiring only few additional column data sets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/tRNA.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-trna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trna/meta.yaml>`_

   


.. conda:package:: bioconductor-trna

   |downloads_bioconductor-trna| |docker_bioconductor-trna|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-xvector` >=0.22.0,<0.23.0 :conda:package:`r-assertive`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-scales`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-trna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trna

   and update with::

      conda update bioconductor-trna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-trna


.. |required_by_bioconductor-trna| conda:required_by:: bioconductor-trna
.. |downloads_bioconductor-trna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trna.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-trna| image:: https://quay.io/repository/biocontainers/bioconductor-trna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trna/README.html

