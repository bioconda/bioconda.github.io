.. title:: Package Recipe 'bioconductor-transite'
.. highlight: bash


bioconductor-transite
=====================

.. conda:recipe:: bioconductor-transite
   :replaces_section_title:

   transite is a computational method that allows comprehensive analysis of the regulatory role of RNA\-binding proteins in various cellular processes by leveraging preexisting gene expression data and current knowledge of binding preferences of RNA\-binding proteins.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/transite.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-transite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transite/meta.yaml>`_

   


.. conda:package:: bioconductor-transite

   |downloads_bioconductor-transite| |docker_bioconductor-transite|

   :versions: 1.0.1

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr` >=0.7.6 :conda:package:`r-ggplot2` >=3.0.0 :conda:package:`r-ggseqlogo` >=0.1 :conda:package:`r-gridextra` >=2.3 :conda:package:`r-rcpp` >=0.12.18 :conda:package:`r-scales` >=1.0.0 :conda:package:`r-tfmpvalue` >=0.0.8 

   :required~by: |required_by_bioconductor-transite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-transite

   and update with::

      conda update bioconductor-transite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-transite


.. |required_by_bioconductor-transite| conda:required_by:: bioconductor-transite
.. |downloads_bioconductor-transite| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transite.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-transite| image:: https://quay.io/repository/biocontainers/bioconductor-transite/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transite/README.html

