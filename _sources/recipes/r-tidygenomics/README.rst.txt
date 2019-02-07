.. title:: Package Recipe 'r-tidygenomics'
.. highlight: bash


r-tidygenomics
==============

.. conda:recipe:: r-tidygenomics
   :replaces_section_title:

   Handle genomic data within data frames just as you would with \'GRanges\'. This packages provides method to deal with genomic intervals the \"tidy\-way\" which makes it simpler to integrate in the the general data munging process. The API is inspired by the popular \'bedtools\' and the genome\_join\(\) method from the \'fuzzyjoin\' package.

   :homepage: https://github.com/const-ae/tidygenomics
   :license: GPL3 / GPL-3
   :recipe: /`r-tidygenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tidygenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tidygenomics/meta.yaml>`_

   


.. conda:package:: r-tidygenomics

   |downloads_r-tidygenomics| |docker_r-tidygenomics|

   :versions: 0.1.0

   :depends: :conda:package:`bioconductor-iranges`  :conda:package:`libgcc`  :conda:package:`r-base` 3.4.1* :conda:package:`r-dplyr`  :conda:package:`r-fuzzyjoin` >=0.1.3 :conda:package:`r-purrr`  :conda:package:`r-rcpp`  :conda:package:`r-tidyr`  

   :required~by: |required_by_r-tidygenomics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-tidygenomics

   and update with::

      conda update r-tidygenomics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-tidygenomics


.. |required_by_r-tidygenomics| conda:required_by:: r-tidygenomics
.. |downloads_r-tidygenomics| image:: https://img.shields.io/conda/dn/bioconda/r-tidygenomics.svg?style=flat
   :alt:   (downloads)
.. |docker_r-tidygenomics| image:: https://quay.io/repository/biocontainers/r-tidygenomics/status
   :target: https://quay.io/repository/biocontainers/r-tidygenomics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tidygenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tidygenomics/README.html

