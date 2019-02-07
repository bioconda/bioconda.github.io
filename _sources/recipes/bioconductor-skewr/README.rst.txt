.. title:: Package Recipe 'bioconductor-skewr'
.. highlight: bash


bioconductor-skewr
==================

.. conda:recipe:: bioconductor-skewr
   :replaces_section_title:

   The skewr package is a tool for visualizing the output of the Illumina Human Methylation 450k BeadChip to aid in quality control. It creates a panel of nine plots. Six of the plots represent the density of either the methylated intensity or the unmethylated intensity given by one of three subsets of the 485\,577 total probes. These subsets include Type I\-red\, Type I\-green\, and Type II.The remaining three distributions give the density of the Beta\-values for these same three subsets. Each of the nine plots optionally displays the distributions of the \"rs\" SNP probes and the probes associated with imprinted genes as series of \'tick\' marks located above the x\-axis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/skewr.html
   :license: GPL-2
   :recipe: /`bioconductor-skewr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-skewr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-skewr/meta.yaml>`_

   


.. conda:package:: bioconductor-skewr

   |downloads_bioconductor-skewr| |docker_bioconductor-skewr|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-illuminahumanmethylation450kmanifest` >=0.4.0,<0.5.0 :conda:package:`bioconductor-methylumi` >=2.28.0,<2.29.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-watermelon` >=1.26.0,<1.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mixsmsn`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-skewr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-skewr

   and update with::

      conda update bioconductor-skewr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-skewr


.. |required_by_bioconductor-skewr| conda:required_by:: bioconductor-skewr
.. |downloads_bioconductor-skewr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-skewr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-skewr| image:: https://quay.io/repository/biocontainers/bioconductor-skewr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-skewr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-skewr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-skewr/README.html

