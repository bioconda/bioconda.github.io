:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hmp16sdata'
.. highlight: bash

bioconductor-hmp16sdata
=======================

.. conda:recipe:: bioconductor-hmp16sdata
   :replaces_section_title:

   16S rRNA Sequencing Data from the Human Microbiome Project

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/HMP16SData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hmp16sdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmp16sdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmp16sdata/meta.yaml>`_

   HMP16SData is a Bioconductor ExperimentData package of the Human Microbiome Project \(HMP\) 16S rRNA sequencing data for variable regions 1–3 and 3–5. Raw data files are provided in the package as downloaded from the HMP Data Analysis and Coordination Center. Processed data is provided as SummarizedExperiment class objects via ExperimentHub.


.. conda:package:: bioconductor-hmp16sdata

   |downloads_bioconductor-hmp16sdata| |docker_bioconductor-hmp16sdata|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.1-0, 1.2.0-0
   
   :depends bioconductor-annotationhub: >=2.20.0,<2.21.0
   :depends bioconductor-experimenthub: >=1.14.0,<1.15.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-assertthat: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dplyr: 
   :depends r-kableextra: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-readr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hmp16sdata

   and update with::

      conda update bioconductor-hmp16sdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hmp16sdata:<tag>

   (see `bioconductor-hmp16sdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hmp16sdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hmp16sdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hmp16sdata
   :alt:   (downloads)
.. |docker_bioconductor-hmp16sdata| image:: https://quay.io/repository/biocontainers/bioconductor-hmp16sdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hmp16sdata
.. _`bioconductor-hmp16sdata/tags`: https://quay.io/repository/biocontainers/bioconductor-hmp16sdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hmp16sdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hmp16sdata/README.html