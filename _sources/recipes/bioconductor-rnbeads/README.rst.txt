.. title:: Package Recipe 'bioconductor-rnbeads'
.. highlight: bash


bioconductor-rnbeads
====================

.. conda:recipe:: bioconductor-rnbeads
   :replaces_section_title:

   RnBeads facilitates comprehensive analysis of various types of DNA methylation data at the genome scale.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RnBeads.html
   :license: GPL-3
   :recipe: /`bioconductor-rnbeads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnbeads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnbeads/meta.yaml>`_

   


.. conda:package:: bioconductor-rnbeads

   |downloads_bioconductor-rnbeads| |docker_bioconductor-rnbeads|

   :versions: 2.0.0, 1.12.1, 1.10.8

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-illuminaio` >=0.24.0,<0.25.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-methylumi` >=2.28.0,<2.29.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-ff`  :conda:package:`r-fields`  :conda:package:`r-ggplot2` >=0.9.2 :conda:package:`r-gplots`  :conda:package:`r-gridextra`  :conda:package:`r-mass`  :conda:package:`r-matrixstats`  :conda:package:`r-plyr`  

   :required~by: |required_by_bioconductor-rnbeads|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnbeads

   and update with::

      conda update bioconductor-rnbeads

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rnbeads


.. |required_by_bioconductor-rnbeads| conda:required_by:: bioconductor-rnbeads
.. |downloads_bioconductor-rnbeads| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnbeads.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rnbeads| image:: https://quay.io/repository/biocontainers/bioconductor-rnbeads/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnbeads







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnbeads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnbeads/README.html

