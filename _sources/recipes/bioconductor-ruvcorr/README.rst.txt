.. title:: Package Recipe 'bioconductor-ruvcorr'
.. highlight: bash


bioconductor-ruvcorr
====================

.. conda:recipe:: bioconductor-ruvcorr
   :replaces_section_title:

   RUVcorr allows to apply global removal of unwanted variation \(ridged version of RUV\) to real and simulated gene expression data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RUVcorr.html
   :license: GPL-2
   :recipe: /`bioconductor-ruvcorr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvcorr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvcorr/meta.yaml>`_

   


.. conda:package:: bioconductor-ruvcorr

   |downloads_bioconductor-ruvcorr| |docker_bioconductor-ruvcorr|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-bladderbatch` >=1.20.0,<1.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-corrplot`  :conda:package:`r-gridextra`  :conda:package:`r-lattice`  :conda:package:`r-mass`  :conda:package:`r-psych`  :conda:package:`r-reshape2`  :conda:package:`r-snowfall`  

   :required~by: |required_by_bioconductor-ruvcorr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ruvcorr

   and update with::

      conda update bioconductor-ruvcorr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ruvcorr


.. |required_by_bioconductor-ruvcorr| conda:required_by:: bioconductor-ruvcorr
.. |downloads_bioconductor-ruvcorr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ruvcorr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ruvcorr| image:: https://quay.io/repository/biocontainers/bioconductor-ruvcorr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ruvcorr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ruvcorr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ruvcorr/README.html

