.. title:: Package Recipe 'bioconductor-hmp16sdata'
.. highlight: bash


bioconductor-hmp16sdata
=======================

.. conda:recipe:: bioconductor-hmp16sdata
   :replaces_section_title:

   HMP16SData is a Bioconductor ExperimentData package of the Human Microbiome Project \(HMP\) 16S rRNA sequencing data for variable regions 1–3 and 3–5. Raw data files are provided in the package as downloaded from the HMP Data Analysis and Coordination Center. Processed data is provided as SummarizedExperiment class objects via ExperimentHub.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/HMP16SData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hmp16sdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmp16sdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmp16sdata/meta.yaml>`_

   


.. conda:package:: bioconductor-hmp16sdata

   |downloads_bioconductor-hmp16sdata| |docker_bioconductor-hmp16sdata|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-assertthat`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-kableextra`  :conda:package:`r-knitr`  :conda:package:`r-magrittr`  :conda:package:`r-readr`  :conda:package:`r-tibble`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hmp16sdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hmp16sdata

   and update with::

      conda update bioconductor-hmp16sdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hmp16sdata


.. |required_by_bioconductor-hmp16sdata| conda:required_by:: bioconductor-hmp16sdata
.. |downloads_bioconductor-hmp16sdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hmp16sdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hmp16sdata| image:: https://quay.io/repository/biocontainers/bioconductor-hmp16sdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hmp16sdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hmp16sdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hmp16sdata/README.html

