.. title:: Package Recipe 'bioconductor-tsrchitect'
.. highlight: bash


bioconductor-tsrchitect
=======================

.. conda:recipe:: bioconductor-tsrchitect
   :replaces_section_title:

   In recent years\, large\-scale transcriptional sequence data has yielded considerable insights into the nature of gene expression and regulation in eukaryotes. Techniques that identify the 5\' end of mRNAs\, most notably CAGE\, have mapped the promoter landscape across a number of model organisms. Due to the variability of TSS distributions and the transcriptional noise present in datasets\, precisely identifying the active promoter\(s\) for genes from these datasets is not straightforward. TSRchitect allows the user to efficiently identify the putative promoter \(the transcription start region\, or TSR\) from a variety of TSS profiling data types\, including both single\-end \(e.g. CAGE\) as well as paired\-end \(RAMPAGE\, PEAT\, STRIPE\-seq\). In addition\, \(new with version 1.3.0\) TSRchitect provides the ability to import aligned EST and cDNA data. Along with the coordiantes of identified TSRs\, TSRchitect also calculates the width\, abundance and two forms of the Shape Index\, and handles biological replicates for expression profiling. Finally\, TSRchitect imports annotation files\, allowing the user to associate identified promoters with genes and other genomic features. Three detailed examples of TSRchitect\'s utility are provided in the User\'s Guide\, included with this package.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TSRchitect.html
   :license: GPL-3
   :recipe: /`bioconductor-tsrchitect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tsrchitect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tsrchitect/meta.yaml>`_

   


.. conda:package:: bioconductor-tsrchitect

   |downloads_bioconductor-tsrchitect| |docker_bioconductor-tsrchitect|

   :versions: 1.8.9

   :depends: :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gtools`  

   :required~by: |required_by_bioconductor-tsrchitect|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tsrchitect

   and update with::

      conda update bioconductor-tsrchitect

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tsrchitect


.. |required_by_bioconductor-tsrchitect| conda:required_by:: bioconductor-tsrchitect
.. |downloads_bioconductor-tsrchitect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tsrchitect.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tsrchitect| image:: https://quay.io/repository/biocontainers/bioconductor-tsrchitect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tsrchitect







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tsrchitect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tsrchitect/README.html

