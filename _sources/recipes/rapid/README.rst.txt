.. title:: Package Recipe 'rapid'
.. highlight: bash


rapid
=====

.. conda:recipe:: rapid/v0.7
   :replaces_section_title:

   Read Alignment\, Analysis\, and Differential Pipeline \(RAPID\) is a set of tools for the alignment\, and analysis of genomic regions with small RNA clusters derived from small RNA sequencing data.

   :homepage: https://github.com/SchulzLab/RAPID
   :license: GPL2
   :recipe: /`rapid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapid>`_/`v0.7 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapid/v0.7>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapid/v0.7/meta.yaml>`_

   


.. conda:package:: rapid

   |downloads_rapid| |docker_rapid|

   :versions: 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1

   :depends: :conda:package:`bedtools`  :conda:package:`bioconductor-deseq2`  :conda:package:`bowtie2`  :conda:package:`pandoc`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-knitr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-rmarkdown`  :conda:package:`r-scales`  :conda:package:`r-viridis`  :conda:package:`samtools`  

   :required~by: |required_by_rapid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rapid

   and update with::

      conda update rapid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rapid


.. |required_by_rapid| conda:required_by:: rapid
.. |downloads_rapid| image:: https://img.shields.io/conda/dn/bioconda/rapid.svg?style=flat
   :alt:   (downloads)
.. |docker_rapid| image:: https://quay.io/repository/biocontainers/rapid/status
   :target: https://quay.io/repository/biocontainers/rapid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapid/README.html

