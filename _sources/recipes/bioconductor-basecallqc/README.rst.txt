.. title:: Package Recipe 'bioconductor-basecallqc'
.. highlight: bash


bioconductor-basecallqc
=======================

.. conda:recipe:: bioconductor-basecallqc
   :replaces_section_title:

   The basecallQC package provides tools to work with Illumina bcl2Fastq \(versions \>\= 2.1.7\) software.Prior to basecalling and demultiplexing using the bcl2Fastq software\, basecallQC functions allow the user to update Illumina sample sheets from versions \<\= 1.8.9 to \>\= 2.1.7 standards\, clean sample sheets of common problems such as invalid sample names and IDs\, create read and index basemasks and the bcl2Fastq command. Following the generation of basecalled and demultiplexed data\, the basecallQC packages allows the user to generate HTML tables\, plots and a self contained report of summary metrics from Illumina XML output files.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/basecallQC.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-basecallqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basecallqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basecallqc/meta.yaml>`_

   


.. conda:package:: bioconductor-basecallqc

   |downloads_bioconductor-basecallqc| |docker_bioconductor-basecallqc|

   :versions: 1.6.0, 1.4.0, 1.2.0

   :depends: :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-dt`  :conda:package:`r-ggplot2`  :conda:package:`r-knitr`  :conda:package:`r-lazyeval`  :conda:package:`r-magrittr`  :conda:package:`r-prettydoc`  :conda:package:`r-raster`  :conda:package:`r-rmarkdown`  :conda:package:`r-stringr`  :conda:package:`r-tidyr`  :conda:package:`r-xml`  :conda:package:`r-yaml`  

   :required~by: |required_by_bioconductor-basecallqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-basecallqc

   and update with::

      conda update bioconductor-basecallqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-basecallqc


.. |required_by_bioconductor-basecallqc| conda:required_by:: bioconductor-basecallqc
.. |downloads_bioconductor-basecallqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basecallqc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-basecallqc| image:: https://quay.io/repository/biocontainers/bioconductor-basecallqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basecallqc






Notes
-----
\'This package relies on bcl2fastq being available in the system PATH.  Due to licensing
restrictions Bioconda does not provide this package.\'



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basecallqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basecallqc/README.html

