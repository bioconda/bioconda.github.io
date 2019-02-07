.. title:: Package Recipe 'r-fastqcr'
.. highlight: bash


r-fastqcr
=========

.. conda:recipe:: r-fastqcr
   :replaces_section_title:

   \'FASTQC\' is the most widely used tool for evaluating the quality of high throughput sequencing data.   It produces\, for each sample\, an html report and a compressed file containing the raw data.  If you have hundreds of samples\, you are not going to open up each \'HTML\' page.  You need some way of looking at these data in aggregate.  \'fastqcr\' Provides helper functions to easily parse\, aggregate and analyze  \'FastQC\' reports for large numbers of samples. It provides a convenient solution for building  a \'Multi\-QC\' report\, as well as\, a \'one\-sample\' report with result interpretations.

   :homepage: http://www.sthda.com/english/rpkgs/fastqcr/
   :license: GPL2 / GPL-2
   :recipe: /`r-fastqcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fastqcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fastqcr/meta.yaml>`_

   


.. conda:package:: r-fastqcr

   |downloads_r-fastqcr| |docker_r-fastqcr|

   :versions: 0.1.0

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-magrittr`  :conda:package:`r-readr`  :conda:package:`r-rmarkdown` >=1.4 :conda:package:`r-rvest`  :conda:package:`r-scales`  :conda:package:`r-tibble`  :conda:package:`r-tidyr`  :conda:package:`r-xml2`  

   :required~by: |required_by_r-fastqcr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-fastqcr

   and update with::

      conda update r-fastqcr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-fastqcr


.. |required_by_r-fastqcr| conda:required_by:: r-fastqcr
.. |downloads_r-fastqcr| image:: https://img.shields.io/conda/dn/bioconda/r-fastqcr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-fastqcr| image:: https://quay.io/repository/biocontainers/r-fastqcr/status
   :target: https://quay.io/repository/biocontainers/r-fastqcr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-fastqcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-fastqcr/README.html

