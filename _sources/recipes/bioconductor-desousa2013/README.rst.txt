.. title:: Package Recipe 'bioconductor-desousa2013'
.. highlight: bash


bioconductor-desousa2013
========================

.. conda:recipe:: bioconductor-desousa2013
   :replaces_section_title:

   This package reproduces the main pipeline to analyze the AMC\-AJCCII\-90 microarray data set in De Sousa et al. accepted by Nature Medicine in 2013.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/DeSousa2013.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-desousa2013 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desousa2013>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desousa2013/meta.yaml>`_

   


.. conda:package:: bioconductor-desousa2013

   |downloads_bioconductor-desousa2013| |docker_bioconductor-desousa2013|

   :versions: 1.18.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-consensusclusterplus` >=1.46.0,<1.47.0 :conda:package:`bioconductor-frma` >=1.34.0,<1.35.0 :conda:package:`bioconductor-frmatools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-hgu133plus2.db` >=3.2.0,<3.3.0 :conda:package:`bioconductor-hgu133plus2frmavecs` >=1.5.0,<1.6.0 :conda:package:`bioconductor-siggenes` >=1.56.0,<1.57.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-gplots`  :conda:package:`r-pamr`  :conda:package:`r-rgl`  :conda:package:`r-rocr`  :conda:package:`r-survival`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-desousa2013|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-desousa2013

   and update with::

      conda update bioconductor-desousa2013

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-desousa2013


.. |required_by_bioconductor-desousa2013| conda:required_by:: bioconductor-desousa2013
.. |downloads_bioconductor-desousa2013| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-desousa2013.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-desousa2013| image:: https://quay.io/repository/biocontainers/bioconductor-desousa2013/status
   :target: https://quay.io/repository/biocontainers/bioconductor-desousa2013







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-desousa2013/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-desousa2013/README.html

