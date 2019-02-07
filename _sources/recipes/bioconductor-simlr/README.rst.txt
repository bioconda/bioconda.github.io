.. title:: Package Recipe 'bioconductor-simlr'
.. highlight: bash


bioconductor-simlr
==================

.. conda:recipe:: bioconductor-simlr
   :replaces_section_title:

   Single\-cell RNA\-seq technologies enable high throughput gene expression measurement of individual cells\, and allow the discovery of heterogeneity within cell populations. Measurement of cell\-to\-cell gene expression similarity is critical for the identification\, visualization and analysis of cell populations. However\, single\-cell data introduce challenges to conventional measures of gene expression similarity because of the high level of noise\, outliers and dropouts. We develop a novel similarity\-learning framework\, SIMLR \(Single\-cell Interpretation via Multi\-kernel LeaRning\)\, which learns an appropriate distance metric from the data for dimension reduction\, clustering and visualization.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SIMLR.html
   :license: file LICENSE
   :recipe: /`bioconductor-simlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simlr/meta.yaml>`_
   :links: biotools: :biotools:`simlr`, doi: :doi:`10.1101/118901`

   


.. conda:package:: bioconductor-simlr

   |downloads_bioconductor-simlr| |docker_bioconductor-simlr|

   :versions: 1.8.1, 1.8.0, 1.6.0, 1.4.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrix`  :conda:package:`r-pracma`  :conda:package:`r-rcpp`  :conda:package:`r-rcppannoy`  :conda:package:`r-rspectra`  

   :required~by: |required_by_bioconductor-simlr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simlr

   and update with::

      conda update bioconductor-simlr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-simlr


.. |required_by_bioconductor-simlr| conda:required_by:: bioconductor-simlr
.. |downloads_bioconductor-simlr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simlr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-simlr| image:: https://quay.io/repository/biocontainers/bioconductor-simlr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simlr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simlr/README.html

