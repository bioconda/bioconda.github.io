.. title:: Package Recipe 'bioconductor-brgedata'
.. highlight: bash


bioconductor-brgedata
=====================

.. conda:recipe:: bioconductor-brgedata
   :replaces_section_title:

   This package contains several sets of omics data including Gene Expression \(ExpressionSet\)\, Methylation \(GenomicRatioSet\)\, Proteome and Exposome \(ExposomeSet\). This data is used in vignettes and exaples at MEAL\, MultiDataSet and omicRexposome.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/brgedata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-brgedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brgedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brgedata/meta.yaml>`_

   


.. conda:package:: bioconductor-brgedata

   |downloads_bioconductor-brgedata| |docker_bioconductor-brgedata|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-brgedata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brgedata

   and update with::

      conda update bioconductor-brgedata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-brgedata


.. |required_by_bioconductor-brgedata| conda:required_by:: bioconductor-brgedata
.. |downloads_bioconductor-brgedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brgedata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-brgedata| image:: https://quay.io/repository/biocontainers/bioconductor-brgedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brgedata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brgedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brgedata/README.html

