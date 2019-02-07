.. title:: Package Recipe 'bioconductor-tcseq'
.. highlight: bash


bioconductor-tcseq
==================

.. conda:recipe:: bioconductor-tcseq
   :replaces_section_title:

   Quantitative and differential analysis of epigenomic and transcriptomic time course sequencing data\, clustering analysis and visualization of temporal patterns of time course data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TCseq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-tcseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcseq/meta.yaml>`_

   


.. conda:package:: bioconductor-tcseq

   |downloads_bioconductor-tcseq| |docker_bioconductor-tcseq|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-e1071`  :conda:package:`r-ggplot2`  :conda:package:`r-locfit`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-tcseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcseq

   and update with::

      conda update bioconductor-tcseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tcseq


.. |required_by_bioconductor-tcseq| conda:required_by:: bioconductor-tcseq
.. |downloads_bioconductor-tcseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tcseq| image:: https://quay.io/repository/biocontainers/bioconductor-tcseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcseq/README.html

