.. title:: Package Recipe 'bioconductor-simulatorz'
.. highlight: bash


bioconductor-simulatorz
=======================

.. conda:recipe:: bioconductor-simulatorz
   :replaces_section_title:

   simulatorZ is a package intended primarily to simulate collections of independent genomic data sets\, as well as performing training and validation with predicting algorithms. It supports ExpressionSet and RangedSummarizedExperiment objects.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/simulatorZ.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-simulatorz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simulatorz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simulatorz/meta.yaml>`_

   


.. conda:package:: bioconductor-simulatorz

   |downloads_bioconductor-simulatorz| |docker_bioconductor-simulatorz|

   :versions: 1.16.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-coxboost`  :conda:package:`r-gbm`  :conda:package:`r-hmisc`  :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-simulatorz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simulatorz

   and update with::

      conda update bioconductor-simulatorz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-simulatorz


.. |required_by_bioconductor-simulatorz| conda:required_by:: bioconductor-simulatorz
.. |downloads_bioconductor-simulatorz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simulatorz.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-simulatorz| image:: https://quay.io/repository/biocontainers/bioconductor-simulatorz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simulatorz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simulatorz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simulatorz/README.html

