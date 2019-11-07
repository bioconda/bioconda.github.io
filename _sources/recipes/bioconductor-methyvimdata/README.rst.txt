:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methyvimdata'
.. highlight: bash

bioconductor-methyvimdata
=========================

.. conda:recipe:: bioconductor-methyvimdata
   :replaces_section_title:

   Example experimental data for use with the methyvim package

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/methyvimData.html
   :license: file LICENSE
   :recipe: /`bioconductor-methyvimdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methyvimdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methyvimdata/meta.yaml>`_

   Contains a reduced set of simulated data inspired by data produced by the Infinium EPIC BeadChip assays by Illumina. The example data set is made available to highlight many of the key procedures that are available within the core functions of the methyvim package.


.. conda:package:: bioconductor-methyvimdata

   |downloads_bioconductor-methyvimdata| |docker_bioconductor-methyvimdata|

   :versions: 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-minfi: >=1.30.0,<1.31.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methyvimdata

   and update with::

      conda update bioconductor-methyvimdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methyvimdata:<tag>

   (see `bioconductor-methyvimdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methyvimdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methyvimdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methyvimdata
   :alt:   (downloads)
.. |docker_bioconductor-methyvimdata| image:: https://quay.io/repository/biocontainers/bioconductor-methyvimdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methyvimdata
.. _`bioconductor-methyvimdata/tags`: https://quay.io/repository/biocontainers/bioconductor-methyvimdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methyvimdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methyvimdata/README.html