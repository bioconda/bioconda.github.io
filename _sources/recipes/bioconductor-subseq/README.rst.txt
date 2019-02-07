.. title:: Package Recipe 'bioconductor-subseq'
.. highlight: bash


bioconductor-subseq
===================

.. conda:recipe:: bioconductor-subseq
   :replaces_section_title:

   Subsampling of high throughput sequencing count data for use in experiment design and analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/subSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-subseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-subseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-subseq/meta.yaml>`_
   :links: biotools: :biotools:`subseq`, doi: :doi:`10.1093/bioinformatics/btu552`

   


.. conda:package:: bioconductor-subseq

   |downloads_bioconductor-subseq| |docker_bioconductor-subseq|

   :versions: 1.12.0, 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-digest`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-magrittr`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-subseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-subseq

   and update with::

      conda update bioconductor-subseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-subseq


.. |required_by_bioconductor-subseq| conda:required_by:: bioconductor-subseq
.. |downloads_bioconductor-subseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-subseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-subseq| image:: https://quay.io/repository/biocontainers/bioconductor-subseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-subseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-subseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-subseq/README.html

