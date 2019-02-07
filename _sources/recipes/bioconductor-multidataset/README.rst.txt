.. title:: Package Recipe 'bioconductor-multidataset'
.. highlight: bash


bioconductor-multidataset
=========================

.. conda:recipe:: bioconductor-multidataset
   :replaces_section_title:

   Implementation of the BRGE\'s \(Bioinformatic Research Group in Epidemiology from Center for Research in Environmental Epidemiology\) MultiDataSet and ResultSet. MultiDataSet is designed for integrating multi omics data sets and ResultSet is a container for omics results. This package contains base classes for MEAL and rexposome packages.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MultiDataSet.html
   :license: file LICENSE
   :recipe: /`bioconductor-multidataset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multidataset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multidataset/meta.yaml>`_
   :links: biotools: :biotools:`multidataset`

   


.. conda:package:: bioconductor-multidataset

   |downloads_bioconductor-multidataset| |docker_bioconductor-multidataset|

   :versions: 1.10.0, 1.8.0, 1.6.0, 1.4.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-qqman`  

   :required~by: |required_by_bioconductor-multidataset|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multidataset

   and update with::

      conda update bioconductor-multidataset

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-multidataset


.. |required_by_bioconductor-multidataset| conda:required_by:: bioconductor-multidataset
.. |downloads_bioconductor-multidataset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multidataset.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-multidataset| image:: https://quay.io/repository/biocontainers/bioconductor-multidataset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multidataset







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multidataset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multidataset/README.html

