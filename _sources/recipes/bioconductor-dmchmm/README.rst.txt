.. title:: Package Recipe 'bioconductor-dmchmm'
.. highlight: bash


bioconductor-dmchmm
===================

.. conda:recipe:: bioconductor-dmchmm
   :replaces_section_title:

   A pipeline for identifying differentially methylated CpG sites using Hidden Markov Model in bisulfite sequencing data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DMCHMM.html
   :license: GPL-3
   :recipe: /`bioconductor-dmchmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmchmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmchmm/meta.yaml>`_

   


.. conda:package:: bioconductor-dmchmm

   |downloads_bioconductor-dmchmm| |docker_bioconductor-dmchmm|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-calibrate`  :conda:package:`r-fdrtool`  :conda:package:`r-multcomp`  

   :required~by: |required_by_bioconductor-dmchmm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dmchmm

   and update with::

      conda update bioconductor-dmchmm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dmchmm


.. |required_by_bioconductor-dmchmm| conda:required_by:: bioconductor-dmchmm
.. |downloads_bioconductor-dmchmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmchmm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dmchmm| image:: https://quay.io/repository/biocontainers/bioconductor-dmchmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmchmm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmchmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmchmm/README.html

