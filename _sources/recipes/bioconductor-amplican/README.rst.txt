.. title:: Package Recipe 'bioconductor-amplican'
.. highlight: bash


bioconductor-amplican
=====================

.. conda:recipe:: bioconductor-amplican
   :replaces_section_title:

   \`amplican\` performs alignment of the amplicon reads\, normalizes gathered data\, calculates multiple statistics \(e.g. cut rates\, frameshifts\) and presents results in form of aggregated reports. Data and statistics can be broken down by experiments\, barcodes\, user defined groups\, guides and amplicons allowing for quick identification of potential problems.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/amplican.html
   :license: GPL-3
   :recipe: /`bioconductor-amplican <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amplican>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amplican/meta.yaml>`_

   


.. conda:package:: bioconductor-amplican

   |downloads_bioconductor-amplican| |docker_bioconductor-amplican|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-clustercrit` >=1.2.7 :conda:package:`r-data.table` >=1.10.4-3 :conda:package:`r-dplyr` >=0.7.2 :conda:package:`r-ggforce` >=0.1.2 :conda:package:`r-ggplot2` >=2.2.0 :conda:package:`r-ggthemes` >=3.4.0 :conda:package:`r-gridextra` >=2.2.1 :conda:package:`r-gtable` >=0.2.0 :conda:package:`r-knitr` >=1.16 :conda:package:`r-matrix` >=1.2-10 :conda:package:`r-matrixstats` >=0.52.2 :conda:package:`r-rmarkdown` >=1.6 :conda:package:`r-stringr` >=1.2.0 :conda:package:`r-waffle` >=0.7.0 

   :required~by: |required_by_bioconductor-amplican|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-amplican

   and update with::

      conda update bioconductor-amplican

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-amplican


.. |required_by_bioconductor-amplican| conda:required_by:: bioconductor-amplican
.. |downloads_bioconductor-amplican| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-amplican.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-amplican| image:: https://quay.io/repository/biocontainers/bioconductor-amplican/status
   :target: https://quay.io/repository/biocontainers/bioconductor-amplican







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-amplican/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-amplican/README.html

