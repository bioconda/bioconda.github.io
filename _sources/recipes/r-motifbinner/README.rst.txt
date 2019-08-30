:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-motifbinner'
.. highlight: bash

r-motifbinner
=============

.. conda:recipe:: r-motifbinner
   :replaces_section_title:

   MotifBinner processes high\-throughput sequencing data of an RNA virus population.

   :homepage: https://github.com/HIVDiversity/MotifBinner2, http://biom-format.org/
   :license: GPL3
   :recipe: /`r-motifbinner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-motifbinner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-motifbinner/meta.yaml>`_

   


.. conda:package:: r-motifbinner

   |downloads_r-motifbinner| |docker_r-motifbinner|

   :versions: 2.0.0-0
   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-shortread: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-domc: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-formattable: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-knitr: 
   :depends r-optparse: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-stringdist: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-motifbinner

   and update with::

      conda update r-motifbinner

   or use the docker container::

      docker pull quay.io/biocontainers/r-motifbinner:<tag>

   (see `r-motifbinner/tags`_ for valid values for ``<tag>``)


.. |downloads_r-motifbinner| image:: https://img.shields.io/conda/dn/bioconda/r-motifbinner.svg?style=flat
   :target: https://anaconda.org/bioconda/r-motifbinner
   :alt:   (downloads)
.. |docker_r-motifbinner| image:: https://quay.io/repository/biocontainers/r-motifbinner/status
   :target: https://quay.io/repository/biocontainers/r-motifbinner
.. _`r-motifbinner/tags`: https://quay.io/repository/biocontainers/r-motifbinner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-motifbinner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-motifbinner/README.html