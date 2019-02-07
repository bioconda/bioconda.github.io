.. title:: Package Recipe 'bioconductor-comet'
.. highlight: bash


bioconductor-comet
==================

.. conda:recipe:: bioconductor-comet
   :replaces_section_title:

   Visualisation of EWAS results in a genomic region. In addition to phenotype\-association P\-values\, coMET also generates plots of co\-methylation patterns and provides a series of annotation tracks. It can be used to other omic\-wide association scans as long as the data can be translated to genomic level and for any species.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/coMET.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-comet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comet/meta.yaml>`_

   


.. conda:package:: bioconductor-comet

   |downloads_bioconductor-comet| |docker_bioconductor-comet|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-colortools`  :conda:package:`r-corrplot`  :conda:package:`r-gridextra`  :conda:package:`r-hash`  :conda:package:`r-psych`  

   :required~by: |required_by_bioconductor-comet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-comet

   and update with::

      conda update bioconductor-comet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-comet


.. |required_by_bioconductor-comet| conda:required_by:: bioconductor-comet
.. |downloads_bioconductor-comet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-comet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-comet| image:: https://quay.io/repository/biocontainers/bioconductor-comet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-comet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-comet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-comet/README.html

