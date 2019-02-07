.. title:: Package Recipe 'bioconductor-iwtomics'
.. highlight: bash


bioconductor-iwtomics
=====================

.. conda:recipe:: bioconductor-iwtomics
   :replaces_section_title:

   Implementation of the Interval\-Wise Testing \(IWT\) for omics data. This inferential procedure tests for differences in \"Omics\" data between two groups of genomic regions \(or between a group of genomic regions and a reference center of symmetry\)\, and does not require fixing location and scale at the outset.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/IWTomics.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-iwtomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iwtomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iwtomics/meta.yaml>`_

   


.. conda:package:: bioconductor-iwtomics

   |downloads_bioconductor-iwtomics| |docker_bioconductor-iwtomics|

   :versions: 1.6.0, 1.4.0, 1.2.0, 1.0.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fda`  :conda:package:`r-gtable`  :conda:package:`r-kernsmooth`  

   :required~by: |required_by_bioconductor-iwtomics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iwtomics

   and update with::

      conda update bioconductor-iwtomics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-iwtomics


.. |required_by_bioconductor-iwtomics| conda:required_by:: bioconductor-iwtomics
.. |downloads_bioconductor-iwtomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iwtomics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-iwtomics| image:: https://quay.io/repository/biocontainers/bioconductor-iwtomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iwtomics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iwtomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iwtomics/README.html

