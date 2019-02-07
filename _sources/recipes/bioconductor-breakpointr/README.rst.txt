.. title:: Package Recipe 'bioconductor-breakpointr'
.. highlight: bash


bioconductor-breakpointr
========================

.. conda:recipe:: bioconductor-breakpointr
   :replaces_section_title:

   This package implements functions for finding breakpoints\, plotting and export of Strand\-seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/breakpointR.html
   :license: file LICENSE
   :recipe: /`bioconductor-breakpointr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breakpointr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breakpointr/meta.yaml>`_

   


.. conda:package:: bioconductor-breakpointr

   |downloads_bioconductor-breakpointr| |docker_bioconductor-breakpointr|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-breakpointrdata` >=1.0.0,<1.1.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cowplot`  :conda:package:`r-doparallel`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-gtools`  

   :required~by: |required_by_bioconductor-breakpointr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-breakpointr

   and update with::

      conda update bioconductor-breakpointr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-breakpointr


.. |required_by_bioconductor-breakpointr| conda:required_by:: bioconductor-breakpointr
.. |downloads_bioconductor-breakpointr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breakpointr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-breakpointr| image:: https://quay.io/repository/biocontainers/bioconductor-breakpointr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breakpointr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breakpointr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breakpointr/README.html

