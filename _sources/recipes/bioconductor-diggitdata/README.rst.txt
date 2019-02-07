.. title:: Package Recipe 'bioconductor-diggitdata'
.. highlight: bash


bioconductor-diggitdata
=======================

.. conda:recipe:: bioconductor-diggitdata
   :replaces_section_title:

   This package provides expression profile and CNV data for glioblastoma from TCGA\, and transcriptional and post\-translational regulatory networks assembled with the ARACNe and MINDy algorithms\, respectively.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/diggitdata.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-diggitdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diggitdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diggitdata/meta.yaml>`_

   


.. conda:package:: bioconductor-diggitdata

   |downloads_bioconductor-diggitdata| |docker_bioconductor-diggitdata|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-viper` >=1.16.0,<1.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-diggitdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diggitdata

   and update with::

      conda update bioconductor-diggitdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-diggitdata


.. |required_by_bioconductor-diggitdata| conda:required_by:: bioconductor-diggitdata
.. |downloads_bioconductor-diggitdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diggitdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-diggitdata| image:: https://quay.io/repository/biocontainers/bioconductor-diggitdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diggitdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diggitdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diggitdata/README.html

