.. title:: Package Recipe 'r-htssip'
.. highlight: bash


r-htssip
========

.. conda:recipe:: r-htssip
   :replaces_section_title:

   Functions for analyzing high throughput sequencing  stable isotope probing \(HTS\-SIP\) data. Analyses include high resolution stable isotope probing \(HR\-SIP\)\, multi\-window high resolution stable isotope probing \(MW\-HR\-SIP\)\,  and quantitative stable isotope probing \(q\-SIP\). 

   :homepage: https://CRAN.R-project.org/package=HTSSIP
   :license: GPL2 / GPL-2
   :recipe: /`r-htssip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-htssip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-htssip/meta.yaml>`_

   


.. conda:package:: r-htssip

   |downloads_r-htssip| |docker_r-htssip|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-deseq2` >=1.16.1 :conda:package:`bioconductor-phyloseq` >=1.20.0 :conda:package:`r-ape` >=4.1 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-coenocliner` >=0.2.2 :conda:package:`r-dplyr` >=0.7.4 :conda:package:`r-ggplot2` >=2.2.1 :conda:package:`r-igraph` >=1.1.2 :conda:package:`r-lazyeval` >=0.2.0 :conda:package:`r-magrittr` >=1.5 :conda:package:`r-plyr` >=1.8.4 :conda:package:`r-stringr` >=1.2.0 :conda:package:`r-tidyr` >=0.7.2 :conda:package:`r-vegan` >=2.4.0 

   :required~by: |required_by_r-htssip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-htssip

   and update with::

      conda update r-htssip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-htssip


.. |required_by_r-htssip| conda:required_by:: r-htssip
.. |downloads_r-htssip| image:: https://img.shields.io/conda/dn/bioconda/r-htssip.svg?style=flat
   :alt:   (downloads)
.. |docker_r-htssip| image:: https://quay.io/repository/biocontainers/r-htssip/status
   :target: https://quay.io/repository/biocontainers/r-htssip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-htssip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-htssip/README.html

