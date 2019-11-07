:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mitoode'
.. highlight: bash

bioconductor-mitoode
====================

.. conda:recipe:: bioconductor-mitoode
   :replaces_section_title:

   Implementation of the differential equation model described in \"Dynamical modelling of phenotypes in a genome\-wide RNAi live\-cell imaging assay\"

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/mitoODE.html
   :license: LGPL
   :recipe: /`bioconductor-mitoode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitoode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitoode/meta.yaml>`_

   The package contains the methods to fit a cell\-cycle model on cell count data and the code to reproduce the results shown in our paper \"Dynamical modelling of phenotypes in a genome\-wide RNAi live\-cell imaging assay\" by Pau\, G.\, Walter\, T.\, Neumann\, B.\, Heriche\, J.\-K.\, Ellenberg\, J.\, \& Huber\, W.\, BMC Bioinformatics \(2013\)\, 14\(1\)\, 308. doi\:10.1186\/1471\-2105\-14\-308


.. conda:package:: bioconductor-mitoode

   |downloads_bioconductor-mitoode| |docker_bioconductor-mitoode|

   :versions: 1.22.0-1, 1.22.0-0, 1.20.1-0, 1.20.0-0
   
   :depends bioconductor-mitoodedata: >=1.20.0,<1.21.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-kernsmooth: 
   :depends r-mass: 
   :depends r-minpack.lm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mitoode

   and update with::

      conda update bioconductor-mitoode

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mitoode:<tag>

   (see `bioconductor-mitoode/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mitoode| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mitoode.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mitoode
   :alt:   (downloads)
.. |docker_bioconductor-mitoode| image:: https://quay.io/repository/biocontainers/bioconductor-mitoode/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mitoode
.. _`bioconductor-mitoode/tags`: https://quay.io/repository/biocontainers/bioconductor-mitoode?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mitoode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mitoode/README.html