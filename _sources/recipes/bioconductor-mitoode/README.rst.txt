.. title:: Package Recipe 'bioconductor-mitoode'
.. highlight: bash


bioconductor-mitoode
====================

.. conda:recipe:: bioconductor-mitoode
   :replaces_section_title:

   The package contains the methods to fit a cell\-cycle model on cell count data and the code to reproduce the results shown in our paper \"Dynamical modelling of phenotypes in a genome\-wide RNAi live\-cell imaging assay\" by Pau\, G.\, Walter\, T.\, Neumann\, B.\, Heriche\, J.\-K.\, Ellenberg\, J.\, \& Huber\, W.\, BMC Bioinformatics \(2013\)\, 14\(1\)\, 308. doi\:10.1186\/1471\-2105\-14\-308

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/mitoODE.html
   :license: LGPL
   :recipe: /`bioconductor-mitoode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitoode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitoode/meta.yaml>`_

   


.. conda:package:: bioconductor-mitoode

   |downloads_bioconductor-mitoode| |docker_bioconductor-mitoode|

   :versions: 1.20.1, 1.20.0

   :depends: :conda:package:`bioconductor-mitoodedata` >=1.18.0,<1.19.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-kernsmooth`  :conda:package:`r-mass`  :conda:package:`r-minpack.lm`  

   :required~by: |required_by_bioconductor-mitoode|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mitoode

   and update with::

      conda update bioconductor-mitoode

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mitoode


.. |required_by_bioconductor-mitoode| conda:required_by:: bioconductor-mitoode
.. |downloads_bioconductor-mitoode| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mitoode.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mitoode| image:: https://quay.io/repository/biocontainers/bioconductor-mitoode/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mitoode







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mitoode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mitoode/README.html

