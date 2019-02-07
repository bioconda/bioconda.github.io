.. title:: Package Recipe 'bioconductor-humanaffydata'
.. highlight: bash


bioconductor-humanaffydata
==========================

.. conda:recipe:: bioconductor-humanaffydata
   :replaces_section_title:

   Re\-analysis of human gene expression data generated on the Affymetrix HG U133PlusV2 \(EH176\) and Affymetrix HG U133A \(EH177\) platforms. The original data were normalized using robust multiarray averaging \(RMA\) to obtain an integrated gene expression atlas across diverse biological sample types and conditions. The entire compendia comprisee 9395 arrays for EH176 and 5372 arrays for EH177.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/HumanAffyData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humanaffydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanaffydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanaffydata/meta.yaml>`_

   


.. conda:package:: bioconductor-humanaffydata

   |downloads_bioconductor-humanaffydata| |docker_bioconductor-humanaffydata|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-humanaffydata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-humanaffydata

   and update with::

      conda update bioconductor-humanaffydata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-humanaffydata


.. |required_by_bioconductor-humanaffydata| conda:required_by:: bioconductor-humanaffydata
.. |downloads_bioconductor-humanaffydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humanaffydata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-humanaffydata| image:: https://quay.io/repository/biocontainers/bioconductor-humanaffydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humanaffydata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humanaffydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humanaffydata/README.html

